import express from 'express';
import cors from 'cors';
import { sample_pc, sample_tags } from './data';

const app = express();
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
    if (!part) {
        // If part is not found, send a 404 Not Found response
        res.status(404).send('Part not found');
    } else {
        // If part is found, send the part data
        res.send(part);
    }
});


const port = 3000;

app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
});