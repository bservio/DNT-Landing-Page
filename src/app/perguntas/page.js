"use client"

import { useEffect } from 'react';

const PerguntasPage = () => {
  useEffect(() => {
    // Redirecionar para o outro servidor
    window.location.href = 'http://dnt.somosicev.com:81/perguntas';
  }, []);

  // Evitar renderização do componente, já que estamos redirecionando
  return null;
};

export default PerguntasPage;
