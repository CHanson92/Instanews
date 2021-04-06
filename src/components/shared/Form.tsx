import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

type Input = {
    search: string
}

const Form = () => {
    const { register, handleSubmit, errors } = useForm<Input>()
    const router = useRouter()

    const onSubmit = (data: Input) => {
        const { search } = data
        router.push({ pathname: `/search/[param]`, query: { param: search } })
    }

    return (
        <form role="search" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="search"
                name="search"
                placeholder="search for more specific news"
                aria-label="Search for more specific news"
                ref={register}
            />
            {errors.search && <span>Something went wrong!</span>}
            <input type="submit" />
        </form>
    )
}

export default Form
