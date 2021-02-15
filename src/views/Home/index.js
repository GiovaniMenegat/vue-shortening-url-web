import axios from "axios";

import Header from "../../components/Header/index.vue";
import Footer from "../../components/Footer/index.vue";
import Container from "../../components/Container"
import Links from "../../components/Links/index.vue";

export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        Container,
        Links
    },
    data() {
        return {
            inputLink: "",
            shortLink: "",
        }
    },
    methods: {
        shortenLink: function() {
            /* console.log(this.link); */

            axios.get(`https://api.shrtco.de/v2/shorten?url=${this.inputLink}`)
            .then(({data}) => {
                console.log(data.result.short_link);
                this.shortLink = data.result.short_link;
                console.log(this.shortLink);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
}