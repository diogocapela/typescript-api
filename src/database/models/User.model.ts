import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        settings: {
            theme: {
                type: String,
                required: true,
                enum: ['light', 'dark'],
                default: 'light',
            },
            notifications: {
                type: Boolean,
                required: true,
                default: true,
            },
            compactMode: {
                type: Boolean,
                required: true,
                default: false,
            },
        },
    },
    { timestamps: true },
);

/*
userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) {
            return next(err);
        }

        this.password = hash;
        next();
    });
});

userSchema.methods.checkPassword = function(password) {
    const passwordHash = this.password;
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordHash, (err, same) => {
            if (err) {
                return reject(err);
            }

            resolve(same);
        });
    });
};
*/

export default mongoose.model('User', userSchema);
