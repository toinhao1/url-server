import { Response, Request } from 'express';
import ShortUrl from '../models/ShortUrl';

const create = async (res: Response, req: Request) => {
	const { url } = req.body;

	try {
		const newKey = Math.random().toString(36).slice(1, 7);
		const shortenedUrl = `localhost:3000/${newKey}`;
		const newLink = new ShortUrl({
			key: newKey,
			fullUrl: url,
			shortUrl: shortenedUrl,
		});
		await newLink.save();
		res.send({ message: 'Here is your short link!', shortLink: shortenedUrl });
	} catch (err) {
		console.log(err);
	}
};

export { create };
