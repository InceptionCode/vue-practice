"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const tslib_1 = require("tslib");
const contactsRepository_1 = tslib_1.__importDefault(require("../repository/contactsRepository"));
const register = (app) => {
    // const oidc = app.locals.oidc;
    // define a route handler for the default home page
    app.get('/', async (req, res) => {
        res.send('Welcome To Vuex Blackbook');
    });
    app.get('/contacts/:userid', async (req, res) => {
        const userId = req.params.userid;
        const favoriteQuery = req.query.favorite;
        const favorite = favoriteQuery === 'true';
        const contacts = await contactsRepository_1.default.getContacts(favorite, userId);
        res.send(contacts);
    });
};
exports.register = register;
//# sourceMappingURL=index.js.map
