import React, { Component } from 'react';
import PowerList from '../powers.json';
import './MakePower.css';

class MakePower extends Component {
    constructor(props){
        super(props);
        this.state = {
            absi: [],
            absibool: false,
            player: [],
            playerbool: false
        }
    }

    componentDidMount(){
        console.log(PowerList);
        this.setState({
            absi: PowerList.ABSI,
            absibool: true
        })
    }

    addPower = (input, intwo, inthree, index) => {
        let object = {
            name: input,
            points: intwo,
            desc: inthree
        }
        let absiChange = this.state.absi;
        let playerChange = this.state.player;
        absiChange.splice(index, 1);
        playerChange.push(object)
        this.setState({
            absi: absiChange,
            player: playerChange,
            playerbool: true
        })
    }

    deletePower = (input, intwo, inthree, index) => {
        let object = {
            name: input,
            points: intwo,
            desc: inthree
        }
        let absiChange = this.state.absi;
        let playerChange = this.state.player;
        absiChange.push(object);
        playerChange.splice(index, 1);
        if (playerChange.length === 0){
            this.setState({
                absi: absiChange,
                player: playerChange,
                playerbool: false
            })
        } else {
            this.setState({
                absi: absiChange,
                player: playerChange,
                playerbool: true
            })
        }
    }
    
    render(){
        console.log(this.state);
        let playermap = this.state.player.map((item, index) => {
            if(this.state.playerbool){
                return (
                    <tr key={index} onClick={this.deletePower.bind(this, item.name, item.points,item.desc, index)}>
                        <td className="powerName">{item.name}</td>
                        <td className="powerPoints">{item.points}</td>
                        <td>{item.desc}</td>
                    </tr>
                )
            }
        })

        let abilitymap = this.state.absi.map((item, index) => {
            if(this.state.absibool){
                return (
                    <tr key={index} onClick={this.addPower.bind(this, item.name, item.points, item.desc, index)}>
                        <td className="powerName">{item.name}</td>
                        <td className="powerPoints">{item.points}</td>
                        <td>{item.desc}</td>
                    </tr>
                )
            }
        })


        return(
            <div className="container">
                <div className="row">
                    <div className="row-6">
                        <table>
                            <thead>
                                <tr>
                                    <th className="powerName">Name</th>
                                    <th className="powerPoints">Points</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {abilitymap}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="row-6">
                        <table>
                            <thead>
                                <tr>
                                    <th className="powerName">Name</th>
                                    <th className="powerPoints">Points</th>
                                    <th>Description</th>
                                </tr>
                            </thead>

                            <tbody>
                                {playermap}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>  
        );
    }
}

export default MakePower;