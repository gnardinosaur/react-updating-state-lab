import React from 'react';

class DigitalClicker extends React.Component {
    
    state = {
        timesClicked: 0
    }

    handleClick = () => {
        let newCount = this.state.timesClicked + 1
        this.setState({
            timesClicked: newCount
        })
    }
    
    render(){
        return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    }
}

export default DigitalClicker