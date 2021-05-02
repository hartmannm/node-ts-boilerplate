import environment from "./config/environment";

const express = require('express');

const app = express();

app.get('/', (_, res) => res.send('OK'));

app.listen(environment.port, () => console.log(`Server started on port ${environment.port}`));
