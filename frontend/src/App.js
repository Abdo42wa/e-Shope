import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Screens/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='py-3'>
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
