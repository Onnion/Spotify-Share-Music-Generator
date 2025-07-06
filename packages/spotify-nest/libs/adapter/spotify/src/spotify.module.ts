import { Module } from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import { ISpotifyService } from '@contracts/services/spotify.service';

@Module({
  providers: [
    {
      provide: ISpotifyService,
      useClass: SpotifyService,
    },
  ],
  exports: [ISpotifyService],
})
export class SpotifyModule {}
