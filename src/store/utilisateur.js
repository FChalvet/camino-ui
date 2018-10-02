import Vue from 'vue'

import { connecter, identifier } from '@/api'

export const state = {
  id: undefined,
  email: undefined,
  nom: undefined,
  prenom: undefined,
  telephoneMobile: undefined,
  telephoneFixe: undefined,
  administrationId: undefined,
  entrepriseId: undefined,
  groupes: [],
  preferences: {
    map: {
      tilesName: 'osm / mapnik'
    }
  },
  loginMessages: []
}

export const actions = {
  async connecter({ commit, dispatch }, { id, motDePasse }) {
    commit('loginMessagesRemove')
    try {
      const { token, utilisateur } = await connecter({ id, motDePasse })

      commit('tokenAdd', token)
      commit('utilisateurAdd', utilisateur)
      commit('popupClose', null, { root: true })
      dispatch(
        'messageAdd',
        { value: `Bienvenue ${id}`, type: 'success' },
        { root: true }
      )
    } catch (e) {
      commit('tokenRemove')
      commit('utilisateurRemove')
      commit('loginMessageAdd', { value: e, type: 'error' })
    }
  },

  async identifier({ commit }) {
    try {
      const utilisateur = await identifier()
      commit('utilisateurAdd', utilisateur)
    } catch (e) {
      commit('utilisateurRemove')
    }
  },

  logout({ commit }) {
    commit('tokenRemove')
    commit('utilisateurRemove')
  }
}

export const getters = {
  tilesActive: (state, getters, rootState) =>
    rootState.map.tiles.find(t => t.name === state.preferences.map.tilesName)
}

export const mutations = {
  preferencesMapTilesNameSelect(state, tilesName) {
    Vue.set(state.preferences.map, 'tilesName', tilesName)
  },
  tokenAdd(state, token) {
    localStorage.setItem('token', token)
  },
  tokenRemove(state) {
    localStorage.removeItem('token')
  },
  utilisateurAdd(
    state,
    {
      id,
      email,
      nom,
      prenom,
      telephoneMobile,
      telephoneFixe,
      administrationId,
      entrepriseId,
      groupes
    }
  ) {
    state.id = id
    state.email = email
    state.nom = nom
    state.prenom = prenom
    state.telephoneMobile = telephoneMobile
    state.telephoneFixe = telephoneFixe
    state.administrationId = administrationId
    state.entrepriseId = entrepriseId
    state.groupes = groupes
  },
  utilisateurRemove(state, utilisateur) {
    state.id = undefined
    state.email = undefined
    state.nom = undefined
    state.prenom = undefined
    state.telephoneMobile = undefined
    state.telephoneFixe = undefined
    state.administrationId = undefined
    state.entrepriseId = undefined
    state.groupes = []
  },
  loginMessagesRemove(state) {
    state.loginMessages = []
  },
  loginMessageAdd(state, message) {
    state.loginMessages.push(message)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}