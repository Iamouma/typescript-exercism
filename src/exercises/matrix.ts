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
