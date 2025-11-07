import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import '../assets/itemList.css';

const ItemList = forwardRef(({ title, endpoint, onEdit }, ref) => {
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    fetch(`http://localhost:8080/api/${endpoint}`)
    .then((res) => res.json())
    .then((data) => setItems(data))
    .catch(() => setItems([]));
  };

  useEffect(() => {
    fetchItems();
  }, [endpoint]);

  useImperativeHandle(ref, () => ({ fetchItems }));

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8080/api/${endpoint}/${id}`, { method: 'DELETE' }).then(() => {
          Swal.fire('Eliminado', `${title} eliminado correctamente.`, 'success');
          fetchItems();
        });
      }
    });
  };
  
  return ( 
  <div> 
    <div className="d-flex justify-content-between align-items-center mb-3"> <h2>{title}s</h2>
      <Button variant="primary" onClick={() => onEdit(null, endpoint, title)}>Agregar {title} </Button> 
    </div>

    <div className="row">
      {items.map((i) => (
        <div className="col-md-4 mb-3" key={i.id}>
          <div className="card shadow-sm">
            {i.imagenUrl && (
              <img
                src={i.imagenUrl}
                className="card-img-top"
                alt={i.marca}
                style={{ height: '200px', objectFit: 'cover' }}
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{i.marca}</h5>
              <p className="card-text">{i.modelo} ({i.anio})</p>
              <div className="d-flex justify-content-between">
                <Button size="sm" onClick={() => onEdit(i, endpoint, title)}>Editar</Button>
                <Button size="sm" variant="danger" onClick={() => handleDelete(i.id)}>Eliminar</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
});

export default ItemList;
