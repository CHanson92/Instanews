export const fetcher = async (url: string): Promise<any> => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
