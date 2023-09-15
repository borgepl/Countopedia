import React from 'react';
import attack from '../../images/attack.png';
import defend from '../../images/defend.png';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefense = this.handleDefense.bind(this);
        this.state = {
            count:0,
            lastplay: '',
            gamestatus: ''
        }
    }

    handleAttack= () => {

        // alert("Attack clicked");
        this.setState((prevState) => {
            let newCount = prevState.count + Math.round(Math.random() * 10);
            return {
                count: newCount,
                lastplay: 'Attack',
                gamestatus: newCount>10 ? "You Won!!" : prevState.gamestatus
            };
        });
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 100
        //     };
        // });
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 10
        //     };
        // });
        //this.setState({count : this.state.count + 100});
        //this.setState({count : this.state.count + 10});
    }

    handleDefense = () => {
        //alert("Defense clicked");
        this.setState((prevState) => {
            let newCount = prevState.count - Math.round(Math.random() * 10);
            return {
                count: newCount,
                lastplay: 'Defend',
                gamestatus: newCount<-10 ? "You Lost!!": prevState.gamestatus
            };
        });
        //this.setState({count : this.state.count - 1, status: 'Defend'});
    }

    handleRandomPlay= () => {
        let playMode = Math.round(Math.random());
        if (playMode === 0) {
            this.handleAttack();
        } else {
            this.handleDefense();
        }
    }

    handleReset = () => {
        
        this.setState(() => {
           
            return {
                count: 0,
                lastplay: '',
                gamestatus: ''
            };
        });
    }

    render() {
        return(

                <div className='row text-center'>
                    <h1>Game Score: {this.state.count}</h1>
                    <p>You will win at +10. You will loose at -10 points</p>
                    <p>Last Play: {this.state.lastplay} </p>
                    <h3>Game Status: {this.state.gamestatus} </h3>
                    <div className='col-6 col-md-3'>
                        <img alt=''
                        style={{
                            width: '100%',
                            cursor: 'pointer',
                            border: '2px solid green',
                        }} 
                        className='p-4 rounded' src={attack} onClick={this.handleAttack}></img>
                    </div>
                    <div className='col-6 col-md-3'>
                        <img alt=''
                        style={{
                            width: '100%',
                            cursor: 'pointer',
                            border: '2px solid red',
                        }} 
                        className='p-4 rounded' src={defend} onClick={this.handleDefense}></img>
                    </div>
                    {/* <button onClick={this.handleAttack} style={{width:'200px'}} className='btn btn-primary ms-2'>+1</button>
                    <button onClick={this.handleDefense} style={{width:'200px'}} className='btn btn-secondary ms-2'>-1</button> */}

                    <div className='col-12 col-md-4 offset-md-4'>
                        <button className='btn btn-primary w-100 mt-2'
                            onClick={this.handleRandomPlay}>
                            Random Play
                        </button>
                        
                        <button className='btn btn-warning w-100 mt-2'
                            onClick={this.handleReset}>
                            Reset
                        </button>
                    </div>
                </div>

        )
    }
}