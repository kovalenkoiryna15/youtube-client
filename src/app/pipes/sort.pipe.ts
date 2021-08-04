import { Pipe, PipeTransform } from '@angular/core';
import { SortDirections, SortOptions } from '../common/constants/settings';
import { SearchItemModel } from '../common/models';

@Pipe({
  name: 'sortBy',
})
export default class SortPipe implements PipeTransform {
  public transformed: SearchItemModel[] = [];

  transform(
    items: SearchItemModel[],
    optionName: string,
    direction: string
  ): SearchItemModel[] {
    this.transformed = [...items];

    if (optionName === SortOptions.ByDate) {
      if (direction === SortDirections.Decrease) {
        this.sortByNewFirst();
      }
      if (direction === SortDirections.Increase) {
        this.sortByOldFirst();
      }
    }

    if (optionName === SortOptions.ByViewCount) {
      this.sortByViewCount(direction);
    }

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

  sortByViewCount(direction: string) {
    if (direction === SortDirections.Decrease) {
      this.transformed.sort(
        (a, b) =>
          Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
      );
    }
    if (direction === SortDirections.Increase) {
      this.transformed.sort(
        (a, b) =>
          Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
      );
    }
  }
}
