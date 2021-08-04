import { Pipe, PipeTransform } from '@angular/core';
import { FilterOptions } from '../common/constants/settings';
import { SearchItemModel } from '../common/models/search-item-model';

@Pipe({
  name: 'filterBy',
})
export default class FilterPipe implements PipeTransform {
  public transformed: SearchItemModel[] = [];

  transform(
    items: SearchItemModel[],
    optionName: string,
    values: string[]
  ): SearchItemModel[] {
    this.transformed = [...items];

    if (optionName === FilterOptions.ByTitle && values?.length > 0) {
      this.filterByTitle(values);
    }

    return this.transformed;
  }

  filterByTitle(words: string[]): void {
    words.forEach((word) => {
      this.transformed = this.transformed.filter((item: SearchItemModel) =>
        item.snippet.title.includes(word)
      );
    });
  }
}
