import store from '../store'

function localize(path) {
    return path.split('.')
        .reduce( (resultPath, curPathSegment) => 
            resultPath[curPathSegment], store.getters.CurLang);
}

export default {
    install(Vue) {
        Vue.filter('localize', localize)
        Vue.prototype.$t = localize;
    }
}