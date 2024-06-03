import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateNote from "./components/Note/CreateNote";
import UpdateNote from "./components/Note/UpdateNote";
import ViewNote from "./components/Note/ViewNote";
import {ErrorBoundary} from "react-error-boundary";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
      <ErrorBoundary FallbackComponent={ErrorPage}
                     onReset={() => (window.location.href = "/")}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/create" element={<CreateNote/>}/>
            <Route path="/edit/:id" element={<UpdateNote/>}/>
            <Route path="/:id" element={<ViewNote/>}/>
          </Routes>
        </Router>
      </ErrorBoundary>
  );
}

export default App;