import {
  BrowserRouter, Route, Routes
} from "react-router-dom"
import Sidebar from "./Menu/Sidebar";
import { MainRoute } from "./Menu/Maps";

// import Modal from "./Menu/Modal";
// import LoginPage from "./Views/LoginPage";
// import RegisterPage from "./Views/RegisterPage";
// import Main from "./Views/Index";
// import GreetingPage from "./Views/GreetingPage";
import ReduxPage from "./Redux/ReduxPage";
import SelectorPage from "./Redux/SelectorPage";



function App() {


  return (

    <BrowserRouter>
      <div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Routes>
            {/* <Route path="/dashboard" element={<Main />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/greeting" element={<GreetingPage />} />
            <Route path="/c" element={<Content />} />
            <Route path="/p" element={<Profile />} /> 
            <Route path="/g" element={<Greeting />} />
            <Route path="/hp" element={<HooksProfile />} />
            <Route path="/hc" element={<HooksContent />} />  */}

            {/* Unit Test Route */}
            <Route path="/redux" element={<ReduxPage />} />
            <Route path="/selector" element={<SelectorPage />} />
             {/* Unit Test Route */}

           


            {MainRoute &&
            MainRoute.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={item.element}
              />
            ))}
          </Routes>
        </div>
      </div>


    </BrowserRouter>
  );
}

export default App;