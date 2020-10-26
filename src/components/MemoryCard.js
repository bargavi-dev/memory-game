import React from 'react'
import './MemoryCard.css'


class MemoryCard extends React.Component {
    constructor() {
        super();
        this.state = { isFlipped: false };
    }
    // Make MemoryCard return some JSX
    clickHandler = () => {
        this.setState({ isFlipped: !this.state.isFlipped })
    }


   render() {
       const innerClass = this.state.isFlipped ? 'MemoryCard__inner flipped' : 'MemoryCard__inner'
       return (
           <div className="MemoryCard" onClick={ this.clickHandler }>
                <div className={innerClass}>
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