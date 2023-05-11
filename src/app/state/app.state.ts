import { ItemModel } from '../core/models/Item.interface';
import { ItemsState } from '../core/models/item.state';
import { ActionReducerMap } from '@ngrx/store';
import { itemsReducer } from './reducers/items.reducers';

export interface AppState {
  items: ItemsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items: itemsReducer,
};
