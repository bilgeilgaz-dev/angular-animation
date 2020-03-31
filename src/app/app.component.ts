import { Component } from '@angular/core';

import "@angular/compiler";
import { Profile } from './store/profile.interface';
import { HTTPService } from './service/http.service';
import { Store, select } from '@ngrx/store';
import { LoadProfile, ProfileError } from './action/profile.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { selectProfile } from './reducer/profile.reducers';
import { AppState } from './store/application-state.interface';
import { Relation } from './store/relations.interface';
import { selectRelations } from './reducer/relations.reducers';
import { Observable } from 'rxjs';
import { LoginResponse, LoginErrorResponse } from './store/login-response.interface';
import { UserLogin, LoginError } from './action/login.actions';
import { selectLoginError } from './reducer/login.reducers';
import { DataRequest } from './store/requests.interface';
import { selectRequests } from './reducer/requests.reducer';

declare const drawChart: any;
declare const countup: any;



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Data Store PoC';

    public loginError$: Observable<string>;
    public relations$: Observable<Array<Relation>>;
    public profile$: Observable<Profile>;
    public requests$: Observable<Array<DataRequest>>;

    constructor(public httpService: HTTPService, private store: Store<AppState>) {
        this.loginError$ = this.store.pipe(select(selectLoginError));
        this.profile$ = this.store.pipe(select(selectProfile));
        this.relations$ = this.store.pipe(select(selectRelations));
        this.requests$ = this.store.pipe(select(selectRequests));

    }

    onClick() {
        countup();
      }

    ngOnInit() {

        this.httpService.login('bet@safeonline.dk', 'Bilge123.').subscribe(
            (data: LoginResponse) => {
                // localStorage.setItem('access_token', data.token_type + ' ' + data.access_token);
                this.store.dispatch(new UserLogin({ response: data }));
            },
            (err: HttpErrorResponse) => {
                this.store.dispatch(new LoginError({ error: err.error }));
            }


        );

        drawChart();
        countup();

    }

    public getProfile() {
        this.httpService.getProfile().subscribe(
            (data: Profile) => {
                this.store.dispatch(new LoadProfile({ profile: data }))
            },
            (err: HttpErrorResponse) => {
                this.store.dispatch(new ProfileError({ error: err.message }))
            }
        )
    }

}
