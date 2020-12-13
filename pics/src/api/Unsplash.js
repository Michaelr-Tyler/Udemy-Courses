import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID AirMWyPNPZg3s7svjp3orwGBCtfxahWy1TsHblFeu9A'
    }
});