import { UserModel } from './utils/schema/user.schema';

import fs = require('fs');

const data = fs.readFileSync('./character.json', 'utf8');

const d = JSON.parse(data);


const character = new UserModel(d);

character.save(err => {
    if (err) {
        console.error('Failed to insert: ', err);
    }
    console.log('Done!');

    process.exit();
});