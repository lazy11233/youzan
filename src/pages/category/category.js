import 'css/common.css';
import './category.css';

import Vue from 'vue';
import axios from 'axios';

import Foot from 'components/Foot.vue';
import url from 'js/api.js'

new Vue({
    el: '#app',
    data: {
        topLists: null,
        topIndex: 0,
        subData: null,
        rankData: null
    },
    methods: {
        getTopList() {
            axios.post(url.topList).then(res => {
                this.topLists = res.data.lists;
            })
        },
        getSubList(id,index){
            this.topIndex = index;
            if(index === 0){
                this.getRank();
            }else{
                axios.post(url.subList,{id}).then(res => {
                    this.subData = res.data.data;
                })
            }
        },
        getRank(){
            axios.post(url.rank).then(res => {
                this.rankData = res.data.data;
            })
        }
    },
    created() {
        this.getTopList();
        this.getSubList(0,0);
    },
    components: {
        Foot
    },
    filters: {
        currency(price){
            var rlt = price;
            var xds = price.toString().split('.');
            if(xds.length === 1){
                rlt = rlt + ".00";
            }else{
                if(xds[1].length < 2){
                    rlt = rlt + "0";
                }
            }
            return rlt;

        }
    }
})