class ChangeRainfallPattern {
  floodsDamage: number = 150;
  droughtsDamage: number = 300;
  excessRainfallDamage: number = 100;

  public get floods(): number {
    return this.floodsDamage;
  }

  public set floods(damage: number) {
    this.floodsDamage = damage;
  }

  public get droughts(): number {
    return this.droughtsDamage;
  }

  public set droughts(v: number) {
    this.droughtsDamage = v;
  }
}

class Climate {
  climateScore: number;
  temperature: number;

  constructor(temperature: number) {
    this.climateScore = 0;
    this.temperature = temperature;
  }
}

let yourClimate = new ChangeRainfallPattern();
console.log(yourClimate.floods);
