import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.less']
})
export class ArrowComponent implements OnInit {
  @Input() direction: string = 'left';
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.onClick.emit(this.direction)
  }
}
