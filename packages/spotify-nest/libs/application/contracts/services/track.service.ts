import { Track } from '@domain/track/track.entity';
import { UrlVO } from '@domain/track/vo/url.vo';
import { AssyncResult } from '@libs/infrastructure/src/result';

export interface ITrackService {
  getTrack: (trackUrl: UrlVO) => AssyncResult<Track>;
}

export const ITrackService = Symbol('ITrackService');
