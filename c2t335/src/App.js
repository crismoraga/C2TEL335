import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaFacts from './components/lista_facts';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header>
          <h1 className='App-h1'>
                    <marquee>
            Control 2 TEL335 - APLICACIONES WEB Y MÓVILES
                    </marquee>
          </h1>

        <h2>
          Bienvenido a la mejor página para buscar facts o datos curiosos de Chuck Norris
        </h2>
        <h4>
          ¡Ingresa tu búsqueda aquí abajo!
        </h4>
      </header>
      <Container><ListaFacts/></Container>
      <footer>
        <h5>
          Creado por Cristóbal Moraga - 202130008-2
        </h5>
      </footer>
    </div>
  );
}

export default App;
