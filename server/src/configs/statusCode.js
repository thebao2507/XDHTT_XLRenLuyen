// 1xx informational response – the request was received, continuing process
// 2xx successful – the request was successfully received, understood, and accepted
// 3xx redirection – further action needs to be taken in order to complete the request
// 4xx client error – the request contains bad syntax or cannot be fulfilled
// 5xx server error – the server failed to fulfil an apparently valid request

export const httpStatusCode = {
    OK: { code: 200, message: 'OK' },
    CREATED: { code: 201, message: 'Created' },
    BAD_REQUEST: { code: 400, message: 'Bad Request' },
    UNAUTHORIZED: { code: 401, message: 'Unauthorized' },
    NOT_FOUND: { code: 404, message: 'Not Found' },
    INTERNAL_SERVER_ERROR: { code: 500, message: 'Internal Server Error' }
}