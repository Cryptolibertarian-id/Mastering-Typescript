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

  public set droughts(damage: number) {
    this.droughtsDamage = damage;
  }
}

class Disease {
  malariaDamage: number = 50;
  covid19Damage: number = 800;

  public get malaria(): number {
    return this.malariaDamage;
  }

  public set malaria(damage: number) {
    this.malariaDamage = damage;
  }

  public get covid19(): number {
    return this.covid19Damage;
  }

  public set covid19(number: number) {
    this.covid19Damage = number;
  }
}

class WildFire {
  heatWaveDamage: number = 250;

  public get heatWave(): number {
    return this.heatWaveDamage;
  }

  public set heatWave(damage: number) {
    this.heatWaveDamage = damage;
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
