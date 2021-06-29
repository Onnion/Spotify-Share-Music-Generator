import express from 'express';
import SpotifySerice from './services/spotify';

const app = express();
const spotifyService = new SpotifySerice();

app.get('/:trackUrl', async (req, res) => {
    const { trackUrl } = req.params;
    const { preview_url, album: { images } } = await spotifyService.getTrack(trackUrl);
    const thumbs = images.map(image => image.url);
    
    res.send({ preview_url, thumbs, });
});
  
app.listen(process.env.APP_PORT, () => {
    console.log(`http://localhost:${process.env.APP_PORT}`)
});
