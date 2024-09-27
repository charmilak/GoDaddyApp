// common API Service component
const baseUrl = 'https://api.github.com';

//  handle API requests
export const GetApiResponse = async (endpoint, methodType) => {
    const options = {
        method: methodType
    };
    const url = new URL(endpoint, baseUrl); //used in built javascript URL Constructor
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            console.log('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error in API call:', error);
    }
};