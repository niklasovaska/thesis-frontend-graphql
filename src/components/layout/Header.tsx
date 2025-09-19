import ThemeToggle from "../features/ThemeToggle"

const Header = () => {
    return(
        <div className='flex items-center justify-between px-10 bg-muted border-black/50 border-b h-[80px]'>
            <div className='text-2xl font-bold'>Album collection</div>
            <ul className='flex items-center gap-6 font-bold'>
                <li>
                    Home
                </li>
                <li>
                    Sign in
                </li>
                <ThemeToggle />
            </ul>
        </div>
    )
}

export default Header