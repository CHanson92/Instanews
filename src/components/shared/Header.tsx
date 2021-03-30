const Header = (): JSX.Element => {
    const onSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        console.log('hello')
    }

    return (
        <header>
            <h1>Instanews</h1>
            <form role="search" onSubmit={onSubmit}>
                <div>
                    <input
                        type="search"
                        id="mySearch"
                        name="q"
                        placeholder="Search the site..."
                        aria-label="Search through site content"
                        required
                    />
                    <button>Search</button>
                </div>
            </form>
        </header>
    )
}
export default Header
