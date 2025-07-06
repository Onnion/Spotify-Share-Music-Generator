import { Injectable } from '@nestjs/common';
import { ISpotifyService } from 'libs/application/contracts/services/spotify.service';

@Injectable()
export class SpotifyService implements ISpotifyService { }
