import {
  FilterOptions,
  SortDirections,
  SortOptions,
} from '../constants/settings';

export interface SettingsOption {
  name:
    | SortOptions.ByDate
    | SortOptions.ByViewCount
    | FilterOptions.ByTags
    | FilterOptions.ByTitle;
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

export interface SettingsOptionsState {
  [SortOptions.ByDate]: SortOption;
  [SortOptions.ByViewCount]: SortOption;
  [FilterOptions.ByTitle]: FilterOption;
  [FilterOptions.ByTags]: FilterOption;
}

export interface SortOptionsState {
  [SortOptions.ByDate]: SortOption;
  [SortOptions.ByViewCount]: SortOption;
}
