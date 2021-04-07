import Form from './Form'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="flex flex-col text-center sm:flex-row sm:justify-around sticky top-0 z-50 bg-white border-b border-gray-500 py-5 mb-5">
            <Link href="/">
                <h1 className="text-5xl cursor-pointer">Instanews</h1>
            </Link>
            <Form />
        </header>
    )
}

export default Header
