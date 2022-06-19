var express = require('express');
var router = express.Router();

const { readContact, createContact, deleteContact, getContacts, updateContact } = require('../controllers/contacts');
const { createAddress, updateAddress, deleteAddress, readAddress, getAllAddress } = require('../controllers/address');

router.route('/contacts')
    .get(getContacts)
    .post(createContact);


//read, update and delete specific contact
router.route('/contacts/:contactid')
    .get(readContact)
    .put(updateContact)
    .delete(deleteContact);

// define route for address
router.route('/contacts/:contactid/address')
    .get(getAllAddress)
    .post(createAddress);

router.route('/contacts/:contactid/address/:addressid')
    .get(readAddress)
    .put(updateAddress)
    .delete(deleteAddress);

module.exports = router;