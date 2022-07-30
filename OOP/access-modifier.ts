class Warrior {
  private stamina = 10;
  private attack = 100;
  public defence = 50;

  doubleAttack() {
    this.stamina -= 5;
    return this.attack * 2;
  }

  public get myStamina(): number {
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
