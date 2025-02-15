export const answer = (question: string): number => {
  if (!question.startsWith('What is ') || !question.endsWith('?')) {
    throw new Error('Unknown operation');
  }

  const words = question.slice(8, -1).split(' ');
  const validOps = new Set(['plus', 'minus', 'multiplied', 'divided']);
  let result: number | null = null;
  let operation: string | null = null;

  for (let i = 0; i < words.length; i++) {
     if (!isNaN(Number(words[i]))) {
       const num = Number(words[i]);
       if (result === null) {
         result = num;
       } else if (operation) {
         switch (operation) {
           case 'plus':
	     result += num;
	     break;
	   case 'minus':
	     result -= num;
	     break;
	   case 'multiplied':
	     if (words[i + 1] !== 'by') throw new Error('Syntax error');
	     result *= num;
	     i++;
	     break;
	   case 'divided':
	     if (words[i + 1] !== 'by') throw new Error('Syntax error');
	     result /= num;
	     i++;
	     break;
	     default:
	       throw new Error('Unknown operation');
	 }
	 operation = null;
       } else {
         throw new Error('Syntax error');
       }
     } else if (validOps.has(words[i])) {
       if (operation) {
         throw new Error('Syntax error');
       }
       operation = words[i];
     } else {
       throw new Error('Unknown operation');
     }
  }

  if (result === null || operation) {
    throw new Error('Synatx error');
  }

  return result;
}
