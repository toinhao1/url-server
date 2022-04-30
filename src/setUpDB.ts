import mongoose from 'mongoose';

const db: string = process.env.MONGO_DB as string;

export const setUpDB = async (dbString: string) => {
	try {
		await mongoose.connect(dbString);
		console.log('MongoDB Connected');
	} catch (error) {
		console.log(error);
	}
};

setUpDB(db).catch((err) => console.log(err));
