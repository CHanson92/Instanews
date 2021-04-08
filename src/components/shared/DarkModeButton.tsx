import { useContext } from 'react'
import { ToggleContext } from '../../context/ToggleContext'
import { FiSun, FiMoon } from 'react-icons/fi'

const DarkModeButton = () => {
    const [{ dark }, setToggle] = useContext(ToggleContext)

    return (
        <div className="flex justify-center items-center pt-3 sm:pt-0">
            {dark ? (
                <FiSun
                    size={50}
                    className="text-yellow-300 cursor-pointer"
                    onClick={() => setToggle({ type: 'dark' })}
                />
            ) : (
                <FiMoon
                    size={50}
                    className="text-yellow-300 cursor-pointer"
                    onClick={() => setToggle({ type: 'dark' })}
                />
            )}
        </div>
    )
}

export default DarkModeButton
