// import { getCookieByName } from '../constants';
import { Api } from './myApi';
console.log('aaaaaaaaaaaaaa', import.meta.env.VITE_MY_URL);

const service = new Api({
    //baseUrl: 'https://3000-mohamedhajbi-testdocker-f1ekzqi78rz.ws-eu101.gitpod.io',
    baseUrl: import.meta.env.VITE_MY_URL,
    baseApiParams: {
        headers: {
            // 'Content-Type': 'application/json',
            // accept: 'application/json',
            ContentType: 'multipart/form-data',
            // Authorization: `Bearer ${getCookieByName('token')}`
        }
    }
});

export default service;