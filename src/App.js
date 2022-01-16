import { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Toast from "./Components/Toast/Toast";
import Feed from "./Components/Feed/Feed";
import { NotificationProvider } from "./Context/Notification/Notification";
import { ErrorContext } from "./Context/Error/Error";
import ErorrPage from "./Components/ErrorPage/ErrorPage";
import "./App.css";

const App = () => {
  const [error, setError] = useContext(ErrorContext);

  return error ? (
    <ErorrPage />
  ) : (
    <div className="container">
      <Navbar />
      <NotificationProvider>
        <Feed />
        <Toast />
      </NotificationProvider>
    </div>
  );
};

export default App;
