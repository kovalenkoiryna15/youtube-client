import { Component, Output, EventEmitter } from '@angular/core';
import { SortDirections } from 'src/app/common/constants/settings';

@Component({
  selector: 'app-sort-direction',
  templateUrl: './sort-direction.component.html',
  styleUrls: ['./sort-direction.component.scss'],
})
export default class SortDirectionComponent {
  public isInIncresingOrder: boolean = false;

  @Output() changeOderDirection: EventEmitter<
    SortDirections.Increase | SortDirections.Decrease
  > = new EventEmitter();

  togleOrderDirection() {
    this.isInIncresingOrder = !this.isInIncresingOrder;
    const direction = this.isInIncresingOrder
      ? SortDirections.Increase
      : SortDirections.Decrease;

    this.changeOderDirection.emit(direction);
  }
}
