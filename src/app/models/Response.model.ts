export class Response {

  ok: string;
  errorMessage: string;
  payload: Array<any>;

  public Response(ok: string, errorMessage: string, payload: any[]) {
    this.ok = ok;
    this.errorMessage = errorMessage;
    this.payload = payload;
  }
}
