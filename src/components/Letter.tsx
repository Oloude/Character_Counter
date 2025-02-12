type LetterProps ={
  letter:string,
  count: number,
  total : number
}

function Letter({ letter, count, total } : LetterProps) {
  let percent = (count / total) * 100; // Fix formula for percentage calculation

  return (
    <div className="flex gap-3.5 items-center">
      <p className="uppercase text-preset4 text-neutral900 dark:text-neutral200">{letter}</p> 
      <div className="bg-neutral100 dark:bg-neutral800 w-full rounded-full h-3 self-start">
        <p 
          className="bg-purple400 h-full rounded-full" 
          style={{ width: `${percent}%` }} // ✅ Corrected style syntax
        ></p>
      </div>
      <div className="flex gap-0.5 items-center">
        <p className="text-preset4 text-neutral900 dark:text-neutral200">{count}</p>
        <p className="text-preset4 text-neutral900 dark:text-neutral200">({percent.toFixed(2)}%)</p> {/* Ensure percentage is rounded */}
      </div>
    </div>
  );
}

export default Letter;
