import "src/App.css";
import store from "src/store/index";
import { Provider } from "react-redux";
import Homepage from "src/Components/Homepage";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ToDoApp = () => {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
};

export default ToDoApp;
