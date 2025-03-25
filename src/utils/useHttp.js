import axios from 'axios';

export function useHttp() {
    const get = async(url, params = {}) => {
        try {
            const response = await axios.get(`${url}`, { params });
            return response.data;
        } catch (error) {
            console.error('GET Request Error:', error);
            throw error;
        }
    };

    const post = async(url, data = {}) => {
        try {
            const response = await axios.post(`${url}`, data);
            return response.data;
        } catch (error) {
            console.error('POST Request Error:', error);
            throw error;
        }
    };

    return {get, post };
}