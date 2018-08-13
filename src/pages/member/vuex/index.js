//状态管理：
//1.安装使用插件
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Address from 'js/addressService.js';

//创建Store实例
const store = new Vuex.Store({
    state: {
        lists: null
    },
    mutations: {//同步事件
        init(state, lists) {
            state.lists = lists;
        },
        add(state, instance) {
            state.lists.push(instance);
        },
        remove(state, id) {
            let lists = state.lists;
            let index = lists.findIndex(item => {
                return item.id = id;
            });
            lists.splice(index,1);
        },
        update(state, instance) {
            let lists = state.lists;
            let index = lists.findIndex(item => {
                return item.id === instance.id;
            });
            lists[index] = instance;
        },
        setDefault(state, id) {
            let lists = state.lists;
            lists.forEach(item => {
                if(item.id === id) {
                    item.isDefault = true;
                }
            });
        }
    },
    actions: {
        getLists({commit}) {
            Address.list().then(res => {
                commit('init', res.data.lists);
            })
        },
        addAction({commit},instance) {
            Address.add(instance).then(res => {
                commit('add',instance);
            })
        },
        removeAction({commit}, id) {
            Address.remove(id).then(res => {
                commit('remove',id);
            })
        },
        updateAction({commit}, instance) {
            Address.update(instance).then(res => {
                commit('update', instance);
            })
        },
        setDefaultAction({commit}, id) {
            Address.setDefault(id).then(res => {
                commit('setDefault', id);
            })
        }
    }
})

export default store;
