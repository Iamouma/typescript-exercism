export class Robot {
  private static usedNames = new Set<string>();
  private static availableNames = Robot.generateAllNames(); // Pre-generate unique names
  private _name: string;

  constructor() {
    this._name = Robot.getUniqueName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    // Remove old name before assigning a new one
    Robot.usedNames.delete(this._name);
    this._name = Robot.getUniqueName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
    Robot.availableNames = Robot.generateAllNames();
  }

  private static getUniqueName(): string {
    if (Robot.availableNames.length === 0) {
      throw new Error("No unique names available");
    }
    const newName = Robot.availableNames.pop()!;
    Robot.usedNames.add(newName);
    return newName;
  }

  private static generateAllNames(): string[] {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const names: string[] = [];

    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        for (let k = 0; k < 10; k++) {
          for (let l = 0; l < 10; l++) {
            for (let m = 0; m < 10; m++) {
              names.push(`${letters[i]}${letters[j]}${k}${l}${m}`);
            }
          }
        }
      }
    }

    return names.sort(() => Math.random() - 0.5); // Shuffle to prevent sequential names
  }
}
