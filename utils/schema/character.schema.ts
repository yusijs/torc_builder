import { MongoConnection } from './../db';

const Schema = MongoConnection.Schema;

export const CharacterSchema = new Schema({
    name: String,
    server: String,
    guild: String,
    ac: String,
    level: String,
    valor: String,
    social: String,
    discipline: String
});

export const CharacterModel = MongoConnection.model('character', CharacterSchema);