export class GenerateResponse implements MyResponseType {
    public readonly statusCode: number;
    public readonly message?: String | String[];
    public readonly data: any;
    public readonly error?: string;

    constructor(responseType: MyResponseType) {
        this.statusCode = responseType.statusCode
        this.message = responseType.message
        this.data = responseType.data
        this.error = responseType.error
    }
}
