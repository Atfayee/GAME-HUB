import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'a07eaf4314994eda936b89f4967ac373'
    }
})