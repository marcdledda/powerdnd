import React, { Component } from 'react';
import PowerList from '../powers.json';

class MakePower extends Component {

    componentDidMount(){
        console.log(PowerList);
    }
    
    render(){
        return(
          <div>
              TEST
          </div>  
        );
    }
}

export default MakePower;