import Home from "./Home";
import "./App.css";

const cardDetailsList = [
  {
    id: 1,
    title: "Basic",
    subHeading: "FOR INDIVIDUALS & SMALL BUSINESSES",
    description:
      "Everything you need to create your store, ship products and process payments",
    price: "1,994",
    included: [
      "Basic reports",
      "upto 1,000 inventory locations",
      "2 staff accounts"
    ]
  },
  {
    id: 2,
    title: "Shopify",
    subHeading: "FOR SMALL BUSINESSES",
    description:
      "Level up your business with professional reporting and more staff accounts",
    price: "7,447",
    included: [
      "Professional reports",
      "upto 1,000 inventory locations",
      "5 staff accounts"
    ]
  },
  {
    id: 3,
    title: "Advanced",
    subHeading: "FOR MEDIUM TO LARGE BUSINESSES",
    description:
      "Get the best of shopify with the custom reporting and our lowest transaction fees",
    price: "30,164",
    included: [
      "Custom reports builder",
      "upto 1,000 inventory locations",
      "15 staff accounts"
    ]
  }
];

export default function App() {
  return (
    <div className="App">
      <Home cardDetailsList={cardDetailsList} />
    </div>
  );
}
