import React, { Component } from 'react';
import './App.css';
import SwotTable from './components/SwotTable'
import { connect } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        
        <BrowserRouter>
            <div>
                <Route exact path="/swot"> < SwotTable > {this.props.state} </ SwotTable> </Route>
                <Route exact path="/" component={Landing} />
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    state: state
  }
}

export default connect(mapStateToProps) (App);