import './cart_base.css';
import './cart_trade.css';
import './cart.css';

import Vue from 'vue';
import axios from 'axios';
import mixin from 'js/mixin.js';
import url from 'js/api.js';


new Vue({
    el: '.container',
    data: {
        lists: null,
        total: 0
    },
    created(){
        this.getLists();
    },
    computed: { 
        allSelected: {
            get(){
                if(this.lists && this.lists.length)
                return this.lists.every( shop => {
                    return shop.checked;
                });
                return false;
            },
            set(newVal){
                this.lists.forEach(shop => {
                    shop.checked = newVal;
                    shop.goodsList.forEach( good => {
                        good.checked = newVal;
                    })
                })
            }
        },
        selectLists(){
            if(this.lists && this.lists.length){
                let arr = [];
                let total = 0;
                this.lists.forEach(shop => {
                    shop.goodsList.forEach(good => {
                        if(good.checked){
                            arr.push(good);
                            total += (good.price * good.number);
                        }
                    })
                })
                this.total = total;
                return arr;
            }
            return [];
        }
    },
    methods: {
        getLists(){
            axios.post(url.cartLists).then(res => {
                let rlt = res.data.cartList;
                 rlt.forEach( shop => {
                    shop.checked = false;
                    shop.goodsList.forEach( good => {
                        good.checked = false;
                    })
                });
                this.lists = rlt;
            })
        },
        selectGood(shop,good){
            // console.log(shop.checked);
            good.checked = !good.checked;
            shop.checked = shop.goodsList.every(g => {
                return g.checked;
            });
        },
        selectShop(shop){
            shop.checked = !shop.checked;
            shop.goodsList.forEach(good => {
                good.checked = shop.checked;
            });
        },
        selectAllGood(){
            this.allSelected = !this.allSelected;
        }
    },
    mixins: [mixin]
    

});