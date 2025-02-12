import { useEffect, useState } from "react"
import CharcterCouter from "./components/CharcterCouter";


function App() {
  const [dark, setDark] =useState(false)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  function handleDarkToggle(){
    setDark(prev => !prev)
  }
   

  return (
   <main className="font-display min-h-screen bg-white pb-20 dark:bg-neutral900">
    <CharcterCouter theme={dark} handleDarkToggle={handleDarkToggle}/>
   </main>
  )
}

export default App