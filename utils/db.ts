import mongoose = require('mongoose');

mongoose.Promise = global.Promise;
export const MongoConnection = mongoose.connect('mongodb://localhost/charbuilder');

MongoConnection.set('debug', true);

export { CharacterModel, CharacterSchema } from './schema/character.schema';
export { BuildSchema, BuildModel } from './schema/build.schema';
export { UserSchema, UserModel } from './schema/user.schema'; 