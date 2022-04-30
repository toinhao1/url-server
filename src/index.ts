import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import shortUrlRouter from './routes/shortUrls';

dotenv.config();
import './setUpDB';

const app = express();
//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/', router);
// Set port and have server listen
const port = process.env.PORT || 5000;

app.use(shortUrlRouter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
