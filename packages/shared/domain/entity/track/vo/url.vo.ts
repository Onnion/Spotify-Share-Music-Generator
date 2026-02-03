export type UrlVOProps = string;

export class UrlVO {
  private readonly _value: string;

  constructor(url: string) {
    this._value = url;
  }

  public static new(url: string): UrlVO {
    const value = url.trim();

    return new UrlVO(value);
  }

  get value(): string {
    return this._value;
  }
}
