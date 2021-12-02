import "bootstrap/dist/css/bootstrap.min.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "./scss/index.scss";

// Components
// import { Alerts, ALERTS_VARIANTS } from "./components/Alerts/component.alert";
// import Button from "./components/Buttons/component.button";

// Pages
import { PageAuth } from "./pages/auth/page-auth";
import { PageProduct } from "./pages/product/page-product";
import { PageUser } from "./pages/user/page-user";
// import Demo from "./practice/practiceAuthPage";

function App() {
  return (
    <div className="App">
      {/* <Demo /> */}
      {/* <PageAuth /> */}
      <PageProduct />
      {/* <PageUser /> */}
    </div>
  );
}

export default App;
