import { Router } from 'express';
import { PartModel } from '../models/parts.model';

const router = Router();

router.get('/seed', async (req, res) => { 
    const partsCount = await PartModel.countDocuments();
    if (partsCount > 0) {    
        return res.send('Database has already been seeded!');
    }
    res.send('Database seeded!');
});

router.get('/', async (req, res) => { 
    const parts = await PartModel.find();
    res.send(parts)
});

router.get('/search/:searchTerm', async (req, res) => { 
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const parts = await PartModel.find({ name: {$regex:searchRegex }});
    res.send(parts);
});

router.get('/tags', async (req, res) => {
    const tags = await PartModel.aggregate([
        { $unwind: '$tags' },
        { $group: { _id: '$tags', count: { $sum: 1 } } },
        {$project: { _id: 0, name: '$_id', count: '$count' }}
    ]).sort({ count: -1 });

    const all = { name: 'All', count: await PartModel.countDocuments() };
    tags.unshift(all);
    res.send(tags);
});

router.get('/tags/:tagName', async (req, res) => { 
    const parts = await PartModel.find({ tags: req.params.tagName });
    res.send(parts);
})

router.get('/:partId',async (req, res) => { 
    const part = await PartModel.findById(req.params.partId);
        res.send(part);
});

export default router;