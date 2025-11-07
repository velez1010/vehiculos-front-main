import React, { useState, useRef } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ItemList from './components/ItemList';
import ItemModal from './components/ItemModal';
import { showAlert } from './components/AlertMessage';
import './assets/app.css';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [itemEdit, setItemEdit] = useState(null);
  const [currentEndpoint, setCurrentEndpoint] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [key, setKey] = useState('vehiculos');

  const vehiculosRef = useRef(null);
  const motosRef = useRef(null);

  const handleEdit = (item, endpoint, title) => {
    setItemEdit(item);
    setCurrentEndpoint(endpoint);
    setCurrentTitle(title);
    setShowModal(true);
  };

  const handleSave = async (form, imagen, id = null) => {
    try {
      const formData = new FormData();
      formData.append(
        currentEndpoint === 'motos' ? 'moto' : 'vehiculo',
        new Blob([JSON.stringify(form)], { type: 'application/json' })
      );
      if (imagen) formData.append('imagen', imagen);

      const method = id ? 'PUT' : 'POST';
      const url = id
        ? `http://localhost:8080/api/${currentEndpoint}/${id}`
        : `http://localhost:8080/api/${currentEndpoint}`;
      const response = await fetch(url, { method, body: formData });
      if (!response.ok) throw new Error('Error al guardar');

      showAlert('Éxito', `${currentTitle} guardado correctamente`);
      setShowModal(false);

      if (currentEndpoint === 'vehiculos') vehiculosRef.current?.fetchItems();
      if (currentEndpoint === 'motos') motosRef.current?.fetchItems();
    } catch (err) {
      console.error(err);
      showAlert('Error', `No se pudo guardar el ${currentTitle}`, 'error');
    }
  };

  return (
    <div className="app-bg">
      <div className="container glass-container mt-4 p-4 rounded-4 shadow-lg">
        <h1 className="mb-4 text-center text-white fw-bold">
          🚗 Gestión de Vehículos y Motos 🏍️
        </h1>

        <Tabs
          id="items-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          justify
        >
          <Tab eventKey="vehiculos" title="Vehículos">
            <ItemList
              ref={vehiculosRef}
              title="Vehículo"
              endpoint="vehiculos"
              onEdit={(v) => handleEdit(v, 'vehiculos', 'Vehículo')}
            />
          </Tab>

          <Tab eventKey="motos" title="Motos">
            <ItemList
              ref={motosRef}
              title="Moto"
              endpoint="motos"
              onEdit={(m) => handleEdit(m, 'motos', 'Moto')}
            />
          </Tab>
        </Tabs>

        <ItemModal
          show={showModal}
          item={itemEdit}
          title={currentTitle}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
        />
      </div>
    </div>
  );
}

export default App;