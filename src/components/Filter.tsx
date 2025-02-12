import { getReadingTime } from "../utils";

type FilterProps ={
    setFilter :  React.Dispatch<React.SetStateAction<{
        excludeSpace: boolean;
        setChar: boolean;
        char: number;
    }>>,
    filters : {
        excludeSpace: boolean;
        setChar: boolean;
        char: number;
    }, 
    word: string
}

function Filter({setFilter, filters, word} : FilterProps) {
    function handleSpaceChange(value:boolean){
        setFilter(prev => {
            return {
                ...prev,
                excludeSpace : value
            }
        })
    }
    function handleSetCharChange(value:boolean){
        setFilter(prev => {
            return {
                ...prev,
                setChar : value
            }
        })
    }

    function handleSetLimitChange(value:string){
        setFilter(prev => {
            return {
                ...prev,
               char : Number(value)
            }
        })
    }

    let estimateReadingTime = getReadingTime(word)
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        <div className="flex gap-2.5 items-center">
        <input
        onChange={(e)=> handleSpaceChange(e.target.checked)} 
        checked={filters.excludeSpace}
  type="checkbox" 
  className="w-5 h-5 border border-neutral-900 dark:border-neutral-200 rounded-md appearance-none checked:bg-purple500  checked:border-transparent checked:before:content-['✔'] checked:before:text-neutral900 checked:before:block checked:before:w-1 checked:before:h-1 checked:before:text-center checked:before:leading-4"
/>
            <label htmlFor="" className="text-neutral900 dark:text-neutral200 text-preset4">Exclude Spaces </label>
        </div>
        <div className="flex gap-2.5 items-center">
        <input 
        onChange={(e)=> handleSetCharChange(e.target.checked)}
        checked={filters.setChar}
  type="checkbox" 
  className="w-5 h-5 border border-neutral-900 dark:border-neutral-200 rounded-md appearance-none checked:bg-purple500  checked:border-transparent checked:before:content-['✔'] checked:before:text-neutral900 checked:before:block checked:before:w-1 checked:before:h-1 checked:before:text-center checked:before:leading-4"
/>
            <label htmlFor="" className="text-neutral900 dark:text-neutral200 text-preset4">Set Character Limit</label>
           {filters.setChar && <input 
            onChange={(e)=> handleSetLimitChange(e.target.value)} 
             value={filters.char.toString()}
             type="number" name="" id="" className="w-15 outline-none border-neutral900 dark:border-neutral200 border rounded-ab px-1"/>}
        </div>
        <p className="text-neutral900 dark:text-neutral200 text-preset4 md:ml-auto">Approx. reading time: {estimateReadingTime} minutes</p>
    </div>
  )
}

export default Filter