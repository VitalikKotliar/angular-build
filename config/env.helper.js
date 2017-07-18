const dotenv = require('dotenv'); // eslint-disable-line

dotenv.config();

module.exports = {
    isDev,
    get
};

function isDev() {
    return get('DEV') === 'true';
}

function get(property) {
    return process.env[property].trim();
}
