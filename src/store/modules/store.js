import store from '../index';

const state = {
    displacements : [
        require('@/assets/images/displacements/map.png'),
        require('@/assets/images/displacements/dots.jpg'),
        require('@/assets/images/displacements/lines.jpg'),
        require('@/assets/images/displacements/water.jpg'),
    ],
    currentDisplacement: 0
}

const mutations = {
    setCurrentDisplacement(state, value) {
        state.currentDisplacement = value;
    },
}

const actions = {
    setCurrentDisplacement: ({commit}, value) => commit('setCurrentDisplacement', value)
}

const getters = {
    getCurrentDisplacement: state => state.currentDisplacement,
    getDisplacements: state => state.displacements,
}

export default {
    state,
    getters,
    actions,
    mutations
}