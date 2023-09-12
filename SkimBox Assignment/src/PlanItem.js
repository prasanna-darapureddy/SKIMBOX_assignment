import { TiTick } from "react-icons/ti";
import "./planitem.css";

const PlanItem = (props) => {
  const { eachPlanDetails } = props;
  const { title, subHeading, description, price, included } = eachPlanDetails;

  return (
    <>
      <li className="paln-item-container">
        <h1 className="heading">{title}</h1>
        <h4 className="sub-heading">{subHeading}</h4>
        <p className="description">{description}</p>
        <strong className="price">
          {price} <span className="price-note">INR/mo</span>
        </strong>
        <div className="taged-text">Get your first 3 months for 20/m</div>
        <h4 className="included">What's included on {title}</h4>
        {included.map((eachBenifit) => (
          <div className="lists">
            {" "}
            <TiTick fill="#80e5ff" /> <span>{eachBenifit}</span>
          </div>
        ))}
        <div className="button-container">
          <button type="button" className="try-button">
            Try For Free
          </button>
        </div>
      </li>
    </>
  );
};
export default PlanItem;
