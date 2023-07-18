// import { getCookieByName } from '../constants';
import { Api } from './myApi';

const service = new Api({
    baseUrl: 'https://3000-mohamedhajbi-testdocker-ztxgmkugbki.ws-eu101.gitpod.io',
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