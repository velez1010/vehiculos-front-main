import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ItemForm from './ItemForm';

function ItemModal({ show, item, title, onSave, onClose }) {
    return ( 
    <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>{item ? `Editar ${title}` : `Agregar ${title}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <ItemForm item={item} onSave={onSave} onClose={onClose} />
        </Modal.Body> 
    </Modal>
    );
}

export default ItemModal;
