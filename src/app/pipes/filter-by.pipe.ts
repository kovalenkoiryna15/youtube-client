import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from '../common/models/search-item-model';

@Pipe({
  name: 'filterBy',
})
export default class FilterByPipe implements PipeTransform {
  public transformed: SearchItemModel[] = [];

  transform(items: SearchItemModel[]): SearchItemModel[] {
    this.transformed = [...items];

    // args.forEach((arg: FilterOption) => {
    //   switch (arg.filterBy) {
    //     case this.filters.ByDate: {
    //       if (arg.filterDirection === this.filters.Increase) {
    //         this.sortByOldFirst();
    //       }
    //       if (arg.filterDirection === this.filters.Decrease) {
    //         this.sortByNewFirst();
    //       }
    //       // break omitted
    //     }
    //     case this.filters.ByViewCount: {
    //       if (arg.filterDirection === this.filters.Increase) {
    //         this.sortInIncreasingOrder('snippet.statistics.viewCount');
    //       }
    //       if (arg.filterDirection === this.filters.Decrease) {
    //         this.sortInDecreasingOrder('snippet.statistics.viewCount');
    //       }
    //       // break omitted
    //     }
    //     case this.filters.ByText: {
    //       if (arg.value && arg.value.length > 0) {
    //         this.filterByText(arg.value);
    //       }
    //       // break omitted
    //     }
    //     default:
    //   }
    // });
    return this.transformed;
  }

  sortByOldFirst(): void {
    this.transformed.sort((a, b) => {
      if (new Date(a.snippet.publishedAt) > new Date(b.snippet.publishedAt))
        return 1;
      if (new Date(a.snippet.publishedAt) < new Date(b.snippet.publishedAt))
        return -1;
      return 0;
    });
  }

  sortByNewFirst(): void {
    this.transformed.sort((a, b) => {
      if (new Date(b.snippet.publishedAt) > new Date(a.snippet.publishedAt))
        return 1;
      if (new Date(b.snippet.publishedAt) < new Date(a.snippet.publishedAt))
        return -1;
      return 0;
    });
  }

  sortInIncreasingOrder(key: string): void {
    this.transformed.sort(
      (a, b) => Number((a as any)[key]) - Number((b as any)[key])
    );
  }

  sortInDecreasingOrder(key: string): void {
    this.transformed.sort(
      (a, b) => Number((b as any)[key]) - Number((a as any)[key])
    );
  }

  filterByText(words: string[]): void {
    words.forEach((word) => {
      this.transformed = this.transformed.filter((item: SearchItemModel) =>
        item.snippet.title.includes(word)
      );
    });
  }
}
