import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ShortURLI extends Document {
	key: string;
	fullUrl: string;
	shortUrl: string;
	clicks: number;
}

interface ShortURLIModel extends Model<ShortURLI> {}

//Creat Schema
const ShortUrlSchema = new Schema({
	key: {
		type: String,
		required: true,
	},
	fullUrl: {
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
	clicks: {
		type: Number,
		default: 0,
	},
});

const ShortUrl = mongoose.model<ShortURLI, ShortURLIModel>('shortURLs', ShortUrlSchema);

export default ShortUrl;
