import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: 'Bearer LPgtOP5i3c4Akfx_77eBml5UWElZU77tN645bksK42NQHKqAiVGLNVhhXn7FApOjUkqjv1Ks8gLa4RmYTZ7AkU1KNNffYtgox9N2y8SK3mTSJ-bnxk0C_p39nLeTXnYx'
  }
});