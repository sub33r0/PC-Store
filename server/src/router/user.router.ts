import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User, UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../../constants/http_status';
import bcrypt from 'bcryptjs';

const router = Router();

router.get('/seed', async (req, res) => { 
    try {
        const usersCount = await UserModel.countDocuments();
        if (usersCount > 0) {    
            return res.send('Database has already been seeded!');
        }
        res.send('Database seeded!');
    } catch (error) {
        res.status(HTTP_BAD_REQUEST).send('Failed to seed database');
    }
});

router.post('/login', async (req, res) => {    
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(HTTP_BAD_REQUEST).send('User not found');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(HTTP_BAD_REQUEST).send('Incorrect password');
        }
        const token = generateTokenResponse(user);
        res.cookie('token', token, { httpOnly: true });
        res.send({ user, token });
    } catch (error) {
        res.status(HTTP_BAD_REQUEST).send('Login failed');
    }
});

router.post('/register', async (req, res) => { 
    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        
        
        if (existingUser) {
            return res.status(HTTP_BAD_REQUEST).send('User already exists');
        }
        const encryptedPassword = await bcrypt.hash(password, 12);
        const newUser = await UserModel.create({ name, email, password: encryptedPassword });
        const token = generateTokenResponse(newUser);
        console.log(newUser);
        
        console.log(token);
        
        res.cookie('token', token, { httpOnly: true });
        res.send({ user: newUser, message: 'Welcome to PC Store!', token });
        console.log(newUser);
        
    } catch (error) {
        console.error('Registration error:', error);
        res.status(HTTP_BAD_REQUEST).send('Registration failed');
    }
});


const generateTokenResponse = (user: any) => { 
    const token = jwt.sign({ email: user.email, isAdmin: user.isAdmin }, 'secret', { expiresIn: '1h' });
    return token;
}

export default router;
