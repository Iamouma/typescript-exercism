/**
 * Transcribes a given DNA sequence into its corresponding RNA sequence.
 *
 * DNA and RNA strands consist of nucleotides:
 * - DNA: Adenine (A), Cytosine (C), Guanine (G), Thymine (T)
 * - RNA: Adenine (A), Cytosine (C), Guanine (G), Uracil (U)
 *
 * Transcription rules:
 * - G -> C
 * - C -> G
 * - T -> A
 * - A -> U
 *
 * @param {string} dna - The DNA sequence to transcribe.
 * @returns {string} - The corresponding RNA sequence.
 */
export function toRna(dna: string): string {
  const dnaToRna: Record<string, string> = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  if (!/^[GCTA]+$/.test(dna)) {
    throw new Error("Invalid input DNA.");
  }

  return [...dna].map((nucleotide) => dnaToRna[nucleotide]).join("");
}
