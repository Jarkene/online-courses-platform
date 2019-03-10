import Endpoint from './Endpoint'

interface Ads {
    ad: string,
}

export default class GetLangEndpoint extends Endpoint<Ads> {
    constructor() {
        super('GET', '/api/ads');
    }
}