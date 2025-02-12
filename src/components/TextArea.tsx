
import iconInfo from '../assets/icon-info.svg'

type TextareaProps = {
    handleWordChange : (value:string)=>void,
    word : string,
    filters : {
        excludeSpace: boolean;
        setChar: boolean;
        char: number;
    },
    error : boolean
}

function TextArea({handleWordChange, word, filters, error} : TextareaProps) {
   
  
    
  return (
        <div className='flex flex-col gap-1'>
        <textarea onChange={(e)=>handleWordChange(e.target.value)} value={word} name="" id="" placeholder="Start typing here… (or paste your text)" className={`${error ? 'focus:outline-red-500 border-red-500' : 'focus:outline-purple500'} w-full h-50 resize-none p-3 text-neutral700 dark:text-neutral200 bg-neutral100 dark:bg-neutral800 rounded-5ab border-2 border-neutral200 dark:border-neutral700  focus:outline-2`}></textarea>
       {error && <p className="text-red-500 text-sm flex gap-1"> <img src={iconInfo} alt="" />Limit reached! Your word exceeded {filters.char} characters</p>}
        </div>
  )
}

export default TextArea