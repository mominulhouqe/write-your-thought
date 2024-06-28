import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes.tsx";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={routes} />
    </PersistGate>
  </Provider>
);
