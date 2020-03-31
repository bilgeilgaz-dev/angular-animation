
export interface RequestsState {
    data: Array<DataRequest> | null;
    error: string | null;
}

export const initialRequestsState: RequestsState = {
    data: null,
    error: null
}

export interface DataRequest {
    id: string,
    created: string,
    modified: string,
    companyId: string,
    companyName: string,
    logoUrl: string,
    thumbUrl: string,
    requestDate: string,
    pendingDate: string,
    dataRequestType: number,
    dataRequestStatus: number,
    requesterProfileId: string,
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    mobileCountryPrefix: string,
    mobile: number,
    phoneCountryPrefix: string,
    phone: number,
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    postalCode: string,
    city: string,
    state: string,
    countryCode: string,
    identifier: string,
    receiverCompanyName: string,
    receiverFirstName: string,
    receiverMiddleName: string,
    receiverLastName: string,
    receiverEmail: string,
    comment: string,
    receiveCopyOfData: boolean
}