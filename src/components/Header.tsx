import logoLight from '../assets/logo-light-theme.svg'
import logoDark from '../assets/logo-dark-theme.svg'
import moonIcon from '../assets/icon-moon.svg'
import sunIcon from '../assets/icon-sun.svg'

type HeaderProps = {
    theme : boolean,
    handleDarkToggle : ()=> void
  }

function Header({theme, handleDarkToggle} :HeaderProps ) {
  return (
   <header className="px-4 py-4 flex justify-between items-center gap-3 md:px-8 lg:px-0">
     <div>
        {theme ? <img src={logoDark} className='h-7.5  md:h-10'/> : <img src={logoLight} className='h-7.5 md:h-10'/>}
     </div>
     <button onClick={handleDarkToggle} className='bg-neutral100 dark:bg-neutral700 w-8 h-8 flex items-center justify-center rounded-2ab md:w-11 md:h-11'>
     {theme ? <img src={sunIcon} className='w-5 h-5 md:w-5.5 md:h-5.5'/> : <img src={moonIcon} className='w-5 h-5 md:w-5.5 md:h-5.5'/>}
     </button>
   </header>
  )
}

export default Header