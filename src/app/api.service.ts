import { Injectable } from '@angular/core';

import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  lobbyId = '';
  name = '';
  socket: any;
  isHost = false;
  inGame = false;
  turn = 0;

  playerList = [{name: '', present: false, joined: false, id: ''}, {name: '', present: false, joined: false, id: ''}, {name: '', present: false, joined: false, id: ''}, {name: '', present: false, joined: false, id: ''}];

  playerTurns = [{name: 'Join', id: ''}, {name: 'Join', id: ''}, {name: 'Join', id: ''}, {name: 'Join', id: ''}];

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  disconnect() {
    this.socket.disconnect();
  }

  updateName(name: string) {
    this.name = name;
  }

  resetName() {
    this.name = '';
  }

  getName() {
    return this.name;
  }

  updateLobbyId(lobbyId: string) {
    this.lobbyId = lobbyId;
  }

  getLobbyId() {
    return this.lobbyId;
  }

  createLobby() {
    this.playerList[0].name = this.name;
    this.playerList[0].id = this.socket.id;
    this.playerList[0].present = true;
    this.socket.emit('create game', this.lobbyId);
  }

  isHostTrue() {
    this.isHost = true;
  }

  isHostFalse() {
    this.isHost = false;
  }

  getIsHost() {
    return this.isHost;
  }

  addPlayer(name: string, id: string) {
    let i = 0;
    for (let e in this.playerList) {
      if (this.playerList[i].present == false) {
        this.playerList[i].present = true;
        this.playerList[i].name = name;
        this.playerList[i].id = id;
        break;
      }
      i++;
    }
    this.socket.emit('update players', this.playerList, this.lobbyId);
    this.socket.emit('update turns', this.playerTurns, this.lobbyId);
  }

  removePlayer(id: string) {
    let i = 0;

    for (let e in this.playerList) {
      if ((this.playerList[i].present == true) && (this.playerList[i].id == id)) {
        this.playerList[i].present = false;
        this.playerList[i].name = '';
        this.playerList[i].id = '';
        this.playerList[i].joined = false;
      }
      i++;
    }

    i = 0;
    let removedTurn = false;
    for (let e in this.playerTurns) {
      if (this.playerTurns[i].id == id) {
        this.playerTurns[i].name = 'Join';
        this.playerTurns[i].id = '';
        removedTurn = true;
      }
      i++;
    }
    this.socket.emit('update players', this.playerList, this.lobbyId);
    this.socket.emit('update turns', this.playerTurns, this.lobbyId);
    if (removedTurn && this.inGame) {
      this.inGame = false;
      this.socket.emit('end game', 'leave', this.lobbyId);
    }
  }

  // unused
  leave() {
    if (!this.isHost) {
      this.socket.emit('remove player', this.socket.id, this.lobbyId);
    } else {
      // host leaves
      this.socket.emit('host left', this.lobbyId);
    }
  }

  claimTurn(spot: number, name: string, id: string) {
    if (!this.isHost) {
      this.socket.emit('claim turn', spot, name, id, this.lobbyId);
    } else {
      this.playerTurns[spot].name = name;
      this.playerTurns[spot].id = id;
      this.socket.emit('update turns', this.playerTurns, this.lobbyId);
    }
  }

  unclaimTurn(spot: number) {
    if (!this.isHost) {
      this.socket.emit('unclaim turn', spot, this.lobbyId);
    } else {
      this.playerTurns[spot].name = 'Join';
      this.playerTurns[spot].id = '';
      this.socket.emit('update turns', this.playerTurns, this.lobbyId);
    }
  }

  getInfo() {
    this.socket.emit('get info', this.lobbyId);
  }

  updateInfo() {
    this.socket.emit('update players', this.playerList, this.lobbyId);
    this.socket.emit('update turns', this.playerTurns, this.lobbyId);
  }

  startGame() {
    if (this.isHost) {
      this.socket.emit('start game', this.lobbyId);
      this.inGame = true;
    }
  }

  // reset variables
  reset() {
  this.lobbyId = '';
  this.name = '';
  this.isHost = false;
  this.inGame = false;
  this.turn = 0;
  this.playerList = [{name: '', present: false, joined: false, id: ''}, {name: '', present: false, joined: false, id: ''}, {name: '', present: false, joined: false, id: ''}, {name: '', present: false, joined: false, id: ''}];
  this.playerTurns = [{name: 'Join', id: ''}, {name: 'Join', id: ''}, {name: 'Join', id: ''}, {name: 'Join', id: ''}];
  }

  updateGame(vars: any, oldPiece: number, newPiece: number, piecePiece: string, namePiece: string, sidePiece: string, playerPiece: number) {
    this.socket.emit('update game', vars, oldPiece, newPiece, piecePiece, namePiece, sidePiece, playerPiece, this.lobbyId);
  }

  endGame(data: string) {
    this.socket.emit('end game', data, this.lobbyId);
    this.inGame = false;
  }

}

