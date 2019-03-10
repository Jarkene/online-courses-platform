import Endpoint from './Endpoint'

interface Language {
    lang: string,
}

export default class GetLangEndpoint extends Endpoint<Language> {
    constructor() {
        super('GET', '/localization');
    }
}