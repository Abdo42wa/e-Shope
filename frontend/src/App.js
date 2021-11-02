import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Screens/Home';
import Product from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import { RegisterScreen } from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/' component={Home} exact />
            <Route path='/Product/:id' component={Product} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
