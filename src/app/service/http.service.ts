
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../store/profile.interface';
import { ListResponse } from '../store/list-response.interface';
import { Relation } from '../store/relations.interface';
import { map } from 'rxjs/operators';
import { LoginResponse, LoginErrorResponse } from '../store/login-response.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../store/application-state.interface';
import { selectLogin } from '../reducer/login.reducers';
import { DataRequest } from '../store/requests.interface';

@Injectable()
export class HTTPService {
    private authToken: string;

    URL= 'https://safeprofile-staging.azurewebsites.net';
    GET_PROFILE= '/api/profiles';
    GET_RELATIONS= '/api/relations?isActive=true';
    GET_REQUESTS ='/api/datarequests';

    constructor(
        private http: HttpClient,
        private store: Store<AppState>
    )
    {
        this.store.select(selectLogin).subscribe(
            (data: LoginResponse) => {
                if (data) {
                    this.authToken = data.token_type + ' ' + data.access_token;
                }
            }
        );
    }

    private getHeaders() {
        return new HttpHeaders({
            'Authorization': this.authToken
        });
    } 

    login(username: string, password: string) {
        const user = {
            'userName': username,
            'password': password
        };

        const loginUrl = this.URL + '/api/auth/login';
        return this.http.post(loginUrl, user)
            .pipe(
                map((data: LoginResponse | LoginErrorResponse) => {
                    if (data['error']) {
                        throw new HttpErrorResponse({
                            error: data['error_description'],
                            status: 400,
                            statusText: 'Bad Request',
                            url: loginUrl
                        });
                    }

                    return data;
                })
            );
    }

    getProfile(){
        return this.http.get<Profile>(this.URL + this.GET_PROFILE, {headers: this.getHeaders()});
    }

    getRelations() {
        return this.http.get<ListResponse<Relation>>(this.URL + this.GET_RELATIONS, {headers: this.getHeaders()});
      }

    getRequests(){
        return this.http.get<ListResponse<DataRequest>>(this.URL + this.GET_REQUESTS, {headers: this.getHeaders()});
    }
}