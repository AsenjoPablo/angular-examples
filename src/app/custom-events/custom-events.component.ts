import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css'],
})
export class CustomEventsComponent implements OnInit {
  parentWord: string = '';
  parentObject = {
    name: 'Kawasaki Ninja',
    year: '2018',
    color: 'black',
    img:
      'https://www.revzilla.com/blog_content_image/image/37934/2017_Kawasaki_Ninja_650_black.jpg',
  };

  constructor() {}

  ngOnInit(): void {}

  getWord(event: any) {
    this.parentWord = event;
  }
}
