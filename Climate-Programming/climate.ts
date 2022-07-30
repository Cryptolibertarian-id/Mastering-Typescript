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

class GreenHouseEffect {
  increaseSeaLevelDamage: number = 200;
  lossWildLifeSpeciesDamage: number = 200;
  shortAgeFoodDamage: number = 150;
  stormsDamage: number = 250;
  hurricaneDamage: number = 250;

  public get increaseSeaLevel(): number {
    return this.increaseSeaLevelDamage;
  }

  public set increaseSeaLevel(v: number) {
    this.increaseSeaLevelDamage = v;
  }

  public get lossWildLifeSpecies(): number {
    return this.lossWildLifeSpeciesDamage;
  }

  public set lossWildLifeSpecies(v: number) {
    this.lossWildLifeSpeciesDamage = v;
  }

  public get storms(): number {
    return this.stormsDamage;
  }

  public set storms(damage: number) {
    this.stormsDamage = damage;
  }

  public get hurricane(): number {
    return this.hurricaneDamage;
  }

  public set hurricane(damage: number) {
    this.hurricaneDamage = damage;
  }

  public get shortAgeFood(): number {
    return this.shortAgeFoodDamage;
  }

  public set shortAgeFood(damage: number) {
    this.shortAgeFoodDamage = damage;
  }
}

class WildFire {
  heatWaveDamage: number = 250;
  animalMigration: number = 100;

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
