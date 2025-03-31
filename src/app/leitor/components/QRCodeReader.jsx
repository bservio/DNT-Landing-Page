import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';

const Test = () => {
  const [data, setData] = useState('No result');
  const [lidos, setLidos] = useState(() => {
    const localData = localStorage.getItem('lidos');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('lidos', JSON.stringify(lidos));
  }, [lidos]);

  const handleData = (novoDado) => {
    if (!novoDado) return;
    const dataHora = new Date().toLocaleString();
    const qrData = { qrCode: novoDado, dataHora };
    setLidos(lidosAtual => [...lidosAtual, qrData]);
    enviarParaBackend(novoDado);
  };

  const enviarParaBackend = (novoDado) => {
    const payload = JSON.stringify({ name: novoDado });
    axios.post('http://dnt.somosicev.com:3001/api/qrcodes', payload, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      console.log("Resposta do backend:", response.data);
      alert('Dados enviados com sucesso!');
    })
    .catch(error => {
      console.error('Erro ao enviar para o backend:', error);
      alert('QrCode lido com sucesso.');
    });
  };

  const handleDownload = () => {
    const dataToDownload = JSON.stringify(lidos);
    const blob = new Blob([dataToDownload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'dados_lidos.json');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const limparLocalStorage = () => {
    // Exibe um alerta de confirmação
    const confirma = window.confirm('Tem certeza que deseja limpar todos os dados salvos?');
    if (confirma) {
      // Se o usuário confirmar, limpa o localStorage e atualiza o estado
      localStorage.removeItem('lidos');
      setLidos([]);
    }
  };

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (result) {
            setData(result.text);
            handleData(result.text);
          }
          if (error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: "environment" }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
      <div>
        {lidos.map((lido, index) => (
          <p key={index}>{lido.qrCode} - {lido.dataHora}</p>
        ))}
      </div>
      <button  onClick={handleDownload} style={buttonStyle}>Baixar Dados</button>
      <button onClick={limparLocalStorage} style={buttonStyleClear}>Limpar Dados</button>
    </>
  );
};

const buttonStyle = {
  fontWeight: 'bold',
  backgroundColor: 'green',
  textAlign: 'center',
  margin: '10px auto',
  display: 'block',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  margin: '20px auto',
  cursor: 'pointer'
};

const buttonStyleClear = {
  fontWeight: 'bold',
  backgroundColor: 'red',
  color: 'white',
  textAlign: 'center',
  margin: '10px auto',
  display: 'block',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  margin: '20px auto',
  cursor: 'pointer'
};

export default Test;
