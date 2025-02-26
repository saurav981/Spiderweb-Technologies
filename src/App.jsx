import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { EventRequests } from "./pages/EventRequests";
import { EventName } from "./pages/EventName";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" />
          <Route path="/event-requests" element={<EventRequests />} />
          <Route path="/event-name" element={<EventName />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
