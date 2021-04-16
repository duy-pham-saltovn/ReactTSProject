interface IHandleResponse {
    isError: boolean;
    isValidate: boolean;
    message: any;
    results: any;
    statusCode: number
}

/**
 * 
 * @param res:Response
 * @return IHandleResponse
 */
export default async function HandleResponse(res: Response) {
    let isError = false
    let isValidate = false
    let message = null
    let results = null
    let statusCode = res.status
    let isOk = res.ok

    if (isOk && statusCode >= 200 && statusCode < 300) {
        results = await res.json().catch(err => {
            console.log(err);
            isError = true
            message = "error"
        });
    }

    if (!isOk && statusCode === 422) {
        isValidate = true;
        message = await res.json();
    }

    if (!isOk && statusCode === 404) {
        isError = true;
        message = res.statusText;
    }

    if (!isOk && statusCode === 401) {
        isError = true;
        message = 'Token Expired, Vui lòng đăng nhập lại';
    }

    if (!isOk && statusCode === 500) {
        isError = true;
        message = res.statusText;
    }

    return { isError, isValidate, message, results, statusCode } as IHandleResponse;
};
