import { Connection, Channel, connect } from "amqplib";
import { Context } from "../../utils/rabbitmq";

class RabbitmqServer {
    private conn: Connection;
    private channel: Channel;

    constructor(private uri: string) { }

    async start(): Promise<void> {
        this.conn = await connect(this.uri);
        this.channel = await this.conn.createChannel();
    }

    async publishInExchange(
        exchange: string,
        routingKey: string,
        message: string
    ): Promise<boolean> {
        return this.channel.publish(exchange, routingKey, Buffer.from(message));
    }
}

export default class RabbitmqService {
    private rabbitmq = new RabbitmqServer(`${process.env.RABBITMQ_URI}`);
    private context: Context;

    constructor(context: Context) {
        this.context = context;
    }

    async publish(message: any) {
        await this.rabbitmq.start();
        await this.rabbitmq
            .publishInExchange(this.context.exchange, this.context.routingKey, JSON.stringify(message));
    }
}
