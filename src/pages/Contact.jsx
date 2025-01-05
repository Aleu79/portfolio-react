import React from 'react';

const Contact = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
        </p>
        <p className="text-sm mt-2">
          Diseñado con ❤️ por <a href="/" className="hover:underline text-blue-400">Damian Aguero</a>.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
