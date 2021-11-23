import "bootstrap/dist/css/bootstrap.min.css";

// Components
import { Alerts } from "./components/Alerts/component.alert";
import Button from "./components/Buttons/component.button";

import PAGE_AUTH from "./pages/page-auth";

function App() {
  return (
    <div className="App">
      <PAGE_AUTH />
      <Button />
      <Alerts />
    </div>
  );
}

export default App;
