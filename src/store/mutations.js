import GetLangEndpoint from '../../endpoints/GetLangEndpoind.ts'
import GetAdsEndpoint from '../../endpoints/GetAdsEndpoint.ts'
import GetUserEndpoint from '../../endpoints/GetUserEndpoint'
import GetLessonEndpoint from '../../endpoints/GetLessonEndpoint'
import GetTeacherDialogEndpoint from '../../endpoints/GetTeacherDialogEndpoint'

export default {
    setLang(state, lang) {
        const endpoint = new GetLangEndpoint();
        endpoint.execute({lang: lang}).then(res => state.CurLang = res.data);
    },
    setAds(state, ads) {
        const endpoint = new GetAdsEndpoint();
        endpoint.execute({ad: ads}).then(res => state.Ads = res.data);
    },
    setUser(state) {
        const endpoint = new GetUserEndpoint();
        endpoint.execute({user: 'cur'}).then(res => state.User = res.data);
    },
    setLessons(state) {
        const endpoint = new GetLessonEndpoint();
        endpoint.execute({number: 1}).then(res => state.Lessons = res.data);
    },
    setTeacherDialog(state) {
        const endpoint = new GetTeacherDialogEndpoint();
        endpoint.execute({message: 'all'}).then(res => state.TeacherDialog = res.data);
    },
}