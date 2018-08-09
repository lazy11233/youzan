import 'css/common.css';
import './index.css';

import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js';

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import Foot from 'components/Foot.vue';
import Swipe from 'components/Swipe.vue';

let app = new Vue({
    el: "#app",
    data: {
        lists: null, //初始对象赋值
        pageNum: 0,
        pageSize: 6,
        loading: false,
        allLoaded: false,
        bannerLists: null

    },
    created() {
 this.getLists() ;
 this.getBanner();
    },
    methods: {
        getLists() {
            if (this.allLoaded) {//数据全部请求完成后，不再发出请求
                return;
            }
            this.loading = true;
            axios.post(url.hotLists, {
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }).then(res => {
                //使用 => 方式的作用域是它的上一层，也就是created。
                
                let curLists = res.data.lists;
                if(curLists.length < this.pageSize){
                    //判断所有数据是否完全加载完毕。
                    this.allLoaded = true;
                }
                if (this.lists) {//非首次请求，往数组里面增加数据。
                    this.lists = this.lists.concat(curLists);
                } else {
                    this.lists = curLists; //第一次请求数据，初始化
                }
            })
            this.loading = false;
            this.pageNum++;
        },
        getBanner() {
            axios.get(url.banner).then(res => {
                this.bannerLists = res.data.lists;
            })
        }
    },
    components:{
        Foot,
        Swipe
    }
});
