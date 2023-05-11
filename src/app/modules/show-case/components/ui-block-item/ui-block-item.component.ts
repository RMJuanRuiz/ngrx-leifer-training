import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectItemsList } from '../../../../state/selectors/items.selectors';
import { AppState } from '../../../../state/app.state';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css'],
})
export class UiBlockItemComponent implements OnInit {
  items$: Observable<any> = new Observable();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.items$ = this.store.select(selectItemsList);
  }
}
