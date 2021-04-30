import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Landing extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     goal : ""
  //   };
  //   this.addGoal = this.addGoal.bind(this);
  // }

  // addGoal(event){
  //   event.preventDefault();
  //   console.log("clicked")
    // this.props.actions.addGoal(this.state.goal);
    // this.setState({goal: ""});
  //}
  // updateGoal(event) {
  //   const value = event.target.value;
  //   return this.setState({ goal: value });
  //   //console.log(value);
  // }


  render() {
    return (
      <div className="container">
        <h2> Select A Goal and We are Good to go!!</h2>
        <div className="input-field col s6">
          <input
            placeholder="ex: should I watch this movie? "
            id="goal"
            type="text"
            name="text"
          />
        </div>
        <Link
          to="/swot"
          className="btn waves-effect waves-light"
          type="submit"
        >
          Let's Go
        </Link>
      </div>
    );
  }
}


export default Landing;
