/* eslint-disable operator-linebreak */
/*
 *Title: Utilities
 *Description: Important utilities function
 *Author: Tawsif Mahmud
 *Date: 30/12/2023
 *
 */

// Dependencies
const crypto = require('crypto');

const environments = require('./environments');
// module Scaffolding

const utilities = {};

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
    let output = {};

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};
// Hashing
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');
        return hash;
    }
    return false;
};
// export module
module.exports = utilities;
