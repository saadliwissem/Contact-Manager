const mongoose = require('mongoose');
const Cont = mongoose.model('Contact');

const createAddress = (request, response) => {
    const contactid = request.params.contactid;
    if (contactid) {
        Cont.findById(contactid)
            .select('address')
            .exec((error, contact) => {
                if (error) {
                    response
                        .status(400)
                        .json(error);
                } else {
                    doAddAddress(request, response, contact);
                }
            });
    } else {
        response
            .status(404)
            .json({ "message": "Contact not found" });
    }
}


const doAddAddress = (request, response, contact) => {
    contact.address.push({
        street: request.body.street,
        city: request.body.city,
        state: request.body.state,
        zipCode: request.body.zipCode
    });

    contact.save((error, contact) => {
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            let address = contact.address[contact.address.length - 1];
            response
                .status(201)
                .json(address);
        }
    });
}

const readAddress = (request, response) => {
    Cont
        .findById(request.params.contactid)
        .select('name address')
        .exec((error, contact) => {
            if (!contact) {
                return response
                    .status(404)
                    .json({
                        "message": "contact not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            if (contact.address && contact.address.length > 0) {
                const address = contact.address.id(request.params.addressid);
                if (!address) {
                    return response
                        .status(400)
                        .json({
                            "message": "address not found"
                        });
                } else {
                    res = {
                        contact: {
                            name: contact.name,
                            id: request.params.contactid
                        },
                        address
                    };
                    return response
                        .status(200)
                        .json(res);
                }
            } else {
                return response
                    .status(404)
                    .json({
                        "message": "No address found"
                    });
            }

        });
}


const updateAddress = (request, response) => {
    if (!request.params.contactid || !request.params.addressid) {
        return response
            .status(404)
            .json({
                "message": "Not found, contactid and addressid are both required"
            });
    }
    Cont
        .findById(request.params.contactid)
        .select('name address')
        .exec((error, contact) => {
            if (!contact) {
                return response
                    .status(404)
                    .json({
                        "message": "contact not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            if (contact.address && contact.address.length > 0) {
                const address = contact.address.id(request.params.addressid);
                if (!address) {
                    return response
                        .status(400)
                        .json({
                            "message": "address not found"
                        });
                } else {
                    address.street = request.body.street;
                    address.city = request.body.city;
                    address.state = request.body.state;
                    address.zipCode = request.body.zipCode;
                    contact.save((error, contact) => {
                        if (error) {
                            return response
                                .status(400)
                                .json(error);
                        } else {
                            res = {
                                contact: {
                                    name: contact.name,
                                    id: request.params.contactid
                                },
                                address
                            };
                            return response
                                .status(200)
                                .json(res);
                        }
                    });

                }
            } else {
                return response
                    .status(404)
                    .json({
                        "message": "No address found"
                    });
            }

        });
}

const deleteAddress = (request, response) => {
    const { contactid, addressid } = request.params;
    if (!contactid || !addressid) {
        return response
            .status(404)
            .json({ 'message': 'Not found, contactid and addressid are both required' });
    }
    Cont
        .findById(contactid)
        .select('address')
        .exec((error, contact) => {
            if (!contact) {
                return response
                    .status(404)
                    .json({ 'message': 'Contact not found' });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            if (contact.address && contact.address.length > 0) {
                if (!contact.address.id(addressid)) {
                    return response
                        .status(404)
                        .json({ 'message': 'Address not found' });
                } else {
                    contact.address.id(addressid).remove();
                    contact.save(error => {
                        if (error) {
                            return response
                                .status(404)
                                .json(error);
                        } else {
                            response
                                .status(204)
                                .json(null);
                        }
                    });
                }
            } else {
                res
                    .status(404)
                    .json({ 'message': 'No Review to delete' });
            }
        });
}

const getAllAddress = (request, response) => {
    Cont.findById(request.params.contactid)
        .select('address')
        .exec((error, address) => {
            if (error) {
                response
                    .status(400)
                    .json(error);
            } else {
                if (address) {
                    response
                        .status(201)
                        .json(address);
                } else {
                    return response
                        .status(404)
                        .json({
                            "message": "No address"
                        });
                }
            }
        });
}

module.exports = {
    createAddress,
    readAddress,
    updateAddress,
    deleteAddress,
    getAllAddress
}