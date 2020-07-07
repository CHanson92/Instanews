import axios from 'axios';
import { apiKey, url } from '../utils/strings';

export default async (filter) => {
    try {
        const res = await axios.get(`${url}${filter}${apiKey}`);
        const data = await res.data.results;
        return data;
    } catch (error) {
        if (
            axios.isCancel((thrown) =>
                console.log('request cancelled', thrown.message),
            )
        )
            throw Error(error.message);
    }
};
