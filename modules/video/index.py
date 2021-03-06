import pika
import os
import json

from dotenv import load_dotenv
from src.services.cleanner.index import CleannerService
from src.services.image.index import ImageService

load_dotenv()

rabbitmq_uri = os.getenv('RABBITMQ_URI')
url = f"{rabbitmq_uri}/%2F"
connection = pika.BlockingConnection(pika.URLParameters(url))
channel = connection.channel()


def callback(channel, method, properties, body):
    print(f"[x] Received, processing...")
    data = json.loads(body.decode('utf-8'))
    image_service = ImageService()
    cleanner_service = CleannerService()

    image_service.createVideo(data['thumb'], data['preview_url'], data['name'])
    cleanner_service.cleanImages()


channel.basic_consume(queue=os.getenv('RABBITMQ_QUEUE_CREATE'),
                      on_message_callback=callback, auto_ack=True)

print("[*] Wait for messages")
channel.start_consuming()
