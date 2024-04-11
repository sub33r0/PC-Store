import express from 'express';
import cors from 'cors';
import { sample_pc, sample_tags, sample_user } from './data';
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200',
}));

app.get('/api/parts', (req, res) => { 
    res.send(sample_pc)
});

app.get('/api/parts/:search/:searchTerm', (req, res) => { 
    const searchTerm = req.params.searchTerm;
    const parts = sample_pc.filter(part => part.name.toLowerCase().includes(searchTerm.toLowerCase()))
    res.send(parts);
});

app.get('/api/parts/tags', (req, res) => { 
    res.send(sample_tags);
});

app.get('/api/parts/tags/:tagName', (req, res) => { 
    const tagName = req.params.tagName;
    const parts = sample_pc.filter(part => part.tags?.includes(tagName));
    res.send(parts);
})

app.get('/api/parts/:partId', (req, res) => { 
    const partId = req.params.partId;
    const part = sample_pc.find(part => part.id === partId);
        res.send(part);
});

app.post('/api/users/login', (req, res) => {    
    const { email, password } = req.body;
    const user = sample_user.find((user:any) => user.email === email && user.password === password);
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

const port = 3000;

app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
});