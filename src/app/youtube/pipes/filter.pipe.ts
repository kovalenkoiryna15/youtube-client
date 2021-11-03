import { Pipe, PipeTransform } from '@angular/core';
import { FilterOptions } from 'src/app/shared/constants/settings';
import { FilterOption, SearchItemModel } from 'src/app/shared/models';

@Pipe({
  name: 'filterBy',
})
export class FilterPipe implements PipeTransform {
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
      this.transformed = this.transformed.filter((item: SearchItemModel) => item.snippet.title.match(new RegExp(word, 'i')));
    });
  }
}
