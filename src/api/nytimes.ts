import axios from 'axios';
import { apiKey, url } from '../utils/strings';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const nyTimes = async (filter: string) => {
    try {
        const res = await axios.get(`${url}${filter}${apiKey}`);
        const data = await res.data.results;
        return data;
    } catch (error) {
        throw Error(error.message);
    }
};

export default nyTimes;
