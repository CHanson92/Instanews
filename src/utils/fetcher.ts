import { Article } from '../interfaces'

export const articleFetcher = async (url: string): Promise<Article[]> => {
    const requestHeaders: HeadersInit = new Headers()
    const apiKey = process.env.API_KEY
    requestHeaders.set('x-api-key', apiKey ? apiKey : '')

    const res = await fetch(url, {
        method: 'GET',
        headers: requestHeaders
    })
    const json = await res.json()
    const { articles } = json
    return articles
}
