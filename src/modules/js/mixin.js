import Foot from 'components/Foot.vue';
let mixin = {
    filters: {
        currency(price) {
            var rlt = price;
            var xds = price.toString().split('.');
            if (xds.length === 1) {
                rlt = rlt + ".00";
            } else {
                if (xds[1].length < 2) {
                    rlt = rlt + "0";
                }
            }
            return rlt;
        }
    },
    components: {
        Foot
    }
}
export default mixin;