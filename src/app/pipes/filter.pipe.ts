import { Pipe, PipeTransform } from '@angular/core';
import { FilterOptions } from '../common/constants/settings';
import { FilterOption } from '../common/models';
import { SearchItemModel } from '../common/models/search-item-model';

@Pipe({
  name: 'filterBy',
})
export default class FilterPipe implements PipeTransform {
  public transformed: SearchItemModel[] = [];

  transform(items: SearchItemModel[], option: FilterOption): SearchItemModel[] {
    this.transformed = [...items];

    if (option.name === FilterOptions.ByTitle && option.value.length > 0) {
      this.filterByTitle(option.value);
    }

    return this.transformed;
  }

  filterByTitle(words: string[]): void {
    words.forEach((word) => {
      this.transformed = this.transformed.filter((item: SearchItemModel) =>
        item.snippet.title.match(new RegExp(word, 'i'))
      );
    });
  }
}
