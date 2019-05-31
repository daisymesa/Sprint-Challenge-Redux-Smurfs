import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    name: '',
    age: '',
    height: ''
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {

    return (
      <div className="App">

        <div className="header">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          {/* <div>Welcome to your Redux version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div> */}
        </div>


        <div className="smurf-form">
          <form onSubmit={this.addSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button type="submit">Add to the village</button>
          </form>
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  fetching: state.fetching,
  error: state.error
})

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(App);



// export default App;
