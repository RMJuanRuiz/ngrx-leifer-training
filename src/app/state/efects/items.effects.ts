import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ShowCaseService } from '../../modules/show-case/services/show-case.service';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Item List] Load Items'),
      exhaustMap(() =>
        this.showCaseService.getDataApi().pipe(
          map((items) => ({ type: '[Item List] Loaded success', items })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private showCaseService: ShowCaseService
  ) {}
}
