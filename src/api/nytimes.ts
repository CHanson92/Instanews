import { apiKey, topStoriesUrl } from '../utils/strings';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const nyTimes = async (filter: string) => {
    try {
        const res = await fetch(`${topStoriesUrl}${filter}${apiKey}`);
        const json = await res.json();
        const data = await json.results;
        return data;
    } catch (error) {
        throw Error(error.message);
    }
};

export default nyTimes;
