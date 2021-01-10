import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  contentShown = false;

  myColor = 'blue';
  colorsArray = ['red', 'green', 'blue'];

  size = 'small';

  animals = [
    {
      name: 'Betty',
      species: '🐮',
      img:
        'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg',
    },
    {
      name: 'Peppa',
      species: '🐷',
      img:
        'https://www.treehugger.com/thmb/wtEZ-8nEq-BbxL8jC8eH5eDS0bo=/2070x2070/smart/filters:no_upscale()/piglet-grass-dandelions-01-b21d7ef8f881496f8346dbe01859537e.jpg',
    },
    {
      name: 'Winnie',
      species: '🐻',
      img:
        'https://video.cgtn.com/news/7a596a4e784d544e33516a4d77457a4e786b444f31457a6333566d54/video/f4f4d4a40e0743b1a1e347ab0dbe6085/f4f4d4a40e0743b1a1e347ab0dbe6085.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleContent() {
    this.contentShown = !this.contentShown;
  }

  newColor() {
    var randNum: number = Math.floor(Math.random() * 3); // from 0 to 3.99 -> 0, 1, 2, 3
    this.myColor = this.colorsArray[randNum];
  }

  getColor() {
    return this.myColor;
  }

  toggleSize() {
    this.size === 'small' ? (this.size = 'big') : (this.size = 'small');
  }
}
