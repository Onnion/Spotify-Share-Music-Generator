import { Module } from '@nestjs/common';
import { HttpControllerModule } from './cmd/server/http-controller/http-controller.module';

@Module({
  imports: [HttpControllerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
