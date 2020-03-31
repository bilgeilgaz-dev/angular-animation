import { Profile } from './profile.interface';
import { Relation } from './relations.interface';
import { DataRequest } from './requests.interface';

export interface AllData {
    profile: Profile;
    relations: Relation[];
    requests: DataRequest[];
}