import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterPage from "./pages/RegisterPage";
import UseMemoPage from "./pages/UseMemoPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import LifeCycleHooksPage from "./pages/LifeCycleHooksPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";
import ItemPage from "./pages/ItemPage";
import StaticHomePage from "./pages/StaticHomePage";
import HomePage from "./pages/HomePage";
import ReduxPage from "./pages/ReduxPage";
import ReduxPage2 from "./pages/ReduxPage2";
import ReduxPage3 from "./pages/ReduxPage3";

import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="container">
      <ToastContainer />
      <header>
        <Navbar isDark={true} />
      </header>
      <main className="mt-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<ReduxPage />} /> */}

          <Route path="/statichomepage" element={<StaticHomePage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/lifecyclehookspage" element={<LifeCycleHooksPage />} />
          <Route path="/usecallbackpage" element={<UseCallbackPage />} />
          <Route path="/usememopage" element={<UseMemoPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/redux2" element={<ReduxPage2 />} />
          <Route path="/redux3" element={<ReduxPage3 />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
