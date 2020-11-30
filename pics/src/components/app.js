import Axios from 'axios';
import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';


export class App extends React.Component {
   async onSearchSubmit(term) {
       const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{ query: term },
            headers:{
            Authorization: 'Client-ID AirMWyPNPZg3s7svjp3orwGBCtfxahWy1TsHblFeu9A'
        }
        });
        console.log(response.data.results)
    }
    render(){
    return (
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
    );
}
}

// export default App;