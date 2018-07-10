import React, { Component } from 'react';
import PowerList from '../powers.json';

class MakePower extends Component {

    callPower = () => {
        console.log("TEST");
        console.log(PowerList.powers);
    }

    createPower = () => {
        let data = {
            "power": "haha",
            "desc": "hehe",
            "property": "hellye"
        }
    }
    
    render(){
        return(
          <div>
              <input type="text" placeholder="Power Name"/> <br/>
              <textarea placeholder="Description" cols="30" rows="10"></textarea> <br/>
              <input type="text" placeholder="Property"/> <br/>
              <button onClick={this.createPower}>Create Power</button> <br/>
              <button onClick={this.callPower}>Check Powers</button>
          </div>  
        );
    }
}

export default MakePower;