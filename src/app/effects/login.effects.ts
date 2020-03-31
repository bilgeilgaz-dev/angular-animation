import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { HTTPService } from '../service/http.service';
import { LoadProfile, ProfileError } from '../action/profile.actions';
import { AppState } from '../store/application-state.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { UserLogin, LoginActionTypes } from '../action/login.actions';

@Injectable()
export class LoginEffects {

  @Effect()
  login$ = this.actions$
    .pipe(
      ofType<UserLogin>(LoginActionTypes.Login),
      mergeMap((action) => this.httpService.getProfile()
      .pipe(
        map(data => {
          return (new LoadProfile({profile: data}));
        }),
        catchError((error: HttpErrorResponse) => of(new ProfileError({error: error.error})))
      ))
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private httpService: HTTPService) { }

}