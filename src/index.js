// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App";

// const App = () => {
//   return (
//     <>
//       <h1>こんにちは！</h1>
//       <p>お元気ですか？</p>
//     </>
//   );
// };

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
