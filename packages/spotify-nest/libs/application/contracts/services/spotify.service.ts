import { Track } from '@domain/track/track.entity';
import { TrackUrlVO } from '@domain/track/vo/track-url.vo';
import { AssyncResult } from '@libs/infrastructure/src/result';

export interface ISpotifyService {
  getTrack: (trackUrl: TrackUrlVO) => AssyncResult<Track>;
}

export const ISpotifyService = Symbol('ISpotifyService');
