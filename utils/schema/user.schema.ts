import { MongoConnection } from './../db';

const Schema = MongoConnection.Schema;

export const UserSchema = new Schema({
    userid: Number,
    builds: [{ type: MongoConnection.Schema.Types.Mixed, ref: 'build' }]
});

export const UserModel = MongoConnection.model('user', UserSchema);