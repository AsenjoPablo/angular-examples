import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Output() wordWasChosen = new EventEmitter<string>();
  @Input() dataFromParent;
  childWord: string = '';

  constructor() {}

  ngOnInit(): void {}

  sendWord() {
    this.wordWasChosen.emit(this.childWord);
  }
}
