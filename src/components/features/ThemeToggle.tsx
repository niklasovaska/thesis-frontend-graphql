import { useTheme } from "@/context/ThemeContext"
import { Moon, Sun} from 'lucide-react'

const ThemeToggle = () => {

  const { dark, toggleTheme } = useTheme()

  return(
    <div
      className='cursor-pointer' 
      onClick={() => toggleTheme()}
      >
        {dark ? <Sun /> : <Moon />}
    </div>

  )
}

export default ThemeToggle