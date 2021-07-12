export interface Context {
    readonly exchange: string;
    readonly routingKey: string;
};

export const VideoExchange: Context = {
    exchange: process.env.RABBITMQ_EXCHANGE,
    routingKey: process.env.RABBITMQ_ROUTING_KEY_CREATE,
};