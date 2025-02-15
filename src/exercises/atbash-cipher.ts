export function encode(plainText: string): string {
  const normalizedText = plainText.toLowerCase().replace(/[^a-z0-9]/g, "");
  const encodedText = normalizedText
    .split("")
    .map((char) => (/[a-z]/.test(char) ? atbashTransform(char) : char))
    .join("");

  return formatInGroups(encodedText, 5);
}

export function decode(cipherText: string): string {
  return cipherText
    .replace(/\s+/g, "")
    .split("")
    .map((char) => (/[a-z]/.test(char) ? atbashTransform(char) : char))
    .join("");
}

function atbashTransform(char: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reversed = "zyxwvutsrqponmlkjihgfedcba";
  return reversed[alphabet.indexOf(char)];
}

function formatInGroups(text: string, size: number): string {
  return text.replace(new RegExp(`(.{1,${size}})`, "g"), "$1 ").trim();
}
