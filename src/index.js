import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CompanyProfileProvider from "./providers/companyProfileProvider";
// import { positions, Provider } from "react-alert";
// import AlertMUITemplate from "react-alert-template-mui";
// import { render } from "react-dom";
// import Home from "./pages/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CompanyProfileProvider>
    <App />
  </CompanyProfileProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const options = {
//   position: positions.MIDDLE
// };

// const Appp = () => (
//   <Provider template={AlertMUITemplate} {...options}>
//     <Home />
//   </Provider>
// );

// render(<Appp />, document.getElementById("root"));
