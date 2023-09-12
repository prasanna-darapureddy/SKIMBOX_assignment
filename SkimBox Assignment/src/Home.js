import { Component } from "react";
import Header from "./Header";
import PlanItem from "./PlanItem";
import "./home.css";

class Home extends Component {
  render() {
    const { cardDetailsList } = this.props;
    return (
      <>
        <Header />
        <div className="home-bg-container">
          <div className="buttons-container">
            <button type="button" className="selected-button pay-button">
              Pay Monthly
            </button>
            <button type="button" className=" pay-button">
              Pay Yearly (save 25%)
            </button>
          </div>
          <ul className="cards-container">
            {cardDetailsList.map((eachPlan) => (
              <PlanItem key={eachPlan.id} eachPlanDetails={eachPlan} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
export default Home;
