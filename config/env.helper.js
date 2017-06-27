const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    isDev
};

function isDev() {
    return process.env.DEV.trim() === 'true';
}