export function isPangram(sentence: string): boolean {
  const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  const lowerCaseSentence = sentence.toLowerCase();

  for (const char of lowerCaseSentence) {
    alphabet.delete(char);
    if (alphabet.size === 0) return true;
  }

  return false;
}
