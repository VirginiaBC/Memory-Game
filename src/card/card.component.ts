import { Component, OnInit } from '@angular/core';

interface Card {
  emoji: string;
  flipped: boolean;
  selected: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cards: Card[] = [];
  selectedCards: Card[] = [];
  gameOver = false;
  gameStarted = false;

  emojiList = ['🐹', '🐻', '🐨', '🐼', '🐽', '🐸', '🐰', '🐙'];

  ngOnInit(): void {
    this.initializeGame();
  }

  startGame() {
    this.gameStarted = true;
  }

  initializeGame() {
    this.cards = [];
    this.selectedCards = [];
    this.gameOver = false;

    for (let i = 0; i < this.emojiList.length; i++) {
      this.cards.push({
        emoji: this.emojiList[i],
        flipped: false,
        selected: false,
      });
      this.cards.push({
        emoji: this.emojiList[i],
        flipped: false,
        selected: false,
      });
    }

    this.shuffleCards(this.cards);
  }

  shuffleCards(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectCard(card: Card) {
    if (!this.gameOver && !card.selected) {
      card.selected = true;
      this.selectedCards.push(card);

      if (this.selectedCards.length === 2) {
        if (this.selectedCards[0].emoji === this.selectedCards[1].emoji) {
          this.selectedCards[0].flipped = true;
          this.selectedCards[1].flipped = true;
          this.selectedCards = [];
          if (this.cards.every((card) => card.flipped)) {
            this.gameOver = true;
          }
        } else {
          setTimeout(() => {
            this.selectedCards[0].selected = false;
            this.selectedCards[1].selected = false;
            this.selectedCards = [];
          }, 500);
        }
      }
    }
  }

  resetGame() {
    this.initializeGame();
  }
}
