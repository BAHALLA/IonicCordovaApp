export interface PlaceModel {
    title: string;
    city?: string;
    country?: string;
    selected?: boolean;
    timestamp?: number;
    coordinates ?:{
        longitude: number;
        latitude: number;
    };
    photos?: string[];
}
