interface MyResponseType {
    readonly  statusCode: number,
    readonly  message?: String | String[],
    readonly  data: any,
    readonly  error?: string
}