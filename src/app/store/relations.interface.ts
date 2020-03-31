export interface RelationsState {
        data: Array<Relation> | null;
        error: string | null;
}

export const initialRelationsState: RelationsState = {
        data: null,
        error: null
}

export interface Relation {
        id: string,
        companyId: string,
        companyName: string,
        companyWebsite: string,
        companyLogoUrl: string,
        companyThumbUrl: string,
        companyImportance: number,
        companyDomain: string,
        isActive: boolean,
        alternateRequestUrl: string,
        isWhiteFlagged: boolean,
        relationStartDate: string,
        relationEndDate: string,
        dataRequests: [any],
        sector: number
} 