export type PreviewUrlVOProps = string;

export class PreviewUrlVO {
  private readonly _value: string;

  constructor(url: string) {
    this._value = url;
  }

  public static new(url: string): PreviewUrlVO {
    const value = url.trim();

    return new PreviewUrlVO(value);
  }

  get value(): string {
    return this._value;
  }
}
