import "/home/mergestack/Desktop/Fakhar Training/React/React Hook Form/my-redux-hook-form-app/src/App.css";
import store from "/home/mergestack/Desktop/Fakhar Training/React/React Hook Form/my-redux-hook-form-app/src/store";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Homepage } from "/home/mergestack/Desktop/Fakhar Training/React/React Hook Form/my-redux-hook-form-app/src/Components/Homepage";

const App = () => {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
};

export default App;
