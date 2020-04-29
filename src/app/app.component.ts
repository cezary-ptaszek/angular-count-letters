import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stringToCount: string;
  temp: string;
  listOfSum: Array<string> = [];

  countLetters(){
    this.listOfSum = [];
    if (this.stringToCount !== undefined){
      this.temp = this.stringToCount;
      const numUpper = (this.temp.length - this.temp.replace(/[A-Z]/g, '').length).toString();
      const numLower = (this.stringToCount.length - this.stringToCount.replace(/[a-z]/g, '').length).toString();
      this.listOfSum.push('Given string: ' + this.stringToCount);
      this.listOfSum.push('All letters: ' + this.stringToCount.length);
      this.listOfSum.push('Big letters: ' + numUpper);
      this.listOfSum.push('Small letters: ' + numLower);
      this.stringToCount = undefined;
    }
  }
}
