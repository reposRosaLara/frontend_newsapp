import { FavoritesResponse } from "./favorites-response";
import { Metadata } from "./metadata";

export interface FavoritesResponseRest {
    metadata:           Metadata[];
    favoritesResponse:  FavoritesResponse;
}
