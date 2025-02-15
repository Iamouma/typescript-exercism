export class SimpleCipher {
  key: string;

  constructor(key?: string) {
    if (key && !/^[a-z]+$/.test(key)) {
      throw new Error('Key must only contain lowercase letters.');
    }

    this.key = key || this.generateRandomKey();
  }

  private generateRandomKey(): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length: 100 }, () =>
      alphabet[Math.floor(Math.random() * alphabet.length)]
    ).join('');
  }

  encode(plainText: string): string {
    return plainText
      .split('')
      .map((char, index) => {
        const shift = this.key.charCodeAt(index % this.key.length) - 97;
        const newChar = ((char.charCodeAt(0) - 97 + shift) % 26) + 97;
        return String.fromCharCode(newChar);
      })
      .join('');
  }

  decode(cipherText: string): string {
    return cipherText
      .split('')
      .map((char, index) => {
        const shift = this.key.charCodeAt(index % this.key.length) - 97;
        const newChar = ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97;
        return String.fromCharCode(newChar);
      })
      .join('');
  }
}

