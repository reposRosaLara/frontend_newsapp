export interface NewsInterface {
    id:             number;
    title:          string;
    url:            string;
    image_url:      string;
    news_site:      string;
    summary:        string;
    published_at:   Date;
    updated_at:     Date;
    featured:       boolean;
    launches?:       any[];
    events?:         any[];
    addedToFav_at?:    Date;
}
