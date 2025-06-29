
import express from 'express';
import RabbitmqService from '../services/rabbitmq';
import SpotifySerice from '../services/spotify';
import { VideoExchange } from '../utils/rabbitmq';

const router = express.Router();
const spotifyService = new SpotifySerice();

router.post('/', async function (req, res) {
    try {
        const { track_url } = <{ track_url: string }>req.body;
        const { preview_url, album, name } = await spotifyService.getTrack(track_url);
        const thumb = album.images[0]?.url;

        const rabbitmqService = new RabbitmqService(VideoExchange);
        await rabbitmqService.publish({ album_name: album.name, name, preview_url, thumb, });

        res.status(200).send({ error: false, status: 'published', data: { album_name: album.name, name, preview_url, thumb, } });
    } catch (error) {
        res.status(500).send({ error: true, status: 'unpublished', message: error.message });
    }
});

export default router;