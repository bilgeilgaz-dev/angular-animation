import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { HTTPService } from '../service/http.service';
import { LoadProfile, ProfileActionTypes } from '../action/profile.actions';
import { LoadRelations, RelationsError } from '../action/relations.actions';
import { LoadRequests, RequestsError } from '../action/requests.actions';
import { AppState } from '../store/application-state.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { ListResponse } from '../store/list-response.interface';
import { DataRequest } from '../store/requests.interface';

@Injectable()
export class ProfileEffects {

  @Effect()
  loadProfileRelations$ = this.actions$
    .pipe(
      ofType<LoadProfile>(ProfileActionTypes.LoadProfile),
      mergeMap((action) => this.httpService.getRelations()
        .pipe(
          map(data => {
            return (new LoadRelations({ relations: data.items }));
          }),
          catchError((error: HttpErrorResponse) => of(new RelationsError({ error: error.error }))),
        ))
    );
  
  @Effect()
  loadProfileRequests$ = this.actions$
    .pipe(
      ofType<LoadProfile>(ProfileActionTypes.LoadProfile),
      mergeMap((action) => this.httpService.getRequests()
      .pipe(
        map((data: ListResponse<DataRequest>) => {
          return (new LoadRequests({ dataRequests: data.items }));
        }),
        catchError((error: HttpErrorResponse) => of(new RequestsError({ error: error.error })))
      )
    )
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private httpService: HTTPService) { }

}