import React, { Component } from "react";
import FactorList from "./FactorList";
//import { Landing } from "./Landing";
import './SwotTable.css';



export class SwotTable extends Component {
  
  render() {
    return (
      <div className="container">
        <h3>SWOT</h3>
        {/* <p>{ this.state.goal }</p> */}
      <table className="table">
      
      <tbody>
        <tr>
          <th></th>
          <td>
            <h2 className="heading-text1"><b>S</b>trengths</h2>
            <FactorList area='strengths'/>
            </td>
          <td>
            <h2 className="heading-text2"><b>W</b>eakness</h2>
            <FactorList area='weakness'/>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <h2 className="heading-text3"><b>O</b>pportunities</h2>
            <FactorList area='opportunities'/>
          </td>
          <td>
            <h2 className="heading-text4"><b>T</b>hreats</h2>
            <FactorList area='threats'/>
          </td>
        </tr>
      </tbody>
      </table>
      </div>
    )
  }
}

export default SwotTable


