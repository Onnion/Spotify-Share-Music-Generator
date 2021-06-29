type ExternalUrl = {
    spotify: string
};

type Artist = {
    external_urls: ExternalUrl,
    href: string,
    id: string,
    name: string,
    type: string,
    uri: string,
};

type Image = {
    height: number,
    url:string,
    width: number
};

type Album = {
    album_type: string,
    artists: Artist[],
    available_markets: string[],
    external_urls: ExternalUrl,
    href: string,
    id: string,
    images: Image[],
    name: string,
    release_date: string,
    release_date_precision: string,
    total_tracks: number,
    type: string,
    uri: string,
};

export type Track = {
    album: Album,
    artists: Artist[],
    available_markets: string[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_ids: {
        isrc: string,
    }
    external_urls: ExternalUrl,
    href: string,
    id: string,
    is_local: false,
    name: string,
    popularity: number,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string,
};
