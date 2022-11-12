use crate::engine::*;
use crate::utils::*;
use crate::zobrist::ZobristHasher;
use colored::*;
use std::fmt;
use std::str::FromStr;

// Board position for the start of a new game
pub const DEFAULT_FEN_STRING: &str = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

#[derive(Copy, Clone, PartialEq, Eq, Debug)]
pub enum Square {
    Empty,
    Full(Piece),
}

impl Square {
    pub fn is_empty_or_color(self, color: PieceColor) -> bool {
        match self {
            Square::Full(Piece {
                color: square_color,
                ..
            }) => color == square_color,
            Square::Empty => true,
            _ => false,
        }
    }

    pub fn is_empty(self) -> bool {
        self == Square::Empty
    }

    pub fn is_color(self, color: PieceColor) -> bool {
        match self {
            Square::Full(Piece {
                color: square_color,
                ..
            }) => color == square_color,
            _ => false,
        }
    }

    fn fancy_char(self) -> &'static str {
        match self {
            Square::Full(piece) => piece.fancy_char(),
            _ => " ",
        }
    }

    fn simple_char(self) -> &'static str {
        match self {
            Square::Full(piece) => piece.simple_char(),
            _ => ".",
        }
    }
}

impl From<Piece> for Square {
    fn from(piece: Piece) -> Self {
        Square::Full(piece)
    }
}

impl PartialEq<Piece> for Square {
    fn eq(&self, other: &Piece) -> bool {
        match self {
            Square::Full(piece) => piece == other,
            _ => false,
        }
    }
}

#[derive(Copy, Clone, PartialEq, Eq, Debug)]
pub struct Piece {
    color: PieceColor,
    kind: PieceKind,
}

impl Piece {
    pub fn index(self) -> usize {
        self.kind.index()
    }

    pub const fn pawn(color: PieceColor) -> Self {
        Self { kind: Pawn, color }
    }

    pub const fn knight(color: PieceColor) -> Self {
        Self {
            kind: Knight,
            color,
        }
    }

    pub const fn bishop(color: PieceColor) -> Self {
        Self {
            kind: Bischop,
            color,
        }
    }

    pub const fn rook(color: PieceColor) -> Self {
        Self {
            kind: Rook,
            color,
        }
    }

    pub const fn queen(color: PieceColor) -> Self {
        Self {  
            kind: Queen,
            color,
        }
    }

    pub const fn king(color: PieceColor) -> Self {
        Self {
            kind: King, 
            color
        }
    }

    fn fancy_char(self) -> &'static str {
        match self.kind {
            Pawn => "♟︎",
            Knight => "♞",
            Bishop => "♝",
            Rook => "♜",
            Queen => "♛",
            King => "♚",
        }
    }

    fn simple_char(self) -> &'static str {
        match (self.color, self.kind) {
            (White, Pawn) => "P",
            (White, Knight) => "N",
            (White, Bishop) => "B",
            (White, Rook) => "R",
            (White, Queen) => "Q",
            (White, King) => "K",
            (Black, Pawn) => "p",
            (Black, Knight) => "n",
            (Black, Bishop) => "b",
            (Black, Rook) => "r",
            (Black, Queen) => "q",
            (Black, King) => "k",
        }
    }
}

#[derive(Copy, Clone, PartialEq, Eq, Debug)]
pub enum PieceColor {
    Black,
    White
}

impl PieceColor {
    pub fn oppositie(self) -> Self {
        match self {
            Black => White,
            White => Black,
        }
    }
}

#[derive(Copy, Clone, PartialEq, Eq, Debug)]
pub enum PieceKind {
    Pawn,
    Knight,
    Bishop,
    Rook,
    Queen,
    King,
}

impl PieceKind {
    pub fn index(self) -> usize {
        match self {
            King => 0,
            Queen => 1,
            Rook => 2,
            Bischop => 3,
            Knight => 4,
            Pawn => 5,
        }
    }

    pub fn alg(self) -> &'static str {
        match self {
            Pawn => "p",
            Knight => "n",
            Bishop => "b",
            Rook => "r",
            Queen => "q",
            King => "k",
        }
    }
}

pub const BOARD_START: usize = 2;
pub const BOARD_END: usize = 10;