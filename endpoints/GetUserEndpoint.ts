import Endpoint from './Endpoint'

interface User {
    user: string;
}

export default class GetUserEndpoint extends Endpoint<User> {
    constructor() {
        super('GET', '/api/user');
    }
}