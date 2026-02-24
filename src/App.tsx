import { Theme } from './settings/types';
import MainPage from './pages/MainPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const theme: Theme = 'dark';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <div className="app-container">
      <Navigation />
      <div className="content">
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
