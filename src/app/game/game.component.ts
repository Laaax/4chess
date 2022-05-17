import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

import { LobbyComponent } from '../lobby/lobby.component';
import { Router } from '@angular/router';

import { Square } from '../square';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private _snackBar: MatSnackBar) { }
  
  openSnackBarTop() {
    this._snackBar.open('Winner: Top', '', { duration: 5000, panelClass: ['snack'] });
  }

  openSnackBarBot() {
    this._snackBar.open('Winner: Bottom', '', { duration: 5000, panelClass: ['snack'] });
  }

  openSnackBarDraw() {
    this._snackBar.open('Stalemate', '', { duration: 5000, panelClass: ['snack'] });
  }

  openSnackBarLeave() {
    this._snackBar.open('A player left', '', { duration: 5000, panelClass: ['snack'] });
  }

  openSnackBarReturn() {
    this._snackBar.open('Host ended the game', '', { duration: 5000, panelClass: ['snack'] });
  }

  p1Name = '';
  p2Name = '';
  p3Name = '';
  p4Name = '';

  p1Turn = true;
  p2Turn = false;
  p3Turn = false;
  p4Turn = false;

  inGame = false;

  isHost = false;

  squares = [
    new Square('1R', '♜', 1, 8, 'top', 1),
    new Square('1H', '♞', 2, 8, 'top', 1),
    new Square('1B', '♝', 3, 8, 'top', 1),
    new Square('1Q', '♛', 4, 8, 'top', 1),
    new Square('1K', '♚', 5, 8, 'top', 1),
    new Square('1B', '♝', 6, 8, 'top', 1),
    new Square('1H', '♞', 7, 8, 'top', 1),
    new Square('1R', '♜', 8, 8, 'top', 1),
    new Square('2R', '♜', 9, 8, 'top', 2),
    new Square('2H', '♞', 10, 8, 'top', 2),
    new Square('2B', '♝', 11, 8, 'top', 2),
    new Square('2Q', '♛', 12, 8, 'top', 2),
    new Square('2K', '♚', 13, 8, 'top', 2),
    new Square('2B', '♝', 14, 8, 'top', 2),
    new Square('2H', '♞', 15, 8, 'top', 2),
    new Square('2R', '♜', 16, 8, 'top', 2),
    //
    new Square('1P', '♟', 1, 7, 'top', 1),
    new Square('1P', '♟', 2, 7, 'top', 1),
    new Square('1P', '♟', 3, 7, 'top', 1),
    new Square('1P', '♟', 4, 7, 'top', 1),
    new Square('1P', '♟', 5, 7, 'top', 1),
    new Square('1P', '♟', 6, 7, 'top', 1),
    new Square('1P', '♟', 7, 7, 'top', 1),
    new Square('1P', '♟', 8, 7, 'top', 1),
    new Square('2P', '♟', 9, 7, 'top', 2),
    new Square('2P', '♟', 10, 7, 'top', 2),
    new Square('2P', '♟', 11, 7, 'top', 2),
    new Square('2P', '♟', 12, 7, 'top', 2),
    new Square('2P', '♟', 13, 7, 'top', 2),
    new Square('2P', '♟', 14, 7, 'top', 2),
    new Square('2P', '♟', 15, 7, 'top', 2),
    new Square('2P', '♟', 16, 7, 'top', 2),
    //
    new Square('', '', 1, 6, '', 0),
    new Square('', '', 2, 6, '', 0),
    new Square('', '', 3, 6, '', 0),
    new Square('', '', 4, 6, '', 0),
    new Square('', '', 5, 6, '', 0),
    new Square('', '', 6, 6, '', 0),
    new Square('', '', 7, 6, '', 0),
    new Square('', '', 8, 6, '', 0),
    new Square('', '', 9, 6, '', 0),
    new Square('', '', 10, 6, '', 0),
    new Square('', '', 11, 6, '', 0),
    new Square('', '', 12, 6, '', 0),
    new Square('', '', 13, 6, '', 0),
    new Square('', '', 14, 6, '', 0),
    new Square('', '', 15, 6, '', 0),
    new Square('', '', 16, 6, '', 0),
    //
    new Square('', '', 1, 5, '', 0),
    new Square('', '', 2, 5, '', 0),
    new Square('', '', 3, 5, '', 0),
    new Square('', '', 4, 5, '', 0),
    new Square('', '', 5, 5, '', 0),
    new Square('', '', 6, 5, '', 0),
    new Square('', '', 7, 5, '', 0),
    new Square('', '', 8, 5, '', 0),
    new Square('', '', 9, 5, '', 0),
    new Square('', '', 10, 5, '', 0),
    new Square('', '', 11, 5, '', 0),
    new Square('', '', 12, 5, '', 0),
    new Square('', '', 13, 5, '', 0),
    new Square('', '', 14, 5, '', 0),
    new Square('', '', 15, 5, '', 0),
    new Square('', '', 16, 5, '', 0),
    //
    new Square('', '', 1, 4, '', 0),
    new Square('', '', 2, 4, '', 0),
    new Square('', '', 3, 4, '', 0),
    new Square('', '', 4, 4, '', 0),
    new Square('', '', 5, 4, '', 0),
    new Square('', '', 6, 4, '', 0),
    new Square('', '', 7, 4, '', 0),
    new Square('', '', 8, 4, '', 0),
    new Square('', '', 9, 4, '', 0),
    new Square('', '', 10, 4, '', 0),
    new Square('', '', 11, 4, '', 0),
    new Square('', '', 12, 4, '', 0),
    new Square('', '', 13, 4, '', 0),
    new Square('', '', 14, 4, '', 0),
    new Square('', '', 15, 4, '', 0),
    new Square('', '', 16, 4, '', 0),
    //
    new Square('', '', 1, 3, '', 0),
    new Square('', '', 2, 3, '', 0),
    new Square('', '', 3, 3, '', 0),
    new Square('', '', 4, 3, '', 0),
    new Square('', '', 5, 3, '', 0),
    new Square('', '', 6, 3, '', 0),
    new Square('', '', 7, 3, '', 0),
    new Square('', '', 8, 3, '', 0),
    new Square('', '', 9, 3, '', 0),
    new Square('', '', 10, 3, '', 0),
    new Square('', '', 11, 3, '', 0),
    new Square('', '', 12, 3, '', 0),
    new Square('', '', 13, 3, '', 0),
    new Square('', '', 14, 3, '', 0),
    new Square('', '', 15, 3, '', 0),
    new Square('', '', 16, 3, '', 0),
    //
    new Square('3P', '♟', 1, 2, 'bot', 3),
    new Square('3P', '♟', 2, 2, 'bot', 3),
    new Square('3P', '♟', 3, 2, 'bot', 3),
    new Square('3P', '♟', 4, 2, 'bot', 3),
    new Square('3P', '♟', 5, 2, 'bot', 3),
    new Square('3P', '♟', 6, 2, 'bot', 3),
    new Square('3P', '♟', 7, 2, 'bot', 3),
    new Square('3P', '♟', 8, 2, 'bot', 3),
    new Square('4P', '♟', 9, 2, 'bot', 4),
    new Square('4P', '♟', 10, 2, 'bot', 4),
    new Square('4P', '♟', 11, 2, 'bot', 4),
    new Square('4P', '♟', 12, 2, 'bot', 4),
    new Square('4P', '♟', 13, 2, 'bot', 4),
    new Square('4P', '♟', 14, 2, 'bot', 4),
    new Square('4P', '♟', 15, 2, 'bot', 4),
    new Square('4P', '♟', 16, 2, 'bot', 4),
    //
    new Square('3R', '♜', 1, 1, 'bot', 3),
    new Square('3H', '♞', 2, 1, 'bot', 3),
    new Square('3B', '♝', 3, 1, 'bot', 3),
    new Square('3Q', '♛', 4, 1, 'bot', 3),
    new Square('3K', '♚', 5, 1, 'bot', 3),
    new Square('3B', '♝', 6, 1, 'bot', 3),
    new Square('3H', '♞', 7, 1, 'bot', 3),
    new Square('3R', '♜', 8, 1, 'bot', 3),
    new Square('4R', '♜', 9, 1, 'bot', 4),
    new Square('4H', '♞', 10, 1, 'bot', 4),
    new Square('4B', '♝', 11, 1, 'bot', 4),
    new Square('4Q', '♛', 12, 1, 'bot', 4),
    new Square('4K', '♚', 13, 1, 'bot', 4),
    new Square('4B', '♝', 14, 1, 'bot', 4),
    new Square('4H', '♞', 15, 1, 'bot', 4),
    new Square('4R', '♜', 16, 1, 'bot', 4)
  ];

  savedSquares = JSON.parse(JSON.stringify(this.squares));

  ngOnInit():void{
    let wrongPage = false;
    if (this.apiService.name == '') {
      wrongPage = true;
    }
    if (wrongPage) {
      this.router.navigate(['main']);
    }

    this.isHost = this.apiService.isHost;

    if (this.apiService.name != '') {

      this.apiService.socket.on('update game', (vars: any, oldPiece: number, newPiece: number, piecePiece: string, namePiece: string, sidePiece: string, playerPiece: number) => {
        for (let [key, value] of Object.entries(vars)) {
          switch(key) {
            case 'K1Cap':
              this.K1Cap = vars[key];
              break;
            case 'K2Cap':
              this.K2Cap = vars[key];
              break;
            case 'K3Cap':
              this.K3Cap = vars[key];
              break;
            case 'K4Cap':
              this.K4Cap = vars[key];
              break;
            case 'turn':
              this.turn = vars[key];
              if (this.turn == 1) {
                this.p1Turn = true;
                this.p2Turn = false;
                this.p3Turn = false;
                this.p4Turn = false;
              } else if (this.turn == 2) {
                this.p1Turn = false;
                this.p2Turn = true;
                this.p3Turn = false;
                this.p4Turn = false;
              } else if (this.turn == 3) {
                this.p1Turn = false;
                this.p2Turn = false;
                this.p3Turn = true;
                this.p4Turn = false;
              } else {
                this.p1Turn = false;
                this.p2Turn = false;
                this.p3Turn = false;
                this.p4Turn = true;
              }
              break;
            case 'K1':
              this.K1 = vars[key];
              break;
            case 'R1L':
              this.R1L = vars[key];
              break;
            case 'R1R':
              this.R1R = vars[key];
              break;
            case 'K2':
              this.K2 = vars[key];
              break;
            case 'R2L':
              this.R2L = vars[key];
              break;
            case 'R2R':
              this.R2R = vars[key];
              break;
            case 'K3':
              this.K3 = vars[key];
              break;
            case 'R3L':
              this.R3L = vars[key];
              break;
            case 'R3R':
              this.R3R = vars[key];
              break;
            case 'K4':
              this.K4 = vars[key];
              break;
            case 'R4L':
              this.R4L = vars[key];
              break;
            case 'R4R':
              this.R4R = vars[key];
              break;
            case 'enPassant1':
              this.enPassant1 = vars[key];
              break;
            case 'enPassant1X':
              this.enPassant1X = vars[key];
              break;
            case 'enPassant1Y':
              this.enPassant1Y = vars[key];
              break;
            case 'enPassant2':
              this.enPassant2 = vars[key];
              break;
            case 'enPassant2X':
              this.enPassant2X = vars[key];
              break;
            case 'enPassant2Y':
              this.enPassant2Y = vars[key];
              break;
            case 'enPassant3':
              this.enPassant3 = vars[key];
              break;
            case 'enPassant3X':
              this.enPassant3X = vars[key];
              break;
            case 'enPassant3Y':
              this.enPassant3Y = vars[key];
              break;
            case 'enPassant4':
              this.enPassant4 = vars[key];
              break;
            case 'enPassant4X':
              this.enPassant4X = vars[key];
              break;
            case 'enPassant4Y':
              this.enPassant4Y = vars[key];
              break;
          }
        }

        let i = 0;
        this.squares.forEach(e => {
          if (i == oldPiece) {
            this.squares[i].name = '';
            this.squares[i].piece = '';
            this.squares[i].side = '';
            this.squares[i].player = 0;
          } else if (i == newPiece) {
            this.squares[i].name = namePiece;
            this.squares[i].piece = piecePiece;
            this.squares[i].side = sidePiece;
            this.squares[i].player = playerPiece;
          }
          i += 1;
        });

      });

      this.apiService.socket.on('end game', (data: string) => {
        if (data == 'wint') {
          this.openSnackBarTop();
        } else if (data == 'winb') {
          this.openSnackBarBot();
        } else if (data == 'draw') {
          this.openSnackBarDraw();
        } else if (data == 'leave') {
          this.openSnackBarLeave();
        } else if (data == 'return') {
          this.openSnackBarReturn();
        }
        this.endGame('');
      });

      this.apiService.socket.on('start game', () => {
        this.apiService.inGame = true;
        this.inGame = this.apiService.inGame;

        this.p1Name = this.apiService.playerTurns[0].name;
        this.p2Name = this.apiService.playerTurns[1].name;
        this.p3Name = this.apiService.playerTurns[2].name;
        this.p4Name = this.apiService.playerTurns[3].name;
      });
  
      this.apiService.socket.on('return to lobby', () => {
        this.apiService.inGame = false;
        this.inGame = this.apiService.inGame;
      });

    }

  }

  ngOnDestroy() {

    if (this.apiService.name != '') {
      this.apiService.disconnect();
      this.apiService.reset();
    }
  }

  // global vars
  chosenPiece : any = null;
  replacePiece : any = null;
  choosing = false;

  // last king
  K1Cap = false;
  K2Cap = false;
  K3Cap = false;
  K4Cap = false;

  // current player/last king can't move
  playerTrap = false;
  // stalemate
  draw = false;

  // turn
  turn = 1;
  oldTurn = 1;

  // first move
  K1 = true;
  R1L = true;
  R1R = true;
  K2 = true;
  R2L = true;
  R2R = true;
  K3 = true;
  R3L = true;
  R3R = true;
  K4 = true;
  R4L = true;
  R4R = true;

  // en passant
  enPassant1 = false;
  enPassant1X = 0;
  enPassant1Y = 0;
  enPassant2 = false;
  enPassant2X = 0;
  enPassant2Y = 0;
  enPassant3 = false;
  enPassant3X = 0;
  enPassant3Y = 0;
  enPassant4 = false;
  enPassant4X = 0;
  enPassant4Y = 0;

  oldPiece = 0;
  newPiece = 0;
  piecePiece = "";
  namePiece = "";
  sidePiece = "";
  playerPiece = 0;

  vars: any = {};

  // check if pawn was at starting x to see if it's the first move
  // if side = top / side = bot, etc.
  public change(square: any):void{
    let replacedPiece = "";
    // move piece
    if ((this.chosenPiece != null) && (square.highlight == true)) {
      // check if own piece
      if (this.ownPiece(this.chosenPiece.name) == false) {
        return;
      }
      // check if move to same spot
      if ((this.chosenPiece.x == square.x) && (this.chosenPiece.y == square.y)) {
        return;
      }
      // if it's the player's turn
      if (this.apiService.playerTurns[this.turn - 1].id != this.apiService.socket.id) {
        return;
      }
      this.oldPiece = (127 - (this.chosenPiece.y * 16) + this.chosenPiece.x);
      this.newPiece = (127 - (square.y * 16) + square.x);
      // if pawn is moved to the end then choose piece to replace it
      if (((this.chosenPiece.name == "1P") || (this.chosenPiece.name == "2P")) && (square.y == 1)) {
        this.choosing = true;
        this.replacePiece = square;
        this.oldTurn = this.turn;
      } else if (((this.chosenPiece.name == "3P") || (this.chosenPiece.name == "4P")) && (square.y == 8)) {
        this.choosing = true;
        this.replacePiece = square;
        this.oldTurn = this.turn;
      }
      // this.chosenPiece is the old place
      // choose a new square and move to that place
      if ((this.chosenPiece.x != square.x) || (this.chosenPiece.y != square.y)) {
        if ((this.enPassant1 == true) && (this.chosenPiece.player == 1)) {
          this.enPassant1 = false;
          this.vars.enPassant1 = this.enPassant1;
        } else if ((this.enPassant2 == true) && (this.chosenPiece.player == 2)) {
          this.enPassant2 = false;
          this.vars.enPassant2 = this.enPassant2;
        } else if ((this.enPassant3 == true) && (this.chosenPiece.player == 3)) {
          this.enPassant3 = false;
          this.vars.enPassant3 = this.enPassant3;
        } else if ((this.enPassant4 == true) && (this.chosenPiece.player == 4)) {
          this.enPassant4 = false;
          this.vars.enPassant4 = this.enPassant4;
        }
        // if pawn is moved 2 from start
        if ((this.chosenPiece.side == "top") && (this.chosenPiece.y == 7) && (square.y == 5)) {
          if (this.chosenPiece.name == ("1P")) {
            this.enPassant1 = true;
            this.enPassant1X = square.x;
            this.enPassant1Y = 6;
            this.vars.enPassant1 = this.enPassant1;
            this.vars.enPassant1X = this.enPassant1X;
            this.vars.enPassant1Y = this.enPassant1Y;
          } else if (this.chosenPiece.name == ("2P")) {
            this.enPassant2 = true;
            this.enPassant2X = square.x;
            this.enPassant2Y = 6;
            this.vars.enPassant2 = this.enPassant2;
            this.vars.enPassant2X = this.enPassant2X;
            this.vars.enPassant2Y = this.enPassant2Y;
          }
        } else if ((this.chosenPiece.side == "bot") && (this.chosenPiece.y == 2) && (square.y == 4)) {
          if (this.chosenPiece.name == ("3P")) {
            this.enPassant3 = true;
            this.enPassant3X = square.x;
            this.enPassant3Y = 3;
            this.vars.enPassant3 = this.enPassant3;
            this.vars.enPassant3X = this.enPassant3X;
            this.vars.enPassant3Y = this.enPassant3Y;
          } else if (this.chosenPiece.name == ("4P")) {
            this.enPassant4 = true;
            this.enPassant4X = square.x;
            this.enPassant4Y = 3;
            this.vars.enPassant4 = this.enPassant4;
            this.vars.enPassant4X = this.enPassant4X;
            this.vars.enPassant4Y = this.enPassant4Y;
          }
        }
        if (this.chosenPiece.name == "1K") {
          // goes left
          if ((this.chosenPiece.x - square.x) == 2) {
            this.squares[3].name = this.squares[0].name;
            this.squares[3].piece = this.squares[0].piece;
            this.squares[3].side = this.squares[0].side;
            this.squares[3].player = 1;
            this.squares[0].name = '';
            this.squares[0].piece = '';
            this.squares[0].side = '';
            this.squares[0].player = 0;
            this.R1L = false;
            this.vars.R1L = this.R1L;
            this.apiService.updateGame(this.vars, 0, 3, this.squares[3].piece, this.squares[3].name, this.squares[3].side, 1);
          // goes right
          } else if ((this.chosenPiece.x - square.x) == -2) {
            // empty, rook (empty becomes rook)
            this.squares[5].name = this.squares[7].name;
            this.squares[5].piece = this.squares[7].piece;
            this.squares[5].side = this.squares[7].side;
            this.squares[5].player = 1;
            this.squares[7].name = '';
            this.squares[7].piece = '';
            this.squares[7].side = '';
            this.squares[7].player = 0;
            this.R1R = false;
            this.vars.R1R = this.R1R;
            this.apiService.updateGame(this.vars, 7, 5, this.squares[5].piece, this.squares[5].name, this.squares[5].side, 1);
          }
          this.K1 = false;
          this.vars.K1 = this.K1;
        } else if (this.chosenPiece.name == "2K") {
          // goes left
          if ((this.chosenPiece.x - square.x) == 2) {
            this.squares[10].name = this.squares[8].name;
            this.squares[10].piece = this.squares[8].piece;
            this.squares[10].side = this.squares[8].side;
            this.squares[10].player = 2;
            this.squares[8].name = '';
            this.squares[8].piece = '';
            this.squares[8].side = '';
            this.squares[8].player = 0;
            this.R2L = false;
            this.vars.R2L = this.R2L;
            this.apiService.updateGame(this.vars, 8, 10, this.squares[10].piece, this.squares[10].name, this.squares[10].side, 2);
          // goes right
          } else if ((this.chosenPiece.x - square.x) == -2) {
            this.squares[4].name = this.squares[7].name;
            this.squares[4].piece = this.squares[7].piece;
            this.squares[4].side = this.squares[7].side;
            this.squares[4].player = 2;
            this.squares[7].name = '';
            this.squares[7].piece = '';
            this.squares[7].side = '';
            this.squares[7].player = 0;
            this.R2R = false;
            this.vars.R2R = this.R2R;
            this.apiService.updateGame(this.vars, 7, 4, this.squares[4].piece, this.squares[4].name, this.squares[4].side, 2);
          }
          this.K2 = false;
          this.vars.K2 = this.K2;
        } else if (this.chosenPiece.name == "3K") {
          // goes left
          if ((this.chosenPiece.x - square.x) == 2) {
            this.squares[115].name = this.squares[112].name;
            this.squares[115].piece = this.squares[112].piece;
            this.squares[115].side = this.squares[112].side;
            this.squares[115].player = 3;
            this.squares[112].name = '';
            this.squares[112].piece = '';
            this.squares[112].side = '';
            this.squares[112].player = 0;
            this.R3L = false;
            this.vars.R3L = this.R3L;
            this.apiService.updateGame(this.vars, 112, 115, this.squares[115].piece, this.squares[115].name, this.squares[115].side, 3);
          // goes right
          } else if ((this.chosenPiece.x - square.x) == -2) {
            this.squares[117].name = this.squares[119].name;
            this.squares[117].piece = this.squares[119].piece;
            this.squares[117].side = this.squares[119].side;
            this.squares[117].player = 3;
            this.squares[119].name = '';
            this.squares[119].piece = '';
            this.squares[119].side = '';
            this.squares[119].player = 0;
            this.R3R = false;
            this.vars.R3R = this.R3R;
            this.apiService.updateGame(this.vars, 119, 117, this.squares[117].piece, this.squares[117].name, this.squares[117].side, 3);
          }
          this.K3 = false;
          this.vars.K3 = this.K3;
        } else if (this.chosenPiece.name == "4K") {
          // goes left
          if ((this.chosenPiece.x - square.x) == 2) {
            this.squares[123].name = this.squares[120].name;
            this.squares[123].piece = this.squares[120].piece;
            this.squares[123].side = this.squares[120].side;
            this.squares[123].player = 4;
            this.squares[120].name = '';
            this.squares[120].piece = '';
            this.squares[120].side = '';
            this.squares[120].player = 0;
            this.R4L = false;
            this.vars.R4L = this.R4L;
            this.apiService.updateGame(this.vars, 120, 123, this.squares[123].piece, this.squares[123].name, this.squares[123].side, 4);
          // goes right
          } else if ((this.chosenPiece.x - square.x) == -2) {
            this.squares[125].name = this.squares[127].name;
            this.squares[125].piece = this.squares[127].piece;
            this.squares[125].side = this.squares[127].side;
            this.squares[125].player = 4;
            this.squares[127].name = '';
            this.squares[127].piece = '';
            this.squares[127].side = '';
            this.squares[127].player = 0;
            this.R4R = false;
            this.vars.R4R = this.R4R;
            this.apiService.updateGame(this.vars, 127, 125, this.squares[125].piece, this.squares[125].name, this.squares[125].side, 4);
          }
          this.K4 = false;
          this.vars.K4 = this.K4;
        // check if rook moved
        } else if (this.chosenPiece == this.squares[0]) {
          this.R1L = false;
          this.vars.R1L = this.R1L;
        } else if (this.chosenPiece == this.squares[7]) {
          this.R1R = false;
          this.vars.R1R = this.R1R;
        } else if (this.chosenPiece == this.squares[8]) {
          this.R2L = false;
          this.vars.R2L = this.R2L;
        } else if (this.chosenPiece == this.squares[15]) {
          this.R2R = false;
          this.vars.R2R = this.R2R;
        } else if (this.chosenPiece == this.squares[112]) {
          this.R3L = false;
          this.vars.R3L = this.R3L;
        } else if (this.chosenPiece == this.squares[119]) {
          this.R3R = false;
          this.vars.R3R = this.R3R;
        } else if (this.chosenPiece == this.squares[120]) {
          this.R4L = false;
          this.vars.R4L = this.R4L;
        } else if (this.chosenPiece == this.squares[127]) {
          this.R4R = false;
          this.vars.R4R = this.R4R;
        }
        this.namePiece = this.chosenPiece.name;
        this.piecePiece = this.chosenPiece.piece;
        this.sidePiece = this.chosenPiece.side;
        this.playerPiece = this.chosenPiece.player;
        replacedPiece = square.name;
        square.name = this.chosenPiece.name;
        square.piece = this.chosenPiece.piece;
        square.side = this.chosenPiece.side;
        square.player = this.chosenPiece.player;
        this.chosenPiece.name = '';
        this.chosenPiece.piece = '';
        this.chosenPiece.side = '';
        this.chosenPiece.player = 0;
        if (replacedPiece == "1K") {
          if (this.K2Cap == true) {
            this.endGame("winb");
            this.openSnackBarBot();
            return;
          }
          this.K1Cap = true;
          this.vars.K1Cap = this.K1Cap;
        } else if (replacedPiece == "2K") {
          if (this.K1Cap == true) {
            this.endGame("winb");
            this.openSnackBarBot();
            return;
          }
          this.K2Cap = true;
          this.vars.K2Cap = this.K2Cap;
        } else if (replacedPiece == "3K") {
          if (this.K4Cap == true) {
            this.endGame("wint");
            this.openSnackBarTop();
            return;
          }
          this.K3Cap = true;
          this.vars.K3Cap = this.K3Cap;
        } else if (replacedPiece == "4K") {
          if (this.K3Cap == true) {
            this.endGame("wint");
            this.openSnackBarTop();
            return;
          }
          this.K4Cap = true;
          this.vars.K4Cap = this.K4Cap;
        }
      }
      // unhighlight and check if pawn captured did leap
      // pawn that did leap was captured normally or enpassant
      // square is new place
      for (let e of this.squares) {

        if (square.side == "top") {
          if (this.enPassant3 == true) {
            
            // captured pawn that moved 2
            if ((replacedPiece == "3P") && (square.x == this.enPassant3X) && (square.y == (this.enPassant3Y + 1))) {
              this.enPassant3 = false;
              this.vars.enPassant3 = this.enPassant3;
            }
            // pawn did enpassant
            if ((replacedPiece == "") && (square.x == this.enPassant3X) && (square.y == this.enPassant3Y)) {
              if ((e.x == this.enPassant3X) && (e.y == (this.enPassant3Y + 1))) {
                e.name = '';
                e.piece = '';
                e.side = '';
                this.enPassant3 = false;
                this.vars.enPassant3 = this.enPassant3;
                let piece = (127 - (e.y * 16) + e.x);
                // delete the pawn that got enpassanted
                this.apiService.updateGame(this.vars, piece, piece, '', '', '', 0);
              }
            }
          }
          if (this.enPassant4 == true) {
            // captured pawn that moved 2
            if ((replacedPiece == "4P") && (square.x == this.enPassant4X) && (square.y == (this.enPassant4Y + 1))) {
              this.enPassant4 = false;
              this.vars.enPassant4 = this.enPassant4;
            }
            // pawn did enpassant
            if ((replacedPiece == "") && (square.x == this.enPassant4X) && (square.y == (this.enPassant4Y))) {
              if ((e.x == this.enPassant4X) && (e.y == (this.enPassant4Y + 1))) {
                e.name = '';
                e.piece = '';
                e.side = '';
                this.enPassant4 = false;
                this.vars.enPassant4 = this.enPassant4;
                let piece = (127 - (e.y * 16) + e.x);
                // delete the pawn that got enpassanted
                this.apiService.updateGame(this.vars, piece, piece, '', '', '', 0);
              }
            }
          }
        } else if (square.side == "bot") {
          if (this.enPassant1 == true) {
            // captured pawn that moved 2
            if ((replacedPiece == "1P") && (square.x == this.enPassant1X) && (square.y == (this.enPassant1Y - 1))) {
              this.enPassant1 = false;
              this.vars.enPassant1 = this.enPassant1;
            }
            // pawn did enpassant
            if ((replacedPiece == "") && (square.x == this.enPassant1X) && (square.y == (this.enPassant1Y))) {
              if ((e.x == this.enPassant1X) && (e.y == (this.enPassant1Y - 1))) {
                e.name = '';
                e.piece = '';
                e.side = '';
                this.enPassant1 = false;
                this.vars.enPassant1 = this.enPassant1;
                let piece = (127 - (e.y * 16) + e.x);
                // delete the pawn that got enpassanted
                this.apiService.updateGame(this.vars, piece, piece, '', '', '', 0);
              }
            }
          }
          if (this.enPassant2 == true) {
            // captured pawn that moved 2
            if ((replacedPiece == "2P") && (square.x == this.enPassant2X) && (square.y == (this.enPassant2Y - 1))) {
              this.enPassant2 = false;
              this.vars.enPassant2 = this.enPassant2;
            }
            // pawn did enpassant
            if ((replacedPiece == "") && (square.x == this.enPassant2X) && (square.y == (this.enPassant2Y))) {
              if ((e.x == this.enPassant2X) && (e.y == (this.enPassant2Y - 1))) {
                e.name = '';
                e.piece = '';
                e.side = '';
                this.enPassant2 = false;
                this.vars.enPassant2 = this.enPassant2;
                let piece = (127 - (e.y * 16) + e.x);
                // delete the pawn that got enpassanted
                this.apiService.updateGame(this.vars, piece, piece, '', '', '', 0);
              }
            }
          }
        }
        if (e.highlight == true) {
          e.highlight = false;
        }
      }
      // change turn
      // update stuff
      this.newTurn()
      this.chosenPiece = null;
      return;
    }
    this.chosenPiece = square;

    for (let e of this.squares) {
      if (e.highlight == true) {
        e.highlight = false;
      }
    }
    // choose piece
    for (let e of this.squares) {
      if (e.x == square.x && e.y == square.y && e.name != "") {
        e.highlight = true;
        // 1P or 2P, etc. means pawns
        if ((square.name == "1P") || (square.name == "2P")) {
          this.choosePawn(square, "top");
        } else if ((square.name == "3P") || (square.name == "4P")) {
          this.choosePawn(square, "bot");
        } else if ((square.name == "1R") || (square.name == "2R")) {
          this.chooseRook(square, "top");
        } else if ((square.name == "3R") || (square.name == "4R")) {
          this.chooseRook(square, "bot");
        } else if ((square.name == "1H") || (square.name == "2H")) {
          this.chooseHorse(square, "top");
        } else if ((square.name == "3H") || (square.name == "4H")) {
          this.chooseHorse(square, "bot");
        } else if ((square.name == "1B") || (square.name == "2B")) {
          this.chooseBishop(square, "top");
        } else if ((square.name == "3B") || (square.name == "4B")) {
          this.chooseBishop(square, "bot");
        } else if ((square.name == "1K") || (square.name == "2K")) {
          this.chooseKing(square, "top");
        } else if ((square.name == "3K") || (square.name == "4K")) {
          this.chooseKing(square, "bot");
        } else if ((square.name == "1Q") || (square.name == "2Q")) {
          this.chooseQueen(square, "top");
        } else if ((square.name == "3Q") || (square.name == "4Q")) {
          this.chooseQueen(square, "bot");
        }
      } 
    }
  }

  private choosePawn(square: { y: number; x: number; }, side: string) {
    // Find which squares to highlight
    let square1: number;
    let square2: number; 
    let square1Highlight = false;
    if (side == "top") {
      square1 = square.y - 1;
      square2 = square.y - 2;
    } else if (side == "bot") {
      square1 = square.y + 1;
      square2 = square.y + 2;
    }
    
    this.squares.forEach(e => {
      if ((e.x == square.x) && (e.y == square1)) {
        if ((side == "top") && ((e.side != "top") && (e.side != "bot"))) {
          e.highlight = true;
          square1Highlight = true;
        } else if ((side == "bot") && ((e.side != "bot") && (e.side != "top"))) {
          e.highlight = true;
          square1Highlight = true;
        }
      }

      if ((e.x == square.x) && (e.y == square2)) {
        if ((side == "top") && ((e.side != "top") && (e.side != "bot")) && (square.y == 7) && (square1Highlight)) {
          e.highlight = true;
        } else if ((side == "bot") && ((e.side != "bot") && (e.side != "top")) && (square.y == 2)) {
          let square1 = (127 - (e.y * 16) + e.x + 16);
          if (this.squares[square1].side == "") {
            e.highlight = true;
          }
        }
      }
      // highlight enpassant
      if (side == "top") {
        if (((e.x == (square.x + 1)) || (e.x == (square.x - 1))) && (e.y == (square.y - 1))) {
          if ((this.enPassant3 == true) && ((e.x == this.enPassant3X) && (e.y == this.enPassant3Y))) {
            e.highlight = true;
          } else if ((this.enPassant4 == true) && ((e.x == this.enPassant4X) && (e.y == this.enPassant4Y))) {
            e.highlight = true;
          }
          if (e.side == "bot") {
            e.highlight = true;
          }
        }
      } else {
        if (((e.x == (square.x + 1)) || (e.x == (square.x - 1))) && (e.y == (square.y + 1))) {
          if ((this.enPassant1 == true) && ((e.x == this.enPassant1X) && (e.y == this.enPassant1Y))) {
            e.highlight = true;
          } else if ((this.enPassant2 == true) && ((e.x == this.enPassant2X) && (e.y == this.enPassant2Y))) {
            e.highlight = true;
          }
          if (e.side == "top") {
            e.highlight = true;
          }
        }
      }
    });
  }
  
  private chooseRook(square: { x: number; y: number; }, side: string) {
    // closest to up, down, left, right
    let up = 50;
    let down = 50;
    let left = 50;
    let right = 50;
    // find closest things
    // check if same team or not
    this.squares.forEach(e => {
      let x = square.x - e.x;
      let y = square.y - e.y;
      if (e.name != '') {
        // up
        if ((y < 0) && (e.x == square.x)) {
          if (Math.abs(y) < up) {
            up = Math.abs(y);
          }
        }
        // down
        if ((y > 0) && (e.x == square.x)) {
          if (Math.abs(y) < down) {
            down = Math.abs(y);
          }
        }
        // left
        if ((x > 0) && (e.y == square.y)) {
          if (Math.abs(x) < left) {
            left = Math.abs(x);
          }
        }
        // right
        if ((x < 0) && (e.y == square.y)) {
          if (Math.abs(x) < right) {
            right = Math.abs(x);
          }
        }
      }
    })
    // highlight based on closest things 
    this.squares.forEach(e => {
      if (((e.x == square.x) || (e.y == square.y)) && (((square.x - left) <= e.x) && (e.x <= (square.x + right)) && ((square.y - down) <= e.y) && (e.y <= (square.y + up)))) {
        if (side == "top") {
          // if same team, don't highlight it
          if ((e.side == "top") && ((e.x == (square.x - left)) || (e.x == (square.x + right)) || (e.y == (square.y + up) || (e.y == (square.y - down))))) {
            // do nothing
          } else {
            e.highlight = true;
          }
        // side is bot
        } else {          
          if ((e.side == "bot") && ((e.x == (square.x - left)) || (e.x == (square.x + right)) || (e.y == (square.y + up) || (e.y == (square.y - down))))) {
            // do nothing
          } else {
            e.highlight = true;
          }
        }
      }
    })
  }

  private chooseHorse(square: { x: number; y: number; }, side: string) {
    this.squares.forEach(e => {
      // broken up to 2 if statements
      if (((e.x == square.x + 1) || (e.x == square.x - 1)) && ((e.y == square.y + 2) || e.y == square.y - 2)) {
        if ((side == "top") && e.side != "top") {
          e.highlight = true;
        } else if ((side == "bot") && e.side != "bot") {
          e.highlight = true;
        }
      }
      if (((e.x == square.x + 2) || (e.x == square.x - 2)) && ((e.y == square.y + 1) || e.y == square.y - 1)) {
        if ((side == "top") && e.side != "top") {
          e.highlight = true;
        } else if ((side == "bot") && e.side != "bot") {
          e.highlight = true;
        }
      }
    }) 
  }

  private chooseBishop(square: { x: number; y: number; }, side: string) {
    // closest to upLeft, upRight, downLeft, downRight
    let upLeft = 50;
    let upRight = 50;
    let downLeft = 50;
    let downRight = 50;
    // find closest things
    // check if same team or not
    this.squares.forEach(e => {
      let xAbs = Math.abs(square.x - e.x);
      let yAbs = Math.abs(square.y - e.y);
      let x = square.x - e.x;
      let y = square.y - e.y;
      if ((xAbs == yAbs) && (e.name != '')) {
        // upLeft
        if ((x > 0) && (y < 0)) {
          if (Math.abs(y) < upLeft) {
            upLeft = Math.abs(y);
          }
        }
        // upRight
        if ((x < 0) && (y < 0)) {
          if (Math.abs(y) < upRight) {
            upRight = Math.abs(y);
          }
        }
        // downLeft
        if ((x > 0) && (y > 0)) {
          if (Math.abs(x) < downLeft) {
            downLeft = Math.abs(x);
          }
        }
        // downRight
        if ((x < 0) && (y > 0)) {
          if (Math.abs(x) < downRight) {
            downRight = Math.abs(x);
          }
        }
      }
    })
    this.squares.forEach(e => {
      let xAbs = Math.abs(square.x - e.x);
      let yAbs = Math.abs(square.y - e.y);
      let x = square.x - e.x;
      let y = square.y - e.y;
      if (xAbs == yAbs) {
        // upLeft
        if ((x > 0) && (y < 0)) {
          if (Math.abs(y) <= upLeft) {
            if ((side == "top") && (e.side != "top")) {
              e.highlight = true;
            } else if ((side == "bot") && (e.side != "bot")) {
              e.highlight = true;
            }
          }
        }
        // upRight
        if ((x < 0) && (y < 0)) {
          if (Math.abs(y) <= upRight) {
            if ((side == "top") && (e.side != "top")) {
              e.highlight = true;
            } else if ((side == "bot") && (e.side != "bot")) {
              e.highlight = true;
            }
          }
        }
        // downLeft
        if ((x > 0) && (y > 0)) {
          if (Math.abs(x) <= downLeft) {
            if ((side == "top") && (e.side != "top")) {
              e.highlight = true;
            } else if ((side == "bot") && (e.side != "bot")) {
              e.highlight = true;
            }
          }
        }
        // downRight
        if ((x < 0) && (y > 0)) {
          if (Math.abs(x) <= downRight) {
            if ((side == "top") && (e.side != "top")) {
              e.highlight = true;
            } else if ((side == "bot") && (e.side != "bot")) {
              e.highlight = true;
            }
          }
        }
      }
    })
  }

  private chooseKing(square: { name: any; x: number; y: number; }, side: string) {
    let king = square.name;
    let leftEmpty = false;
    let rightEmpty = false;
    // check if left or right is empty between king and rook
    if ((king == "1K") && (this.K1 == true)) {
      if ((this.squares[1].name == "") && (this.squares[2].name == "") && (this.squares[3].name == "") && (this.R1L == true)) {
        leftEmpty = true;
        if (this.safeSquare(this.squares[2], "top") && this.safeSquare(this.squares[3], "top") && this.safeSquare(this.squares[4], "top")) {
         this.squares[2].highlight = true;
        }
      }
      if ((this.squares[5].name == "") && (this.squares[6].name == "") && (this.R1R == true)) {
        rightEmpty = true;
        if (this.safeSquare(this.squares[4], "top") && this.safeSquare(this.squares[5], "top") && this.safeSquare(this.squares[6], "top")) {
          this.squares[6].highlight = true;
        }
      }
    } else if ((king == "2K") && (this.K2 == true)) {
      if ((this.squares[9].name == "") && (this.squares[10].name == "") && (this.squares[11].name == "") && (this.R2L == true)) {
        leftEmpty = true;
        if (this.safeSquare(this.squares[10], "top") && this.safeSquare(this.squares[11], "top") && this.safeSquare(this.squares[12], "top")) {
          this.squares[10].highlight = true;
        }
      }
      if ((this.squares[13].name == "") && (this.squares[14].name == "") && (this.R2R == true)) {
        rightEmpty = true;
        if (this.safeSquare(this.squares[12], "top") && this.safeSquare(this.squares[13], "top") && this.safeSquare(this.squares[14], "top")) {
          this.squares[14].highlight = true;
        }
      }
    } else if ((king == "3K") && (this.K3 == true)) {
      if ((this.squares[117].name == "") && (this.squares[118].name == "") && (this.R3R == true)) {
        rightEmpty = true;
        if (this.safeSquare(this.squares[116], "bot") && this.safeSquare(this.squares[117], "bot") && this.safeSquare(this.squares[118], "bot")) {
          this.squares[118].highlight = true;
        }
      }
      if ((this.squares[113].name == "") && (this.squares[114].name == "") && (this.squares[115].name == "") && (this.R3L == true)) {
        leftEmpty = true;
        if (this.safeSquare(this.squares[114], "bot") && this.safeSquare(this.squares[115], "bot") && this.safeSquare(this.squares[116], "bot")) {
          this.squares[114].highlight = true;
        }
        
      }
    } else if ((king == "4K") && (this.K4 == true)) {
      if ((this.squares[125].name == "") && (this.squares[126].name == "") && (this.R4R == true)) {
        rightEmpty = true;
        if (this.safeSquare(this.squares[124], "bot") && this.safeSquare(this.squares[125], "bot") && this.safeSquare(this.squares[126], "bot")) {
          this.squares[126].highlight = true;
        }
      }
      if ((this.squares[121].name == "") && (this.squares[122].name == "") && (this.squares[123].name == "") && (this.R4L == true)) {
        leftEmpty = true;
        if (this.safeSquare(this.squares[122], "bot") && this.safeSquare(this.squares[123], "bot") && this.safeSquare(this.squares[124], "bot")) {
          this.squares[122].highlight = true;
        }
      }
    }
    this.squares.forEach(e => {
      let x = Math.abs(square.x - e.x);
      let y = Math.abs(square.y - e.y);
      if ((x < 2) && (y < 2)) {
        if ((side == "top") && e.side != "top") {
          e.highlight = true;
        } else if ((side == "bot") && e.side != "bot") {
          e.highlight = true;
        }
      }

    })
  }

  private trap(square: Square) {
    let currPiece = (127 - (square.y * 16) + square.x);
    let savedName = square.name;
    let savedPiece = square.piece;
    let savedSide = square.side;
    
    let result = false;

    if ((savedName == "1P") || (savedName == "2P")) {
      if (((this.squares[currPiece + 15] != null) && ((this.squares[currPiece + 15].side == "top") || (this.squares[currPiece + 15].side == "")) || ((this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x))) && ((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].name != "")) && ((this.squares[currPiece + 17] != null) && ((this.squares[currPiece + 17].side == "top") || (this.squares[currPiece + 17].side == "")) || ((this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x)))) {
        result = true;
      }
    } else if ((savedName == "3P") || (savedName == "4P")) {
      if (((this.squares[currPiece - 15] != null) && ((this.squares[currPiece - 15].side == "bot") || (this.squares[currPiece - 15].side == ""))  || ((this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x < this.squares[currPiece].x))) && ((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].name != "")) && ((this.squares[currPiece - 17] != null) && ((this.squares[currPiece - 17].side == "bot") || (this.squares[currPiece - 17].side == ""))  || ((this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x > this.squares[currPiece].x)))) {
        result = true;
      }
    // rook
    } else if ((savedName == "1R") || (savedName == "2R")) {
      if ((((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "top")) || (this.squares[currPiece - 16] == null)) && (((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "top")) || (this.squares[currPiece + 16] == null)) && (((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "top")) || (this.squares[currPiece - 1] == null) || (this.squares[currPiece - 1].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "top")) || (this.squares[currPiece + 1] == null) || (this.squares[currPiece + 1].x < this.squares[currPiece].x))) {
        result = true;
      }
    } else if ((savedName == "3R") || (savedName == "4R")) {
      if ((((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "bot")) || (this.squares[currPiece - 16] == null)) && (((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "bot")) || (this.squares[currPiece + 16] == null)) && (((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "bot")) || (this.squares[currPiece - 1] == null) || (this.squares[currPiece - 1].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "bot")) || (this.squares[currPiece + 1] == null) || (this.squares[currPiece + 1].x < this.squares[currPiece].x))) {
        result = true;
      }
    // knight
    } else if ((savedName == "1H") || (savedName == "2H")) {
      if ((((this.squares[currPiece - 33] != null) && (this.squares[currPiece - 33].side == "top")) || (this.squares[currPiece - 33] == null) || (this.squares[currPiece - 33].x > this.squares[currPiece].x)) && (((this.squares[currPiece - 18] != null) && (this.squares[currPiece - 18].side == "top")) || (this.squares[currPiece - 18] == null) || (this.squares[currPiece - 18].x > this.squares[currPiece].x)) && (((this.squares[currPiece - 31] != null) && (this.squares[currPiece - 31].side == "top")) || (this.squares[currPiece - 31] == null) || (this.squares[currPiece - 31].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 14] != null) && (this.squares[currPiece - 14].side == "top")) || (this.squares[currPiece - 14] == null) || (this.squares[currPiece - 14].x < this.squares[currPiece].x)) && (((this.squares[currPiece + 31] != null) && (this.squares[currPiece + 31].side == "top")) || (this.squares[currPiece + 31] == null) || (this.squares[currPiece + 31].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 14] != null) && (this.squares[currPiece + 14].side == "top")) || (this.squares[currPiece + 14] == null) || (this.squares[currPiece + 14].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 33] != null) && (this.squares[currPiece + 33].side == "top")) || (this.squares[currPiece + 33] == null) || (this.squares[currPiece + 33].x < this.squares[currPiece].x)) && (((this.squares[currPiece + 18] != null) && (this.squares[currPiece + 18].side == "top")) || (this.squares[currPiece + 18] == null) || (this.squares[currPiece + 18].x < this.squares[currPiece].x))) {
        result = true;
      }
    } else if ((savedName == "3H") || (savedName == "4H")) {
      if ((((this.squares[currPiece - 33] != null) && (this.squares[currPiece - 33].side == "bot")) || (this.squares[currPiece - 33] == null) || (this.squares[currPiece - 33].x > this.squares[currPiece].x)) && (((this.squares[currPiece - 18] != null) && (this.squares[currPiece - 18].side == "bot")) || (this.squares[currPiece - 18] == null) || (this.squares[currPiece - 18].x > this.squares[currPiece].x)) && (((this.squares[currPiece - 31] != null) && (this.squares[currPiece - 31].side == "bot")) || (this.squares[currPiece - 31] == null) || (this.squares[currPiece - 31].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 14] != null) && (this.squares[currPiece - 14].side == "bot")) || (this.squares[currPiece - 14] == null) || (this.squares[currPiece - 14].x < this.squares[currPiece].x)) && (((this.squares[currPiece + 31] != null) && (this.squares[currPiece + 31].side == "bot")) || (this.squares[currPiece + 31] == null) || (this.squares[currPiece + 31].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 14] != null) && (this.squares[currPiece + 14].side == "bot")) || (this.squares[currPiece + 14] == null) || (this.squares[currPiece + 14].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 33] != null) && (this.squares[currPiece + 33].side == "bot")) || (this.squares[currPiece + 33] == null) || (this.squares[currPiece + 33].x < this.squares[currPiece].x)) && (((this.squares[currPiece + 18] != null) && (this.squares[currPiece + 18].side == "bot")) || (this.squares[currPiece + 18] == null) || (this.squares[currPiece + 18].x < this.squares[currPiece].x))) {
        result = true;
      }
    // bishop
    } else if ((savedName == "1B") || (savedName == "2B")) {
      if ((((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "top")) || (this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "top")) || (this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "top")) || (this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "top")) || (this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x))) {
        result = true;
      }
    } else if ((savedName == "3B") || (savedName == "4B")) {
      if ((((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "bot")) || (this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "bot")) || (this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "bot")) || (this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "bot")) || (this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x))) {
        result = true;
      }
    // queen
    // mix of rook and bish
    } else if ((savedName == "1Q") || (savedName == "2Q")) {
      if ((((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "top")) || (this.squares[currPiece - 16] == null)) && (((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "top")) || (this.squares[currPiece + 16] == null)) && (((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "top")) || (this.squares[currPiece - 1] == null) || (this.squares[currPiece - 1].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "top")) || (this.squares[currPiece + 1] == null) || (this.squares[currPiece + 1].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "top")) || (this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "top")) || (this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "top")) || (this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "top")) || (this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x))) {
        result = true;
      }
    } else if ((savedName == "3Q") || (savedName == "4Q") || (savedName == "3K") || (savedName == "4K")) {
      if ((((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "bot")) || (this.squares[currPiece - 16] == null)) && (((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "bot")) || (this.squares[currPiece + 16] == null)) && (((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "bot")) || (this.squares[currPiece - 1] == null) || (this.squares[currPiece - 1].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "bot")) || (this.squares[currPiece + 1] == null) || (this.squares[currPiece + 1].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "bot")) || (this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "bot")) || (this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "bot")) || (this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "bot")) || (this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x))) {
        result = true;
      }
    // king same as queen
    } else if (((savedName == "1K") && (!this.K2Cap)) || ((savedName == "2K") && (!this.K1Cap))) {
      if ((((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "top")) || (this.squares[currPiece - 16] == null)) && (((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "top")) || (this.squares[currPiece + 16] == null)) && (((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "top")) || (this.squares[currPiece - 1] == null) || (this.squares[currPiece - 1].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "top")) || (this.squares[currPiece + 1] == null) || (this.squares[currPiece + 1].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "top")) || (this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "top")) || (this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "top")) || (this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "top")) || (this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x))) {
        result = true;
      }
    } else if (((savedName == "3K") && (!this.K4Cap)) || ((savedName == "4K") && (!this.K3Cap))) {
      if ((((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "bot")) || (this.squares[currPiece - 16] == null)) && (((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "bot")) || (this.squares[currPiece + 16] == null)) && (((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "bot")) || (this.squares[currPiece - 1] == null) || (this.squares[currPiece - 1].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "bot")) || (this.squares[currPiece + 1] == null) || (this.squares[currPiece + 1].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "bot")) || (this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x < this.squares[currPiece].x)) && (((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "bot")) || (this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "bot")) || (this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x)) && (((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "bot")) || (this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x))) {
        result = true;
      }
    }

    this.squares[currPiece].name = savedName;
    this.squares[currPiece].piece = savedPiece;
    this.squares[currPiece].side = savedSide;
    return result;
  }

  // calls this when there's 1 king left on the team
  private trap2(square: Square) {
    let currPiece = (127 - (square.y * 16) + square.x);
    let savedName = square.name;
    let savedPiece = square.piece;
    let savedSide = square.side;
    let savedKing: any = null;
    
    let result = true;

    // find king
    if (this.turn == 1) {
      this.squares.forEach(e => {
        if (e.name == "1K") {
          savedKing = e;
        }
      });
    } else if (this.turn == 2) {
      this.squares.forEach(e => {
        if (e.name == "2K") {
          savedKing = e;
        }
      });
    } else if (this.turn == 3) {
      this.squares.forEach(e => {
        if (e.name == "3K") {
          savedKing = e;
        }
      });
    } else {
      this.squares.forEach(e => {
        if (e.name == "4K") {
          savedKing = e;
        }
      });
    }

    if ((savedName == "1P") || (savedName == "2P")) {
      if (!((this.squares[currPiece + 15] != null) && ((this.squares[currPiece + 15].side == "top") || (this.squares[currPiece + 15].side == "")) || ((this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x)))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 15, "top");
        if (result) {
          return false;
        }
      }
      if (!((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].name != ""))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 16, "top");
        // if safe then returns false
        if (result) {
          return false;
        }
      }
      if (!((this.squares[currPiece + 17] != null) && ((this.squares[currPiece + 17].side == "top") || (this.squares[currPiece + 17].side == "")) || ((this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x)))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 17, "top");
        if (result) {
          return false;
        }
      }
    } else if ((savedName == "3P") || (savedName == "4P")) {
      if (!((this.squares[currPiece - 15] != null) && ((this.squares[currPiece - 15].side == "bot") || (this.squares[currPiece - 15].side == "")) || ((this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x > this.squares[currPiece].x)))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 15, "bot");
        if (result) {
          return false;
        }
      }
      if (!((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].name != ""))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 16, "bot");
        // if safe then returns false
        if (result) {
          return false;
        }
      }
      if (!((this.squares[currPiece - 17] != null) && ((this.squares[currPiece - 17].side == "bot") || (this.squares[currPiece - 17].side == "")) || ((this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x < this.squares[currPiece].x)))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 17, "bot");
        if (result) {
          return false;
        }
      }
    // rook
    } else if ((savedName == "1R") || (savedName == "2R")) {
      if (!(((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "top")) || (this.squares[currPiece - 16] == null))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 16, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "top")) || (this.squares[currPiece + 16] == null))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 16, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "top")) || (this.squares[currPiece - 1] == null) || (this.squares[currPiece - 1].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 1, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "top")) || (this.squares[currPiece + 1] == null) || (this.squares[currPiece + 1].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 1, "top");
        if (result) {
          return false;
        }
      }
    } else if ((savedName == "3R") || (savedName == "4R")) {
      if (!(((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "bot")) || (this.squares[currPiece - 16] == null))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 16, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "bot")) || (this.squares[currPiece + 16] == null))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 16, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "bot")) || (this.squares[currPiece - 1] == null) || (this.squares[currPiece - 1].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 1, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "bot")) || (this.squares[currPiece + 1] == null) || (this.squares[currPiece + 1].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 1, "bot");
        if (result) {
          return false;
        }
      }
    // knight
    } else if ((savedName == "1H") || (savedName == "2H")) {
      if (!(((this.squares[currPiece - 33] != null) && (this.squares[currPiece - 33].side == "top")) || (this.squares[currPiece - 33] == null) || (this.squares[currPiece - 33].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 33, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 18] != null) && (this.squares[currPiece - 18].side == "top")) || (this.squares[currPiece - 18] == null) || (this.squares[currPiece - 18].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 18, "top");
        if (result) {
          return false;
        }
      } 
      if (!(((this.squares[currPiece - 31] != null) && (this.squares[currPiece - 31].side == "top")) || (this.squares[currPiece - 31] == null) || (this.squares[currPiece - 31].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 31, "top");
        if (result) {
          return false;
        }
      } 
      if (!(((this.squares[currPiece - 14] != null) && (this.squares[currPiece - 14].side == "top")) || (this.squares[currPiece - 14] == null) || (this.squares[currPiece - 14].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 14, "top");
        if (result) {
          return false;
        }
      } 
      if (!(((this.squares[currPiece + 31] != null) && (this.squares[currPiece + 31].side == "top")) || (this.squares[currPiece + 31] == null) || (this.squares[currPiece + 31].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 31, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 14] != null) && (this.squares[currPiece + 14].side == "top")) || (this.squares[currPiece + 14] == null) || (this.squares[currPiece + 14].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 14, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 33] != null) && (this.squares[currPiece + 33].side == "top")) || (this.squares[currPiece + 33] == null) || (this.squares[currPiece + 33].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 33, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 18] != null) && (this.squares[currPiece + 18].side == "top")) || (this.squares[currPiece + 18] == null) || (this.squares[currPiece + 18].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 18, "top");
        if (result) {
          return false;
        }
      }
    } else if ((savedName == "3H") || (savedName == "4H")) {
      if (!(((this.squares[currPiece - 33] != null) && (this.squares[currPiece - 33].side == "bot")) || (this.squares[currPiece - 33] == null) || (this.squares[currPiece - 33].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 33, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 18] != null) && (this.squares[currPiece - 18].side == "bot")) || (this.squares[currPiece - 18] == null) || (this.squares[currPiece - 18].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 18, "bot");
        if (result) {
          return false;
        }
      } 
      if (!(((this.squares[currPiece - 31] != null) && (this.squares[currPiece - 31].side == "bot")) || (this.squares[currPiece - 31] == null) || (this.squares[currPiece - 31].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 31, "bot");
        if (result) {
          return false;
        }
      } 
      if (!(((this.squares[currPiece - 14] != null) && (this.squares[currPiece - 14].side == "bot")) || (this.squares[currPiece - 14] == null) || (this.squares[currPiece - 14].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 14, "bot");
        if (result) {
          return false;
        }
      } 
      if (!(((this.squares[currPiece + 31] != null) && (this.squares[currPiece + 31].side == "bot")) || (this.squares[currPiece + 31] == null) || (this.squares[currPiece + 31].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 31, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 14] != null) && (this.squares[currPiece + 14].side == "bot")) || (this.squares[currPiece + 14] == null) || (this.squares[currPiece + 14].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 14, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 33] != null) && (this.squares[currPiece + 33].side == "bot")) || (this.squares[currPiece + 33] == null) || (this.squares[currPiece + 33].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 33, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 18] != null) && (this.squares[currPiece + 18].side == "bot")) || (this.squares[currPiece + 18] == null) || (this.squares[currPiece + 18].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 18, "bot");
        if (result) {
          return false;
        }
      }
    // bishop
    } else if ((savedName == "1B") || (savedName == "2B")) {
      if (!(((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "top")) || (this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 15, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "top")) || (this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 17, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "top")) || (this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 15, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "top")) || (this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 17, "top");
        if (result) {
          return false;
        }
      }
    } else if ((savedName == "3B") || (savedName == "4B")) {
      if (!(((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "top")) || (this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 15, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "top")) || (this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 17, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "bot")) || (this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 15, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "bot")) || (this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 17, "bot");
        if (result) {
          return false;
        }
      }
    // queen
    // mix of rook and bish
    } else if ((savedName == "1Q") || (savedName == "2Q")) {
      if (!(((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "top")) || (this.squares[currPiece - 16] == null))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 16, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "top")) || (this.squares[currPiece + 16] == null))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 16, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "top")) || (this.squares[currPiece - 1] == null) || (this.squares[currPiece - 1].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 1, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "top")) || (this.squares[currPiece + 1] == null) || (this.squares[currPiece + 1].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 1, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "top")) || (this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 15, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "top")) || (this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 17, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "top")) || (this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 15, "top");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "top")) || (this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 17, "top");
        if (result) {
          return false;
        }
      }
    } else if ((savedName == "3Q") || (savedName == "4Q") || (savedName == "3K") || (savedName == "4K")) {
      if (!(((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "bot")) || (this.squares[currPiece - 16] == null))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 16, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "bot")) || (this.squares[currPiece + 16] == null))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 16, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "bot")) || (this.squares[currPiece - 1] == null) || (this.squares[currPiece - 1].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 1, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "bot")) || (this.squares[currPiece + 1] == null) || (this.squares[currPiece + 1].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 1, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "bot")) || (this.squares[currPiece - 15] == null) || (this.squares[currPiece - 15].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 15, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "bot")) || (this.squares[currPiece - 17] == null) || (this.squares[currPiece - 17].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "-", 17, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "bot")) || (this.squares[currPiece + 15] == null) || (this.squares[currPiece + 15].x > this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 15, "bot");
        if (result) {
          return false;
        }
      }
      if (!(((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "bot")) || (this.squares[currPiece + 17] == null) || (this.squares[currPiece + 17].x < this.squares[currPiece].x))) {
        result = this.checkMove(currPiece, savedKing, savedName, savedPiece, savedSide, "+", 17, "bot");
        if (result) {
          return false;
        }
      }
    }
    return result;
  }

  // checks if king is safe when moving piece
  private checkMove(currPiece: number, savedKing: any, savedName: string, savedPiece: string, savedSide: string, sign:string , num: number, side: string) {
    let result = false;
    let savedName2 = null;
    let savedPiece2 = null;
    let savedSide2 = null;
    if (side == "top") {
      if (sign == "+") {
        savedName2 = this.squares[currPiece + num].name;
        savedPiece2 = this.squares[currPiece + num].piece;
        savedSide2 = this.squares[currPiece + num].side;
        this.squares[currPiece].name = "";
        this.squares[currPiece].piece = "";
        this.squares[currPiece].side = "";
        this.squares[currPiece + num].name = savedName;
        this.squares[currPiece + num].piece = savedPiece;
        this.squares[currPiece + num].side = savedSide;
        if (this.safeSquare(savedKing, "top") == true) {
          result = true;
        }
        this.squares[currPiece + num].name = savedName2;
        this.squares[currPiece + num].piece = savedPiece2;
        this.squares[currPiece + num].side = savedSide2;
        this.squares[currPiece].name = savedName;
        this.squares[currPiece].piece = savedPiece;
        this.squares[currPiece].side = savedSide;
        return result;
      } else {
        savedName2 = this.squares[currPiece - num].name;
        savedPiece2 = this.squares[currPiece - num].piece;
        savedSide2 = this.squares[currPiece - num].side;
        this.squares[currPiece - num].name = savedName;
        this.squares[currPiece - num].piece = savedPiece;
        this.squares[currPiece - num].side = savedSide;
        if (this.safeSquare(savedKing, "top") == true) {
          result = true;
        }
        this.squares[currPiece - num].name = savedName2;
        this.squares[currPiece - num].piece = savedPiece2;
        this.squares[currPiece - num].side = savedSide2;
        this.squares[currPiece].name = savedName;
        this.squares[currPiece].piece = savedPiece;
        this.squares[currPiece].side = savedSide;
        return result;
      }
    // side is bot
    } else {
      if (sign == "+") {
        savedName2 = this.squares[currPiece + num].name;
        savedPiece2 = this.squares[currPiece + num].piece;
        savedSide2 = this.squares[currPiece + num].side;
        this.squares[currPiece + num].name = savedName;
        this.squares[currPiece + num].piece = savedPiece;
        this.squares[currPiece + num].side = savedSide;
        if (this.safeSquare(savedKing, "bot") == true) {
          result = true
        }
        this.squares[currPiece + num].name = savedName2;
        this.squares[currPiece + num].piece = savedPiece2;
        this.squares[currPiece + num].side = savedSide2;
        this.squares[currPiece].name = savedName;
        this.squares[currPiece].piece = savedPiece;
        this.squares[currPiece].side = savedSide;
        return result;
      } else {
        savedName2 = this.squares[currPiece - num].name;
        savedPiece2 = this.squares[currPiece - num].piece;
        savedSide2 = this.squares[currPiece - num].side;
        this.squares[currPiece - num].name = savedName;
        this.squares[currPiece - num].piece = savedPiece;
        this.squares[currPiece - num].side = savedSide;
        if (this.safeSquare(savedKing, "bot") == true) {
          result = true;
        }
        this.squares[currPiece - num].name = savedName2;
        this.squares[currPiece - num].piece = savedPiece2;
        this.squares[currPiece - num].side = savedSide2;
        this.squares[currPiece].name = savedName;
        this.squares[currPiece].piece = savedPiece;
        this.squares[currPiece].side = savedSide;
        return result;
      }
      return result;
    } 
  }

  // square is moving to that place
  // check for pawns on diagonal adjacent
  // check for bishop/queen on diagonals
  // check for rook/queen on straight
  // check for knight
  // check for king on adjacent
  // worries about the next turn
  // 1-3, 2-4, 3-2, 4-1
  private safeSquare(square: Square, side: string) {
    let currPiece = (127 - (square.y * 16) + square.x);
    let checkSquare = currPiece;
    if (side == "top") {
      // pawns
      if ((((this.squares[currPiece + 15] != null) && (((this.squares[currPiece + 15].name == "3P") && (this.turn == 1)) || ((this.squares[currPiece + 15].name == "4P") && (this.turn == 2))) && (this.squares[currPiece + 15].x < this.squares[currPiece].x))) || ((this.squares[currPiece + 17] != null)) && ((((this.squares[currPiece + 17].name == "3P") && (this.turn == 1)) || ((this.squares[currPiece + 17].name == "4P") && (this.turn == 2))) && (this.squares[currPiece + 17].x > this.squares[currPiece].x))) {
        return false;
      }
      // bishop/queen
      // find first nonempty square
      // up left
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x <= this.squares[currPiece].x) && (checkSquare >= 0)) {
        // find enemy bishop/queen
        if (((this.squares[checkSquare].name == "3B") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4B") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
          checkSquare = currPiece;
          return false;
        } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece))) {
          checkSquare = currPiece;
          break;
        }
        checkSquare -= 17;
      }
      checkSquare = currPiece;
      // up right
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x >= this.squares[currPiece].x) && (checkSquare >= 0)) {
        if (((this.squares[checkSquare].name == "3B") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4B") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
          checkSquare = currPiece;
          return false;
        } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare -= 15;
      }
      checkSquare = currPiece;
      // down left
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x <= this.squares[currPiece].x) && (checkSquare <= 127)) {
        if (((this.squares[checkSquare].name == "3B") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4B") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
          checkSquare = currPiece;
          return false;
        } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare += 15;
      }
      checkSquare = currPiece;
      // down right
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x >= this.squares[currPiece].x) && (checkSquare <= 127)) {
        if (((this.squares[checkSquare].name == "3B") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4B") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
          checkSquare = currPiece;
          return false;
        } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare += 17;
      }
      checkSquare = currPiece;
      // rook/queen
      // up
      while ((this.squares[checkSquare] != null) && (checkSquare >= 0)) {
        if (((this.squares[checkSquare].name == "3R") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4R") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
          checkSquare = currPiece;
          return false;
        } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare -= 16;
      }
      checkSquare = currPiece;
      // down
      while ((this.squares[checkSquare] != null) && (checkSquare <= 127)) {
        if (((this.squares[checkSquare].name == "3R") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4R") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
          checkSquare = currPiece;
          return false;
        } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare += 16;
      }
      checkSquare = currPiece;
      // left
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x <= this.squares[currPiece].x) && (checkSquare >= 0)) {
        if (((this.squares[checkSquare].name == "3R") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4R") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
          checkSquare = currPiece;
          return false;
        } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare -= 1;
      }
      checkSquare = currPiece;
      // right
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x >= this.squares[currPiece].x) && (checkSquare <= 127)) {
        if (((this.squares[checkSquare].name == "3R") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4R") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
          checkSquare = currPiece;
          return false;
        } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare += 1;
      }
      checkSquare = currPiece;
      // knight
      // up left
      if (((this.squares[currPiece].x - 1) >= 1) && ((this.squares[currPiece].y + 2) <= 8)) {
        if (((this.squares[currPiece - 33].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece - 33].name == "4H") && (this.turn == 2))) {
          return false;
        }
      }
      if (((this.squares[currPiece].x - 2) >= 1) && ((this.squares[currPiece].y + 1) <= 8)) {
        if (((this.squares[currPiece - 18].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece - 18].name == "4H") && (this.turn == 2))) {
          return false;
        }
      // up right
      }
      if (((this.squares[currPiece].x + 1) <= 16) && ((this.squares[currPiece].y + 2) <= 8)) {
        if (((this.squares[currPiece - 31].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece - 31].name == "4H") && (this.turn == 2))) {
          return false;
        }
      }
      if (((this.squares[currPiece].x + 2) <= 16) && ((this.squares[currPiece].y + 1) <= 8)) {
        if (((this.squares[currPiece - 14].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece - 14].name == "4H") && (this.turn == 2))) {
          return false;
        }
      // down left
      }
      if (((this.squares[currPiece].x - 1) >= 1) && ((this.squares[currPiece].y - 2) >= 1)) {
        if (((this.squares[currPiece + 31].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece + 31].name == "4H") && (this.turn == 2))) {
          return false;
        }
      }
      if (((this.squares[currPiece].x - 2) >= 1) && ((this.squares[currPiece].y - 1) >= 1)) {
        if (((this.squares[currPiece + 14].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece + 14].name == "4H") && (this.turn == 2))) {
          return false;
        }
      // down right
      }
      if (((this.squares[currPiece].x + 1) <= 16) && ((this.squares[currPiece].y - 2) >= 1)) {
        if (((this.squares[currPiece + 33].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece + 33].name == "4H") && (this.turn == 2))) {
          return false;
        }
      }
      if (((this.squares[currPiece].x + 2) <= 16) && ((this.squares[currPiece].y - 1) >= 1)) {
        if (((this.squares[currPiece + 18].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece + 18].name == "4H") && (this.turn == 2))) {
          return false;
        }
      }
      // king
      // up down left right
      if (this.squares[currPiece].y + 1 <= 8) {
        if (((this.squares[currPiece - 16].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece - 16].name == "4K") && (this.turn == 2))) {
          return false;
        }
      }
      if (this.squares[currPiece].y - 1 >= 1) {
        if (((this.squares[currPiece + 16].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece + 16].name == "4K") && (this.turn == 2))) {
          return false;
        }
      }
      if (this.squares[currPiece].x - 1 >= 1) {
        if (((this.squares[currPiece - 1].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece - 1].name == "4K") && (this.turn == 2))) {
          return false;
        }
      }
      if (this.squares[currPiece].x + 1 <= 16) {
        if (((this.squares[currPiece + 1].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece + 1].name == "4K") && (this.turn == 2))) {
          return false;
        }
      // diagonals
      }
      if ((this.squares[currPiece].x - 1 >= 1) && (this.squares[currPiece].y + 1 <= 8)) {
        if (((this.squares[currPiece - 17].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece - 17].name == "4K") && (this.turn == 2))) {
          return false;
        }
      }
      if ((this.squares[currPiece].x + 1 <= 16) && (this.squares[currPiece].y + 1 <= 8)) {
        if (((this.squares[currPiece - 15].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece - 15].name == "4K") && (this.turn == 2))) {
          return false;
        }
      }
      if ((this.squares[currPiece].x - 1 >= 1) && (this.squares[currPiece].y - 1 >= 1)) {
        if (((this.squares[currPiece + 15].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece + 15].name == "4K") && (this.turn == 2))) {
          return false;
        }
      }
      if ((this.squares[currPiece].x + 1 <= 16) && (this.squares[currPiece].y - 1 >= 1)) {
        if (((this.squares[currPiece + 17].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece + 17].name == "4K") && (this.turn == 2))) {
          return false;
        }
      }
    // else if square side == bot
    } else if (side == "bot") {
      // pawns
      if ((((this.squares[currPiece - 15] != null) && (((this.squares[currPiece - 15].name == "2P") && (this.turn == 3)) || ((this.squares[currPiece - 15].name == "1P") && (this.turn == 4))) && (this.squares[currPiece - 15].x > this.squares[currPiece].x))) || ((this.squares[currPiece - 17] != null) && ((((this.squares[currPiece - 17].name == "2P") && (this.turn == 3))) || ((this.squares[currPiece - 17].name == "1P") && (this.turn == 4))) && (this.squares[currPiece - 17].x < this.squares[currPiece].x))) {
        return false;
      }
      // bishop/queen
      // find first nonempty square
      // up left
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x <= this.squares[currPiece].x) && (checkSquare >= 0)) {
        // find enemy bishop/queen
        if (((this.squares[checkSquare].name == "2B") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1B") && (this.turn == 4)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 4))) {
          checkSquare = currPiece;
          return false;
        } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece))) {
          checkSquare = currPiece;
          break;
        }
        checkSquare -= 17;
      }
      checkSquare = currPiece;
      // up right
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x >= this.squares[currPiece].x) && (checkSquare >= 0)) {
        if (((this.squares[checkSquare].name == "2B") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1B") && (this.turn == 4)) || ((this.squares[checkSquare].name == "2Q" && (this.turn == 3))) || ((this.squares[checkSquare].name == "1Q" && (this.turn == 4)))) {
          checkSquare = currPiece;
          return false;
        } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare -= 15;
      }
      checkSquare = currPiece;
      // down left
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x <= this.squares[currPiece].x) && (checkSquare <= 127)) {
        if (((this.squares[checkSquare].name == "2B") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1B" && (this.turn == 4))) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 4))) {
          checkSquare = currPiece;
          return false;
        } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare += 15;
      }
      checkSquare = currPiece;
      // down right
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x >= this.squares[currPiece].x) && (checkSquare <= 127)) {
        if (((this.squares[checkSquare].name == "2B") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1B") && (this.turn == 4)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 4))) {
          checkSquare = currPiece;
          return false;
        } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare += 17;
      }
      checkSquare = currPiece;
      // rook/queen
      // up
      while ((this.squares[checkSquare] != null) && (checkSquare >= 0)) {
        if (((this.squares[checkSquare].name == "2R") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1R") && (this.turn == 4)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 4))) {
          checkSquare = currPiece;
          return false;
        } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare -= 16;
      }
      checkSquare = currPiece;
      // down
      while ((this.squares[checkSquare] != null) && (checkSquare <= 127)) {
        if (((this.squares[checkSquare].name == "2R") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1R") && (this.turn == 4)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 4))) {
          checkSquare = currPiece;
          return false;
        } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare += 16;
      }
      checkSquare = currPiece;
      // left
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x <= this.squares[currPiece].x) && (checkSquare >= 0)) {
        if (((this.squares[checkSquare].name == "2R") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1R") && (this.turn == 4)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 4))) {
          checkSquare = currPiece;
          return false;
        } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare -= 1;
      }
      checkSquare = currPiece;
      // right
      while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x >= this.squares[currPiece].x) && (checkSquare <= 127)) {
        if (((this.squares[checkSquare].name == "2R") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1R") && (this.turn == 4)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 4))) {
          checkSquare = currPiece;
          return false;
        } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
          checkSquare = currPiece;
          break;
        }
        checkSquare += 1;
      }
      checkSquare = currPiece;
      // knight
      // up left
      if (((this.squares[currPiece].x - 1) >= 1) && ((this.squares[currPiece].y + 2) <= 8)) {
        if (((this.squares[currPiece - 33].name == "2H") && (this.turn == 3)) || ((this.squares[currPiece - 33].name == "1H") && (this.turn == 4))) {
          return false;
        }
      }
      if (((this.squares[currPiece].x - 2) >= 1) && ((this.squares[currPiece].y + 1) <= 8)) {
        if (((this.squares[currPiece - 18].name == "2H") && (this.turn == 3)) || ((this.squares[currPiece - 18].name == "1H") && (this.turn == 4))) {
          return false;
        }
      // up right
      }
      if (((this.squares[currPiece].x + 1) <= 16) && ((this.squares[currPiece].y + 2) <= 8)) {
        if (((this.squares[currPiece - 31].name == "2H") && (this.turn == 3)) || ((this.squares[currPiece - 31].name == "1H") && (this.turn == 4))) {
          return false;
        }
      }
      if (((this.squares[currPiece].x + 2) <= 16) && ((this.squares[currPiece].y + 1) <= 8)) {
        if (((this.squares[currPiece - 14].name == "2H") && (this.turn == 3)) || ((this.squares[currPiece - 14].name == "1H") && (this.turn == 4))) {
          return false;
        }
      // down left
      }
      if (((this.squares[currPiece].x - 1) >= 1) && ((this.squares[currPiece].y - 2) >= 1)) {
        if (((this.squares[currPiece + 31].name == "2H") && (this.turn == 3)) || ((this.squares[currPiece + 31].name == "1H") && (this.turn == 4))) {
          return false;
        }
      }
      if (((this.squares[currPiece].x - 2) >= 1) && ((this.squares[currPiece].y - 1) >= 1)) {
        if (((this.squares[currPiece + 14].name == "2H") && (this.turn == 3)) || ((this.squares[currPiece + 14].name == "1H") && (this.turn == 4))) {
          return false;
        }
      // down right
      }
      if (((this.squares[currPiece].x + 1) <= 16) && ((this.squares[currPiece].y - 2) >= 1)) {
        if (((this.squares[currPiece + 33].name == "2H") && (this.turn == 3)) || ((this.squares[currPiece + 33].name == "1H") && (this.turn == 4))) {
          return false;
        }
      }
      if (((this.squares[currPiece].x + 2) <= 16) && ((this.squares[currPiece].y - 1) >= 1)) {
        if (((this.squares[currPiece + 18].name == "2H") && (this.turn == 3)) || ((this.squares[currPiece + 18].name == "1H") && (this.turn == 4))) {
          return false;
        }
      }
      // king
      // up down left right
      if (this.squares[currPiece].y + 1 <= 8) {
        if (((this.squares[currPiece - 16].name == "2K") && (this.turn == 3)) || ((this.squares[currPiece - 16].name == "1K") && (this.turn == 4))) {
          return false;
        }
      }
      if (this.squares[currPiece].y - 1 >= 1) {
        if (((this.squares[currPiece + 16].name == "2K") && (this.turn == 3)) || ((this.squares[currPiece + 16].name == "1K") && (this.turn == 4))) {
          return false;
        }
      }
      if (this.squares[currPiece].x - 1 >= 1) {
        if (((this.squares[currPiece - 1].name == "2K") && (this.turn == 3)) || ((this.squares[currPiece - 1].name == "1K") && (this.turn == 4))) {
          return false;
        }
      }
      if (this.squares[currPiece].x + 1 <= 16) {
        if (((this.squares[currPiece + 1].name == "2K") && (this.turn == 3)) || ((this.squares[currPiece + 1].name == "1K") && (this.turn == 4))) {
          return false;
        }
      // diagonals
      }
      if ((this.squares[currPiece].x - 1 >= 1) && (this.squares[currPiece].y + 1 <= 8)) {
        if (((this.squares[currPiece - 17].name == "2K") && (this.turn == 3)) || ((this.squares[currPiece - 17].name == "1K")) && (this.turn == 4)) {
          return false;
        }
      }
      if ((this.squares[currPiece].x + 1 <= 16) && (this.squares[currPiece].y + 1 <= 8)) {
        if (((this.squares[currPiece - 15].name == "2K") && (this.turn == 3)) || ((this.squares[currPiece - 15].name == "1K") && (this.turn == 4))) {
          return false;
        }
      }
      if ((this.squares[currPiece].x - 1 >= 1) && (this.squares[currPiece].y - 1 >= 1)) {
        if (((this.squares[currPiece + 15].name == "2K") && (this.turn == 3)) || ((this.squares[currPiece + 15].name == "1K") && (this.turn == 4))) {
          return false;
        }
      }
      if ((this.squares[currPiece].x + 1 <= 16) && (this.squares[currPiece].y - 1 >= 1)) {
        if (((this.squares[currPiece + 17].name == "2K") && (this.turn == 3)) || ((this.squares[currPiece + 17].name == "1K") && (this.turn == 4))) {
          return false;
        }
      }
    }
    return true;
  }

  private chooseQueen(square: { x: number; y: number; }, side: string) {
    let up = 50;
    let down = 50;
    let left = 50;
    let right = 50;
    let upLeft = 50;
    let upRight = 50;
    let downLeft = 50;
    let downRight = 50;
    
    this.squares.forEach(e => {
      let xAbs = Math.abs(square.x - e.x);
      let yAbs = Math.abs(square.y - e.y);
      let x = square.x - e.x;
      let y = square.y - e.y;
      if ((xAbs == yAbs) && e.name != '') {
        // upLeft
        if ((x > 0) && (y < 0)) {
          if (Math.abs(y) < upLeft) {
            upLeft = Math.abs(y);
          }
        }
        // upRight
        if ((x < 0) && (y < 0)) {
          if (Math.abs(y) < upRight) {
            upRight = Math.abs(y);
          }
        }
        // downLeft
        if ((x > 0) && (y > 0)) {
          if (Math.abs(x) < downLeft) {
            downLeft = Math.abs(x);
          }
        }
        // downRight
        if ((x < 0) && (y > 0)) {
          if (Math.abs(x) < downRight) {
            downRight = Math.abs(x);
          }
        }
      } else if (((e.x == square.x) || (e.y == square.y)) && e.name != '') {
        // up
        if (y < 0) {
          if (Math.abs(y) < up) {
            up = Math.abs(y);
          }
        }
        // down
        if (y > 0) {
          if (Math.abs(y) < down) {
            down = Math.abs(y);
          }
        }
        // left
        if (x > 0) {
          if (Math.abs(x) < left) {
            left = Math.abs(x);
          }
        }
        // right
        if (x < 0) {
          if (Math.abs(x) < right) {
            right = Math.abs(x);
          }
        }
      }
    })
    this.squares.forEach(e => {
      let xAbs = Math.abs(square.x - e.x);
      let yAbs = Math.abs(square.y - e.y);
      let x = square.x - e.x;
      let y = square.y - e.y;
      if (xAbs == yAbs) {
        // upLeft
        if ((x > 0) && (y < 0)) {
          if (Math.abs(y) <= upLeft) {
            if ((side == "top") && (e.side != "top")) {
              e.highlight = true;
            } else if ((side == "bot") && (e.side != "bot")) {
              e.highlight = true;
            }
          }
        }
        // upRight
        if ((x < 0) && (y < 0)) {
          if (Math.abs(y) <= upRight) {
            if ((side == "top") && (e.side != "top")) {
              e.highlight = true;
            } else if ((side == "bot") && (e.side != "bot")) {
              e.highlight = true;
            }
          }
        }
        // downLeft
        if ((x > 0) && (y > 0)) {
          if (Math.abs(x) <= downLeft) {
            if ((side == "top") && (e.side != "top")) {
              e.highlight = true;
            } else if ((side == "bot") && (e.side != "bot")) {
              e.highlight = true;
            }
          }
        }
        // downRight
        if ((x < 0) && (y > 0)) {
          if (Math.abs(x) <= downRight) {
            if ((side == "top") && (e.side != "top")) {
              e.highlight = true;
            } else if ((side == "bot") && (e.side != "bot")) {
              e.highlight = true;
            }
          }
        }
      } else if (((e.x == square.x) || (e.y == square.y)) && (((square.x - left) <= e.x) && (e.x <= (square.x + right)) && ((square.y - down) <= e.y) && (e.y <= (square.y + up)))) {
        if (side == "top") {
          // if same team, don't highlight it
          if ((e.side == "top") && ((e.x == (square.x - left)) || (e.x == (square.x + right)) || (e.y == (square.y + up) || (e.y == (square.y - down))))) {
            // do nothing
          } else {
            e.highlight = true;
          }
        // side is bot
        } else {          
          if ((e.side == "bot") && ((e.x == (square.x - left)) || (e.x == (square.x + right)) || (e.y == (square.y + up) || (e.y == (square.y - down))))) {
            // do nothing
          } else {
            e.highlight = true;
          }
        }
      }
    })
  }

  // check if piece chosen is own piece
  private ownPiece(name: string) {
    let result = false;
    if ((this.turn == 1) && ((name == "1P") || (name == "1R") || (name == "1H") || (name == "1B") || (name == "1Q") || (name == "1K"))) {
      result = true;
    } else if ((this.turn == 2) && ((name == "2P") || (name == "2R") || (name == "2H") || (name == "2B") || (name == "2Q") || (name == "2K"))) {
      result = true;
    } else if ((this.turn == 3) && ((name == "3P") || (name == "3R") || (name == "3H") || (name == "3B") || (name == "3Q") || (name == "3K"))) {
      result = true;
    } else if ((this.turn == 4) && ((name == "4P") || (name == "4R") || (name == "4H") || (name == "4B") || (name == "4Q") || (name == "4K"))) {
      result = true;
    }
    return result;
  }

  // choose new piece
  choosePiece(element: any) {

    let newPiece = null;
    if ((this.oldTurn == 1) || (this.oldTurn == 2)) {
      newPiece = this.squares[-1 + this.replacePiece.x];
    } else {
      newPiece = this.squares[111 + this.replacePiece.x];
    }
    
    if (this.oldTurn == 1) {
      if (element.textContent == "♜") {
        this.squares[111 + this.replacePiece.x].name = "1R";
        this.squares[111 + this.replacePiece.x].piece = "♖";
      } else if (element.textContent == "♞") {
        this.squares[111 + this.replacePiece.x].name = "1H";
        this.squares[111 + this.replacePiece.x].piece = "♘";
      } else if (element.textContent == "♝") {
        this.squares[111 + this.replacePiece.x].name = "1B";
        this.squares[111 + this.replacePiece.x].piece = "♗";
      } else if (element.textContent == "♛") {
        this.squares[111 + this.replacePiece.x].name = "1Q";
        this.squares[111 + this.replacePiece.x].piece = "♕";
      }
      this.namePiece = this.squares[111 + this.replacePiece.x].name;
      this.piecePiece = this.squares[111 + this.replacePiece.x].piece;
    } else if (this.oldTurn == 2) {
      if (element.textContent == "♜") {
        this.squares[111 + this.replacePiece.x].name = "2R";
        this.squares[111 + this.replacePiece.x].piece = "♖";
      } else if (element.textContent == "♞") {
        this.squares[111 + this.replacePiece.x].name = "2H";
        this.squares[111 + this.replacePiece.x].piece = "♘";
      } else if (element.textContent == "♝") {
        this.squares[111 + this.replacePiece.x].name = "2B";
        this.squares[111 + this.replacePiece.x].piece = "♗";
      } else if (element.textContent == "♛") {
        this.squares[111 + this.replacePiece.x].name = "2Q";
        this.squares[111 + this.replacePiece.x].piece = "♕";
      }
      this.namePiece = this.squares[111 + this.replacePiece.x].name;
      this.piecePiece = this.squares[111 + this.replacePiece.x].piece;
    } else if (this.oldTurn == 3) {
      if (element.textContent == "♜") {
        this.squares[-1 + this.replacePiece.x].name = "3R";
        this.squares[-1 + this.replacePiece.x].piece = "♜";
      } else if (element.textContent == "♞") {
        this.squares[-1 + this.replacePiece.x].name = "3H";
        this.squares[-1 + this.replacePiece.x].piece = "♞";
      } else if (element.textContent == "♝") {
        this.squares[-1 + this.replacePiece.x].name = "3B";
        this.squares[-1 + this.replacePiece.x].piece = "♝";
      } else if (element.textContent == "♛") {
        this.squares[-1 + this.replacePiece.x].name = "3Q";
        this.squares[-1 + this.replacePiece.x].piece = "♛";
      }
      this.namePiece = this.squares[-1 + this.replacePiece.x].name;
      this.piecePiece = this.squares[-1 + this.replacePiece.x].piece;
    } else {
      if (element.textContent == "♜") {
        this.squares[-1 + this.replacePiece.x].name = "4R";
        this.squares[-1 + this.replacePiece.x].piece = "♜";
      } else if (element.textContent == "♞") {
        this.squares[-1 + this.replacePiece.x].name = "4H";
        this.squares[-1 + this.replacePiece.x].piece = "♞";
      } else if (element.textContent == "♝") {
        this.squares[-1 + this.replacePiece.x].name = "4B";
        this.squares[-1 + this.replacePiece.x].piece = "♝";
      } else if (element.textContent == "♛") {
        this.squares[-1 + this.replacePiece.x].name = "4Q";
        this.squares[-1 + this.replacePiece.x].piece = "♛";
      }
      this.namePiece = this.squares[-1 + this.replacePiece.x].name;
      this.piecePiece = this.squares[-1 + this.replacePiece.x].piece;
    }
    this.apiService.updateGame(this.vars, this.oldPiece, this.newPiece, this.piecePiece, this.namePiece, this.sidePiece, this.playerPiece);
    this.vars = {}
    this.oldPiece = 0;
    this.newPiece = 0;
    this.choosing = false;
  }

  // checks if there's last king from parent function
  // stalemate
  // check if around king is safe and not trapped
  // noMove() then stalemate()
  private stalemate(king: any) {
    let result = false;
    let side = '';
    this.squares.forEach(e => {
      if (king == e.name) {
        king = e;
        side = e.side;
      }
    })
    // if in check, don't look at stalemate
    if (!this.safeSquare(king, side)) {
      return result;
    }
    let kingPos = (127 - (king.y * 16) + king.x);
    if ((this.turn == 1) || (this.turn == 2)) {
      if ((((this.squares[kingPos - 16] != null) && (this.squares[kingPos - 16].side != "top") && (this.safeSquare(this.squares[kingPos - 16], "top"))) || ((this.squares[kingPos + 16] != null) && (this.squares[kingPos + 16].side != "top") && (this.safeSquare(this.squares[kingPos + 16], "top"))) || ((this.squares[kingPos - 1] != null) && (this.squares[kingPos - 1].side != "top") && (this.safeSquare(this.squares[kingPos - 1], "top"))) || ((this.squares[kingPos + 1] != null) && (this.squares[kingPos + 1].side != "top") && (this.safeSquare(this.squares[kingPos + 1], "top"))) || ((this.squares[kingPos - 17] != null) && (this.squares[kingPos - 17].side != "top") && (this.safeSquare(this.squares[kingPos - 17], "top"))) || ((this.squares[kingPos + 17] != null) && (this.squares[kingPos + 17].side != "top") && (this.safeSquare(this.squares[kingPos + 17], "top"))) || ((this.squares[kingPos - 15] != null) && (this.squares[kingPos - 15].side != "top") && (this.safeSquare(this.squares[kingPos - 15], "top"))) || ((this.squares[kingPos + 15] != null) && (this.squares[kingPos + 15].side != "top") && (this.safeSquare(this.squares[kingPos + 15], "top")))) || (this.playerTrap == false)) {
        // do nothing b/c result is false
      } else {
        result = true;
      }
    } else {
      if ((((this.squares[kingPos - 16] != null) && (this.squares[kingPos - 16].side != "bot") && (this.safeSquare(this.squares[kingPos - 16], "bot"))) || ((this.squares[kingPos + 16] != null) && (this.squares[kingPos + 16].side != "bot") && (this.safeSquare(this.squares[kingPos + 16], "bot"))) || ((this.squares[kingPos - 1] != null) && (this.squares[kingPos - 1].side != "bot") && (this.safeSquare(this.squares[kingPos - 1], "bot"))) || ((this.squares[kingPos + 1] != null) && (this.squares[kingPos + 1].side != "bot") && (this.safeSquare(this.squares[kingPos + 1], "bot"))) || ((this.squares[kingPos - 17] != null) && (this.squares[kingPos - 17].side != "bot") && (this.safeSquare(this.squares[kingPos - 17], "bot"))) || ((this.squares[kingPos + 17] != null) && (this.squares[kingPos + 17].side != "bot") && (this.safeSquare(this.squares[kingPos + 17], "bot"))) || ((this.squares[kingPos - 15] != null) && (this.squares[kingPos - 15].side != "bot") && (this.safeSquare(this.squares[kingPos - 15], "bot"))) || ((this.squares[kingPos + 15] != null) && (this.squares[kingPos + 15].side != "bot") && (this.safeSquare(this.squares[kingPos + 15], "bot")))) || (this.playerTrap == false)) {
        // do nothing b/c result is false
      } else {
        result = true;
      }
    }
    if (result) {
      this.draw = true;
    }
    return result;
  }

  // no moves
  // checks if player cannot make a move
  // updates playerTrap variable
  private noMoves() {
    let result = true;
    if (this.turn == 1) {
      this.squares.forEach(e => {
        if (e.name.includes("1")) {
          if ((this.K2Cap) && (e.name != "1K")) {
            if (this.trap2(e) == false) {
              result = false;
            }
          } else if (!this.K2Cap) {
            // if at least 1 is not trapped then can move
            if (this.trap(e) == false) {
              result = false;
            }
          }
        }
      })
    } else if (this.turn == 2) {
      this.squares.forEach(e => {
        if (e.name.includes("2")) {
          if ((this.K1Cap) && (e.name != "2K")) {
            if (this.trap2(e) == false) {
              result = false;
            }
          } else if (!this.K1Cap) {
            if (this.trap(e) == false) {
              result = false;
            }
          }
        }  
      })
    } else if (this.turn == 3) {
      this.squares.forEach(e => {
        if (e.name.includes("3")) {
          if ((this.K4Cap) && (e.name != "3K")) {
            if (this.trap2(e) == false) {
              result = false;
            }
          } else if (!this.K4Cap) {
            // if at least 1 is not trapped then can move
            if (this.trap(e) == false) {
              result = false;
            }
          }
        }  
      })
    } else {
      this.squares.forEach(e => {
        if (e.name.includes("4")) {
          if ((this.K3Cap) && (e.name != "4K")) {
            if (this.trap2(e) == false) {
              result = false;
            }
          } else if (!this.K3Cap) {
            // if at least 1 is not trapped then can move
            if (this.trap(e) == false) {
              result = false;
            }
          }
        }  
      })
    }
    if (result) {
      this.playerTrap = true;
    }
    return result;
  }

  // new turn
  private newTurn() {
    let end = false;
    if (this.turn == 1) {
      this.turn = 3;
      this.vars.turn = this.turn;
      this.p1Turn = false;
      this.p3Turn = true;
      this.playerTrap = false;
    } else if (this.turn == 2) {
      this.turn = 4;
      this.vars.turn = this.turn;
      this.p2Turn = false;
      this.p4Turn = true;
      this.playerTrap = false;
    } else if (this.turn == 3) {
      this.turn = 2;
      this.vars.turn = this.turn;
      this.p2Turn = true;
      this.p3Turn = false;
      this.playerTrap = false;
    } else {
      this.turn = 1;
      this.vars.turn = this.turn;
      this.p4Turn = false;
      this.p1Turn = true;
      this.playerTrap = false;
    }
    this.noMoves();

    if (((this.K1Cap) && (this.turn == 2)) || ((this.K2Cap) && (this.turn == 1)) || ((this.K3Cap) && (this.turn == 4)) || ((this.K4Cap) && (this.turn == 3))) {
      end = this.stalemate((this.turn) + "K");
      // when other king is taken noMoves doesn't account for king so stalemate does that
      // !end means no stalemate, so king can still move
      if (!end) {
        this.playerTrap = false;
      }
    }
    
    // if player next turn can't move then go to next turn and check for no moves again
    while (this.playerTrap && !this.draw) {
      if (this.turn == 1) {
        this.turn = 3;
        this.vars.turn = this.turn;
        this.playerTrap = false;
      } else if (this.turn == 2) {
        this.turn = 4;
        this.vars.turn = this.turn;
        this.playerTrap = false;
      } else if (this.turn == 3) {
        this.turn = 2;
        this.vars.turn = this.turn;
        this.playerTrap = false;
      } else {
        this.turn = 1;
        this.vars.turn = this.turn;
        this.playerTrap = false;
      }
      this.noMoves();
      if (((this.K1Cap) && (this.turn == 2)) || ((this.K2Cap) && (this.turn == 1)) || ((this.K3Cap) && (this.turn == 4)) || ((this.K4Cap) && (this.turn == 3))) {
        end = this.stalemate((this.turn) + "K");
        if (!end) {
          this.playerTrap = false;
        }
      }
    }
    if (!end && !this.choosing) {
      this.apiService.updateGame(this.vars, this.oldPiece, this.newPiece, this.piecePiece, this.namePiece, this.sidePiece, this.playerPiece);
      this.vars = {}
      this.oldPiece = 0;
      this.newPiece = 0;
      this.choosing = false;
    }
    if (this.draw) {
      this.endGame("draw");
      this.openSnackBarDraw();
    }
  }

  // end game with a draw or kings captured
  // reset everything 
  endGame(type: string) {

    setTimeout(() => {
      this.inGame = false
      this.chosenPiece = null;
      this.replacePiece = null;
      this.choosing = false;

      this.K1Cap = false;
      this.K2Cap = false;
      this.K3Cap = false;
      this.K4Cap = false;

      this.playerTrap = false;

      this.draw = false;

      this.turn = 1;
      this.oldTurn = 1;

      this.K1 = true;
      this.R1L = true;
      this.R1R = true;
      this.K2 = true;
      this.R2L = true;
      this.R2R = true;
      this.K3 = true;
      this.R3L = true;
      this.R3R = true;
      this.K4 = true;
      this.R4L = true;
      this.R4R = true;

      this.enPassant1 = false;
      this.enPassant1X = 0;
      this.enPassant1Y = 0;
      this.enPassant2 = false;
      this.enPassant2X = 0;
      this.enPassant2Y = 0;
      this.enPassant3 = false;
      this.enPassant3X = 0;
      this.enPassant3Y = 0;
      this.enPassant4 = false;
      this.enPassant4X = 0;
      this.enPassant4Y = 0;

      this.oldPiece = 0;
      this.newPiece = 0;
      this.piecePiece = "";
      this.namePiece = "";
      this.sidePiece = "";
      this.playerPiece = 0;

      this.vars = {};

      this.squares =  JSON.parse(JSON.stringify(this.savedSquares));
    }, 5000);

    if (this.apiService.isHost && (type != '')) {
      this.apiService.endGame(type);
    }

  }

  leave() {
    this.apiService.disconnect();
    this.apiService.reset();
    this.router.navigate(['main']);
  }

  // for testing things
  // trapP3() {
  //   //console.log('ee');
  //   //40 to 47
  //   // for (let i = 40; i <= 47; i++) {
  //   // this.squares[i].name = '1P';
  //   // this.squares[i].piece = '♙';
  //   // this.squares[i].side = 'top';
  //   // this.squares[i].player = this.squares[0].player;
  //   this.K4Cap = true;
  //   this.K1Cap = true;
  //   //}

  //   // for (let i = 88; i <= 95; i++) {
  //   //   this.squares[i].name = '3P';
  //   //   this.squares[i].piece = '♙';
  //   //   this.squares[i].side = 'bot';
  //   //   this.squares[i].player = this.squares[100].player;
  //   //   }

  //   for (let i = 0; i <= 127; i++) {
  //     // if (this.squares[i].name == '2K') {
  //     //   this.squares[i].name = '';
  //     //   this.squares[i].piece = '';
  //     //   this.squares[i].side = '';
  //     //   this.squares[i].player = 0;
  //     // }
  //     // if (this.squares[i].name == '4K') {
  //     //   this.squares[i].name = '';
  //     //   this.squares[i].piece = '';
  //     //   this.squares[i].side = '';
  //     //   this.squares[i].player = 0;
  //     // }
  //     if (this.squares[i].name == '2R') {
  //       this.squares[i].name = '2Q';
  //       this.squares[i].piece = '♕';
  //     }

  //     if (this.squares[i].name.includes('3') && (this.squares[i].name != '3K')) {
  //       this.squares[i].name = '';
  //       this.squares[i].piece = '';
  //       this.squares[i].side = '';
  //       this.squares[i].player = 0;
  //     }

  //     if (this.squares[i].name.includes('1')) {
  //       this.squares[i].name = '';
  //       this.squares[i].piece = '';
  //       this.squares[i].side = '';
  //       this.squares[i].player = 0;
  //     }

  //     if (this.squares[i].name.includes('4')) {
  //       this.squares[i].name = '';
  //       this.squares[i].piece = '';
  //       this.squares[i].side = '';
  //       this.squares[i].player = 0;
  //     }
  //   }
    
  // }

}
