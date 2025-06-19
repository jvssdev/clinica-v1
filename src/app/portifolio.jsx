'use client';

import Image from 'next/image';
import portifolio1 from '/public/portifolio1.webp';
import portifolio2 from '/public/portifolio2.webp';
import portifolio3 from '/public/portifolio3.webp';
import portifolio4 from '/public/portifolio4.webp';
import portifolio5 from '/public/portifolio5.webp';
import portifolio6 from '/public/portifolio6.webp';

const imagens = [
  {
    imagem: portifolio1,
    descricao: 'Implante dental',
  },
  {
    imagem: portifolio2,
    descricao: 'Correção de diastema',
  },
  {
    imagem: portifolio3,
    descricao: 'Alinhamento dentário',
  },
  {
    imagem: portifolio4,
    descricao: 'Exame odontológico moderno',
  },
  {
    imagem: portifolio5,
    descricao: 'Limpeza dentária',
  },
  {
    imagem: portifolio6,
    descricao: 'Saúde das gengivas',
  },
];

export default function Portifolio() {
  return (
    <div className="w-full max-w-4xl p-4">
      <div className="grid grid-cols-3 gap-4">
        {imagens.map((item, indice) => (
          <div key={indice} className="flex flex-col">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={item.imagem || '/imagem_reserva.svg'}
                alt={item.descricao}
                width={248}
                height={160}
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                placeholder="blur"
              />
            </div>
            <div className="flex justify-center pt-2 pb-1">
              <h3 className="text-xl font-bold text-gray-900 text-center">
                {item.descricao}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
