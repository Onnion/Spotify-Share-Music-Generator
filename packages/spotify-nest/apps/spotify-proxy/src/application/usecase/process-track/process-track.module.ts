import { Module } from "@nestjs/common";
import { IProcessTrackUseCase } from "./process-track.contract";
import { ProcessTrackUseCase } from "./process-track";

@Module({
    providers: [{
        provide: IProcessTrackUseCase,
        useClass: ProcessTrackUseCase
    }],
    imports: [],
    exports: [IProcessTrackUseCase]
}) export class ProcessTrackUseCaseModule { }