import React from 'react'
import './MemoryCard.css'


class MemoryCard extends React.Component {
    constructor() {
        super();
        this.state = { isFlipped: true };
    }
    // Make MemoryCard return some JSX
    clickHandler = () => {
        this.setState({ isFlipped: !this.state.isFlipped })
    }


   render() {
       return (
           <div className="MemoryCard" onClick={ this.MemoryCard }>
                <div className="MemoryCard__inner">
                    <div className="MemoryCard__back">
                        <img alt="" src="https://www.digitalcrafts.com/img/logo-wrench-white.png"></img>
                    </div>
                    <div className="MemoryCard__front">
                        ∆
                    </div>
                </div>
           </div>
       );
   }
  }



export default MemoryCard;