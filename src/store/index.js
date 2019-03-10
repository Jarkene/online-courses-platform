import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import Webinars from '../assets/json/webinars.json'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const store = new Vuex.Store({
    state: {
        User: {},
        Lessons: [],
        Ads: [],
        TeacherDialog: [],
        Webinars,
        CurLang: {},
    },
    getters,
    mutations,
    actions
})

export default store;