"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.defaultAdmin = void 0;
const tslib_1 = require("tslib");
const functions = tslib_1.__importStar(require("firebase-functions"));
const admin = tslib_1.__importStar(require("firebase-admin"));
const express_1 = tslib_1.__importDefault(require("express"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const routes = tslib_1.__importStar(require("./routes"));
const error_1 = tslib_1.__importDefault(require("./error/error"));
exports.defaultAdmin = admin.initializeApp();
const env = process.env.ENVIRONMENT;
console.info(`In ${env} environment`);
const isDev = env === 'development';
const isTesting = env === 'testing';
console.info('Defining server');
exports.server = express_1.default();
exports.server.use(cors_1.default({ origin: true }))
    .use(body_parser_1.default.urlencoded({ extended: false }))
    .use(body_parser_1.default.json());
// Routes
routes.register(exports.server);
// Error Middleware
exports.server.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    // logic
    const statusCode = err.code || err.statusCode;
    if (statusCode === 500) {
        res.status(statusCode).json(err);
    }
    if (statusCode === 404) {
        console.log(new error_1.default(err, 'Non existing route', 404));
        res.status(statusCode).json(new error_1.default(err, 'Non existing route', 404));
    }
});
// IN Dev only Remove when deploying
if (isDev) {
    exports.server.listen(3000);
}
if (isTesting) {
    exports.server.listen(3998);
}
exports.api = functions.runWith({ memory: '2GB', timeoutSeconds: 120 }).https.onRequest(exports.server);
//# sourceMappingURL=index.js.map