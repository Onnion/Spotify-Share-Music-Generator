
export const VIDEO_EXCHANGE = 'video';
export const VIDEO_ROUTING_KEY = 'video.requests';

export interface Context {
    readonly exchange: string;
    readonly routingKey: string;
};

export const VideoExchange: Context = {
    exchange: VIDEO_EXCHANGE,
    routingKey: VIDEO_ROUTING_KEY,
};