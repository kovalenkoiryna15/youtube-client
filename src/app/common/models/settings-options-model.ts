import {
  FilterOptions,
  SortDirections,
  SortOptions,
} from '../constants/settings';

export interface SettingsOption {
  name: string;
  enabled: boolean;
}

export interface SortOption extends SettingsOption {
  name: SortOptions.ByDate | SortOptions.ByViewCount;
  sortDirection: SortDirections.Increase | SortDirections.Decrease;
}

export interface FilterOption extends SettingsOption {
  name: FilterOptions.ByTags | FilterOptions.ByTitle;
  value: string[];
}

export interface SettingsOptionsStatus {
  [SortOptions.ByDate]: boolean;
  [SortOptions.ByViewCount]: boolean;
  [FilterOptions.ByTitle]: boolean;
  [FilterOptions.ByTags]: boolean;
}
