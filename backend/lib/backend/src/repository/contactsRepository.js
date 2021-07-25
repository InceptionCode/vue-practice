"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const stringUtils_1 = require("../../../common/utils/stringUtils");
const firestore_1 = require("@google-cloud/firestore");
const index_1 = require("../index");
const errorConstants_1 = require("../../../common/constants/errorConstants");
const dtoUtils_1 = require("../utils/dtoUtils");
const error_1 = tslib_1.__importDefault(require("../error/error"));
const invalidUserError = { name: errorConstants_1.invalidUser, message: errorConstants_1.authInvalidUser };
const firestore = new firestore_1.Firestore();
const env = process.env.ENVIRONMENT;
const ContactsRepository = {
    getUser: async (userId) => {
        const user = await firestore.doc(`${env}/${userId}`).get();
        if (!user.exists) {
            throw new error_1.default(invalidUserError, errorConstants_1.invalidUserMessage);
        }
        return user.data();
    },
    getContacts: async (favorite, userId) => {
        try {
            const contacts = await firestore.collection(`${env}/${userId}/contacts`)
                .where('favorite', '==', favorite)
                .get();
            return contacts.docs.map((contact) => contact.data());
        }
        catch (err) {
            throw new error_1.default(err, errorConstants_1.invalidUserMessage);
        }
    },
    getContact: async (userId, name) => {
        const id = stringUtils_1.grabIdFromUserId(userId);
        const contacts = await firestore.doc(`${env}/${userId}/contacts/contacts_${id}`).get();
        const contact = contacts.get(name.toLowerCase());
        if (contact === undefined) {
            throw new error_1.default(invalidUserError, errorConstants_1.contactNotFound, 404);
        }
        return contact;
    },
    updateUser: async ({ userId, username, email, number }) => {
        const id = stringUtils_1.grabIdFromUserId(userId);
        await index_1.defaultAdmin.auth().updateUser(id, {
            displayName: username
        });
        const userDoc = firestore.doc(`${env}/${userId}`);
        const user = { userId, username, id, email, number };
        if ((await userDoc.get()).exists) {
            await userDoc.delete();
        }
        userDoc.set(user);
        const userDto = { user };
        return dtoUtils_1.resolveDto(userDto, 'user');
    }
};
exports.default = ContactsRepository;
//# sourceMappingURL=contactsRepository.js.map