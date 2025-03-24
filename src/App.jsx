import AppRouter from './router/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <AppRouter />
        <ToastContainer position="top-right" autoClose={3000} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
