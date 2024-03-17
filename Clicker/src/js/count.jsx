import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='Counter'>
                <h1 className='_Counter'>00</h1>
            </div>
         );
    }
}
 
export default Counter;