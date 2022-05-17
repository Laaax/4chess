import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(params => {
      let lobbyId = params['lobbyid'];
      if (!lobbyId) {
      } else {
        this.updateLobbyId(lobbyId);
      }
    });

    this.apiService.setupSocketConnection();

    this.apiService.socket.on('connect', () => {
    });

    this.apiService.socket.on("connect_error", (err: any) => {
    });
  }

  joining: boolean = false;
  roomNotExist: boolean = false;
  roomFull: boolean = false;
  roomInGame: boolean = false;

  name: string = '';
  lobbyId: string = '';

  key(val: string) {
    if (val[0] == " ") {
      this.name = val.trim();
    }
  }

  paste(val: string) {
    this.name = val.trim();
  }

  updateLobbyId(id: string) {
    this.lobbyId = id;
  }

  updateJoining() {
    if (this.joining) {
      this.joining = false;
    } else {
      this.joining = true;
    }
  }

  createGame() {
    this.apiService.updateName(this.name);
    this.apiService.updateLobbyId(this.apiService.socket.id + 'a');
    this.apiService.createLobby();
    this.apiService.isHostTrue();
    this.router.navigate(['app']);
  }

  Join() {
    this.apiService.socket.emit('check', this.lobbyId, (data: any) => {
      if (data == 'empty') {
        this.roomNotExist = true;
        this.roomFull = false;
        this.roomInGame = false;
      } else if (data == 'full') {
        this.roomNotExist = false;
        this.roomFull = true;
        this.roomInGame = false;
      } else if (data == 'in game') {
        this.roomNotExist = false;
        this.roomFull = false;
        this.roomInGame = true;
      } else {
        this.roomNotExist = false;
        this.roomFull = false;
        this.apiService.updateName(this.name);
        this.apiService.updateLobbyId(this.lobbyId);
        this.apiService.socket.emit('join game', this.apiService.socket.id, this.apiService.name, this.apiService.lobbyId, () => {
        });
        this.router.navigate(['app']);
      }
    });

  }

}
