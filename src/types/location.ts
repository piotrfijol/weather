export interface AutcompleteSuggestion {
    id: string,
    city: string,
    country: string,
    state: string,
    coords: {
        longitude: number,
        latitude: number
    }
}

export type SearchLocation = string | GeolocationPosition | AutcompleteSuggestion;