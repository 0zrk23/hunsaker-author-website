import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bio from './pages/Bio/index';
import Books from "./pages/Books/index";
import Contact from './pages/Contact/index';
import SingleBook from "./pages/SingleBook";
import Support from './pages/Support/index';

function App() {
  return (
    <div className="App">
      {/* Using Hash Router since this app will be running off  */}
      <HashRouter>
        <NavBar/>
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={<Home/>}
          >
          </Route>
          {/* Bio route */}
          <Route
            path="/bio"
            element={<Bio/>}
          >
          </Route>
          {/* Books route */}
          <Route
            path="/books"
            element={<Books/>}
          >
          </Route>
          {/* Contact Route */}
          <Route
            path="/contact"
            element={<Contact/>}
          >
          </Route>
          {/* Single Book Route */}
          <Route
            path="/singleBook"
            element={<SingleBook/>}
          >
          </Route>
          {/* Support Route */}
          <Route
            path="/support"
            element={<Support/>}
          >
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
