import React, { useState } from 'react';
import { Form, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

const ListaFacts = () => {
  const [query, setQuery] = useState('');
  const [facts, setFacts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
      const data = await response.json();
      if (response.ok) {
        setFacts(data.result);
      } else {
        alert('Error al buscar facts');
      }
    } catch (error) {
      alert('Error al buscar facts');
    }
  };

  const addToFavorites = (fact) => {
    setFavorites([...favorites, fact]);
  };

  return (
    <div className="container mt-4">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>¡Buscar Facts!</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa aquí tu búsqueda"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSearch} className="mt-2">
        Buscar...
      </Button>
      <ListGroup className="mt-4">
        {facts.map((fact) => (
          <ListGroupItem key={fact.id} className="d-flex justify-content-between align-items-center">
            <div>
              <div>{fact.value}</div>
              <div className="text-muted">
                Fecha de creación: {fact.created_at}
                {fact.categories.length > 0 ? (
                  <span> | Categorías: {fact.categories.join(', ')}</span>
                ) : (
                  <span> | Categoría: No tiene :(</span>
                )}
              </div>
            </div>
            <Button variant="outline-danger" onClick={() => addToFavorites(fact)}>
              <FaHeart />
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <Button variant="secondary" onClick={() => alert(JSON.stringify(favorites, null, 2))} className="mt-4">
        Ver mis favoritos
      </Button>
    </div>
  );
};

export default ListaFacts;