class Character {
	constructor(hp, dmg, mana, name, status = "playing") {
		this.hp = hp;
		this.dmg = dmg;
		this.mana = mana;
		this.name = name;
		this.status = status;
	}
	takeDamage(dmg) {
		this.hp -= dmg;
	}
	dealDamage(victim) {
		victim.takeDamage(this.dmg);
	}
}

class Fighter extends Character {
	constructor(hp = 12, mana = 40, dmg = 4, name = "Grace") {
		super(hp, mana, dmg);
		this.name = name;
	}
}

class Paladin extends Character {
	constructor(hp = 16, mana = 160, dmg = 3, name = "Ulder") {
		super(hp, mana, dmg);
		this.name = name;
	}
}

class Monk extends Character {
	constructor(hp = 8, mana = 200, dmg = 2, name = "Moona") {
		super(hp, mana, dmg);
		this.name = name;
	}
}

class Berzerker extends Character {
	constructor(hp = 8, mana = 0, dmg = 4, name = "Draven") {
		super(hp, mana, dmg);
		this.name = name;
	}
}

class Assassin extends Character {
	constructor(hp = 6, mana = 20, dmg = 6, name = "Carl") {
		super(hp, mana, dmg);
		this.name = name;
	}
}
