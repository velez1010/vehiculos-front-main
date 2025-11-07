import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../assets/itemForm.css';



function ItemForm({ item, onSave, onClose }) {
  const [form, setForm] = useState({ marca: '', modelo: '', anio: '' });
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    if (item) setForm(item);
    else setForm({ marca: '', modelo: '', anio: '' });
  }, [item]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form, imagen, item?.id);
  };

return ( 
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Marca</Form.Label>
      <Form.Control name="marca" value={form.marca} onChange={handleChange} required minLength={2} maxLength={50} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Modelo</Form.Label>
      <Form.Control name="modelo" value={form.modelo} onChange={handleChange} required minLength={1} maxLength={50} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Año</Form.Label>
      <Form.Control name="anio" type="number" value={form.anio} onChange={handleChange} required />
    </Form.Group>
    <Form.Group className="mt-2">
      <Form.Label>Imagen</Form.Label>
      <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
    </Form.Group>
    
    <div className="mt-3 d-flex justify-content-end">
      <Button variant="primary" type="submit">Guardar</Button>
      <Button variant="secondary" onClick={onClose} className="ms-2">Cancelar</Button>
    </div>
  </Form>
  );
}

export default ItemForm;
