import Endpoint from './Endpoint'

interface Message {
    message: string;
}

export default class GetTeacherDialogEndpoint extends Endpoint<Message> {
    constructor() {
        super('GET', '/api/teacher_dialog');
    }
}