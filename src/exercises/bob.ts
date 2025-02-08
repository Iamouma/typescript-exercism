export function hey(message: string): string {
  const trimmedMsg = message.trim();

  if (trimmedMsg === "") {
    return "Fine. Be that way!";
  }

  const isQuestion = trimmedMsg.endsWith("?");
  const isYelling = trimmedMsg === trimmedMsg.toUpperCase() && /[A-Z]/.test(trimmedMsg);

  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!";
  } else if (isYelling) {
    return "Whoa, chill out!";
  } else if (isQuestion) {
    return "Sure.";
  }

  return "Whatever.";
}
