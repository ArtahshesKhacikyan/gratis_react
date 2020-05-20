import axios from 'axios';
import { Cookies } from 'react-cookie';

const jwtToken = (() => {
    const cookies = new Cookies();
    return cookies.get('token')
})();

const tokenizedApiCaller = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Auth': `Gratis ${jwtToken}`,
        'Accept' : 'application/json'
    }
});

const updateTokens = function(authToken, refreshToken) {
    tokenizedApiCaller.defaults.headers['Authorization'] = `Bearer ${authToken}`;
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('refreshToken', refreshToken);
};



const unTokenizedApiCaller = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

export {
    tokenizedApiCaller,
    unTokenizedApiCaller,
    updateTokens,
};