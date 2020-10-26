import { newsApiUrl, newsApiKey } from '../utils/strings';

export default async function getNews() {
    try {
        const res = await fetch(`${newsApiUrl}sources?apiKey=${newsApiKey}`);
        const json = await res.json();
        const data = await json.sources;
        return data;
    } catch (error) {
        throw Error(error.message);
    }
}

export const groupBy = (items, key) =>
    items.reduce(
        (result, item) => ({
            ...result,
            [item[key]]: [...(result[item[key]] || []), item],
        }),
        {},
    );
