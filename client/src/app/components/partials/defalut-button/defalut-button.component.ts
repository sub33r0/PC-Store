import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'defalut-button',
  templateUrl: './defalut-button.component.html',
  styleUrls: ['./defalut-button.component.css']
})
export class DefalutButtonComponent implements OnInit {


  @Input()
  type: 'submit' | 'button' = 'submit'
  @Input()
  text: string = 'Submit'
  @Input()
  bgColor = '#e72929'
  @Input()
  color = 'while'
  @Input()
  fontSizeRem = 1.3;
  @Input()
    widthRem = 12;
  @Output()
    onClick = new EventEmitter();
    

  constructor() { }

  ngOnInit(): void {
  }

}
