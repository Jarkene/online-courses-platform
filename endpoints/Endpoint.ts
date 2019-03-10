import axios from 'axios'

export default class Endpoint<T> {
    path: string;
    method: string;

    constructor(method: string, path: string) {
        this.path = path;
        this.method = method;
    }

    execute(data: T) {
        this.path += '?';
        this.path = Object.keys(data).reduce((resultPath, curParameter) => {
            return resultPath += curParameter + '=' + data[curParameter] + '&';
        }, this.path);
        this.path = this.path.substring(0, this.path.length - 1);

        return this.method == 'GET' ? 
            axios.get('http://localhost:9000' + this.path) :
            axios.post(JSON.stringify(data));
    }
}