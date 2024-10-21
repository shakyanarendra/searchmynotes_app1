import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <div className="bg-zinc-500 text-white">
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </div>
//   </StrictMode>,
// );
