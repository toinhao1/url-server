import { Response, Request } from 'express';
import ShortUrl, { ShortURLI } from '../models/ShortUrl';
import { makeid } from '../utils/makeID';

const domain = process.env.DOMAIN_TO_USE;

const create = async (req: Request, res: Response) => {
	const { url } = req.body;

	try {
		const newKey = makeid(6);
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

const getFullURL = async (req: Request, res: Response) => {
	const { keyId } = req.params;

	try {
		const shortUrl = await ShortUrl.find({ key: keyId }).lean();
		const { fullUrl } = shortUrl[0];
		res.redirect(fullUrl);
	} catch (err) {
		console.log(err);
	}
};

export { create, getFullURL };
