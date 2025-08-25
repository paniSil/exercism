export function toRna(dna: string): string {
    const dnaArray = dna.split("");

    if (!dnaArray.every((nucleotide) => DNA.includes(nucleotide))) {
        throw new Error("Invalid input DNA.");
    }
  
    let rnaArray = dnaArray.map((nucleotide) => RNA[DNA.indexOf(nucleotide)]);
    return rnaArray.join('');
  }
  
const DNA = ['G', 'C', 'T', 'A'];
const RNA = ['C', 'G', 'A', 'U'];

const isStringsArray = (arr : string[]) : boolean => arr.every(i => typeof i === "string");
