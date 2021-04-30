import React from "react";
import Factor from "./Factor";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as factorActions from "../actions/factorActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import './FactorList.css'

export class FactorList extends React.Component {
  //constructor
  constructor(props, context) {
    super(props, context);

    this.state = {
      newFactor: "",
      error: "",
      isAddFormVisible: false,
    };

    this.updateNewFactor = this.updateNewFactor.bind(this);
    this.addFactor = this.addFactor.bind(this);
    this.removeFactor = this.removeFactor.bind(this);
    this.toggleAddFactorVisibility = this.toggleAddFactorVisibility.bind(this);
  }

  //check if the form valid
  newFactorFormIsValid() {
    let formIsValid = true;
    let error = "";
    if (this.state.newFactor.length < 1) {
      error = "new factor can not be empty!!";
      formIsValid = false;
    }
    this.setState({ error: error });
    return formIsValid;
  }

  //function for addfactor
  addFactor(event) {
    event.preventDefault();

    if(!this.newFactorFormIsValid())
      return;

    this.props.actions.addFactor(this.state.newFactor, this.props.area);
    this.setState({newFactor: ""});
    this.toggleAddFactorVisibility();
    //console.log("added")
  }

  //function for removeFactor
  removeFactor(factor) {
    this.props.actions.removeFactor(factor, this.props.area);
  }

  //function for updateFactor
  updateNewFactor(event) {
    const value = event.target.value;
    return this.setState({ newFactor: value });
  }

  //function for addToggleVisibility
  toggleAddFactorVisibility() {
    const visibility = this.state.isAddFormVisible;
    this.setState({ isAddFormVisible: !visibility });
  }

  render() {
    return (
      
        <React.Fragment>
          <ul>
            {this.props.factorList.map((factor) => (
              <Factor
                key={factor}
                factor={factor}
                onRemove={this.removeFactor}
              />
            ))}
          </ul>
          <button
            className="button"
            onClick={this.toggleAddFactorVisibility}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          {this.state.isAddFormVisible && (
            <div className="box">
              <form>
                <div className="field">
                  <input
                    className="add"
                    type="text"
                    name="factor"
                    placeholder="Add new factor"
                    value={this.state.newFactor}
                    onChange={this.updateNewFactor}
                  />
                  <button
                    className="add-btn"
                    type="submit"
                    onClick={this.addFactor}
                  >
                    Add
                  </button>
                </div>
                {this.state.error && <div>{this.state.error}</div>}
              </form>
            </div>
          )}
        </React.Fragment>
    
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    factorList: state[ownProps.area],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(factorActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FactorList);
