import { createContext, Dispatch, useReducer } from 'react'

export const ToggleContext = createContext<[State, Dispatch<Action>]>(
    ([] as unknown) as [State, Dispatch<Action>]
)

interface State {
    dark?: boolean
}

interface Action {
    type: string
}

interface Props {
    children: React.ReactNode
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'dark':
            const body = document.body
            state.dark ? (body.className = 'light') : (body.className = 'dark')
            return { ...state, dark: !state.dark }
        default:
            return { ...state }
    }
}

export default function ToggleProvider({ children }: Props) {
    const [toggle, setToggle] = useReducer(reducer, {
        dark: false
    })

    return <ToggleContext.Provider value={[toggle, setToggle]}>{children}</ToggleContext.Provider>
}
