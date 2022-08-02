
const nav = {
    state: () => ({
        show: false
    }),
    mutations: {
        setNavigation: (state) => {
            state.show = !state.show
        }
    }
}

export default nav