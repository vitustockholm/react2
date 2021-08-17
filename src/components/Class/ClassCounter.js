import React, { Component } from 'react';

import './ClassCounter.css';

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      message: '',
    };
  }
  //   increment() {
  //     this.setState({ count: this.state.count + 1 });
  //   }
  //   decrement() {
  //     this.setState({ count: this.state.count - 1 });
  //   }
  ///////////////////////////////////////////////////////////

  clickHandler(action) {
    if (this.state.count < 10 || action === 'decrement') {
      switch (action) {
        case 'increment':
          this.setState({ count: this.state.count + 1 });
          break;
        case 'decrement':
          this.setState({ count: this.state.count - 1 });
          //reseting
          if (this.state.count === 10) this.setState({ message: '' });
          break;
        default:
          return;
      }
    } else {
      this.setState({ message: 'You reached maximum count amount' });
    }
  }

  render() {
    console.log('Render');
    return (
      <div>
        <h2>Class Component</h2>
        <p>Date: {new Date().getFullYear()}</p>
        <p>Count: {this.state.count}</p>

        <button onClick={() => this.clickHandler('increment')}>+1</button>
        <button onClick={() => this.clickHandler('decrement')}>-1</button>
        <p>{this.state.message}</p>
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -1
        </button> */}
      </div>
    );
  }
  componentDidMount() {
    console.log('Object mounted: After creating Component');
  }

  componentDidUpdate() {
    console.log('Component After Update: After updating component');
  }
}
export default ClassCounter;

// {new Date().getFullYear()}
// import React, { Component } from 'react'

// export default class ClassCounter extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }
//export default ClassCounter

//
