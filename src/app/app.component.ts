
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'my-app';
}

  // // notes:
  // // stop when both kings are captured
  // // - stalemate at last king
  // //  - have a square that keeps track of legal moves/stuck?
  // //  - check if piece moves is the king in check?
  // // - castling
  // // - promote

  // // 16 x 8
  // // 1234
  // // RHBKQBHR
  // // PPPPPPPP
  // //
  // //
  // //
  // //
  // // PPPPPPPP
  // // RHBQKBHR

  // // todo did not use rows?


  // // row1 = ['1R', '1H', '1B', '1K', '1Q', '1B', '1H', '1R', '2R', '2H', '2B', '2K', '2Q', '2B', '2H', '2R'];
  // // row2 = ['1P', '1P', '1P', '1P', '1P', '1P', '1P', '1P', '2P', '2P', '2P', '2P', '2P', '2P', '2P', '2P'];
  // // row3 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  // // row4 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  // // row5 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  // // row6 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  // // row7 = ['3P', '3P', '3P', '3P', '3P', '3P', '3P', '3P', '4P', '4P', '4P', '4P', '4P', '4P', '4P', '4P'];
  // // row8 = ['3R', '3H', '3B', '3Q', '3K', '3B', '3H', '3R', '4R', '4H', '4B', '4Q', '4K', '4B', '4H', '4R'];
  // // board = [];

  // squares = [
  //   new Square('1R', '♜', 1, 8, 'top'),
  //   new Square('1H', '♞', 2, 8, 'top'),
  //   new Square('1B', '♝', 3, 8, 'top'),
  //   new Square('1K', '♚', 4, 8, 'top'),
  //   new Square('1Q', '♛', 5, 8, 'top'),
  //   new Square('1B', '♝', 6, 8, 'top'),
  //   new Square('1H', '♞', 7, 8, 'top'),
  //   new Square('1R', '♜', 8, 8, 'top'),
  //   new Square('2R', '♜', 9, 8, 'top'),
  //   new Square('2H', '♞', 10, 8, 'top'),
  //   new Square('2B', '♝', 11, 8, 'top'),
  //   new Square('2K', '♚', 12, 8, 'top'),
  //   new Square('2Q', '♛', 13, 8, 'top'),
  //   new Square('2B', '♝', 14, 8, 'top'),
  //   new Square('2H', '♞', 15, 8, 'top'),
  //   new Square('2R', '♜', 16, 8, 'top'),
  //   //
  //   new Square('1P', '♙', 1, 7, 'top'),
  //   new Square('1P', '♙', 2, 7, 'top'),
  //   new Square('1P', '♙', 3, 7, 'top'),
  //   new Square('1P', '♙', 4, 7, 'top'),
  //   new Square('1P', '♙', 5, 7, 'top'),
  //   new Square('1P', '♙', 6, 7, 'top'),
  //   new Square('1P', '♙', 7, 7, 'top'),
  //   new Square('1P', '♙', 8, 7, 'top'),
  //   new Square('2P', '♙', 9, 7, 'top'),
  //   new Square('2P', '♙', 10, 7, 'top'),
  //   new Square('2P', '♙', 11, 7, 'top'),
  //   new Square('2P', '♙', 12, 7, 'top'),
  //   new Square('2P', '♙', 13, 7, 'top'),
  //   new Square('2P', '♙', 14, 7, 'top'),
  //   new Square('2P', '♙', 15, 7, 'top'),
  //   new Square('2P', '♙', 16, 7, 'top'),
  //   //
  //   new Square('', '', 1, 6, ''),
  //   new Square('', '', 2, 6, ''),
  //   new Square('', '', 3, 6, ''),
  //   new Square('', '', 4, 6, ''),
  //   new Square('', '', 5, 6, ''),
  //   new Square('', '', 6, 6, ''),
  //   new Square('', '', 7, 6, ''),
  //   new Square('', '', 8, 6, ''),
  //   new Square('', '', 9, 6, ''),
  //   new Square('', '', 10, 6, ''),
  //   new Square('', '', 11, 6, ''),
  //   new Square('', '', 12, 6, ''),
  //   new Square('', '', 13, 6, ''),
  //   new Square('', '', 14, 6, ''),
  //   new Square('', '', 15, 6, ''),
  //   new Square('', '', 16, 6, ''),
  //   //
  //   new Square('', '', 1, 5, ''),
  //   new Square('', '', 2, 5, ''),
  //   new Square('', '', 3, 5, ''),
  //   new Square('', '', 4, 5, ''),
  //   new Square('', '', 5, 5, ''),
  //   new Square('', '', 6, 5, ''),
  //   new Square('', '', 7, 5, ''),
  //   new Square('', '', 8, 5, ''),
  //   new Square('', '', 9, 5, ''),
  //   new Square('', '', 10, 5, ''),
  //   new Square('', '', 11, 5, ''),
  //   new Square('', '', 12, 5, ''),
  //   new Square('', '', 13, 5, ''),
  //   new Square('', '', 14, 5, ''),
  //   new Square('', '', 15, 5, ''),
  //   new Square('', '', 16, 5, ''),
  //   //
  //   new Square('', '', 1, 4, ''),
  //   new Square('', '', 2, 4, ''),
  //   new Square('', '', 3, 4, ''),
  //   new Square('', '', 4, 4, ''),
  //   new Square('', '', 5, 4, ''),
  //   new Square('', '', 6, 4, ''),
  //   new Square('', '', 7, 4, ''),
  //   new Square('', '', 8, 4, ''),
  //   new Square('', '', 9, 4, ''),
  //   new Square('', '', 10, 4, ''),
  //   new Square('', '', 11, 4, ''),
  //   new Square('', '', 12, 4, ''),
  //   new Square('', '', 13, 4, ''),
  //   new Square('', '', 14, 4, ''),
  //   new Square('', '', 15, 4, ''),
  //   new Square('', '', 16, 4, ''),
  //   //
  //   new Square('', '', 1, 3, ''),
  //   new Square('', '', 2, 3, ''),
  //   new Square('', '', 3, 3, ''),
  //   new Square('', '', 4, 3, ''),
  //   new Square('', '', 5, 3, ''),
  //   new Square('', '', 6, 3, ''),
  //   new Square('', '', 7, 3, ''),
  //   new Square('', '', 8, 3, ''),
  //   new Square('', '', 9, 3, ''),
  //   new Square('', '', 10, 3, ''),
  //   new Square('', '', 11, 3, ''),
  //   new Square('', '', 12, 3, ''),
  //   new Square('', '', 13, 3, ''),
  //   new Square('', '', 14, 3, ''),
  //   new Square('', '', 15, 3, ''),
  //   new Square('', '', 16, 3, ''),
  //   //
  //   new Square('3P', '♙', 1, 2, 'bot'),
  //   new Square('3P', '♙', 2, 2, 'bot'),
  //   new Square('3P', '♙', 3, 2, 'bot'),
  //   new Square('3P', '♙', 4, 2, 'bot'),
  //   new Square('3P', '♙', 5, 2, 'bot'),
  //   new Square('3P', '♙', 6, 2, 'bot'),
  //   new Square('3P', '♙', 7, 2, 'bot'),
  //   new Square('3P', '♙', 8, 2, 'bot'),
  //   new Square('4P', '♙', 9, 2, 'bot'),
  //   new Square('4P', '♙', 10, 2, 'bot'),
  //   new Square('4P', '♙', 11, 2, 'bot'),
  //   new Square('4P', '♙', 12, 2, 'bot'),
  //   new Square('4P', '♙', 13, 2, 'bot'),
  //   new Square('4P', '♙', 14, 2, 'bot'),
  //   new Square('4P', '♙', 15, 2, 'bot'),
  //   new Square('4P', '♙', 16, 2, 'bot'),
  //   //
  //   new Square('3R', '♖', 1, 1, 'bot'),
  //   new Square('3H', '♘', 2, 1, 'bot'),
  //   new Square('3B', '♗', 3, 1, 'bot'),
  //   new Square('3Q', '♕', 4, 1, 'bot'),
  //   new Square('3K', '♔', 5, 1, 'bot'),
  //   new Square('3B', '♗', 6, 1, 'bot'),
  //   new Square('3H', '♘', 7, 1, 'bot'),
  //   new Square('3R', '♖', 8, 1, 'bot'),
  //   new Square('4R', '♖', 9, 1, 'bot'),
  //   new Square('4H', '♘', 10, 1, 'bot'),
  //   new Square('4B', '♗', 11, 1, 'bot'),
  //   new Square('4Q', '♕', 12, 1, 'bot'),
  //   new Square('4K', '♔', 13, 1, 'bot'),
  //   new Square('4B', '♗', 14, 1, 'bot'),
  //   new Square('4H', '♘', 15, 1, 'bot'),
  //   new Square('4R', '♖', 16, 1, 'bot')
  // ];

  // savedSquares = JSON.parse(JSON.stringify(this.squares));

  // mySquare = this.squares[0];

  // // todo not used?
  // ngOnInit():void{
  //   // this.board[0] = this.row1;
  //   // this.board[1] = this.row2;
  //   // this.board[2] = this.row3;
  //   // this.board[3] = this.row4;
  //   // this.board[4] = this.row5;
  //   // this.board[5] = this.row6;
  //   // this.board[6] = this.row7;
  //   // this.board[7] = this.row8;
  //   // console.log(this.board[0][0]);
  // }

  // // global vars
  // chosenPiece : any = null;
  // replacePiece : any = null;
  // choosing = false;

  // // last king
  // K1Cap = false;
  // K2Cap = false;
  // K3Cap = false;
  // K4Cap = false;

  // // K1 or K2
  // //lastKingTop = null;
  // // K3 or K4
  // //lastKingBot = null;

  // // current player/last king can't move
  // playerTrap = false;
  // kingTrap = false;
  // // stalemate
  // draw = false;

  // // turn
  // turn = 1;
  // oldTurn = 1;

  // // first move
  // K1 = true;
  // R1L = true;
  // R1R = true;
  // K2 = true;
  // R2L = true;
  // R2R = true;
  // K3 = true;
  // R3L = true;
  // R3R = true;
  // K4 = true;
  // R4L = true;
  // R4R = true;

  // // en passant
  // enPassant1 = false;
  // enPassant1X = 0;
  // enPassant1Y = 0;
  // enPassant2 = false;
  // enPassant2X = 0;
  // enPassant2Y = 0;
  // enPassant3 = false;
  // enPassant3X = 0;
  // enPassant3Y = 0;
  // enPassant4 = false;
  // enPassant4X = 0;
  // enPassant4Y = 0;
  // // check if pawn was at starting x to see if it's the first move
  // // if side = top / side = bot, etc.
  // public change(square: any):void{
  //   let replacedPiece = "";
  //   // move piece
  //   if ((this.chosenPiece != null) && (square.highlight == true)) {
  //     // check if own piece
  //     if (this.ownPiece(this.chosenPiece.name) == false) {
  //       return;
  //     }
  //     // if pawn is moved to the end then choose piece to replace it
  //     if (((this.chosenPiece.name == "1P") || (this.chosenPiece.name == "2P")) && (square.y == 1)) {
  //       this.choosing = true;
  //       this.replacePiece = square;
  //       this.oldTurn = this.turn;
  //     } else if (((this.chosenPiece.name == "3P") || (this.chosenPiece.name == "4P")) && (square.y == 8)) {
  //       this.choosing = true;
  //       this.replacePiece = square;
  //       this.oldTurn = this.turn;
  //     }
      
  //     // this.chosenPiece is the old place
  //     // choose a new square and move to that place
  //     if ((this.chosenPiece.x != square.x) || (this.chosenPiece.y != square.y)) {
  //       if ((this.enPassant1 == true) && (this.chosenPiece.name == ("1P"))) {
  //         this.enPassant1 = false;
  //       } else if ((this.enPassant2 == true) && (this.chosenPiece.name == ("2P"))) {
  //         this.enPassant2 = false;
  //       } else if ((this.enPassant3 == true) && (this.chosenPiece.name == ("3P"))) {
  //         this.enPassant3 = false;
  //       } else if ((this.enPassant4 == true) && (this.chosenPiece.name == ("4P"))) {
  //         this.enPassant4 = false;
  //       }
  //       // if pawn is moved 2 from start
  //       if ((this.chosenPiece.side == "top") && (this.chosenPiece.y == 7) && (square.y == 5)) {
  //         if (this.chosenPiece.name == ("1P")) {
  //           this.enPassant1 = true;
  //           this.enPassant1X = square.x;
  //           this.enPassant1Y = 6;
  //         } else if (this.chosenPiece.name == ("2P")) {
  //           this.enPassant2 = true;
  //           this.enPassant2X = square.x;
  //           this.enPassant2Y = 6;
  //         }
  //       } else if ((this.chosenPiece.side == "bot") && (this.chosenPiece.y == 2) && (square.y == 4)) {
  //         if (this.chosenPiece.name == ("3P")) {
  //           this.enPassant3 = true;
  //           this.enPassant3X = square.x;
  //           this.enPassant3Y = 3;
  //         } else if (this.chosenPiece.name == ("4P")) {
  //           this.enPassant4 = true;
  //           this.enPassant4X = square.x;
  //           this.enPassant4Y = 3;
  //         }
  //       }
  //       if (this.chosenPiece.name == "1K") {
  //         // goes left
  //         if ((this.chosenPiece.x - square.x) == 2) {
  //           this.squares[2].name = this.squares[0].name;
  //           this.squares[2].piece = this.squares[0].piece;
  //           this.squares[2].side = this.squares[0].side;
  //           this.squares[0].name = '';
  //           this.squares[0].piece = '';
  //           this.squares[0].side = '';
  //           this.R1L = false;
  //         // goes right
  //         } else if ((this.chosenPiece.x - square.x) == -2) {
  //           // empty, rook (empty becomes rook)
  //           this.squares[4].name = this.squares[7].name;
  //           this.squares[4].piece = this.squares[7].piece;
  //           this.squares[4].side = this.squares[7].side;
  //           this.squares[7].name = '';
  //           this.squares[7].piece = '';
  //           this.squares[7].side = '';
  //           this.R1R = false;
  //         }
  //         this.K1 = false;
  //       } else if (this.chosenPiece.name == "2K") {
  //         // goes left
  //         if ((this.chosenPiece.x - square.x) == 2) {
  //           this.squares[10].name = this.squares[8].name;
  //           this.squares[10].piece = this.squares[8].piece;
  //           this.squares[10].side = this.squares[8].side;
  //           this.squares[8].name = '';
  //           this.squares[8].piece = '';
  //           this.squares[8].side = '';
  //           this.R2L = false;
  //         // goes right
  //         } else if ((this.chosenPiece.x - square.x) == -2) {
  //           this.squares[4].name = this.squares[7].name;
  //           this.squares[4].piece = this.squares[7].piece;
  //           this.squares[4].side = this.squares[7].side;
  //           this.squares[7].name = '';
  //           this.squares[7].piece = '';
  //           this.squares[7].side = '';
  //           this.R2R = false;
  //         }
  //         this.K2 = false;
  //       } else if (this.chosenPiece.name == "3K") {
  //         // goes left
  //         if ((this.chosenPiece.x - square.x) == 2) {
  //           this.squares[115].name = this.squares[112].name;
  //           this.squares[115].piece = this.squares[112].piece;
  //           this.squares[115].side = this.squares[112].side;
  //           this.squares[112].name = '';
  //           this.squares[112].piece = '';
  //           this.squares[112].side = '';
  //           this.R3L = false;
  //         // goes right
  //         } else if ((this.chosenPiece.x - square.x) == -2) {
  //           this.squares[117].name = this.squares[119].name;
  //           this.squares[117].piece = this.squares[119].piece;
  //           this.squares[117].side = this.squares[119].side;
  //           this.squares[119].name = '';
  //           this.squares[119].piece = '';
  //           this.squares[119].side = '';
  //           this.R3R = false;
  //         }
  //         this.K3 = false;
  //       } else if (this.chosenPiece.name == "4K") {
  //         // goes left
  //         if ((this.chosenPiece.x - square.x) == 2) {
  //           this.squares[123].name = this.squares[120].name;
  //           this.squares[123].piece = this.squares[120].piece;
  //           this.squares[123].side = this.squares[120].side;
  //           this.squares[120].name = '';
  //           this.squares[120].piece = '';
  //           this.squares[120].side = '';
  //         // goes right
  //         } else if ((this.chosenPiece.x - square.x) == -2) {
  //           this.squares[125].name = this.squares[127].name;
  //           this.squares[125].piece = this.squares[127].piece;
  //           this.squares[125].side = this.squares[127].side;
  //           this.squares[127].name = '';
  //           this.squares[127].piece = '';
  //           this.squares[127].side = '';
  //           this.R4R = false;
  //         }
  //         this.K4 = false;
  //       // check if rook moved
  //       } else if (this.chosenPiece == this.squares[0]) {
  //         this.R1L = false;
  //       } else if (this.chosenPiece == this.squares[7]) {
  //         this.R1R = false;
  //       } else if (this.chosenPiece == this.squares[8]) {
  //         this.R2L = false;
  //       } else if (this.chosenPiece == this.squares[15]) {
  //         this.R2R = false;
  //       } else if (this.chosenPiece == this.squares[112]) {
  //         this.R3L = false;
  //       } else if (this.chosenPiece == this.squares[119]) {
  //         this.R3R = false;
  //       } else if (this.chosenPiece == this.squares[120]) {
  //         this.R4L = false;
  //       } else if (this.chosenPiece == this.squares[127]) {
  //         this.R4R = false;
  //       }
  //       replacedPiece = square.name;
  //       square.name = this.chosenPiece.name;
  //       square.piece = this.chosenPiece.piece;
  //       square.side = this.chosenPiece.side;
  //       this.chosenPiece.name = '';
  //       this.chosenPiece.piece = '';
  //       this.chosenPiece.side = '';
  //       // todo replaced piece 
  //       // if it's k1, k2, etc. then k1Cap = true, etc.
  //       // also check for endgame
  //       if (replacedPiece == "1K") {
  //         if (this.K2Cap == true) {
  //           this.endGame("win");
  //         }
  //         this.K1Cap = true;
  //       } else if (replacedPiece == "2K") {
  //         if (this.K1Cap == true) {
  //           this.endGame("win");
  //         }
  //         this.K2Cap = true;
  //       } else if (replacedPiece == "3K") {
  //         if (this.K4Cap == true) {
  //           this.endGame("win");
  //         }
  //         this.K3Cap = true;
  //       } else if (replacedPiece == "4K") {
  //         if (this.K3Cap == true) {
  //           this.endGame("win");
  //         }
  //         this.K4Cap = true;
  //       }
  //     }
  //     // unhighlight and check if pawn captured did leap
  //     // pawn that did leap was captured normally or enpassant
  //     // square is new place
  //     for (let e of this.squares) {

  //       if (square.side == "top") {
  //         if (this.enPassant3 == true) {
            
  //           // captured pawn that moved 2
  //           if ((replacedPiece == "3P") && (square.x == this.enPassant3X) && (square.y == (this.enPassant3Y + 1))) {
  //             this.enPassant3 = false;
  //           }
  //           // pawn did enpassant
  //           if ((replacedPiece == "") && (square.x == this.enPassant3X) && (square.y == this.enPassant3Y)) {
  //             if ((e.x == this.enPassant3X) && (e.y == (this.enPassant3Y + 1))) {
  //               e.name = '';
  //               e.piece = '';
  //               e.side = '';
  //               this.enPassant3 = false;
  //             }
  //           }
  //         }
  //         if (this.enPassant4 == true) {
  //           // captured pawn that moved 2
  //           if ((replacedPiece == "4P") && (square.x == this.enPassant4X) && (square.y == (this.enPassant4Y + 1))) {
  //             this.enPassant4 = false;
  //           }
  //           // pawn did enpassant
  //           if ((replacedPiece == "") && (square.x == this.enPassant4X) && (square.y == (this.enPassant4Y))) {
  //             if ((e.x == this.enPassant4X) && (e.y == (this.enPassant4Y + 1))) {
  //               e.name = '';
  //               e.piece = '';
  //               e.side = '';
  //               this.enPassant4 = false;
  //             }
  //           }
  //         }
  //       } else if (square.side == "bot") {
  //         if (this.enPassant1 == true) {
  //           // captured pawn that moved 2
  //           if ((replacedPiece == "1P") && (square.x == this.enPassant1X) && (square.y == (this.enPassant1Y - 1))) {
  //             this.enPassant1 = false;
  //           }
  //           // pawn did enpassant
  //           if ((replacedPiece == "") && (square.x == this.enPassant1X) && (square.y == (this.enPassant1Y))) {
  //             if ((e.x == this.enPassant1X) && (e.y == (this.enPassant1Y - 1))) {
  //               e.name = '';
  //               e.piece = '';
  //               e.side = '';
  //               this.enPassant1 = false;
  //             }
  //           }
  //         }
  //         if (this.enPassant2 == true) {
  //           // captured pawn that moved 2
  //           if ((replacedPiece == "2P") && (square.x == this.enPassant2X) && (square.y == (this.enPassant2Y - 1))) {
  //             this.enPassant2 = false;
  //           }
  //           // pawn did enpassant
  //           if ((replacedPiece == "") && (square.x == this.enPassant2X) && (square.y == (this.enPassant2Y))) {
  //             if ((e.x == this.enPassant2X) && (e.y == (this.enPassant2Y - 1))) {
  //               e.name = '';
  //               e.piece = '';
  //               e.side = '';
  //               this.enPassant2 = false;
  //             }
  //           }
  //         }
  //       }
  //       if (e.highlight == true) {
  //         e.highlight = false;
  //       }
  //     }
  //     // todo don't need old turn?
  //     // change turn
  //     this.newTurn()
  //     this.chosenPiece = null;
  //     return;
  //   }
  //   console.log("name: " + square.name);
  //   console.log("piece: " + square.piece);
  //   console.log("x: " + square.x);
  //   console.log("y: " + square.y);
  //   console.log("side: " + square.side);
  //   this.chosenPiece = square;
  //   console.log(square.piece);

  //   for (let e of this.squares) {
  //     if (e.highlight == true) {
  //       e.highlight = false;
  //     }
  //   }
  //   // choose piece
  //   for (let e of this.squares) {
  //     if (e.x == square.x && e.y == square.y && e.name != "") {
  //       e.highlight = true;
  //       // 1P or 2P, etc. means pawns
  //       if ((square.name == "1P") || (square.name == "2P")) {
  //         this.choosePawn(square, "top");
  //       } else if ((square.name == "3P") || (square.name == "4P")) {
  //         this.choosePawn(square, "bot");
  //       } else if ((square.name == "1R") || (square.name == "2R")) {
  //         this.chooseRook(square, "top");
  //       } else if ((square.name == "3R") || (square.name == "4R")) {
  //         this.chooseRook(square, "bot");
  //       } else if ((square.name == "1H") || (square.name == "2H")) {
  //         this.chooseHorse(square, "top");
  //       } else if ((square.name == "3H") || (square.name == "4H")) {
  //         this.chooseHorse(square, "bot");
  //       } else if ((square.name == "1B") || (square.name == "2B")) {
  //         this.chooseBishop(square, "top");
  //       } else if ((square.name == "3B") || (square.name == "4B")) {
  //         this.chooseBishop(square, "bot");
  //       } else if ((square.name == "1K") || (square.name == "2K")) {
  //         this.chooseKing(square, "top");
  //       } else if ((square.name == "3K") || (square.name == "4K")) {
  //         this.chooseKing(square, "bot");
  //       } else if ((square.name == "1Q") || (square.name == "2Q")) {
  //         this.chooseQueen(square, "top");
  //       } else if ((square.name == "3Q") || (square.name == "4Q")) {
  //         this.chooseQueen(square, "bot");
  //       }
  //     } 
  //   }

  // }

  // // todo turns, pawn at end,// stalemate, skip, end game
  
  // // todo add/fix
  // // fix to make it not jump over (weird impl)
  // private choosePawn(square: { y: number; x: number; }, side: string) {
  //   // Find which squares to highlight
  //   let square1: number;
  //   let square2: number; 
  //   let square1Highlight = false;
  //   if (side == "top") {
  //     square1 = square.y - 1;
  //     square2 = square.y - 2;
  //   } else if (side == "bot") {
  //     square1 = square.y + 1;
  //     square2 = square.y + 2;
  //   }
    
  //   this.squares.forEach(e => {
  //     if ((e.x == square.x) && (e.y == square1)) {
  //       if ((side == "top") && ((e.side != "top") && (e.side != "bot"))) {
  //         e.highlight = true;
  //         square1Highlight = true;
  //       } else if ((side == "bot") && ((e.side != "bot") && (e.side != "top"))) {
  //         e.highlight = true;
  //         square1Highlight = true;
  //       }
  //     }

  //     if ((e.x == square.x) && (e.y == square2)) {
  //       if ((side == "top") && ((e.side != "top") && (e.side != "bot")) && (square.y == 7) && (square1Highlight)) {
  //         console.log("hi");
  //         e.highlight = true;
  //       } else if ((side == "bot") && ((e.side != "bot") && (e.side != "top")) && (square.y == 2)) {
  //         let square1 = (127 - (e.y * 16) + e.x + 16);
  //         if (this.squares[square1].side == "") {
  //           e.highlight = true;
  //           //this.squares[square1].highlight = true;
  //         }
  //       }
  //     }
  //     // highlight enpassant
  //     if (side == "top") {
  //       if (((e.x == (square.x + 1)) || (e.x == (square.x - 1))) && (e.y == (square.y - 1))) {
  //         if ((this.enPassant3 == true) && ((e.x == this.enPassant3X) && (e.y == this.enPassant3Y))) {
  //           e.highlight = true;
  //         } else if ((this.enPassant4 == true) && ((e.x == this.enPassant4X) && (e.y == this.enPassant4Y))) {
  //           e.highlight = true;
  //         }
  //         if (e.side == "bot") {
  //           e.highlight = true;
  //         }
  //       }
  //     } else {
  //       if (((e.x == (square.x + 1)) || (e.x == (square.x - 1))) && (e.y == (square.y + 1))) {
  //         if ((this.enPassant1 == true) && ((e.x == this.enPassant1X) && (e.y == this.enPassant1Y))) {
  //           e.highlight = true;
  //         } else if ((this.enPassant2 == true) && ((e.x == this.enPassant2X) && (e.y == this.enPassant2Y))) {
  //           e.highlight = true;
  //         }
  //         if (e.side == "top") {
  //           e.highlight = true;
  //         }
  //       }
  //     }
  //   })
  // }
  
  // private chooseRook(square: { x: number; y: number; }, side: string) {
  //   // closest to up, down, left, right
  //   let up = 50;
  //   let down = 50;
  //   let left = 50;
  //   let right = 50;
  //   // find closest things
  //   // check if same team or not
  //   this.squares.forEach(e => {
  //     let x = square.x - e.x;
  //     let y = square.y - e.y;
  //     if (e.name != '') {
  //       // up
  //       if ((y < 0) && (e.x == square.x)) {
  //         if (Math.abs(y) < up) {
  //           up = Math.abs(y);
  //         }
  //       }
  //       // down
  //       if ((y > 0) && (e.x == square.x)) {
  //         if (Math.abs(y) < down) {
  //           down = Math.abs(y);
  //         }
  //       }
  //       // left
  //       if ((x > 0) && (e.y == square.y)) {
  //         if (Math.abs(x) < left) {
  //           left = Math.abs(x);
  //         }
  //       }
  //       // right
  //       if ((x < 0) && (e.y == square.y)) {
  //         if (Math.abs(x) < right) {
  //           right = Math.abs(x);
  //         }
  //       }
  //     }
  //   })
  //   // highlight based on closest things 
  //   this.squares.forEach(e => {
  //     if (((e.x == square.x) || (e.y == square.y)) && (((square.x - left) <= e.x) && (e.x <= (square.x + right)) && ((square.y - down) <= e.y) && (e.y <= (square.y + up)))) {
  //       if (side == "top") {
  //         // if same team, don't highlight it
  //         if ((e.side == "top") && ((e.x == (square.x - left)) || (e.x == (square.x + right)) || (e.y == (square.y + up) || (e.y == (square.y - down))))) {
  //           // do nothing
  //         } else {
  //           e.highlight = true;
  //         }
  //       // side is bot
  //       } else {          
  //         if ((e.side == "bot") && ((e.x == (square.x - left)) || (e.x == (square.x + right)) || (e.y == (square.y + up) || (e.y == (square.y - down))))) {
  //           // do nothing
  //         } else {
  //           e.highlight = true;
  //         }
  //       }
  //     }
  //   })
  // }

  // private chooseHorse(square: { x: number; y: number; }, side: string) {
  //   this.squares.forEach(e => {
  //     // broken up to 2 if statements
  //     if (((e.x == square.x + 1) || (e.x == square.x - 1)) && ((e.y == square.y + 2) || e.y == square.y - 2)) {
  //       if ((side == "top") && e.side != "top") {
  //         e.highlight = true;
  //       } else if ((side == "bot") && e.side != "bot") {
  //         e.highlight = true;
  //       }
  //     }
  //     if (((e.x == square.x + 2) || (e.x == square.x - 2)) && ((e.y == square.y + 1) || e.y == square.y - 1)) {
  //       if ((side == "top") && e.side != "top") {
  //         e.highlight = true;
  //       } else if ((side == "bot") && e.side != "bot") {
  //         e.highlight = true;
  //       }
  //     }
  //   }) 
  // }

  // private chooseBishop(square: { x: number; y: number; }, side: string) {
  //   // closest to upLeft, upRight, downLeft, downRight
  //   let upLeft = 50;
  //   let upRight = 50;
  //   let downLeft = 50;
  //   let downRight = 50;
  //   // find closest things
  //   // check if same team or not
  //   this.squares.forEach(e => {
  //     let xAbs = Math.abs(square.x - e.x);
  //     let yAbs = Math.abs(square.y - e.y);
  //     let x = square.x - e.x;
  //     let y = square.y - e.y;
  //     if ((xAbs == yAbs) && (e.name != '')) {
  //       // upLeft
  //       if ((x > 0) && (y < 0)) {
  //         if (Math.abs(y) < upLeft) {
  //           upLeft = Math.abs(y);
  //         }
  //       }
  //       // upRight
  //       if ((x < 0) && (y < 0)) {
  //         if (Math.abs(y) < upRight) {
  //           upRight = Math.abs(y);
  //         }
  //       }
  //       // downLeft
  //       if ((x > 0) && (y > 0)) {
  //         if (Math.abs(x) < downLeft) {
  //           downLeft = Math.abs(x);
  //         }
  //       }
  //       // downRight
  //       if ((x < 0) && (y > 0)) {
  //         if (Math.abs(x) < downRight) {
  //           downRight = Math.abs(x);
  //         }
  //       }
  //     }
  //   })
  //   this.squares.forEach(e => {
  //     let xAbs = Math.abs(square.x - e.x);
  //     let yAbs = Math.abs(square.y - e.y);
  //     let x = square.x - e.x;
  //     let y = square.y - e.y;
  //     if (xAbs == yAbs) {
  //       // upLeft
  //       if ((x > 0) && (y < 0)) {
  //         if (Math.abs(y) <= upLeft) {
  //           if ((side == "top") && (e.side != "top")) {
  //             e.highlight = true;
  //           } else if ((side == "bot") && (e.side != "bot")) {
  //             e.highlight = true;
  //           }
  //         }
  //       }
  //       // upRight
  //       if ((x < 0) && (y < 0)) {
  //         if (Math.abs(y) <= upRight) {
  //           if ((side == "top") && (e.side != "top")) {
  //             e.highlight = true;
  //           } else if ((side == "bot") && (e.side != "bot")) {
  //             e.highlight = true;
  //           }
  //         }
  //       }
  //       // downLeft
  //       if ((x > 0) && (y > 0)) {
  //         if (Math.abs(x) <= downLeft) {
  //           if ((side == "top") && (e.side != "top")) {
  //             e.highlight = true;
  //           } else if ((side == "bot") && (e.side != "bot")) {
  //             e.highlight = true;
  //           }
  //         }
  //       }
  //       // downRight
  //       if ((x < 0) && (y > 0)) {
  //         if (Math.abs(x) <= downRight) {
  //           if ((side == "top") && (e.side != "top")) {
  //             e.highlight = true;
  //           } else if ((side == "bot") && (e.side != "bot")) {
  //             e.highlight = true;
  //           }
  //         }
  //       }
  //     }
  //   })
  // }

  // private chooseKing(square: { name: any; x: number; y: number; }, side: string) {
  //   //console.log();
  //   let king = square.name;
  //   // todo don't need left and right empty?
  //   let leftEmpty = false;
  //   let rightEmpty = false;
  //   // todo make things false when castling
  //   // when castling check if these squares are safe:
  //   // K1: Left: 1 2 3 Right: 3 4 5
  //   // K2: etc.
  //   // K3: etc.
  //   // K4: etc.
  //   // check if left or right is empty between king and rook
  //   if ((king == "1K") && (this.K1 == true)) {
  //     if ((this.squares[1].name == "") && (this.squares[2].name == "") && (this.R1L == true)) {
  //       leftEmpty = true;
  //       // todo check if safe
  //       if (this.safeSquare(this.squares[1], "top") && this.safeSquare(this.squares[2], "top") && this.safeSquare(this.squares[3], "top")) {
  //        this.squares[1].highlight = true;
  //       }
  //     }
  //     if ((this.squares[4].name == "") && (this.squares[5].name == "") && (this.squares[6].name == "") && (this.R1R == true)) {
  //       rightEmpty = true;
  //       if (this.safeSquare(this.squares[3], "top") && this.safeSquare(this.squares[4], "top") && this.safeSquare(this.squares[5], "top")) {
  //         this.squares[5].highlight = true;
  //       }
  //     }
  //   } else if ((king == "2K") && (this.K2 == true)) {
  //     if ((this.squares[9].name == "") && (this.squares[10].name == "") && (this.R2L == true)) {
  //       leftEmpty = true;
  //       if (this.safeSquare(this.squares[9], "top") && this.safeSquare(this.squares[10], "top") && this.safeSquare(this.squares[11], "top")) {
  //         this.squares[9].highlight = true;
  //       }
  //     }
  //     if ((this.squares[12].name == "") && (this.squares[13].name == "") && (this.squares[14].name == "") && (this.R2R == true)) {
  //       rightEmpty = true;
  //       if (this.safeSquare(this.squares[11], "top") && this.safeSquare(this.squares[12], "top") && this.safeSquare(this.squares[13], "top")) {
  //         this.squares[13].highlight = true;
  //       }
  //     }
  //   } else if ((king == "3K") && (this.K3 == true)) {
  //     if ((this.squares[117].name == "") && (this.squares[118].name == "") && (this.R3R == true)) {
  //       rightEmpty = true;
  //       if (this.safeSquare(this.squares[116], "bot") && this.safeSquare(this.squares[117], "bot") && this.safeSquare(this.squares[118], "bot")) {
  //         this.squares[118].highlight = true;
  //       }
  //     }
  //     if ((this.squares[113].name == "") && (this.squares[114].name == "") && (this.squares[115].name == "") && (this.R3L == true)) {
  //       leftEmpty = true;
  //       if (this.safeSquare(this.squares[114], "bot") && this.safeSquare(this.squares[115], "bot") && this.safeSquare(this.squares[116], "bot")) {
  //         this.squares[114].highlight = true;
  //       }
        
  //     }
  //   } else if ((king == "4K") && (this.K4 == true)) {
  //     if ((this.squares[125].name == "") && (this.squares[126].name == "") && (this.R4R == true)) {
  //       rightEmpty = true;
  //       if (this.safeSquare(this.squares[124], "bot") && this.safeSquare(this.squares[125], "bot") && this.safeSquare(this.squares[126], "bot")) {
  //         this.squares[126].highlight = true;
  //       }
  //     }
  //     if ((this.squares[121].name == "") && (this.squares[122].name == "") && (this.squares[123].name == "") && (this.R4L == true)) {
  //       leftEmpty = true;
  //       if (this.safeSquare(this.squares[122], "bot") && this.safeSquare(this.squares[123], "bot") && this.safeSquare(this.squares[124], "bot")) {
  //         this.squares[122].highlight = true;
  //       }
  //     }
  //   }
  //   this.squares.forEach(e => {
  //     let x = Math.abs(square.x - e.x);
  //     let y = Math.abs(square.y - e.y);
  //     if ((x < 2) && (y < 2)) {
  //       if ((side == "top") && e.side != "top") {
  //         e.highlight = true;
  //       } else if ((side == "bot") && e.side != "bot") {
  //         e.highlight = true;
  //       }
  //     }

  //   })
  // }

  // // stalemate
  // // when can't make a move b/c it will make king in check
  // // when any move makes king be in check
  // // do when there's 1 king left
  // // when can only move king that makes it be in check
  // // if can't make a move and can only move king to check then stalemate
  // // check for can't move by looking at trapped pieces for that player's turn

  // // trapped
  // // checks if any piece can move
  // // if cannot move any and no stalemate/check then skip turn
  // // check if moving away makes king be in check (only if there's 1 king left)

  // // todo fixs
  // private trap(square: Square) {
  //   let currPiece = (127 - (square.y * 16) + square.x);
  //   let savedName = square.name;
  //   let savedPiece = square.piece;
  //   let savedSide = square.side;
  //   let savedKing: any = null;
    
  //   let result = false;

  //   this.squares[currPiece].name = "";
  //   this.squares[currPiece].piece = "";
  //   this.squares[currPiece].side = "";

  //   // check if moving away makes king be in check first
  //   if (this.K1Cap) {
  //     this.squares.forEach(e => {
  //       if (e.name == "2K") {
  //         savedKing = e;
  //       }
  //     })
  //     if (this.safeSquare(savedKing, "top") == false) {
  //       result = true;
  //     }
  //   } else if (this.K2Cap) {
  //     this.squares.forEach(e => {
  //       if (e.name == "1K") {
  //         savedKing = e;
  //       }
  //     })
  //     if (this.safeSquare(savedKing, "top") == false) {
  //       result = true;
  //     }
  //   } else if (this.K3Cap) {
  //     this.squares.forEach(e => {
  //       if (e.name == "4K") {
  //         savedKing = e;
  //       }
  //     })
  //     if (this.safeSquare(savedKing, "bot") == false) {
  //       result = true;
  //     }
  //   } else if (this.K4Cap) {
  //     this.squares.forEach(e => {
  //       if (e.name == "3K") {
  //         savedKing = e;
  //       }
  //     })
  //     if (this.safeSquare(savedKing, "bot") == false) {
  //       result = true;
  //     }
  //   // pawn
  //   } else if ((savedName == "1P") || (savedName == "2P")) {
  //     if (((this.squares[currPiece + 15] != null) && ((this.squares[currPiece + 15].side == "top") || (this.squares[currPiece + 15].side == ""))) && ((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].name != "")) && ((this.squares[currPiece + 17] != null) && ((this.squares[currPiece + 17].side == "top") || (this.squares[currPiece + 17].side == "")))) {
  //       result = true;
  //     // todo else if moving it makes king be in check (done)
  //     }
      
  //   } else if ((savedName == "3P") || (savedName == "4P")) {
  //     if (((this.squares[currPiece - 15] != null) && ((this.squares[currPiece - 15].side == "bot") || (this.squares[currPiece - 15].side == ""))) && ((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].name != "")) && ((this.squares[currPiece - 17] != null) && ((this.squares[currPiece - 17].side == "bot") || (this.squares[currPiece - 17].side == "")))) {
  //       result = true;
  //     }
  //   // rook
  //   } else if ((savedName == "1R") || (savedName == "2R")) {
  //     if (((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "top")) && ((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "top")) && ((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "top")) && ((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "top"))) {
  //       result = true;
  //     }
  //   } else if ((savedName == "3R") || (savedName == "4R")) {
  //     if (((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "bot")) && ((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "bot")) && ((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "bot")) && ((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "bot"))) {
  //       result = true;
  //     }
  //   // knight
  //   } else if ((savedName == "1H") || (savedName == "2H")) {
  //     if (((this.squares[currPiece - 33] != null) && (this.squares[currPiece - 33].side == "top")) && ((this.squares[currPiece - 18] != null) && (this.squares[currPiece - 18].side == "top")) && ((this.squares[currPiece - 31] != null) && (this.squares[currPiece - 31].side == "top")) && ((this.squares[currPiece - 14] != null) && (this.squares[currPiece - 14].side == "top")) && ((this.squares[currPiece + 31] != null) && (this.squares[currPiece + 31].side == "top")) && ((this.squares[currPiece + 14] != null) && (this.squares[currPiece + 14].side == "top")) && ((this.squares[currPiece + 33] != null) && (this.squares[currPiece + 33].side == "top")) && ((this.squares[currPiece + 18] != null) && (this.squares[currPiece + 18].side == "top"))) {
  //       result = true;
  //     }
  //   } else if ((savedName == "3H") || (savedName == "4H")) {
  //     if (((this.squares[currPiece - 33] != null) && (this.squares[currPiece - 33].side == "bot")) && ((this.squares[currPiece - 18] != null) && (this.squares[currPiece - 18].side == "bot")) && ((this.squares[currPiece - 31] != null) && (this.squares[currPiece - 31].side == "bot")) && ((this.squares[currPiece - 14] != null) && (this.squares[currPiece - 14].side == "bot")) && ((this.squares[currPiece + 31] != null) && (this.squares[currPiece + 31].side == "bot")) && ((this.squares[currPiece + 14] != null) && (this.squares[currPiece + 14].side == "bot")) && ((this.squares[currPiece + 33] != null) && (this.squares[currPiece + 33].side == "bot")) && ((this.squares[currPiece + 18] != null) && (this.squares[currPiece + 18].side == "bot"))) {
  //       result = true;
  //     }
  //   // bishop
  //   } else if ((savedName == "1B") || (savedName == "2B")) {
  //     if (((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "top")) && ((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "top")) && ((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "top")) && ((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "top"))) {
  //       result = true;
  //     }
  //   } else if ((savedName == "3B") || (savedName == "4B")) {
  //     if (((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "top")) && ((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "top")) && ((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "top")) && ((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "top"))) {
  //       result = true;
  //     }
  //   // queen
  //   } else if ((savedName == "1Q") || (savedName == "2Q")) {
  //     if (((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "top")) && ((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "top")) && ((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "top")) && ((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "top")) && ((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "top")) && ((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "top")) && ((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "top")) && ((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "top"))) {
  //       result = true;
  //     }
  //   } else if ((savedName == "3Q") || (savedName == "4Q")) {
  //     if (((this.squares[currPiece - 16] != null) && (this.squares[currPiece - 16].side == "bot")) && ((this.squares[currPiece + 16] != null) && (this.squares[currPiece + 16].side == "bot")) && ((this.squares[currPiece - 1] != null) && (this.squares[currPiece - 1].side == "bot")) && ((this.squares[currPiece + 1] != null) && (this.squares[currPiece + 1].side == "bot")) && ((this.squares[currPiece - 15] != null) && (this.squares[currPiece - 15].side == "top")) && ((this.squares[currPiece - 17] != null) && (this.squares[currPiece - 17].side == "top")) && ((this.squares[currPiece + 15] != null) && (this.squares[currPiece + 15].side == "top")) && ((this.squares[currPiece + 17] != null) && (this.squares[currPiece + 17].side == "top"))) {
  //       result = true;
  //     }
  //   }
  //   // king
  //   // no need?
  //   // can put it with queen
  //   // } else if ((square.name == "1K") || (square.name == "2K")) {      
      
  //   // } else if ((square.name == "3K") || (square.name == "4K")) {

  //   // }
  //   this.squares[currPiece].name = savedName;
  //   //this.squares[currPiece].piece = savedSquare.piece;
  //   this.squares[currPiece].piece = savedPiece;
  //   this.squares[currPiece].side = savedSide;
  //   return result;
  // }

  // // square is moving to that place
  // // check for pawns on diagonal adjacent
  // // check for bishop/queen on diagonals
  // // check for rook/queen on straight
  // // check for knight
  // // check for king on adjacent
  // // worries about the next turn
  // // 1-3, 2-4, 3-2, 4-1
  // private safeSquare(square: Square, side: string) {
  //   let currPiece = (127 - (square.y * 16) + square.x);
  //   let checkSquare = currPiece;
  //   // todo rmv
  //   if (side == "top") {
  //     // pawns
  //     if ((((this.squares[currPiece + 15] != null) && (((this.squares[currPiece + 15].name == "3P") && (this.turn == 1)) || ((this.squares[currPiece + 15].name == "4P") && (this.turn == 2))) && (this.squares[currPiece + 15].x < this.squares[currPiece].x))) || ((this.squares[currPiece + 17] != null)) && ((((this.squares[currPiece + 17].name == "3P") && (this.turn == 1)) || ((this.squares[currPiece + 17].name == "4P") && (this.turn == 2))) && (this.squares[currPiece + 17].x > this.squares[currPiece].x))) {
  //       return false;
  //     }
  //     // bishop/queen
  //     // find first nonempty square
  //     // up left
  //     while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x <= this.squares[currPiece].x) && (checkSquare >= 0)) {
  //       // find enemy bishop/queen
  //       if (((this.squares[checkSquare].name == "3B") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4B") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
  //         checkSquare = currPiece;
  //         return false;          
  //       } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece))) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare -= 17;
  //     }
  //     checkSquare = currPiece;
  //     // up right
  //     // to do ooooooooooooo make sure that 0 <= checksquare <= 127
  //     // other side not done, don't need?
  //     while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x >= this.squares[currPiece].x) && (checkSquare >= 0)) {
  //       if (((this.squares[checkSquare].name == "3B") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4B") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare -= 15;
  //     }
  //     checkSquare = currPiece;
  //     // down left
  //     while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x <= this.squares[currPiece].x) && (checkSquare <= 127)) {
  //       if (((this.squares[checkSquare].name == "3B") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4B") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare += 15;
  //     }
  //     checkSquare = currPiece;
  //     // down right
  //     while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x >= this.squares[currPiece].x) && (checkSquare <= 127)) {
  //       if (((this.squares[checkSquare].name == "3B") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4B") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare += 17;
  //     }
  //     checkSquare = currPiece;
  //     // rook/queen
  //     // up
  //     while ((this.squares[checkSquare] != null) && (checkSquare >= 0)) {
  //       if (((this.squares[checkSquare].name == "3R") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4R") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare -= 16;
  //     }
  //     checkSquare = currPiece;
  //     // down
  //     while ((this.squares[checkSquare] != null) && (checkSquare <= 127)) {
  //       if (((this.squares[checkSquare].name == "3R") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4R") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare += 16;
  //     }
  //     checkSquare = currPiece;
  //     // left
  //     while ((this.squares[checkSquare] != null) && (checkSquare >= 0)) {
  //       if (((this.squares[checkSquare].name == "3R") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4R") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare -= 1;
  //     }
  //     checkSquare = currPiece;
  //     // right
  //     while ((this.squares[checkSquare] != null) && (checkSquare <= 127)) {
  //       if (((this.squares[checkSquare].name == "3R") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4R") && (this.turn == 2)) || ((this.squares[checkSquare].name == "3Q") && (this.turn == 1)) || ((this.squares[checkSquare].name == "4Q") && (this.turn == 2))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare += 1;
  //     }
  //     checkSquare = currPiece;
  //     // knight
  //     // up left
  //     if (((this.squares[currPiece].x - 1) >= 1) && ((this.squares[currPiece].y + 2) <= 8)) {
  //       if (((this.squares[currPiece - 33].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece - 33].name == "4H") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
  //     if (((this.squares[currPiece].x - 2) >= 1) && ((this.squares[currPiece].y + 1) <= 8)) {
  //       if (((this.squares[currPiece - 18].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece - 18].name == "4H") && (this.turn == 2))) {
  //         return false;
  //       }
  //     // up right
  //     }
  //     if (((this.squares[currPiece].x + 1) <= 16) && ((this.squares[currPiece].y + 2) <= 8)) {
  //       if (((this.squares[currPiece - 31].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece - 31].name == "4H") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
  //     if (((this.squares[currPiece].x + 2) <= 16) && ((this.squares[currPiece].y + 1) <= 8)) {
  //       if (((this.squares[currPiece - 14].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece - 14].name == "4H") && (this.turn == 2))) {
  //         return false;
  //       }
  //     // down left
  //     }
  //     if (((this.squares[currPiece].x - 1) >= 1) && ((this.squares[currPiece].y - 2) >= 1)) {
  //       if (((this.squares[currPiece + 31].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece + 31].name == "4H") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
  //     if (((this.squares[currPiece].x - 2) >= 1) && ((this.squares[currPiece].y - 1) >= 1)) {
  //       if (((this.squares[currPiece + 14].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece + 14].name == "4H") && (this.turn == 2))) {
  //         return false;
  //       }
  //     // down right
  //     }
  //     if (((this.squares[currPiece].x + 1) <= 16) && ((this.squares[currPiece].y - 2) <= 8)) {
  //       if (((this.squares[currPiece + 33].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece + 33].name == "4H") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
  //     if (((this.squares[currPiece].x + 2) <= 16) && ((this.squares[currPiece].y - 1) <= 8)) {
  //       if (((this.squares[currPiece + 18].name == "3H") && (this.turn == 1)) || ((this.squares[currPiece + 18].name == "4H") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
  //     // king
  //     // up down left right
  //     if (this.squares[currPiece].y + 1 <= 8) {
  //       if (((this.squares[currPiece - 16].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece - 16].name == "4K") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
  //     if (this.squares[currPiece].y - 1 >= 1) {
  //       if (((this.squares[currPiece + 16].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece + 16].name == "4K") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
  //     if (this.squares[currPiece].x - 1 >= 1) {
  //       if (((this.squares[currPiece - 1].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece - 1].name == "4K") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
  //     if (this.squares[currPiece].x + 1 <= 16) {
  //       if (((this.squares[currPiece + 1].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece + 1].name == "4K") && (this.turn == 2))) {
  //         return false;
  //       }
  //     // diagonals
  //     }
  //     if ((this.squares[currPiece].x - 1 >= 1) && (this.squares[currPiece].y + 1 <= 8)) {
  //       if (((this.squares[currPiece - 17].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece - 17].name == "4K") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
  //     if ((this.squares[currPiece].x + 1 <= 16) && (this.squares[currPiece].y + 1 <= 8)) {
  //       if (((this.squares[currPiece - 15].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece - 15].name == "4K") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
  //     if ((this.squares[currPiece].x - 1 >= 1) && (this.squares[currPiece].y - 1 >= 1)) {
  //       if (((this.squares[currPiece + 15].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece + 15].name == "4K") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
  //     if ((this.squares[currPiece].x + 1 <= 16) && (this.squares[currPiece].y - 1 >= 1)) {
  //       if (((this.squares[currPiece + 17].name == "3K") && (this.turn == 1)) || ((this.squares[currPiece + 17].name == "4K") && (this.turn == 2))) {
  //         return false;
  //       }
  //     }
      
  //   // else if square side == bot
  //   } else if (side == "bot") {
  //     // pawns
  //     if ((((this.squares[currPiece - 15] != null) && (((this.squares[currPiece - 15].name == "1P") && (this.turn == 3)) || ((this.squares[currPiece - 15].name == "2P") && (this.turn == 4))) && (this.squares[currPiece - 15].x > this.squares[currPiece].x))) || (this.squares[currPiece - 17] != null) && ((((this.squares[currPiece - 17].name == "1P") && (this.turn == 3)) || ((this.squares[currPiece - 17].name == "2P") && (this.turn == 4))) && (this.squares[currPiece - 17].x < this.squares[currPiece].x))) {
  //       return false;
  //     }
  //     // bishop/queen
  //     // find first nonempty square
  //     // up left
  //     while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x <= this.squares[currPiece].x)) {
  //       // find enemy bishop/queen
  //       if (((this.squares[checkSquare].name == "1B") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2B") && (this.turn == 4)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 4))) {
  //         checkSquare = currPiece;
  //         return false;          
  //       } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece))) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare -= 17;
  //     }
  //     checkSquare = currPiece;
  //     // up right
  //     while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x >= this.squares[currPiece].x)) {
  //       if (((this.squares[checkSquare].name == "1B") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2B" && (this.turn == 4))) || ((this.squares[checkSquare].name == "1Q" && (this.turn == 3))) || ((this.squares[checkSquare].name == "2Q" && (this.turn == 4)))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare -= 15;
  //     }
  //     checkSquare = currPiece;
  //     // down left
  //     while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x <= this.squares[currPiece].x)) {
  //       if (((this.squares[checkSquare].name == "1B") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2B" && (this.turn == 4))) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 4))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare += 15;
  //     }
  //     checkSquare = currPiece;
  //     // down right
  //     while ((this.squares[checkSquare] != null) && (this.squares[checkSquare].x >= this.squares[currPiece].x)) {
  //       if (((this.squares[checkSquare].name == "1B") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2B") && (this.turn == 4)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 4))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare += 17;
  //     }
  //     checkSquare = currPiece;
  //     // rook/queen
  //     // up
  //     while (this.squares[checkSquare] != null) {
  //       if (((this.squares[checkSquare].name == "1R") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2R") && (this.turn == 4)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 4))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if (((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot")) && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare -= 16;
  //     }
  //     checkSquare = currPiece;
  //     // down
  //     while (this.squares[checkSquare] != null) {
  //       if (((this.squares[checkSquare].name == "1R") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2R") && (this.turn == 4)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 4))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare += 16;
  //     }
  //     checkSquare = currPiece;
  //     // left
  //     while (this.squares[checkSquare] != null) {
  //       if (((this.squares[checkSquare].name == "1R") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2R") && (this.turn == 4)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 4))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare -= 1;
  //     }
  //     checkSquare = currPiece;
  //     // right
  //     while (this.squares[checkSquare] != null) {
  //       if (((this.squares[checkSquare].name == "1R") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2R") && (this.turn == 4)) || ((this.squares[checkSquare].name == "1Q") && (this.turn == 3)) || ((this.squares[checkSquare].name == "2Q") && (this.turn == 4))) {
  //         checkSquare = currPiece;
  //         return false;
  //       } else if ((this.squares[checkSquare].side == "top") || (this.squares[checkSquare].side == "bot") && (checkSquare != currPiece)) {
  //         checkSquare = currPiece;
  //         break;
  //       }
  //       checkSquare += 1;
  //     }
  //     checkSquare = currPiece;
  //     // knight
  //     // up left
  //     if (((this.squares[currPiece].x - 1) >= 1) && ((this.squares[currPiece].y + 2) <= 8)) {
  //       if (((this.squares[currPiece - 33].name == "1H") && (this.turn == 3)) || ((this.squares[currPiece - 33].name == "2H") && (this.turn == 4))) {
  //         return false;
  //       }
  //     }
  //     if (((this.squares[currPiece].x - 2) >= 1) && ((this.squares[currPiece].y + 1) <= 8)) {
  //       if (((this.squares[currPiece - 18].name == "1H") && (this.turn == 3)) || ((this.squares[currPiece - 18].name == "2H") && (this.turn == 4))) {
  //         return false;
  //       }
  //     // up right
  //     }
  //     if (((this.squares[currPiece].x + 1) <= 16) && ((this.squares[currPiece].y + 2) <= 8)) {
  //       if (((this.squares[currPiece - 31].name == "1H") && (this.turn == 3)) || ((this.squares[currPiece - 31].name == "2H") && (this.turn == 4))) {
  //         return false;
  //       }
  //     }
  //     if (((this.squares[currPiece].x + 2) <= 16) && ((this.squares[currPiece].y + 1) <= 8)) {
  //       if (((this.squares[currPiece - 14].name == "1H") && (this.turn == 3)) || ((this.squares[currPiece - 14].name == "2H") && (this.turn == 4))) {
  //         return false;
  //       }
  //     // down left
  //     }
  //     if (((this.squares[currPiece].x - 1) >= 1) && ((this.squares[currPiece].y - 2) >= 1)) {
  //       if (((this.squares[currPiece + 31].name == "1H") && (this.turn == 3)) || ((this.squares[currPiece + 31].name == "2H") && (this.turn == 4))) {
  //         return false;
  //       }
  //     }
  //     if (((this.squares[currPiece].x - 2) >= 1) && ((this.squares[currPiece].y - 1) >= 1)) {
  //       if (((this.squares[currPiece + 14].name == "1H") && (this.turn == 3)) || ((this.squares[currPiece + 14].name == "2H") && (this.turn == 4))) {
  //         return false;
  //       }
  //     // down right
  //     }
  //     if (((this.squares[currPiece].x + 1) <= 16) && ((this.squares[currPiece].y - 2) >= 1)) {
  //       if (((this.squares[currPiece + 33].name == "1H") && (this.turn == 3)) || ((this.squares[currPiece + 33].name == "2H") && (this.turn == 4))) {
  //         return false;
  //       }
  //     }
  //     if (((this.squares[currPiece].x + 2) <= 16) && ((this.squares[currPiece].y - 1) >= 1)) {
  //       if (((this.squares[currPiece + 18].name == "1H") && (this.turn == 3)) || ((this.squares[currPiece + 18].name == "2H") && (this.turn == 4))) {
  //         return false;
  //       }
  //     }
  //     // king
  //     // up down left right
  //     if (this.squares[currPiece].y + 1 <= 8) {
  //       if (((this.squares[currPiece - 16].name == "1K") && (this.turn == 3)) || ((this.squares[currPiece - 16].name == "2K") && (this.turn == 4))) {
  //         return false;
  //       }
  //     }
  //     if (this.squares[currPiece].y - 1 >= 1) {
  //       if (((this.squares[currPiece + 16].name == "1K") && (this.turn == 3)) || ((this.squares[currPiece + 16].name == "2K") && (this.turn == 4))) {
  //         return false;
  //       }
  //     }
  //     if (this.squares[currPiece].x - 1 >= 1) {
  //       if (((this.squares[currPiece - 1].name == "1K") && (this.turn == 3)) || ((this.squares[currPiece - 1].name == "2K") && (this.turn == 4))) {
  //         return false;
  //       }
  //     }
  //     if (this.squares[currPiece].x + 1 <= 16) {
  //       if (((this.squares[currPiece + 1].name == "1K") && (this.turn == 3)) || ((this.squares[currPiece + 1].name == "2K") && (this.turn == 4))) {
  //         return false;
  //       }
  //     // diagonals
  //     }
  //     if ((this.squares[currPiece].x - 1 >= 1) && (this.squares[currPiece].y + 1 <= 8)) {
  //       if (((this.squares[currPiece - 17].name == "1K") && (this.turn == 3)) || ((this.squares[currPiece - 17].name == "2K")) && (this.turn == 4)) {
  //         return false;
  //       }
  //     }
  //     if ((this.squares[currPiece].x + 1 <= 16) && (this.squares[currPiece].y + 1 <= 8)) {
  //       if (((this.squares[currPiece - 15].name == "1K") && (this.turn == 3)) || ((this.squares[currPiece - 15].name == "2K") && (this.turn == 4))) {
  //         return false;
  //       }
  //     }
  //     if ((this.squares[currPiece].x - 1 >= 1) && (this.squares[currPiece].y - 1 >= 1)) {
  //       if (((this.squares[currPiece + 15].name == "1K") && (this.turn == 3)) || ((this.squares[currPiece + 15].name == "2K") && (this.turn == 4))) {
  //         return false;
  //       }
  //     }
  //     if ((this.squares[currPiece].x + 1 <= 16) && (this.squares[currPiece].y - 1 >= 1)) {
  //       if (((this.squares[currPiece + 17].name == "1K") && (this.turn == 3)) || ((this.squares[currPiece + 17].name == "2K") && (this.turn == 4))) {
  //         return false;
  //       }
  //     }
  //   }
  //   return true;
  // }

  // private chooseQueen(square: { x: number; y: number; }, side: string) {
  //   let up = 50;
  //   let down = 50;
  //   let left = 50;
  //   let right = 50;
  //   let upLeft = 50;
  //   let upRight = 50;
  //   let downLeft = 50;
  //   let downRight = 50;
    
  //   this.squares.forEach(e => {
  //     let xAbs = Math.abs(square.x - e.x);
  //     let yAbs = Math.abs(square.y - e.y);
  //     let x = square.x - e.x;
  //     let y = square.y - e.y;
  //     if ((xAbs == yAbs) && e.name != '') {
  //       // upLeft
  //       if ((x > 0) && (y < 0)) {
  //         if (Math.abs(y) < upLeft) {
  //           upLeft = Math.abs(y);
  //         }
  //       }
  //       // upRight
  //       if ((x < 0) && (y < 0)) {
  //         if (Math.abs(y) < upRight) {
  //           upRight = Math.abs(y);
  //         }
  //       }
  //       // downLeft
  //       if ((x > 0) && (y > 0)) {
  //         if (Math.abs(x) < downLeft) {
  //           downLeft = Math.abs(x);
  //         }
  //       }
  //       // downRight
  //       if ((x < 0) && (y > 0)) {
  //         if (Math.abs(x) < downRight) {
  //           downRight = Math.abs(x);
  //         }
  //       }
  //     } else if (((e.x == square.x) || (e.y == square.y)) && e.name != '') {
  //       // up
  //       if (y < 0) {
  //         if (Math.abs(y) < up) {
  //           up = Math.abs(y);
  //         }
  //       }
  //       // down
  //       if (y > 0) {
  //         if (Math.abs(y) < down) {
  //           down = Math.abs(y);
  //         }
  //       }
  //       // left
  //       if (x > 0) {
  //         if (Math.abs(x) < left) {
  //           left = Math.abs(x);
  //         }
  //       }
  //       // right
  //       if (x < 0) {
  //         if (Math.abs(x) < right) {
  //           right = Math.abs(x);
  //         }
  //       }
  //     }
  //   })
  //   this.squares.forEach(e => {
  //     let xAbs = Math.abs(square.x - e.x);
  //     let yAbs = Math.abs(square.y - e.y);
  //     let x = square.x - e.x;
  //     let y = square.y - e.y;
  //     if (xAbs == yAbs) {
  //       // upLeft
  //       if ((x > 0) && (y < 0)) {
  //         if (Math.abs(y) <= upLeft) {
  //           if ((side == "top") && (e.side != "top")) {
  //             e.highlight = true;
  //           } else if ((side == "bot") && (e.side != "bot")) {
  //             e.highlight = true;
  //           }
  //         }
  //       }
  //       // upRight
  //       if ((x < 0) && (y < 0)) {
  //         if (Math.abs(y) <= upRight) {
  //           if ((side == "top") && (e.side != "top")) {
  //             e.highlight = true;
  //           } else if ((side == "bot") && (e.side != "bot")) {
  //             e.highlight = true;
  //           }
  //         }
  //       }
  //       // downLeft
  //       if ((x > 0) && (y > 0)) {
  //         if (Math.abs(x) <= downLeft) {
  //           if ((side == "top") && (e.side != "top")) {
  //             e.highlight = true;
  //           } else if ((side == "bot") && (e.side != "bot")) {
  //             e.highlight = true;
  //           }
  //         }
  //       }
  //       // downRight
  //       if ((x < 0) && (y > 0)) {
  //         if (Math.abs(x) <= downRight) {
  //           if ((side == "top") && (e.side != "top")) {
  //             e.highlight = true;
  //           } else if ((side == "bot") && (e.side != "bot")) {
  //             e.highlight = true;
  //           }
  //         }
  //       }
  //     } else if (((e.x == square.x) || (e.y == square.y)) && (((square.x - left) <= e.x) && (e.x <= (square.x + right)) && ((square.y - down) <= e.y) && (e.y <= (square.y + up)))) {
  //       if (side == "top") {
  //         // if same team, don't highlight it
  //         if ((e.side == "top") && ((e.x == (square.x - left)) || (e.x == (square.x + right)) || (e.y == (square.y + up) || (e.y == (square.y - down))))) {
  //           // do nothing
  //         } else {
  //           e.highlight = true;
  //         }
  //       // side is bot
  //       } else {          
  //         if ((e.side == "bot") && ((e.x == (square.x - left)) || (e.x == (square.x + right)) || (e.y == (square.y + up) || (e.y == (square.y - down))))) {
  //           // do nothing
  //         } else {
  //           e.highlight = true;
  //         }
  //       }
  //     }
  //   })
  // }

  // // check if piece chosen is own piece
  // private ownPiece(name: string) {
  //   let result = false;
  //   if ((this.turn == 1) && ((name == "1P") || (name == "1R") || (name == "1H") || (name == "1B") || (name == "1Q") || (name == "1K"))) {
  //     result = true;
  //   } else if ((this.turn == 2) && ((name == "2P") || (name == "2R") || (name == "2H") || (name == "2B") || (name == "2Q") || (name == "2K"))) {
  //     result = true;
  //   } else if ((this.turn == 3) && ((name == "3P") || (name == "3R") || (name == "3H") || (name == "3B") || (name == "3Q") || (name == "3K"))) {
  //     result = true;
  //   } else if ((this.turn == 4) && ((name == "4P") || (name == "4R") || (name == "4H") || (name == "4B") || (name == "4Q") || (name == "4K"))) {
  //     result = true;
  //   }
  //   return result;
  // }

  // // choose new piece
  // choosePiece(element: any) {
  //   // console.log(element.textContent);
  //   // console.log(this.replacePiece.name);
  //   // console.log(this.replacePiece.y);
  //   // todo remove?
  //   let newPiece = null;
  //   if ((this.oldTurn == 1) || (this.oldTurn == 2)) {
  //     newPiece = this.squares[-1 + this.replacePiece.x];
  //   } else {
  //     newPiece = this.squares[111 + this.replacePiece.x];
  //   }
    
  //   if (this.oldTurn == 1) {
  //     if (element.textContent == "♜") {
  //       this.squares[111 + this.replacePiece.x].name = "1R";
  //       this.squares[111 + this.replacePiece.x].piece = "♖";
  //     } else if (element.textContent == "♞") {
  //       this.squares[111 + this.replacePiece.x].name = "1H";
  //       this.squares[111 + this.replacePiece.x].piece = "♘";
  //     } else if (element.textContent == "♝") {
  //       this.squares[111 + this.replacePiece.x].name = "1B";
  //       this.squares[111 + this.replacePiece.x].piece = "♗";
  //     } else if (element.textContent == "♛") {
  //       this.squares[111 + this.replacePiece.x].name = "1Q";
  //       this.squares[111 + this.replacePiece.x].piece = "♕";
  //     }
  //   } else if (this.oldTurn == 2) {
  //     if (element.textContent == "♜") {
  //       this.squares[111 + this.replacePiece.x].name = "2R";
  //       this.squares[111 + this.replacePiece.x].piece = "♖";
  //     } else if (element.textContent == "♞") {
  //       this.squares[111 + this.replacePiece.x].name = "2H";
  //       this.squares[111 + this.replacePiece.x].piece = "♘";
  //     } else if (element.textContent == "♝") {
  //       this.squares[111 + this.replacePiece.x].name = "2B";
  //       this.squares[111 + this.replacePiece.x].piece = "♗";
  //     } else if (element.textContent == "♛") {
  //       this.squares[111 + this.replacePiece.x].name = "2Q";
  //       this.squares[111 + this.replacePiece.x].piece = "♕";
  //     }
  //   } else if (this.oldTurn == 3) {
  //     if (element.textContent == "♜") {
  //       this.squares[-1 + this.replacePiece.x].name = "3R";
  //       this.squares[-1 + this.replacePiece.x].piece = "♜";
  //     } else if (element.textContent == "♞") {
  //       this.squares[-1 + this.replacePiece.x].name = "3H";
  //       this.squares[-1 + this.replacePiece.x].piece = "♞";
  //     } else if (element.textContent == "♝") {
  //       this.squares[-1 + this.replacePiece.x].name = "3B";
  //       this.squares[-1 + this.replacePiece.x].piece = "♝";
  //     } else if (element.textContent == "♛") {
  //       this.squares[-1 + this.replacePiece.x].name = "3Q";
  //       this.squares[-1 + this.replacePiece.x].piece = "♛";
  //     }
  //   } else {
  //     if (element.textContent == "♜") {
  //       this.squares[-1 + this.replacePiece.x].name = "4R";
  //       this.squares[-1 + this.replacePiece.x].piece = "♜";
  //     } else if (element.textContent == "♞") {
  //       this.squares[-1 + this.replacePiece.x].name = "4H";
  //       this.squares[-1 + this.replacePiece.x].piece = "♞";
  //     } else if (element.textContent == "♝") {
  //       this.squares[-1 + this.replacePiece.x].name = "4B";
  //       this.squares[-1 + this.replacePiece.x].piece = "♝";
  //     } else if (element.textContent == "♛") {
  //       this.squares[-1 + this.replacePiece.x].name = "4Q";
  //       this.squares[-1 + this.replacePiece.x].piece = "♛";
  //     }
  //   }
  //   this.choosing = false;
  // }

  // // checks if there's last king from parent function
  // // stalemate
  // // check if around king is safe and not trapped
  // // noMove() then stalemate()
  // // don't need return?
  // // todo what if last king and player cannot move ?
  // private stalemate(king: any) {
  //   let result = false;
  //   this.squares.forEach(e => {
  //     if (king == e.name) {
  //       king = e;
  //     }
  //   })
  //   let kingPos = (127 - (king.y * 16) + king.x);
  //   if ((this.turn == 1) || (this.turn == 2)) {
  //     // todo check if the spaces around are top or bot side to check if king can move / is blocked by other pieces (test)
  //     if (((this.squares[kingPos - 16] != null) && (this.squares[kingPos - 16].side != "top") && (this.safeSquare(this.squares[kingPos - 16], "top"))) || ((this.squares[kingPos + 16] != null) && (this.squares[kingPos + 16].side != "top") && (this.safeSquare(this.squares[kingPos + 16], "top"))) || ((this.squares[kingPos - 1] != null) && (this.squares[kingPos - 1].side != "top") && (this.safeSquare(this.squares[kingPos - 1], "top"))) || ((this.squares[kingPos + 1] != null) && (this.squares[kingPos + 1].side != "top") && (this.safeSquare(this.squares[kingPos + 1], "top"))) || ((this.squares[kingPos - 17] != null) && (this.squares[kingPos - 17].side != "top") && (this.safeSquare(this.squares[kingPos - 17], "top"))) || ((this.squares[kingPos + 17] != null) && (this.squares[kingPos + 17].side != "top") && (this.safeSquare(this.squares[kingPos + 17], "top"))) || (this.playerTrap == false)) {
  //       // do nothing b/c result is false
  //     } else {
  //       result = true;
  //     }
  //   } else {
  //     if (((this.squares[kingPos - 16] != null) && (this.squares[kingPos - 16].side != "bot") && (this.safeSquare(this.squares[kingPos - 16], "bot"))) || ((this.squares[kingPos + 16] != null) && (this.squares[kingPos + 16].side != "bot") && (this.safeSquare(this.squares[kingPos + 16], "bot"))) || ((this.squares[kingPos - 1] != null) && (this.squares[kingPos - 1].side != "bot") && (this.safeSquare(this.squares[kingPos - 1], "bot"))) || ((this.squares[kingPos + 1] != null) && (this.squares[kingPos + 1].side != "bot") && (this.safeSquare(this.squares[kingPos + 1], "bot"))) || ((this.squares[kingPos - 17] != null) && (this.squares[kingPos - 17].side != "bot") && (this.safeSquare(this.squares[kingPos - 17], "bot"))) || ((this.squares[kingPos + 17] != null) && (this.squares[kingPos + 17].side != "bot") && (this.safeSquare(this.squares[kingPos + 17], "bot"))) || (this.playerTrap == false)) {
  //       // do nothing b/c result is false
  //     } else {
  //       result = true;
  //     }
  //   }
  //   if (result) {
  //     this.draw = true;
  //     // todo end game
  //     this.endGame("draw");
  //   }
  //   return result;
  // }

  // // no moves
  // // checks if player cannot make a move
  // // updates playerTrap variable
  // // don'e need return?
  // private noMoves() {
  //   let result = true;
  //   // if last king don't check if king can move b/c stalemate() does that
    
  //   if (this.turn == 1) {
  //     this.squares.forEach(e => {
  //       if (e.name.includes("1")) {
  //         if ((this.K1Cap || this.K2Cap) && (e.name == "1K")) {
  //           // do nothing/skip
  //         } else {
  //           // if at least 1 is not trapped then can move
  //           if (this.trap(e) == false) {
  //             result = false;
  //           }
  //         }
  //       }
  //     })
  //   } else if (this.turn == 2) {
  //     this.squares.forEach(e => {
  //       if (e.name.includes("2")) {
  //         if ((this.K1Cap || this.K2Cap) && (e.name == "2K")) {
  //           // do nothing/skip
  //         } else {
  //           // if at least 1 is not trapped then can move
  //           if (this.trap(e) == false) {
  //             result = false;
  //           }
  //         }
  //       }  
  //     })
  //   } else if (this.turn == 3) {
  //     this.squares.forEach(e => {
  //       if (e.name.includes("3")) {
  //         if ((this.K3Cap || this.K4Cap) && (e.name == "3K")) {
  //           // do nothing/skip
  //         } else {
  //           // if at least 1 is not trapped then can move
  //           if (this.trap(e) == false) {
  //             result = false;
  //           }
  //         }
  //       }  
  //     })
  //   } else {
  //     this.squares.forEach(e => {
  //       if (e.name.includes("4")) {
  //         if ((this.K3Cap || this.K4Cap) && (e.name == "4K")) {
  //           // do nothing/skip
  //         } else {
  //           // if at least 1 is not trapped then can move
  //           if (this.trap(e) == false) {
  //             result = false;
  //           }
  //         }
  //       }  
  //     })
  //   }
  //   if (result) {
  //     this.playerTrap = true;
  //   }
  //   return result;
  // }

  // // new turn
  // // todo fix
  // private newTurn() {
  //   if (this.turn == 1) {
  //     this.turn = 3;
  //     this.playerTrap = false;
  //   } else if (this.turn == 2) {
  //     this.turn = 4;
  //     this.playerTrap = false;
  //   } else if (this.turn == 3) {
  //     this.turn = 1;
  //     this.playerTrap = false;
  //   } else {
  //     this.turn = 1;
  //     this.playerTrap = false;
  //   }
  //   console.log("new turn: " + this.turn);
  //   this.noMoves();
  //   // if ((this.K1Cap || this.K2Cap) || (this.K3Cap || this.K4Cap)) {
  //   //   this.stalemate("K" + (this.turn));
  //   // }
  //   if (((this.K1Cap || this.K2Cap) && (this.turn == 1) || this.turn == 2) || ((this.K3Cap || this.K4Cap) && (this.turn == 3 || this.turn == 4))) {
  //     this.stalemate("K" + (this.turn));
  //   }
  //   // if player next turn can't move then go to next turn and check for no moves again
  //   while (this.playerTrap && !this.draw) {
  //     if (this.turn == 1) {
  //       this.turn = 3;
  //       this.playerTrap = false;
  //       // this.noMoves();
  //       // if ((this.K1Cap || this.K2Cap) || (this.K3Cap || this.K4Cap)) {
  //       //   this.stalemate("K" + (this.turn));
  //       // }
  //     } else if (this.turn == 2) {
  //       this.turn = 4;
  //       this.playerTrap = false;
  //       // this.noMoves();
  //       // if ((this.K1Cap || this.K2Cap) || (this.K3Cap || this.K4Cap)) {
  //       //   this.stalemate("K" + (this.turn));
  //       // }
  //     } else if (this.turn == 3) {
  //       this.turn = 2;
  //       this.playerTrap = false;
  //     } else {
  //       this.turn = 1;
  //       this.playerTrap = false;
  //     }
  //     this.noMoves();
  //     // if ((this.K1Cap || this.K2Cap) || (this.K3Cap || this.K4Cap)) {
  //     //   this.stalemate("K" + (this.turn));
  //     // }
  //     if (((this.K1Cap || this.K2Cap) && (this.turn == 1) || this.turn == 2) || ((this.K3Cap || this.K4Cap) && (this.turn == 3 || this.turn == 4))) {
  //       this.stalemate("K" + (this.turn));
  //     }
  //     console.log("new turn: " + this.turn);
  //   }
  // }

  // // end game with a draw or kings captured
  // // reset everything 
  // private endGame(type: string) {
  //   this.chosenPiece = null;
  //   this.replacePiece = null;
  //   this.choosing = false;

  //   this.K1Cap = false;
  //   this.K2Cap = false;
  //   this.K3Cap = false;
  //   this.K4Cap = false;

  //   this.playerTrap = false;
  //   this.kingTrap = false;

  //   this.draw = false;

  //   this.turn = 1;
  //   this.oldTurn = 1;

  //   this.K1 = true;
  //   this.R1L = true;
  //   this.R1R = true;
  //   this.K2 = true;
  //   this.R2L = true;
  //   this.R2R = true;
  //   this.K3 = true;
  //   this.R3L = true;
  //   this.R3R = true;
  //   this.K4 = true;
  //   this.R4L = true;
  //   this.R4R = true;

  //   this.enPassant1 = false;
  //   this.enPassant1X = 0;
  //   this.enPassant1Y = 0;
  //   this.enPassant2 = false;
  //   this.enPassant2X = 0;
  //   this.enPassant2Y = 0;
  //   this.enPassant3 = false;
  //   this.enPassant3X = 0;
  //   this.enPassant3Y = 0;
  //   this.enPassant4 = false;
  //   this.enPassant4X = 0;
  //   this.enPassant4Y = 0;

  //   this.squares =  JSON.parse(JSON.stringify(this.savedSquares));
  //   // todo
  //   // draw/stalemate
  //   // draw message
  //   // win
  //   // side wins
  //   if (type == "win") {
  //     // team win message
  //   } else if (type == "draw") {
  //     // draw message
  //   } else {
  //     // player left?
  //   }
  // }

//}





// castling:
// check for pieces from the square that the king passes over/to
// global var?
// can't do when rook moves or king moves

// en passant:
// have square keep track for 1 turn, do later after turns?
// only pawns get do it