
import express from 'express';
import RabbitmqService from '../services/rabbitmq';
import SpotifySerice from '../services/spotify';
import { VideoExchange } from '../utils/rabbitmq';

const router = express.Router();
const spotifyService = new SpotifySerice();

router.get('/:trackUrl', async function (req, res) {
    try {
        const { trackUrl } = req.params;
        const { preview_url, album: { images } } = await spotifyService.getTrack(trackUrl);
        const thumbs = images.map(image => image.url);
        const rabbitmqService = new RabbitmqService(VideoExchange);
    
        await rabbitmqService.publish({ preview_url, thumbs, });
    
        res.status(200).send({ error: false, status: 'published' });
    } catch (error) {
        res.status(500).send({ error: true, status: 'unpublished', message: error.message });
    }
});

export default router;