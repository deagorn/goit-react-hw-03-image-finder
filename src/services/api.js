import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/';

export const fetchImg = async configParams => {
    const { data } = await axios.get('api/', {
        params: {
            key: '39076569-9cff8913da31274e2ad8311c4',
            page: 1,
            per_page: 12,
            ...configParams,
        }
    });
    return data
}