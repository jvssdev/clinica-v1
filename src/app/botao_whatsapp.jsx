'use client';
import { useEffect, useState } from 'react';

export default function BotaoWhatsApp() {
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  useEffect(() => {
    const temporizadores = [
      setTimeout(() => setMostrarMensagem(true), 5000),
      setTimeout(() => setMostrarMensagem(false), 15000),
      setTimeout(() => setMostrarMensagem(true), 25000),
      setTimeout(() => setMostrarAlerta(true), 15000),
    ];

    return () => temporizadores.forEach(clearTimeout);
  }, []);

  const aoClicarNaMensagem = () => setMostrarMensagem(false);

  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=5538998030332&text=Olá! Olhei o site da clínica e gostaria de mais informações sobre os serviços odontológicos. Poderiam me ajudar?"
        className="fixed right-[25px] bottom-10 w-[60px] h-[60px] z-[100]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={60}
          height={60}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#25D366"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-tabler-brand-whatsapp"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
      </a>

      {mostrarAlerta && (
        <span className="fixed right-[30px] bottom-[90px] w-[17px] h-[17px] bg-red-600 text-white text-[11px] font-bold text-center rounded-full z-[101] leading-none">
          1
        </span>
      )}

      {mostrarMensagem && (
        <div
          onClick={aoClicarNaMensagem}
          className="fixed right-[90px] bottom-[52px] w-[200px] h-[32px] bg-transparent text-black text-[13px] leading-[31px] text-center rounded-full border border-gray-300 z-[100] cursor-pointer"
        >
          Podemos te ajudar em algo?
        </div>
      )}
    </>
  );
}
