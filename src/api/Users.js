import ApiManager from './ApiManager'

export const Users = async data => {
    try {
        const result = await ApiManager('', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error;
    }
}