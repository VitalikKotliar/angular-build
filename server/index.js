const express = require('express');

const paths = require('../config/constants/paths');
const envHelper = require('../config/env.helper');

const app = express();

if (envHelper.isDev()) {
    require('../config/webpack/webpack.devMiddleware')(app);
} else {
    app.use('/', express.static(paths.output.path));
}

const port = envHelper.get('PORT');

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});