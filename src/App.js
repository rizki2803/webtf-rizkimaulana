import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';
import MyRouter from './Router/Index';
function App() {

  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <MyRouter />
      <Footer />
    </div>
  );
}

export default App;
