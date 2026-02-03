import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';

@Module({
  imports: [],
  controllers: [TrackController],
  providers: [],
})
export class HttpControllerModule {}