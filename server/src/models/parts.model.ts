import { Schema, model } from 'mongoose';

export interface Parts {
    id: string;
    name: string;
    tags: string[];
    price: number;
    description: string[];
    imageUrl: string;
    favorite: boolean;
    stars: number;
}

export const PartSchema = new Schema<Parts>(
    {
        name: { type: String, required: true },
        tags: { type: [String], required: true },
        price: { type: Number, required: true },
        description: { type: [String], required: true },
        imageUrl: { type: String, required: true },
        favorite: { type: Boolean, default: false},
        stars: { type: Number, required: true }
    }, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true,
    },
    timestamps: true
});

export const PartModel = model<Parts>('part', PartSchema);
