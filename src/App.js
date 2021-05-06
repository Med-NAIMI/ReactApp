// import logo from './logo.svg';
// import './App.css';

import React from "react";
//    component state
// import React, { Component } from "react";
//    functional state

// import React, { Fragment, useState } from "react";

// import "bootstrap/dist/css/bootstrap.css";
// import NavBar from "./components/NavBar"
// import MainContent from "./components/MainContent"
// // import Footer from "./components/Footer"
import CheckboxDescription from "./components/CheckboxDescription.jsx";
import Checkboxes from "./components/Checkboxes.jsx";
// import Offer from "./components/catsOffers/Offer";

//images
// import img1 from "./images/cat1.jpg";
// import img2 from "./images/cat2.png";
// import img3 from "./images/cat3.jpg";
// import img4 from "./images/cat4.jpg";

//question/answer or articles
// import Article from "./components/jokes/Article";

// function App() {
//   return (
//     <React.Fragment>
//     <NavBar/>
//     <MainContent/>
//     <Footer/>
//     </React.Fragment>
//   );
// }

import inputs from "./components/CheckboxInputs";

function App() {
  return (
    <React.Fragment>
      {/* <CheckboxDescription />
      <Checkboxes /> */}
      {inputs.map((input) => (
        <div>
          {" "}
          <CheckboxDescription key={input.id} input={input} />
          <Checkboxes key={input.id} input={input} />
        </div>
      ))}
    </React.Fragment>
  );
}
export default App;

// const App = () => {
//   return (
//     <React.Fragment>
//       <CheckboxDescription />
//       <Checkboxes />
//       <Checkboxes />
//       <Checkboxes />
//       <Checkboxes />
//     </React.Fragment>
//   );
// };

// class App extends Component {
//   state = {};
//   render() {
//     return (
//       <React.Fragment>
//         <CheckboxDescription />
//         <Checkboxes />
//       </React.Fragment>
//     );
//   }
// }

// const App = () => {
//   // const firstName="NAIMI";
//   // const lastName="Mohammed";
//   let date = new Date();
//   let hour = date.getHours();
//   let timeOfDay;
//   styles={color: "yellow", backgroundColor:"red", fontSize:30 };

//   if(hour<12){
//     timeOfDay="morning";
//     styles.color="green";
//   }else if(hour>=12 && hour<=17){
//     timeOfDay="afternoon";
//     styles.color="purple";

//   }else{
//     timeOfDay="night";
//     styles.color="yellow"
//   }
//   var styles;
//   return (
//     <React.Fragment>
//       <div className="container">
//         {/* <h1 style={{ display: "inline" }}>Client:</h1>
//         <p style={{ display: "inline" }}>{` Mr ${firstName}  ${lastName}`}</p> */}
//         <h1 style={styles}>{`good ${timeOfDay}!`}</h1>

//       </div>
//     </React.Fragment>
//   );
// };

// class App extends Component {
//   state = {
//     offers: [
//       {
//         id: 1,
//         src: img1,
//         owner: "Mr. hammouda",
//         phone: "0762292212",
//         email: "mohammednaimi@gmail.com",
//       },
//       {
//         id: 2,
//         src: img2,
//         owner: "Mr. Bennani",
//         phone: "0765292212",
//         email: "mohammed2@gmail.com",
//       },
//       {
//         id: 3,
//         src: img3,
//         owner: "Mr. Idriss",
//         phone: "0768892212",
//         email: "mohammed3@gmail.com",
//       },
//       {
//         id: 4,
//         src: img4,
//         owner: "Mr. Mark",
//         phone: "0762292112",
//         email: "mohammed4i@gmail.com",
//       },
//     ],
//   };
//   render() {
//     return (
//       <React.Fragment>
//         {this.state.offers.map((offer) => (
//           <Offer
//             id={offer.id}
//             src={offer.src}
//             owner={offer.owner}
//             phone={offer.phone}
//             email={offer.email}
//           />
//         ))}
//       </React.Fragment>
//     );
//   }
// }

//functional component
// function App() {
//   const [offers, setOffers] = useState([
//     {
//       id: 1,
//       src: img1,
//       owner: "Mr. hammouda",
//       phone: "0762292212",
//       email: "mohammednaimi@gmail.com",
//     },
//     {
//       id: 2,
//       src: img2,
//       owner: "Mr. Bennani",
//       phone: "0765292212",
//       email: "mohammed2@gmail.com",
//     },
//     {
//       id: 3,
//       src: img3,
//       owner: "Mr. Idriss",
//       phone: "0768892212",
//       email: "mohammed3@gmail.com",
//     },
//     {
//       id: 4,
//       src: img4,
//       owner: "Mr. Mark",
//       phone: "0762292112",
//       email: "mohammed4i@gmail.com",
//     },
//   ]);
//   return (
//     <React.Fragment>
//       {offers.map((offer) => (
//         <Offer
//           key={offer.id}
//           offer={offer}
//           // id={offer.id}
//           // src={offer.src}
//           // owner={offer.owner}
//           // phone={offer.phone}
//           // email={offer.email}
//         />
//       ))}
//     </React.Fragment>
//   );
// }

// function App() {
//   const [articles, setArticles] = useState([
//     {
//       id: 1,
//       question: "what is cms used for?",
//       answer: "cms is content management system used for websites creation.",
//     },
//     {
//       id: 2,
//       answer: "cms is content management system used for websites creation.",
//     },
//     {
//       id: 3,
//       question: "what is cms used for?",
//       answer: "cms is content management system used for websites creation.",
//     },
//   ]);
//   return (
//     <React.Fragment>
//       {articles.map((article) => (
//         <Article key={article.id} article={article} />
//       ))}
//     </React.Fragment>
//   );
// }

// export default App;

// import React from "react";

// import productsData from "./components/products/ProductsData";

// import Product from "./components/products/Product";

// function App() {
//   return (
//     <React.Fragment>
//       {productsData.map((product) => (
//         <Product key={product.id} product={product} />
//       ))}
//     </React.Fragment>
//   );
// }
// export default App;
