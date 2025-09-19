import { Link } from "react-router"
import { Button } from "@/components/ui/button"


const NotFoundPage = () => {
    return(
        <div className='flex flex-col items-center justify-center w-full p-6'>
            <h1 className='mb-3 mt-2 text-balance text-3xl font-semibold md:text-4xl'>404 page not found</h1>
            <p className='mb-10 text-base md:text-lg'>We couldn't find the page you were looking for.</p>
            <Link to='/'>
                <Button>Back to home</Button>
            </Link>
        </div>
    )
}

export default NotFoundPage