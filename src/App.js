import Order from "./pages/Order";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Order />
      </div>
    </Provider>
  );
}

export default App;
