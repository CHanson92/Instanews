import Form from './Form'
import Link from 'next/link'
import DarkModeButton from './DarkModeButton'

const Header = () => (
    <header className="flex flex-col text-center sm:flex-row sm:justify-around sm:items-center sticky top-0 z-50 bg-white border-b border-gray-500 dark:bg-black dark:border-white dark:text-white transition-colors py-5">
        <Link href="/">
            <h1 className="text-5xl cursor-pointer">Instanews</h1>
        </Link>
        <Form />
        <DarkModeButton />
    </header>
)

export default Header
