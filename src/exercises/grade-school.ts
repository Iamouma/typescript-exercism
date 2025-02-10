export class GradeSchool {
  private schoolRoster: Map<number, Set<string>>;

  constructor() {
    this.schoolRoster = new Map();
  }

  roster(): Record<number, string[]> {
    const sortedRoster: Record<number, string[]> = {};
    const grades = Array.from(this.schoolRoster.keys()).sort((a, b) => a - b);
    
    for (const grade of grades) {
      sortedRoster[grade] = Array.from(this.schoolRoster.get(grade)!).sort();
    }
    
    return sortedRoster;
  }

  add(name: string, grade: number): string {
  // Remove the student from any existing grade
  for (const [existingGrade, students] of this.schoolRoster.entries()) {
    if (students.has(name)) {
      students.delete(name);
      if (students.size === 0) {
        this.schoolRoster.delete(existingGrade); // Clean up empty grade
      }
      break;
    }
  }

  // Add the student to the new grade
  if (!this.schoolRoster.has(grade)) {
    this.schoolRoster.set(grade, new Set());
  }
  this.schoolRoster.get(grade)!.add(name);
  return "OK.";
}


  grade(grade: number): string[] {
    return this.schoolRoster.has(grade) 
      ? Array.from(this.schoolRoster.get(grade)!).sort() 
      : [];
  }
}
