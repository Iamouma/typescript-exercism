export class DnDCharacter {
  // Rolls four 6-sided dice and returns the sum of the highest three
  public static generateAbilityScore(): number {
    const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
    rolls.sort((a, b) => a - b); // Sort in ascending order
    return rolls.slice(1).reduce((sum, val) => sum + val, 0); // Sum highest three
  }

  // Calculates the ability modifier
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
  // Generates a complete character with all abilities and hitpoints
  public strength: number = DnDCharacter.generateAbilityScore();
  public dexterity: number = DnDCharacter.generateAbilityScore();
  public constitution: number = DnDCharacter.generateAbilityScore();
  public intelligence: number = DnDCharacter.generateAbilityScore();
  public wisdom: number = DnDCharacter.generateAbilityScore();
  public charisma: number = DnDCharacter.generateAbilityScore();
  public hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution);
}
