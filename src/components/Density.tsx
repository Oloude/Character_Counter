import { useState } from "react";
import { densityCounter, returnLengthWithoutSpace } from "../utils"
import Letter from "./Letter"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";




type DensityProps ={
  word : string,
  error : boolean
}

function Density({word, error} : DensityProps) {
  let frequencyMap = densityCounter(word).sort((a,b)=> b[1] - a[1]); 
  let total = returnLengthWithoutSpace(word);
  const [toggleShow, setToggleShow] = useState(false)

  function handleToggleShow(){
    setToggleShow(prev => !prev)
  }
  return (
    <section className="flex flex-col gap-5">
        <h4 className="text-preset2 font-bold text-neutral900 dark:text-neutral200">Letter Density</h4>
       { (!word || error) && <p className="text-preset4 text-neutral600 dark:text-neutral200"> No characters found. Start typing to see letter density.</p>}
        {(word && !error) && <><div className={`${toggleShow ? 'h-full' : 'h-40 overflow-hidden'} flex flex-col gap-3 lg:gap-4`}>
          {frequencyMap.map(([char, count]) => <Letter key={char} letter={char} count={count} total={total} />)}
        </div>
        <button onClick={handleToggleShow} className="text-preset3 text-neutral900 dark:text-neutral200 self-start flex gap-2 items-center">{toggleShow ? 'See Less' : 'See more '} {toggleShow ? <IoIosArrowUp className="text-neutral900  dark:text-neutral200 w-3 h-3"/> : <IoIosArrowDown className="text-neutral900 dark:text-neutral200 w-3 h-3"/> }</button> </>}

    </section>
  )
}

export default Density