import { SortDirections } from '../constants/settings';

export interface SettingsOption {
  name: string;
}

export interface SortOption extends SettingsOption {
  name: string;
  sortDirection: SortDirections.Increase | SortDirections.Decrease;
}

export interface FilterOption extends SettingsOption {
  name: string;
  value: string[];
}
