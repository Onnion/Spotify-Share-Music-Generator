export type AssyncResult<T> = Promise<Result<T>>;

export class Result<T> {
  private _value: T;
  private _isError: boolean;
  private _isOk: boolean;

  constructor(value: T, isOk: boolean) {
    this._value = value;
    this._isOk = isOk;
    this._isError = !isOk;
  }

  private isValueOk(value: T): value is T {
    return this.isOk();
  }

  public get value(): T {
    if (!this.isValueOk(this._value)) {
      throw new Error('Invalid value access: Result is in error state');
    }

    return this._value;
  }

  public isError(): boolean {
    return this._isError;
  }

  public isOk(): boolean {
    return this._isOk;
  }
}

export const ok = <T>(value: T): Result<T> => {
  return new Result<T>(value, true);
};

// @TODO: Remover any
export const err = <T>(e: any): Result<T> => {
  return new Result<T>(e, false);
};
