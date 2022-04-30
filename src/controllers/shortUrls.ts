import { Response, Request } from 'express';
import ShortUrl from '../models/ShortUrl';

const domain = process.env.DOMAIN_TO_USE;

const create = async (req: Request, res: Response) => {
	const { url } = req.body;

	try {
		const newKey = Math.random().toString(36).slice(1, 7);
		const shortenedUrl = `${domain}/${newKey}`;
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
