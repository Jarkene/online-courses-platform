export default {
    setLang(context, lang) {
        context.commit('setLang', lang);
    },
    setAds(context, ad) {
        context.commit('setAds', ad)
    },
    setUser(context) {
        context.commit('setUser')
    },
    setLessons(context) {
        context.commit('setLessons')
    },
    setTeacherDialog(context) {
        context.commit('setTeacherDialog')
    }
}