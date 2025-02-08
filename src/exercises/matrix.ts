export class Matrix {
  private matrix: number[][];

  constructor(matrixString: string) {
    this.matrix = matrixString.split("\n").map(row => 
      row.split(" ").map(num => parseInt(num, 10))
    );
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    return this.matrix[0].map((_, colIndex) => 
      this.matrix.map(row => row[colIndex])
    );
  }
}

// Example Usage
const matrixString = `9 8 7
5 3 2
6 6 7`;

const matrix = new Matrix(matrixString);
console.log("Rows:", matrix.rows);
console.log("Columns:", matrix.columns);
