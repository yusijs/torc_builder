export interface GearSlot {
    slot: string;
    type?: string;
}

export interface Gear {
    Mainhand: GearSlot;
    Offhand: GearSlot;
    Wrists: GearSlot;
    Waist: GearSlot;
    Feet: GearSlot;
    Legs: GearSlot;
    Hands: GearSlot;
    Chest: GearSlot;
    Head: GearSlot;
    relic1: GearSlot;
    relic2: GearSlot;
    Earpiece: GearSlot;
    implant1: GearSlot;
    implant2: GearSlot;
}