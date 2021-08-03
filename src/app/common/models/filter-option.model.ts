import Filters from '../constants/filters';

export interface FilterOption {
  filterBy: string;
}

export interface SortOption extends FilterOption {
  filterBy: string;
  filterDirection: Filters.Increase | Filters.Decrease;
}

export interface MatchOption extends FilterOption {
  filterBy: string;
  value: string[];
}
