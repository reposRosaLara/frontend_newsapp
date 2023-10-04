import { NewsInterface } from "./news-interface";

export interface PagingInterface {
    count:         number;
    next:          string;
    previous:      string;
    results:       NewsInterface[];
}
