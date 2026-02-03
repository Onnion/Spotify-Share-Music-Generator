import { Body, Controller, Inject, Post } from "@nestjs/common";
import { StartProcessTrackRequest } from "./dto/track.dto";
import { IProcessTrackUseCase } from "apps/spotify-proxy/src/application/usecase/process-track/process-track.contract";
import { UrlVO } from "@domain/track/vo/url.vo";
import { TrackAssembler } from "./assembler/track.assembler";

@Controller('/track')
export class TrackController {

    constructor(
        @Inject(IProcessTrackUseCase)
        private readonly processTrackUseCase: IProcessTrackUseCase,
        private readonly trackAssembler: TrackAssembler
    ) { }

    @Post()
    public async startProcessTrack(@Body() body: StartProcessTrackRequest) {
        const trackUrlResult = UrlVO.new(body.trackUrl);
        const processTrackResult = await this.processTrackUseCase
            .execute(trackUrlResult);

        if (processTrackResult.isError()) {
            throw new Error();
        }

        const track = processTrackResult.value
        const assembledResult = this.trackAssembler
            .fromDomain(track);

        if (processTrackResult.isError()) {
            throw new Error();
        }

        return assembledResult.value

    }
}