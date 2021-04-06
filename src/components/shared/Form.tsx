import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

type Input = {
    search: string
}

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Input>()
    const router = useRouter()

    const onSubmit = (data: Input) => {
        const { search } = data
        router.push({ pathname: `/search/[param]`, query: { param: search } })
    }

    return (
        <form role="search" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="search"
                {...register('search')}
                placeholder="search for more specific news"
                aria-invalid={errors.search ? 'true' : 'false'}
            />
            {errors.search && <span role="alert">Something went wrong!</span>}
            <input type="submit" />
        </form>
    )
}

export default Form
