import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
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
        description: {
            type: String,
            trim: true,
        },
        createdBy: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true },
);

postSchema.index({ slug: 1, title: 1 }, { unique: true });

export default mongoose.model('Post', postSchema);
