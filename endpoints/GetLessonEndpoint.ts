import Endpoint from './Endpoint'

interface User {
    number: number;
}

export default class GetLessonEndpoint extends Endpoint<User> {
    constructor() {
        super('GET', '/api/lesson');
    }
}