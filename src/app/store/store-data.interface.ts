import { Profile } from './profile.interface';
import { DataRequest } from './requests.interface';
import { Relation } from './relations.interface';

export interface StoreData {
    profile: Profile;
    relations: Relation;
    requests: DataRequest;
}