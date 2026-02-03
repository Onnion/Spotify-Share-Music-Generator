import { Track } from "@domain/track/track.entity";
import { ok, Result } from "@libs/infrastructure/src/result";
import { TrackResponseDTO } from "../dto/track.dto";

export class TrackAssembler {
    public fromDomain(track: Track): Result<TrackResponseDTO> {
        return ok({
            albumName: track.album,
            name: track.name,
            previewUrl: track.previewUrl.value,
            thumb: track.thumb
        })
    }
}