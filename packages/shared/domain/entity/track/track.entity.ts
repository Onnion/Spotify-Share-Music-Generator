type ConstructorProps = {
  previewUrl: string;
  album: string;
  name: string;
};

type ConstructorArgs = {
  preview_url: string;
  album: string;
  name: string;
};

export class Track {
  private readonly preview_url;
  private readonly album;
  private readonly name;

  private constructor(args: ConstructorArgs) {
    this.preview_url = args.preview_url;
    this.album = args.album;
    this.name = args.name;
  }

  static new(props: ConstructorProps): Track {
    // @TODO: Adicionar valiação

    return new Track({
      preview_url: props.previewUrl,
      album: props.album,
      name: props.name,
    });
  }
}
