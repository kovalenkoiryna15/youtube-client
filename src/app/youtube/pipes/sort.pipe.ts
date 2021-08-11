import { Pipe, PipeTransform } from '@angular/core';
import { SortDirections, SortOptions } from 'src/app/shared/constants/settings';
import { SearchItemModel, SortOption } from 'src/app/shared/models';

@Pipe({
  name: 'sortBy',
})
export class SortPipe implements PipeTransform {
  public transformed: SearchItemModel[] = [];

  transform(items: SearchItemModel[], option: SortOption): SearchItemModel[] {
    const { name, sortDirection } = option;
    this.transformed = [...items];

    if (name === SortOptions.ByDate) {
      this.sortByDate(sortDirection);
    }

    if (name === SortOptions.ByViewCount) {
      this.sortByViewCount(sortDirection);
    }

    return this.transformed;
  }

  sortByDate(sortDirection: string): void {
    if (sortDirection === SortDirections.Decrease) {
      this.sortByNewFirst();
    }
    if (sortDirection === SortDirections.Increase) {
      this.sortByOldFirst();
    }
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

  sortByViewCount(sortDirection: string): void {
    if (sortDirection === SortDirections.Decrease) {
      this.transformed.sort(
        (a, b) =>
          Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
      );
    }
    if (sortDirection === SortDirections.Increase) {
      this.transformed.sort(
        (a, b) =>
          Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
      );
    }
  }
}
