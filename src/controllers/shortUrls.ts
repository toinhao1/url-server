import { Response, Request } from 'express';
import ShortUrl from '../models/ShortUrl';
import { makeid } from '../utils/makeID';

const domain = process.env.DOMAIN_TO_USE;
const port = process.env.PORT;

const create = async (req: Request, res: Response) => {
	const { url } = req.body;

	try {
		const newKey = makeid(6);
		const shortenedUrl = `${domain}:${port}/${newKey}`;
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
		const shortUrl = await ShortUrl.findOne({ key: keyId });
		if (shortUrl) {
			const { fullUrl } = shortUrl;
			shortUrl.clicks = shortUrl.clicks + 1;
			await shortUrl.save();

			res.redirect(fullUrl);
		}
		res.send({ message: 'Bad Link' });
	} catch (err) {
		console.log(err);
	}
};

export { create, getFullURL };
