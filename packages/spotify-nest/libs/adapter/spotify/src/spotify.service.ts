import { Track } from '@domain/track/track.entity';
import { AssyncResult, ok } from '@libs/infrastructure/src/result';
import { Injectable, Logger } from '@nestjs/common';
import { ITrackService } from '@libs/application/contracts/services/track.service';
import { UrlVO } from '@domain/track/vo/url.vo';

@Injectable()
export class SpotifyService implements ITrackService {
  private readonly logger = new Logger(SpotifyService.name);

  public async getTrack(trackUrl: UrlVO): AssyncResult<Track> {
    const fetchResult = await new Promise((resolve) => resolve('testando'));

    this.logger.log(`getTrack called with URL: ${trackUrl.value}`, fetchResult);

    return ok(
      Track.new({
        trackUrl: 'https://example.com/preview.mp3',
        previewUrl: 'https://example.com/preview.mp3',
        album: 'Example Album',
        name: 'Example Track',
      }),
    );
  }
}
