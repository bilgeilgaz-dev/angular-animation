export interface ProfileState {
  data: Profile | null;
  error: string | null;
}

export const initialProfileState = {
    data: null,
    error: null
}

export interface Profile {
    id: string,
    firstName: string,
    middleName: string,
    lastName: string,
    fullName: string,
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    postalCode: number,
    city: string,
    state: string,
    countryCode: string,
    email: string,
    mobileCountryPrefix: string,
    mobile: number,
    phoneCountryPrefix: string,
    phone: number,
    hasVerifiedEmail: boolean,
    latestNotifyRead: string,
    isAdminUser: boolean,
    hasRelations: boolean
}