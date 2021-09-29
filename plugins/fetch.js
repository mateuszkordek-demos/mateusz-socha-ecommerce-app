import axios from "axios";


let fetchStore = async that => {
    const apiBaseUrl = 'https://mateusz-socha-microservice-prod.enl-projects.com';

    async function getProducts() {
        let response = await axios.get(
            `${apiBaseUrl}/products`
        );

        let products = response.data.data.filter(a => !a.categories.isShipping)
        let shipping = response.data.data.filter(a => !!a.categories.isShipping)


        that.$store.commit("SET_PRODUCTS", products);
        that.$store.commit("SET_SHIPPING", shipping);
    }

    async function getGigs() {
        let response = await axios.get(
            "https://admin.enlighten.pl/msocha/wp-json/wp/v2/gigs?per_page=100"
        );
        that.$store.commit("SET_GIGS", response.data);
    }

    async function getVideos() {
        let response = await axios.get(
            "https://admin.enlighten.pl/msocha/wp-json/wp/v2/videos?per_page=100"
        );
        that.$store.commit("SET_VIDEOS", response.data);
    }

    await getProducts()
    await getGigs()
    await getVideos()
    that.$store.commit("SET_FETCHED", true);

}

export default fetchStore;
