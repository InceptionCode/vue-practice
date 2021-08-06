'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class ValidationError {
  constructor(message, ErrorDetails = null) {
    this.code = '400';
    this.message = 'Not found';
    this.message = message;
    this.errorDetails = ErrorDetails;
  }
}
exports.default = ValidationError;
//# sourceMappingURL=validation.js.map
