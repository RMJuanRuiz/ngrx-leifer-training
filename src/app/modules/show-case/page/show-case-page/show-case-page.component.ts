import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadItems,
  loadedItems,
} from '../../../../state/actions/items.actions';
import { Observable } from 'rxjs';
import { selectItemsLoading } from '../../../../state/selectors/items.selectors';
import { ShowCaseService } from '../../services/show-case.service';
import { ItemModel } from '../../../../core/models/Item.interface';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<any>,
    private showCaseService: ShowCaseService
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectItemsLoading);
    this.store.dispatch(loadItems());

    this.showCaseService.getDataApi().subscribe((items: ItemModel[]) => {
      this.store.dispatch(loadedItems({ items }));
    });
  }
}
