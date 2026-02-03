import { ITrackService } from '@libs/application/contracts/services/track.service';
import { Module } from '@nestjs/common';
import { SpotifyService } from './spotify.service';

@Module({
  providers: [
    {
      provide: ITrackService,
      useClass: SpotifyService,
    },
  ],
  exports: [ITrackService],
})
export class SpotifyModule {}
