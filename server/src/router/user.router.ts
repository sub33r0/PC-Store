import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User, UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../../constants/http_status';
import bcrypt from 'bcryptjs';

const router = Router();

router.get('/seed', async (req, res) => { 
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {    
        return res.send('Database has already been seeded!');
    }
    res.send('Database seeded!');
});

router.post('/login', async (req, res) => {    
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email, password });
    if (user) {
        res.send(generateTokenResponse(user));
    } else { 
        res.status(HTTP_BAD_REQUEST).send('Email or password is incorrect!');
    }
})

router.post('/register', async (req, res) => { 
    const {name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
        res.status(HTTP_BAD_REQUEST).send('User already exists!');
    return;
    }
    const encryptedPassword = await bcrypt.hash(password, 12);
    const newUser: User = {
        id: '',
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        isAdmin: false
    }
    const dbUser = await UserModel.create(newUser);
    res.send(generateTokenResponse(dbUser));
});

const generateTokenResponse = (user: any) => { 
    const token = jwt.sign({ email: user.email, isAdmin: user.isAdmin }, 'secret', { expiresIn: '1h' });
    
    user.token = token;
    return user;
}

export default router;