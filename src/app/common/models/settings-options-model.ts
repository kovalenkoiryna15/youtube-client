import { SortDirections } from '../constants/settings';

export interface SettingsOption {
  name: string;
  enabled: boolean;
}

export interface SortOption extends SettingsOption {
  sortDirection: SortDirections.Increase | SortDirections.Decrease;
}

export interface FilterOption extends SettingsOption {
  value: string[];
}

export interface SortOptionsStatus {
  isSortByDateEnabled: boolean;
  isSortByViewCountEnabled: boolean;
}
