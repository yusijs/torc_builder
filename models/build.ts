import { Gear } from './gear';
import { Character } from './Character';
export interface Build {
    character: Character;
    misc: Misc;
    gear: Gear;
}

export interface Misc {
    stim: string;
    stance: string;
    buffs: string[];
    datacrons: string[];
}