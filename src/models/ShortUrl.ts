import mongoose, { Schema } from 'mongoose';

//Creat Schema
const ShortUrlSchema = new Schema({
	key: {
		type: String,
		required: true,
	},
	fullURL: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	shortUrl: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
	},
});

const ShortUrl = mongoose.model('shortURLs', ShortUrlSchema);

export default ShortUrl;
