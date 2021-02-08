import { Articles } from '../interfaces/newsApi'
import { newsApiKey, newsApiUrl } from '../utils/strings'

export default async function getNews(): Promise<Articles> {
    try {
        const res = await fetch(`${newsApiUrl}sources?apiKey=${newsApiKey}`)
        const json = await res.json()
        const data = await json.sources
        return data
    } catch (error) {
        throw Error(error.message)
    }
}
