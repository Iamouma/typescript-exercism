export function commands(number: number): string[] {
  const actions = ['wink', 'double blink', 'close your eyes', 'jump'];
  let handshake: string[] = [];

  for (let i = 0; i < 4; i++) {
    if ((number & (1 << i)) !== 0) {
      handshake.push(actions[i]);
    }
  }

  if ((number & 16) !== 0) {
    handshake.reverse();
  }

  return handshake;
}
