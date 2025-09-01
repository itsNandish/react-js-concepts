import { Component } from "react";



class ClassBasedComponent extends Component {

    //take a state
    state = {
        showText : false,
        changeColor : false,
        count : 0,
        changeCountstye : false
    };

    handleClcik = ()=> {
        console.log('button clicked');

        const {showText, changeColor} = this.state;

        this.setState({
            showText : !showText,
            changeColor : !changeColor
        });
    };

    //componentDidMount
    //componentDidUpdate
    //componentWillUnmout

    handleCount = ()=> {
        this.setState({
            ...this.state,
            count : this.state.count + 1,
        });
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState && prevState.count !== this.state.count && this.state.count === 10){
           this.setState({
            changeCountstye : true
           });
        }
        
    }

    render(){

        const {showText, changeColor, count, changeCountstye} = this.state;
        console.log(changeCountstye);
        return (
            <div>
                {
                    showText ? <h2 style={{color : changeColor ? 'red' : 'black'}}>Class based components</h2> : null
                }
                <button onClick={this.handleClcik} style={{margin : 20 }} >Toggle</button>
                <button onClick={this.handleCount}>Increase Count Value</button>
                <h3 style={{color : changeCountstye ? 'blue' : 'white'}}>Count is : {count}</h3>
            </div>
        );
    }
}
export default ClassBasedComponent;