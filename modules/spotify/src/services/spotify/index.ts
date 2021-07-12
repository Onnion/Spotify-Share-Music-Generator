import Spotify from 'node-spotify-api';
import { Track } from '../../types/track';
import { TRACK_REGEX } from '../../utils/regex';

export default class SpotifySerice {
    private getSpotifyApp = () => {
        const spotifyApi = new Spotify({
            id: process.env.SPOTIFY_CLIENT_ID,
            secret: process.env.SPOTIFY_CLIENT_SECRET,
        });

        return spotifyApi;
    }
    private getTrackToken = (trackUrl: string): string => {
        const [prefix, token] = trackUrl.match(TRACK_REGEX);
        return token;
    }

    getTrack = async (trackUrl: string): Promise<Track> => {
        try {
            const spotifyApi = this.getSpotifyApp();
            const token = this.getTrackToken(trackUrl);
            const track = await spotifyApi.request(`${process.env.SPOTIFY_URL}/tracks/${token}`) as Track;

            return track;

        } catch (error) {
            console.log(error.message);
        }
    };
}