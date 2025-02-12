function returnLengthWithoutSpace(word:string){
    return word.replace(/\s/g, '').length
}

function densityCounter(word: string){
    let wordJoin = word.replace(/\s+/g, "").toLowerCase(); // Remove spaces correctly
  let frequency: Record<string, number> = {}; // TypeScript-friendly object

  for (let letter of wordJoin) {
    frequency[letter] = (frequency[letter] || 0) + 1; // Fix: Correct frequency calculation
  }

  return Object.entries(frequency);
}

function getReadingTime(text: string, wordsPerMinute: number = 150) {
    if (!text.trim()) return 0; // If text is empty, return 0 minutes
  
    const wordCount = text.trim().split(/\s+/).length; 
    return Math.ceil(wordCount / wordsPerMinute); 
  }

export {returnLengthWithoutSpace, densityCounter, getReadingTime}