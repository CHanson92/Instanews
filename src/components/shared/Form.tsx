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
        <form role="search" onSubmit={handleSubmit(onSubmit)} className="pt-3 sm:pt-0">
            <input
                type="search"
                {...register('search', { required: true })}
                placeholder="🔍   search specific news"
                aria-invalid={errors.search ? 'true' : 'false'}
                className="min-w-15 text-center border rounded-md font-semibold focus:outline-none focus:ring-2 border-gray-600 text-gray-800 focus:ring-offset-gray-800 dark:bg-gray-800 dark:border-white dark:text-white dark:placeholder-white transition-colors px-2 py-3 mt-2"
            />
            {errors.search && (
                <span role="alert" className="text-red-600 ml-3">
                    Required!
                </span>
            )}
        </form>
    )
}

export default Form
