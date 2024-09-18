import Routes from "./Routes";
import axios from "axios";
import { UserContextProvider } from "./UserContext";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_BACK_END_URL;
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />;
    </UserContextProvider>
  );
}

export default App;
