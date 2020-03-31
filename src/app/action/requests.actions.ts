import { Action } from '@ngrx/store';
import { DataRequest } from '../store/requests.interface';

export enum RequestsActionTypes {
    LoadRequests = 'Load Requests',
    RequestsError = 'Requests Error'
}

export class RequestsAction implements Action {
    type: string;
    payload: {
      dataRequests: Array<DataRequest>,
      error: string
    };
  }
  
  export class LoadRequests implements Action {
    readonly type = RequestsActionTypes.LoadRequests;
  
    constructor(readonly payload: {dataRequests: Array<DataRequest>}) {

    }
  }
  
  export class RequestsError implements Action {
    readonly type = RequestsActionTypes.RequestsError;
  
    constructor(readonly payload: {error: string}) {
  
    }
  }