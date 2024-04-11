import { Router } from 'express';
import {  sample_user } from '../data';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model';

const router = Router();

router.get('/seed', async (req, res) => { 
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {    
        return res.send('Database has already been seeded!');
    }
    await UserModel.create(sample_user);
    res.send('Database seeded!');
});

router.post('/login', async (req, res) => {    
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email, password });
    if (user) {
        res.send(generateTokenResponse(user));
    } else { 
        res.status(401).send('Email or password is incorrect!');
    
    }
})

const generateTokenResponse = (user: any) => { 
    const token = jwt.sign({ email: user.email, isAdmin: user.isAdmin }, 'secret', { expiresIn: '1h' });
    
    user.token = token;
    return user;
}

export default router;