import Address from 'js/addressService.js'
import { timingSafeEqual } from 'crypto';

export default {
    data() {
        return {
            name: '',
            tel: '',
            provinceValue: -1,
            cityValue: -1,
            districtValue: -1,
            address: '',
            id: '',
            type: '',
            instance: '',
            addressData: require('js/address.json'),
            cityList: null,
            districtList: null

        }
    },
    methods: {
        add() {
            let {name,tel,provinceValue,districtValue,address} = this;
            let data = {name,tel,provinceValue,districtValue,address};
            if(this.type==='add') {
                data.id = this.id;
                Address.add(data).then(res => {
                    this.$router.go(-1);
                })
            }else if(this.type === 'edit'){
                Address.update(data).then(res => {
                    this.$router.go(-1);
                })
            }
        },
        remove() {
            if(window.confirm("确认删除吗？")){
                Address.remove(this.id).then(res => {
                    this.$router.go(-1);
                })
            }
        },
        setDefault() {
            if(window.confirm("将当前地址设置为默认地址？")){
                Address.setDefault(this.id).then(res => {
                    this.$router.go(-1);
                })
            }
        }
    },
    created() {
        let query = this.$route.query;
        console.log(query);
        this.type = query.type;
        this.instance = query.instance;
        if(this.type === 'type'){
            let ad = this.instance;
            this.provinceValue = parseInt(ad.provinceValue);
            this.name = ad.name;
            this.tel = ad.tel;
            this.address = ad.address;
            this.id = ad.id;
        }
    },
    watch: {
        provinceValue(val){
            if(val === -1) {
                return;
            }
            let list = this.addressData.list;
            let index = list.findIndex(item => {
                return item.value === val;
            })
            this.cityList = list[index].children;
            this.cityValue = -1;
            this.districtValue =-1;
            if(this.type === 'edit') {
                this.cityValue = parseInt(this.instance.cityValue);
            }

        },
        cityValue(val){
            if(val === -1) {
                return;
            }
            let list = this.cityList;
            let index = list.findIndex(item => {
                return item.value === val;
            })
            this.districtList = list[index].children;
            this.districtValue = -1;
            if(this.type === 'edit') {
                this.districtValue = parseInt(this.instance.districtValue);
            }
        }
    }
}