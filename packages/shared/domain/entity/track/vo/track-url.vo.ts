export type TrackUrlVOProps = string;

export class TrackUrlVO {
  private readonly _value: string;

  constructor(url: string) {
    this._value = url;
  }

  public static new(url: string): TrackUrlVO {
    const value = url.trim();

    return new TrackUrlVO(value);
  }

  get value(): string {
    return this._value;
  }
}
