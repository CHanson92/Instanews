export const articleFetcher = async (url: string): Promise<any> => {
    const res = await fetch(url)
    const json = await res.json()
    const { articles } = json
    return articles
}
