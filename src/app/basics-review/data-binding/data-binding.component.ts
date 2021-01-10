import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  stringInterpolation = 'string interpolation';
  buttonDisabled = false;
  buttonDisabled_2 = false;

  inputText = '';
  shownText = '';

  twoWayText = '';

  constructor() {}

  ngOnInit(): void {}

  disableButtons() {
    this.buttonDisabled = true;
    this.buttonDisabled_2 = true;

    setTimeout(() => {
      this.buttonDisabled = false;
      this.buttonDisabled_2 = false;
    }, 2000);
  }

  onUpdateText(event: any) {
    this.inputText = event.target.value;
  }

  onSubmitText() {
    this.shownText = this.inputText;
  }
}
