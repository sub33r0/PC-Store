import { connect } from 'mongoose';

export const dbConnect = async () => { 
    try {
        await connect(process.env.MONGO_URI!);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

