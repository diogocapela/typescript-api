import mongoose from 'mongoose';

import database from './dao';

export const connect = () => {
    return mongoose.connect(
        'mongodb+srv://userdev:MnU5WrjgcYtRYS6t@typescript-api-cluster-01-6jori.mongodb.net/test?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true },
    );
};

export default database;
