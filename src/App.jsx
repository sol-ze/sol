import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";

import LifeCycleHooksPage from "./pages/LifeCycleHooksPage";

const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar isDark={true} />
      </header>
      <main>
        {/* <HomePage /> */}
        <RegisterPage />

        {/* <LifeCycleHooksPage /> */}
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
