import { Action } from '@ngrx/store';
import { Relation } from '../store/relations.interface';

export enum RelationsActionTypes {
    LoadRelations = 'Load Relations',
    RelationsError = 'Relations Error'
}

export class RelationsAction implements Action {
    type: string;
    payload: {
      relations: Array<Relation>,
      error: string
    };
  }
  
  export class LoadRelations implements Action {
    readonly type = RelationsActionTypes.LoadRelations;
  
    constructor(readonly payload: {relations: Array<Relation>}) {

    }
  }
  
  export class RelationsError implements Action {
    readonly type = RelationsActionTypes.RelationsError;
  
    constructor(readonly payload: {error: string}) {
  
    }
  }