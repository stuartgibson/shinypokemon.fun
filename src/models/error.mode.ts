interface IPageError {
  readonly errorMessage:string;
}

export class PageError implements IPageError {
  readonly errorMessage:string;

  constructor(data:{errorMessage:string}) {
    this.errorMessage = data['errorMessage'];
  }
}
