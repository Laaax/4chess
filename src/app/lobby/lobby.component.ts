
import { PortalHostDirective } from '@angular/cdk/portal';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.playerList = this.apiService.playerList;

    if (!this.apiService.isHost && this.apiService.name != '') {
      // get things
      this.apiService.getInfo();
    }

    if (this.apiService.name != '') {

      this.apiService.socket.on('claim turn', (spot: number, name: string, id: string) => {
        if (this.apiService.isHost) {
          this.apiService.claimTurn(spot, name, id);
          if ((this.top1Button.id != '') && (this.top2Button.id != '') && (this.bot1Button.id != '') && (this.bot2Button.id != '')) {
            this.canStart = true;
          } else {
            this.canStart = false;
          }
          this.updateChips();
        }
      });

      this.apiService.socket.on('unclaim turn', (spot: number) => {
        if (this.apiService.isHost) {
          this.apiService.unclaimTurn(spot);
          if ((this.top1Button.id != '') && (this.top2Button.id != '') && (this.bot1Button.id != '') && (this.bot2Button.id != '')) {
            this.canStart = true;
          } else {
            this.canStart = false;
          }
          this.updateChips();
        }
      });

      this.apiService.socket.on('update turns', (data: any) => {
        if (!this.apiService.isHost) {
          this.apiService.playerTurns = data;
          this.top1Button = this.apiService.playerTurns[0];
          this.top2Button = this.apiService.playerTurns[1];
          this.bot1Button = this.apiService.playerTurns[2];
          this.bot2Button = this.apiService.playerTurns[3];
          this.updateChips();
        }
        
      });

      this.apiService.socket.on('update players', (data: any) => {
        this.apiService.playerList = data;
        this.playerList = this.apiService.playerList;
        if (this.spot == -1) {
          this.updateSpot();
        }
      });

      this.apiService.socket.on('add player', (name: string, id: string) => {
        if (this.apiService.isHost) {
          this.apiService.addPlayer(name, id);
        }
      });

      this.apiService.socket.on('remove player', (id: string) => {
        if (this.apiService.isHost) {
          this.apiService.removePlayer(id);
        }
      });

      this.apiService.socket.on('get info', () => {
        if (this.apiService.isHost) {
          this.apiService.updateInfo();
        }
      });
    
      this.apiService.socket.on('host left', () => {
        this.openSnackBarLeave();
        setTimeout(() => this.leave(), 5000);
      });
    }
 
    if (this.apiService.isHost) {
      this.updateSpot();
    }
  }

  openSnackBarLeave() {
    this._snackBar.open('Host left, leaving lobby...', '', { duration: 5000, panelClass: ['snack'] });
  }

  openSnackBarCode() {
    this._snackBar.open('Copied code', '', { duration: 3000, panelClass: ['snack'] });
  }

  updateSpot() {
    this.playerList = this.apiService.playerList;

    let i = 0;
    for (let e in this.playerList) {
      if (this.playerList[i].id == this.apiService.socket.id) {
        this.spot = i;
      }
      i += 1;
    }
  }

  lobbyId = this.apiService.lobbyId;

  isHost = this.apiService.isHost;

  inGame = this.apiService.inGame;

  playerList = [{name: '', present: false, joined: false, id: ''}, {name: '', present: false, joined: false, id: ''}, {name: '', present: false, joined: false, id: ''}, {name: '', present: false, joined: false, id: ''}];

  spot = -1;

  top1Button = this.apiService.playerTurns[0];
  top2Button = this.apiService.playerTurns[1];
  bot1Button = this.apiService.playerTurns[2];
  bot2Button = this.apiService.playerTurns[3];

  canStart = false;

  startGame() {
    this.apiService.startGame();
  }


  join(event: any) {
    if (event.target.id == 'p1-button') {
      // unjoin
      if (this.top1Button.id == this.playerList[this.spot].id) {
        this.apiService.unclaimTurn(0);
      // button id == '' or not already joined that spot/button
      // join
      } else {
        this.apiService.claimTurn(0, this.apiService.name, this.apiService.socket.id);
      }
    } else if (event.target.id == 'p2-button') {
      // unjoin
      if (this.top2Button.id == this.playerList[this.spot].id) {
        this.apiService.unclaimTurn(1);
      // button id == '' or not already joined that spot/button
      // join
      } else {
        this.apiService.claimTurn(1, this.apiService.name, this.apiService.socket.id);
      }
    } else if (event.target.id == 'p3-button') {
      // unjoin
      if (this.bot1Button.id == this.playerList[this.spot].id) {
        this.apiService.unclaimTurn(2);
      // button id == '' or not already joined that spot/button
      // join
      } else {
        this.apiService.claimTurn(2, this.apiService.name, this.apiService.socket.id);
      }
    } else if (event.target.id == 'p4-button') {
      // unjoin
      if (this.bot2Button.id == this.playerList[this.spot].id) {
        this.apiService.unclaimTurn(3);
      // button id == '' or not already joined that spot/button
      // join
      } else {
        this.apiService.claimTurn(3, this.apiService.name, this.apiService.socket.id);
      }
    }
    this.updateChips();
    if ((this.top1Button.id != '') && (this.top2Button.id != '') && (this.bot1Button.id != '') && (this.bot2Button.id != '')) {
      this.canStart = true;
    } else {
      this.canStart = false;
    }
  }

  updateChips() {
    let i = 0;
    for (let m in this.apiService.playerList) {
      let j = 0;
      let joined = false;
      for (let n in this.apiService.playerTurns) {
        if (this.apiService.playerList[i].id == this.apiService.playerTurns[j].id) {
          this.apiService.playerList[i].joined = true;
          joined = true;
        }
        j++;
      }
      if (!joined) {
        this.apiService.playerList[i].joined = false;
      }
      i++;
    }
    this.playerList = this.apiService.playerList;
  }

  leave() {
    this.apiService.disconnect();
    this.apiService.reset();
    this.router.navigate(['main']);
  }

}
