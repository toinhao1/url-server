import express from 'express';
import bodyParser from 'body-parser';

import './setUpDB';

const app = express();
//Body parser middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/', router);
// Set port and have server listen
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
