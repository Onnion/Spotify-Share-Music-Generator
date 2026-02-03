import { Track } from "@domain/track/track.entity"
import { UrlVO } from "@domain/track/vo/url.vo"
import { AssyncResult } from "@libs/infrastructure/src/result"

export interface IProcessTrackUseCase {
    execute(trackUrl: UrlVO): AssyncResult<Track>
}

export const IProcessTrackUseCase = Symbol('IProcessTrackUseCase')