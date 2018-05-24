import React, { Component } from 'react'

class Api extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
      trades: [],
    }
  }

  render() {
    const ccxt = require('ccxt')
    // const cors = 'https://crossorigin.me.'

    return (
      <div>
        {console.log(new ccxt.kraken())}

      </div>
    );
  }
}

export default Api
