import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputValue = ''
  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]
  obj = { a: 1, b: { c: 2 } }
  img = 'https://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png'

  constructor() {
    setTimeout(() => {
      this.img = 'https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/21_Angular_logo_logos-512.png'
    }, 1000)
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onClick() {
    console.table('clickddd')
  }

  onBlur(str: string) {
    this.inputValue = str
  }
}