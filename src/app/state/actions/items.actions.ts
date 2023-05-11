import { createAction, props } from '@ngrx/store';
import { ItemModel } from '../../core/models/Item.interface';

export const loadItems = createAction(
  '[Item List] Load Items' // type*
);

export const loadedItems = createAction(
  '[Item List] Loaded success', //type*
  props<{ items: ItemModel[] }>() //props - optionals
);
