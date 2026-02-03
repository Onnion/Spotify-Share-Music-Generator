import { Track } from "@domain/track/track.entity";
import { UrlVO } from "@domain/track/vo/url.vo";
import { ITrackService } from "@libs/application/contracts/services/track.service";
import { AssyncResult, err, ok } from "@libs/infrastructure/src/result";
import { Inject, Injectable } from "@nestjs/common";
import { IProcessTrackUseCase } from "./process-track.contract";

@Injectable()
export class ProcessTrackUseCase implements IProcessTrackUseCase {
  constructor(@Inject(ITrackService) private readonly trackService: ITrackService) { }

  async execute(trackUrl: UrlVO): AssyncResult<Track> {
    const trackResult = await this.trackService.getTrack(trackUrl);

    if (trackResult.isError()) {
      return err(new Error());
    }

    const track = trackResult.value;

    // @TODO: Publish in kafka

    return ok(track);
  }
}
