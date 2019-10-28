import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            maxlength: 50,
        },
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
        content: {
            type: String,
            trim: true,
        },
        date: {
            type: Date,
        },
        status: {
            type: String,
            required: true,
            enum: ['draft', 'public', 'private'],
            default: 'draft',
        },
        createdBy: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true },
);

articleSchema.index({ slug: 1, title: 1 }, { unique: true });

export default mongoose.model('Article', articleSchema);
