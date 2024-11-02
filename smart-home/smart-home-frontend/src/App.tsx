import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import { EstadoDispositivo } from '../../smart-home-shared/types';

const socket = io('http://localhost:4000');

const App: React.FC = () => {
  const [dispositivo, setDispositivo] = useState<EstadoDispositivo>({
    sala: { luzOn: false, tv: { on: false, canal: 1 }, arCondicionado: { on: false, temperatura: 24 } },
    cozinha: { luzOn: false, geladeira: { temperatura: 4, alerta: false }, fogao: { on: false, potencia: 1 } },
    quarto: { luzOn: false, ventilador: { on: false, velocidade: 1 }, cortinas: { abertas: false } },
  })

  // Conectar ao backend e receber o estado inicial
  useEffect(() => {
    socket.on('estadoInicial', (estadoDispositivos: EstadoDispositivo) => {
      setDispositivo(estadoDispositivos);
    })

    // Atualiza estado quando houver mudança
    socket.on('estadoAltera', (novoEstado: EstadoDispositivo) => {
      setDispositivo(novoEstado);
    })

    return () => {
      socket.off('estadoInicial')
      socket.off('estadoAltera')
    }
  }, [])

  // Funções para alterar o estado dos dispositivos
  const ligarLuz = (comodo: string) => {
    socket.emit('ligarLuz', comodo);
  }

  const ligarTv = () => {
    socket.emit('ligarTv');
  }

  const mudarCanal = (canal: number) => {
    socket.emit('mudarCanal', canal);
  }

  const ligarArCondicionado = () => {
    socket.emit('ligarArCondicionado');
  }

  const mudarTemperatura = (temperatura: number) => {
    socket.emit('mudarTemperatura', temperatura);
  }

  const ligarLuzCozinha = () => {
    socket.emit('ligarLuzCozinha');
  }

  const mudarTemperaturaGeladeira = (temperatura: number) => {
    socket.emit('mudarTemperaturaGeladeira', temperatura);
  }

  const ligarFogao = () => {
    socket.emit('ligarFogao');
  }

  const ligarLuzQuarto = () => {
    socket.emit('ligarLuzQuarto');
  }

  const ligarVentilador = () => {
    socket.emit('ligarVentilador');
  }

  const mudarVelocidadeVentilador = (velocidade: number) => {
    socket.emit('mudarVelocidadeVentilador', velocidade);
  }

  const abrirCortinas = () => {
    socket.emit('abrirCortinas');
  }

  return (
    <div className='casa'>
      <h1>Casa Inteligente</h1>

      {/* Sala de Estar */}
      <div className='sala'>
        <h2>Sala de Estar</h2>
        <div>
          <p>Luz: {dispositivo.sala.luzOn ? 'Ligada' : 'Desligada'}</p>
          <button onClick={() => ligarLuz('sala')}>
            {dispositivo.sala.luzOn ? 'Desligar Luz' : 'Ligar Luz'}
          </button>
          <img src={dispositivo.sala.luzOn ? `${process.env.PUBLIC_URL}/luz_ligada.png` : `${process.env.PUBLIC_URL}/luz_desligada.png`} alt="Luz" className={`status ${dispositivo.sala.luzOn ? 'on' : 'off'}`} />
        </div>
        <div>
          <p>TV: {dispositivo.sala.tv.on ? 'Ligada' : 'Desligada'}</p>
          <button onClick={ligarTv}>Ligar TV</button>
          <img
            src={dispositivo.sala.tv.on ? `${process.env.PUBLIC_URL}/tv_ligada.gif` : `${process.env.PUBLIC_URL}/tv_desligada.png`}
            alt="TV"
            className={`status ${dispositivo.sala.tv.on ? 'on' : 'off'}`}
          />
          <p>Canal da TV: {dispositivo.sala.tv.canal}</p>
          <button onClick={() => mudarCanal(dispositivo.sala.tv.canal + 1)}>Aumentar Canal</button>
          <button onClick={() => mudarCanal(dispositivo.sala.tv.canal - 1)}>Diminuir Canal</button>
          {/* 
          <input
            type="number"
            min="1"
            max="999"
            value={dispositivo.sala.tv.canal}
            onChange={(e) => mudarCanal(Number(e.target.value))}
          /> 
          */}
        </div>

        <div>
          <p>Ar-Condicionado: {dispositivo.sala.arCondicionado.on ? 'Ligado' : 'Desligado'}</p>
          <button onClick={ligarArCondicionado}>Ligar Ar</button>
          <img
            src={dispositivo.sala.arCondicionado.on ? `${process.env.PUBLIC_URL}/ar_ligado.gif` : `${process.env.PUBLIC_URL}/ar_desligado.png`}
            alt="Ar-Condicionado"
            className={`status ${dispositivo.sala.arCondicionado.on ? 'on' : 'off'}`}
          />
          <p>Temperatura do Ar-Condicionado: {dispositivo.sala.arCondicionado.temperatura}°C</p>
          <button onClick={() => mudarTemperatura(dispositivo.sala.arCondicionado.temperatura + 1)}>Aumentar Temperatura</button>
          <button onClick={() => mudarTemperatura(dispositivo.sala.arCondicionado.temperatura - 1)}>Diminuir Temperatura</button>
          {/* 
          <input
            type="number"
            min="18"
            max="30"
            value={dispositivo.sala.arCondicionado.temperatura}
            onChange={(e) => mudarTemperatura(Number(e.target.value))}
          /> 
          */}
        </div>


      </div>

      {/* Cozinha */}
      <div className='cozinha'>
        <h2>Cozinha</h2>
        <div>
          <p>Luz: {dispositivo.cozinha.luzOn ? 'Ligada' : 'Desligada'}</p>
          <button onClick={ligarLuzCozinha}>
            {dispositivo.cozinha.luzOn ? 'Desligar Luz' : 'Ligar Luz'}
          </button>
          <img src={dispositivo.cozinha.luzOn ? `${process.env.PUBLIC_URL}/luz_ligada.png` : `${process.env.PUBLIC_URL}/luz_desligada.png`} alt="Luz" className={`status ${dispositivo.cozinha.luzOn ? 'on' : 'off'}`} />
        </div>
        <div>
          <p>Geladeira Temperatura: {dispositivo.cozinha.geladeira.temperatura}°C</p>
          <button onClick={() => mudarTemperaturaGeladeira(dispositivo.cozinha.geladeira.temperatura + 1)}>Aumentar Temperatura</button>
          <button onClick={() => mudarTemperaturaGeladeira(dispositivo.cozinha.geladeira.temperatura - 1)}>Diminuir Temperatura</button>
          <p>{dispositivo.cozinha.geladeira.alerta ? 'Alerta: Temperatura Alta!' : ''}</p>
          <img src={`${process.env.PUBLIC_URL}/geladeira.png`} alt="Geladeira" />
        </div>
        <div>
          <p>Fogão: {dispositivo.cozinha.fogao.on ? 'Ligado' : 'Desligado'}</p>
          <button onClick={ligarFogao}>Ligar Fogão</button>
          <img
            src={dispositivo.cozinha.fogao.on ? `${process.env.PUBLIC_URL}/fogao_ligado.png` : `${process.env.PUBLIC_URL}/fogao_desligado.png`}
            alt="Fogão"
            className={`status ${dispositivo.cozinha.fogao.on ? 'on' : 'off'}`}
          />
        </div>
      </div>

      {/* Quarto */}
      <div className='quarto'>
        <h2>Quarto</h2>
        <div>
          <p>Luz: {dispositivo.quarto.luzOn ? 'Ligada' : 'Desligada'}</p>
          <button onClick={ligarLuzQuarto}>
            {dispositivo.quarto.luzOn ? 'Desligar Luz' : 'Ligar Luz'}
          </button>
          <img src={dispositivo.quarto.luzOn ? `${process.env.PUBLIC_URL}/luz_ligada.png` : `${process.env.PUBLIC_URL}/luz_desligada.png`} alt="Luz" className={`status ${dispositivo.quarto.luzOn ? 'on' : 'off'}`} />
        </div>
        <div>
          <p>Ventilador: {dispositivo.quarto.ventilador.on ? 'Ligado' : 'Desligado'}</p>
          <button onClick={ligarVentilador}>Ligar Ventilador</button>
          <img
            src={dispositivo.quarto.ventilador.on ? `${process.env.PUBLIC_URL}/ventilador_ligado.gif` : `${process.env.PUBLIC_URL}/ventilador_desligado.png`}
            alt="Ventilador"
            className={`status ${dispositivo.quarto.ventilador.on ? 'on' : 'off'}`}
          />
          <p>Velocidade Ventilador: {dispositivo.quarto.ventilador.velocidade}</p>
          <button onClick={() => mudarVelocidadeVentilador(dispositivo.quarto.ventilador.velocidade + 1)}>Aumentar Velocidade</button>
          <button onClick={() => mudarVelocidadeVentilador(dispositivo.quarto.ventilador.velocidade - 1)}>Diminuir Velocidade</button>
          {/* 
          <input
            type="number"
            min="1"
            max="3"
            value={dispositivo.quarto.ventilador.velocidade}
            onChange={(e) => mudarVelocidadeVentilador(Number(e.target.value))}
          /> 
          */}
        </div>
        <div>
          <p>Cortinas: {dispositivo.quarto.cortinas.abertas ? 'Abertas' : 'Fechadas'}</p>
          <button onClick={abrirCortinas}>Abrir Cortinas</button>
          <img
            src={dispositivo.quarto.cortinas.abertas ? `${process.env.PUBLIC_URL}/cortina_aberta.png` : `${process.env.PUBLIC_URL}/cortina_fechada.png`}
            alt="Cortinas"
            className={`status ${dispositivo.quarto.cortinas.abertas ? 'on' : 'off'}`}
          />
        </div>
      </div>
      <footer className='footer'>
        <p>Desenvolvidor por: Rafael Munarin, Daniel Espindola</p>
      </footer>
    </div>
  );
}

export default App;