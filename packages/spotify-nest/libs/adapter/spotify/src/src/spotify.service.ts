import { Track } from '@domain/track/track.entity';
import { TrackUrlVO } from '@domain/track/vo/track-url.vo';
import { AssyncResult, ok } from '@libs/infrastructure/src/result';
import { Injectable, Logger } from '@nestjs/common';
import { ISpotifyService } from '@libs/application/contracts/services/spotify.service';

@Injectable()
export class SpotifyService implements ISpotifyService {
  private readonly logger = new Logger(SpotifyService.name);

  public async getTrack(trackUrl: TrackUrlVO): AssyncResult<Track> {
    const fetchResult = await new Promise((resolve) => resolve('testando'));

    this.logger.log(`getTrack called with URL: ${trackUrl.value}`, fetchResult);

    return ok(
      Track.new({
        previewUrl: 'https://example.com/preview.mp3',
        album: 'Example Album',
        name: 'Example Track',
      }),
    );
  }
}
