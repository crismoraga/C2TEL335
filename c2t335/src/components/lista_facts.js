import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import '../App.css';

const ListaFacts = () => {
  const [query, setBusqueda] = useState('');
  const [facts, setFacts] = useState([]);
  const [favorites, setFavoritos] = useState([]);
  const [favoritesVisible, setFavoritesVisible] = useState(false);

  useEffect(() => {
    const FavoritosGuardados = localStorage.getItem('favorites');
    if (FavoritosGuardados) {
      setFavoritos(JSON.parse(FavoritosGuardados));
    }
  }, []);

  const busqueda = async () => {
    if (!query.trim()) {
      alert('Debe especificar su búsqueda');
      return;
    }

    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
      const data = await response.json();
      if (response.ok) {
        setFacts(data.result);
        if (data.result.length === 0) {
          alert('No se encontró nada :(');
        }
      } else {
        alert('Error al buscar lo pedido');
      }
    } catch (error) {
      alert('Error al buscar facts');
    }
  };

  const addFavoritos = (fact) => {
    const FavoritosActualizados = [...favorites, fact];
    setFavoritos(FavoritosActualizados);
    localStorage.setItem('favorites', JSON.stringify(FavoritosActualizados));
  };

  const showFavorites = () => {
    setFavoritesVisible(true);
  };

  return (
    <div className="container mt-4">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>¡Buscar Facts!</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa aquí tu búsqueda"
          value={query}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={busqueda} className="mt-2">
        Buscar...
      </Button>
      <div className="mt-4">
        {facts.map((fact) => (
          <Card key={fact.id} className="mb-3">
            <Card.Body>
              <Card.Title>{fact.value}</Card.Title>
              <Card.Text>
                Fecha de creación: {new Date(fact.created_at).toLocaleDateString('es-ES')}
                {fact.categories.length > 0 ? (
                  <span> | Categorías: {fact.categories.join(', ')}</span>
                ) : (
                  <span> | Categoría: No tiene :(</span>
                )}
              </Card.Text>
              <Button variant="outline-danger" onClick={() => addFavoritos(fact)}>
                <FaHeart />
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Button variant="secondary" onClick={showFavorites} className="mt-4">
        ¡Ver mis favoritos!
      </Button>
      {favoritesVisible && (
        <div className="mt-4">
          {favorites.map((favorite, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{favorite.value}</Card.Title>
                <Card.Text>
                  Fecha de creación: {new Date(favorite.created_at).toLocaleDateString('es-ES')}
                  {favorite.categories.length > 0 ? (
                    <span> | Categorías: {favorite.categories.join(', ')}</span>
                  ) : (
                    <span> | Categoría: No tiene :(</span>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaFacts;