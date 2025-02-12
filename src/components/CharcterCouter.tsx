import { useEffect, useState } from "react"
import Density from "./Density"
import Filter from "./Filter"
import Header from "./Header"
import Stats from "./Stats"
import TextArea from "./TextArea"
import { returnLengthWithoutSpace } from "../utils"

type CharacterProps = {
  theme : boolean,
  handleDarkToggle : ()=> void
}



function CharcterCouter({theme, handleDarkToggle}: CharacterProps) {

  const [word, setWord] = useState('')
const [filters, setFilters] = useState({
  excludeSpace : false,
  setChar : false,
  char : 0
})
const [error, setError] = useState(false)

function handleWordChange(value:string){
  setWord(value)
}
function handleError(){
setError(filters.setChar 
  ? (filters.excludeSpace 
      ? returnLengthWithoutSpace(word) > filters.char 
      : word.length > filters.char) 
  : false)
}

useEffect(()=>{ handleError()}, [filters])
  return (
    <div className="flex flex-col gap-10 lg:gap-12 lg:max-w-[990px] lg:mx-auto">
      <Header theme={theme} handleDarkToggle={handleDarkToggle}/>
      <h1 className="text-center text-preset1M font-bold text-neutral900 dark:text-neutral100 px-4 md:text-preset1 md:max-w-[510px] md:mx-auto">Analyze your text in real-time. </h1>
      <div className="px-4 flex flex-col gap-4 md:px-8 lg:px-0">
        <TextArea handleWordChange={handleWordChange} word={word} filters={filters} error={error}/>
        <Filter setFilter={setFilters} filters={filters} word={word}/>
      </div>
      <div className="px-4 flex flex-col gap-6 md:px-8 lg:px-0">
        <Stats word={word} filters={filters} error={error}/>
        <Density word={word} error={error}/>
      </div>
    </div>
  )
}

export default CharcterCouter