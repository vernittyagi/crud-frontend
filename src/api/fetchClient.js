const BASE_URL = 'http://localhost:3000/api'

export const fetchClient = async (endpoint, options = {}) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            ...(token && {Authorization: `Bearer ${token}`})
        },
        ...options,
    });

    const data = await response.json();
    console.log('data from api - ', data);
    
    if(!response.ok){
        throw new Error(data.message || 'Request failed')
    }

    return data
}