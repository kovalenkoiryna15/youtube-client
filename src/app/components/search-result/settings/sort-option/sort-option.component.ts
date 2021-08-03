import { Component, Output, EventEmitter } from '@angular/core';
import { SortDirections } from 'src/app/common/constants/settings';

@Component({
  selector: 'app-sort-option',
  templateUrl: './sort-option.component.html',
  styleUrls: ['./sort-option.component.scss'],
})
export default class SortOptionComponent {
  public isInIncresingOrder: boolean = false;

  @Output() changeOderDirection: EventEmitter<string> = new EventEmitter();

  togleOrderDirection() {
    this.isInIncresingOrder = !this.isInIncresingOrder;
    const direction = this.isInIncresingOrder
      ? SortDirections.Increase
      : SortDirections.Decrease;

    this.changeOderDirection.emit(direction);
  }
}
