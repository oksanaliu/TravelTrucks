import AppRouter from './router/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
