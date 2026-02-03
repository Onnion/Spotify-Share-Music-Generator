import { UrlVO, UrlVOProps } from "./vo/url.vo";

type ConstructorProps = {
  trackUrl: UrlVOProps;
  previewUrl?: UrlVOProps;
  album?: string;
  name?: string;
  thumb?: string;
};

type ConstructorArgs = {
  trackUrl: UrlVO;
  previewUrl?: UrlVO;
  album?: string;
  name?: string;
  thumb?: string;
};

export class Track {
  private readonly _trackUrl: UrlVO;
  private readonly _previewUrl: UrlVO;
  private readonly _album: string;
  private readonly _name: string;
  private readonly _thumb: string;

  private constructor(args: ConstructorArgs) {
    this._previewUrl = args.previewUrl;
    this._album = args.album;
    this._name = args.name;
    this._thumb = args.thumb;
    this._trackUrl = args.trackUrl;
  }

  public static new(props: ConstructorProps): Track {
    return new Track({
      previewUrl: UrlVO.new(props.previewUrl),
      trackUrl: UrlVO.new(props.name),
      album: props.album,
      name: props.name,
      thumb: props.name,
    });
  }

  get album() {
    return this._album
  }

  get name() {
    return this._name
  }

  get thumb() {
    return this._thumb
  }

  get previewUrl() {
    return this._previewUrl
  }
}
