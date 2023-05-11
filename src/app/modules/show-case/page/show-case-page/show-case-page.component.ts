import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from '../../../../state/actions/items.actions';
import { Observable } from 'rxjs';
import { selectItemsLoading } from '../../../../state/selectors/items.selectors';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectItemsLoading);
    this.store.dispatch(loadItems());
  }
}
