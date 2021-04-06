import Form from './Form'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <Link href="/">
                <h1>Instanews</h1>
            </Link>
            <Form />
        </header>
    )
}

export default Header
