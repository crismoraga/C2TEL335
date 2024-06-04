import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaFacts from './components/lista_facts';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-h1'>
          <marquee>
            Control 2 TEL335 - APLICACIONES WEB Y MÓVILES
          </marquee>
        </h1>
        <h2 className='App-h2'>
          Bienvenido a la mejor página para buscar facts o datos curiosos de Chuck Norris
        </h2>
        <h4 className='App-h2'>
        ↓ ¡Baja para poder hacer tu búsqueda ! ↓
        </h4>
      </header>
      <body className="body"><ListaFacts/></body>
      <footer>
      <marquee>
    <h5 className='footer'>
    Creado por Cristóbal Moraga - 202130008-2 &nbsp; &nbsp; &nbsp; &nbsp; Creado por Cristóbal Moraga - 202130008-2 &nbsp; &nbsp; &nbsp; &nbsp; Creado por Cristóbal Moraga - 202130008-2 &nbsp; &nbsp; &nbsp; &nbsp; Creado por Cristóbal Moraga - 202130008-2 &nbsp; &nbsp; &nbsp; &nbsp; Creado por Cristóbal Moraga - 202130008-2
     </h5>
      </marquee>
      </footer>
    </div>
  );
}

export default App;