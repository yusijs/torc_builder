import { MongoConnection } from './../db';

const Schema = MongoConnection.Schema;

const ModsSchema = new Schema({
    armoring: String,
    barrel: String,
    hilt: String,
    mod: String,
    enhancement: String,
    augment: String,
    crystal: String
});

MongoConnection.model('mods', ModsSchema);

const StatsSchema = new Schema({
    mastery: Number,
    presence: Number,
    endurance: Number,
    expertise: Number,
    critical: Number,
    alacrity: Number,
    accuracy: Number,
    defense: Number,
    absorb: Number,
    shield: Number,
    power: Number
});

MongoConnection.model('stats', StatsSchema);

const ItemSchema = new Schema({
    slot: String,
    id: String,
    mods: { type: MongoConnection.Schema.Types.Mixed, ref: 'mods' },
    icon: String
});

MongoConnection.model('item', ItemSchema);

export const BuildSchema = new Schema({
    character: {
        type: { type: MongoConnection.Schema.Types.Mixed, ref: 'character' }
    },
    misc: {
        stim: String,
        stance: Number,
        buffs: [String],
        datacrons: [String]
    },
    gear: {
        Mainhand: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        Offhand: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        Wrists: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        Waist: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        Feet: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        Legs: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        Hands: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        Chest: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        Head: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        relic1: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        relic2: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        Earpiece: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        implant1: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' },
        implant2: { type: MongoConnection.Schema.Types.Mixed, ref: 'item' }
    },
    stats: { type: MongoConnection.Schema.Types.Mixed, ref: 'stats' }
});

export const BuildModel = MongoConnection.model('build', BuildSchema);