import Stat from "./Stat"
import patternCharcter from '../assets/pattern-character-count.svg'
import patternWord from '../assets/pattern-word-count.svg'
import patternSentence from '../assets/pattern-sentence-count.svg'
import { returnLengthWithoutSpace } from "../utils"

type StatsProps ={
  filters :{
    excludeSpace: boolean;
    setChar: boolean;
    char: number;
} ,
  word: string,
  error: boolean
}

function Stats({filters, word, error}: StatsProps) {
  let charCount =0
  let wordCount =0
  let sentenceCount =0
  if(!error){
  charCount= filters.excludeSpace ? returnLengthWithoutSpace(word) : word.length;
  wordCount = word.trim() === "" ? 0 : word.split(/\s+/).filter(Boolean).length;
  sentenceCount = word.trim() === "" ? 0 : word.split(/[.!?]+/).filter(s => s.trim() !== "").length;
  }

  

  console.log(word, charCount, wordCount, sentenceCount)

  return (
    <section className="flex flex-col gap-4 md:flex-row">
        <Stat id={1} count={charCount ? charCount.toString() : '00'} title="Total Characters  " img={patternCharcter}/>
        <Stat id={2} count={wordCount ? wordCount.toString() : '00'} title="Word Count " img={patternWord}/>
        <Stat id={3} count={sentenceCount ? sentenceCount.toString() : '00'} title="Sentence Count" img={patternSentence}/>
    </section>
  )
}

export default Stats