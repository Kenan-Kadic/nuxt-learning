// There is a chance that this will not work on server side rendering as it has no access to local storage and you may need a cookie

import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({storage: window.sessionStorage})(store)

}
