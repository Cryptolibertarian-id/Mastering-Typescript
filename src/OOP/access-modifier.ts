class Warrior {
  private stamina = 10;
  private attack = 100;
  public defence = 50;

  doubleAttack() {
    this.stamina -= 5;
    return this.attack * 2;
  }

  protected trippleAttack() {
    this.stamina -= 10;
    return this.attack * 3;
  }

  bash() {
    console.log("Bash!");

    return this.trippleAttack();
  }

  public get myStamina(): number {
    console.log("My Stamina");

    return this.stamina;
  }

  public set myStamina(v: number) {
    this.stamina = v;
  }
}

let knight = new Warrior();
/* console.log(knight.attack); //error
Property 'attack' is private and only accessible within class 'ExamplePrivate'. */
console.log(knight.defence);
console.log(knight.myStamina);
console.log(knight.doubleAttack());
console.log(knight.myStamina);
/* console.log(knight.trippleAttack());
Property 'trippleAttack' is protected and only accessible within class 'Warrior' and its subclasses. */
console.log(knight.bash());

class Assasin extends Warrior {
  private flee: number = 3;
  constructor() {
    super();
    this.defence += 100;
    this.myStamina += 100;
  }

  public doTrippleAttack() {
    return this.trippleAttack();
  }
}

let jonathan = new Assasin();
console.log(jonathan.myStamina);
console.log(jonathan.doTrippleAttack());
console.log(jonathan.myStamina);
console.log(jonathan.defence);
