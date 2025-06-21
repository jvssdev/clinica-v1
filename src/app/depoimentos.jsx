'use client';

import { useState, useEffect } from 'react';

const depoimentos = [
  {
    id: 1,
    depoimento:
      'Fiz uma limpeza e exame dos dentes como um novo paciente e minha experiência foi impecável! Tanto o médico quanto o higienista foram maravilhosos. Obrigado Clínica Odontológica Aguiar!',
    autor: 'Marcus Rodrigues',
  },
  {
    id: 2,
    depoimento:
      'A Dra. Larissa é incrível! Me fez sentir muito confortável e fez um ótimo trabalho.',
    autor: 'Júlio Aquino',
  },
  {
    id: 3,
    depoimento:
      'A equipe da Clínica Odontológica Aguiar é calorosa e profissional. Eles realmente inspiraram nossos filhos a escovar com mais frequência e usar fio dental.',
    autor: 'Ana Silva',
  },
  {
    id: 4,
    depoimento:
      'Primeira vez aqui e eles me fizeram sentir como se estivesse em casa. Todos nós sabemos como isso pode ser uma experiência desafiadora, mas te garanto que vale a pena.',
    autor: 'José Santos',
  },
];

const Depoimentos = () => {
  const [depoimentoAtual, setDepoimentoAtual] = useState(0);
  const [reproducaoAutomatica, setReproducaoAutomatica] = useState(true);
  const [animacaoAtiva, setAnimacaoAtiva] = useState(false);

  useEffect(() => {
    if (!reproducaoAutomatica) return;

    const intervalo = setInterval(() => {
      setDepoimentoAtual((prev) => {
        const next = (prev + 1) % depoimentos.length;
        return next;
      });
    }, 3000);
    return () => clearInterval(intervalo);
  }, [reproducaoAutomatica]);

  const proximoDepoimento = () => {
    if (animacaoAtiva) return;
    setAnimacaoAtiva(true);
    setDepoimentoAtual((prev) => (prev + 1) % depoimentos.length);
    setTimeout(() => setAnimacaoAtiva(false), 300);

    if (reproducaoAutomatica) {
      setReproducaoAutomatica(false);
      setTimeout(() => setReproducaoAutomatica(true), 100);
    }
  };

  const depoimentoAnterior = () => {
    if (animacaoAtiva) return;
    setAnimacaoAtiva(true);
    setDepoimentoAtual(
      (prev) => (prev - 1 + depoimentos.length) % depoimentos.length
    );
    setTimeout(() => setAnimacaoAtiva(false), 300);

    if (reproducaoAutomatica) {
      setReproducaoAutomatica(false);
      setTimeout(() => setReproducaoAutomatica(true), 100);
    }
  };

  const irParaDepoimento = (indice) => {
    if (animacaoAtiva || indice === depoimentoAtual) return;
    setAnimacaoAtiva(true);
    setDepoimentoAtual(indice);
    setTimeout(() => setAnimacaoAtiva(false), 300);

    if (reproducaoAutomatica) {
      setReproducaoAutomatica(false);
      setTimeout(() => setReproducaoAutomatica(true), 100);
    }
  };

  const toggleAutoPlay = () => {
    setReproducaoAutomatica(!reproducaoAutomatica);
  };

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={112}
              height={112}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-quote text-cyan-400"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z" />
              <path d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z" />
            </svg>
          </div>
          <div
            className={`space-y-8 transition-all duration-300 ${animacaoAtiva ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}
          >
            <p className="text-2xl text-cyan-900 md:text-4xl font-light leading-relaxed">
              {depoimentos[depoimentoAtual].depoimento}
            </p>
            <div className="mt-6">
              <p className="text-cyan-400 font-semibold text-3xl">
                {depoimentos[depoimentoAtual].autor}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 max-w-2xl mx-auto">
            <button
              onClick={depoimentoAnterior}
              disabled={animacaoAtiva}
              className="p-3 rounded-full bg-cyan-400 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-110"
              aria-label="Depoimento anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>{' '}
            </button>

            <button
              onClick={toggleAutoPlay}
              className="p-3 rounded-full bg-cyan-600 hover:bg-cyan-700 transition-all duration-200 transform hover:scale-110"
              aria-label={
                reproducaoAutomatica
                  ? 'Pausar reprodução automática'
                  : 'Iniciar reprodução automática'
              }
            >
              {reproducaoAutomatica ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-player-pause"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-player-play"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 4v16l13 -8z" />
                </svg>
              )}
            </button>

            <button
              onClick={proximoDepoimento}
              disabled={animacaoAtiva}
              className="p-3 rounded-full bg-cyan-400 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-110"
              aria-label="Próximo depoimento"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>{' '}
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {depoimentos.map((_, indice) => (
              <button
                key={indice}
                onClick={() => irParaDepoimento(indice)}
                disabled={animacaoAtiva}
                className={`transition-all duration-300 rounded-full ${
                  indice === depoimentoAtual
                    ? 'bg-cyan-400 w-8 h-3'
                    : 'bg-gray-600 hover:bg-gray-500 w-3 h-3'
                } disabled:cursor-not-allowed`}
                aria-label={`Ver depoimento ${indice + 1}`}
              />
            ))}
          </div>

          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-gray-600 rounded-full h-1">
              <div
                className="bg-cyan-400 h-1 rounded-full transition-all duration-100"
                style={{
                  width: `${((depoimentoAtual + 1) / depoimentos.length) * 100}%`,
                }}
              />
            </div>
            <p className="text-cyan-600 text-sm mt-2">
              {depoimentoAtual + 1} de {depoimentos.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depoimentos;
