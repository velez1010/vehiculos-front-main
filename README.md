# 🚗 Gestión de Vehículos y Motos — App Web React

**Proyecto académico** desarrollado como resultado del proceso de enseñanza–aprendizaje en **React.js** y **JavaScript moderno (ES6+)**.  
Esta aplicación web permite **gestionar vehículos y motos** mediante operaciones **CRUD (Crear, Leer, Actualizar y Eliminar)**, integrando componentes modulares, consumo de APIs REST, y uso de librerías populares de UI.

---

## 🧠 Objetivo del proyecto

El propósito de este proyecto es aplicar los conceptos fundamentales de **React.js**, tales como:
- Componentización y reutilización de código.  
- Manejo de estado con *hooks* (`useState`, `useEffect`, `useRef`, `useImperativeHandle`).  
- Comunicación con APIs REST mediante `fetch`.  
- Integración con Bootstrap y SweetAlert2.  
- Envío de archivos e imágenes mediante `FormData`.  

Además, se busca que los estudiantes experimenten un flujo de desarrollo **profesional** utilizando **buenas prácticas de estructura y modularidad** en proyectos React.

---

## 🧩 Características principales

✅ CRUD completo de **Vehículos** y **Motos**.  
✅ Interfaz amigable basada en **React-Bootstrap**.  
✅ **Modales dinámicos** para agregar y editar registros.  
✅ **Gestión de imágenes** para cada elemento.  
✅ Confirmaciones y alertas con **SweetAlert2**.  
✅ Código organizado en **componentes reutilizables**.  
✅ Conexión a un **backend REST API** (por defecto en `http://localhost:8080/api`).

---

## ⚙️ Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|--------------|
| **React.js (Vite)** | Framework de UI basado en componentes. |
| **Bootstrap 5 / React-Bootstrap** | Estilos y componentes responsivos. |
| **SweetAlert2** | Alertas personalizadas y modales de confirmación. |
| **Fetch API** | Comunicación HTTP con el backend. |
| **JavaScript (ES6+)** | Lógica del cliente. |
| **FormData** | Manejo de formularios y subida de imágenes. |

---

## 📁 Estructura del proyecto

src/
├── components/
│ ├── AlertMessage.js # Manejador centralizado de alertas
│ ├── ItemForm.jsx # Formulario para crear/editar ítems
│ ├── ItemList.jsx # Lista dinámica de ítems (vehículos/motos)
│ └── ItemModal.jsx # Modal que contiene el formulario
│
├── App.jsx # Componente principal con tabs para Vehículos y Motos
├── main.jsx # Punto de entrada de la aplicación
└── index.css # Estilos globales

---

## 🖥️ Vista general

Al ejecutar la aplicación, se muestra una interfaz con **dos pestañas principales**:

- **Vehículos** 🚘  
- **Motos** 🏍️  

Cada pestaña permite:
- Visualizar los registros existentes.  
- Agregar un nuevo elemento mediante un **modal dinámico**.  
- Editar o eliminar registros con **alertas de confirmación**.  

---

## 🔌 Configuración y ejecución

### 1️⃣ Clonar el repositorio

git clone https://github.com/DanielDev87/vehiculos-front.git
cd react-vehiculos-motos-crud

### 2️⃣ Instalar dependencias
npm install

### 3️⃣ Ejecutar la aplicación
npm run dev

### 4️⃣ Configurar el backend
La app se comunica con una API REST disponible en:
http://localhost:8080/api/

## Asegúrate de tener disponibles los siguientes endpoints:
- GET /api/vehiculos
- POST /api/vehiculos
- PUT /api/vehiculos/{id}
- DELETE /api/vehiculos/{id}

- GET /api/motos
- POST /api/motos
- PUT /api/motos/{id}
- DELETE /api/motos/{id}

Cada registro puede incluir una imagen asociada al vehículo o moto.

### 🧠 Componentes destacados
- ItemList.jsx
Gestiona la visualización de listas y la comunicación con el backend.
Permite editar y eliminar elementos con confirmaciones visuales.
- ItemModal.jsx
Componente reutilizable para abrir un modal con el formulario (ItemForm).
- ItemForm.jsx
Formulario dinámico con validaciones y soporte de imágenes.
- AlertMessage.js
Función centralizada para mostrar alertas usando SweetAlert2.

### 📜 Licencia
Este proyecto se distribuye bajo licencia MIT, por lo que puede ser reutilizado con fines educativos y de aprendizaje, citando su fuente original.
