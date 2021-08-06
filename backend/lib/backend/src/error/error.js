"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerError {
    constructor(error, message = ServerError.InternalServerError, code = 500) {
        this.code = 500;
        this.code = code;
        this.message = message;
        this.errorDetails = `${error.name || ''} ${error.message}`;
    }
}
exports.default = ServerError;
ServerError.InternalServerError = 'Oops something went wrong on our end. Internal Server Error';
//# sourceMappingURL=error.js.map
