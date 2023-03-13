import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Categories } from "./components/Categories/Categories";
import { Login } from "./components/Auth/Login";
import { Todos } from "./components/Todos/Todos";
import { NotFound } from './components/NotFound'
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>}/>
          <Route path='/' element={<ProtectedRoute><Todos /></ProtectedRoute>}/>
          <Route path='/todos' element={<Todos />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
