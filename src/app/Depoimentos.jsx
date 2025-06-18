"use client";

import { useState } from "react";
import { Quote } from "lucide-react";

const depoimentos = [
  {
    id: 1,
    depoimento:
      "Fiz uma limpeza e exame dos dentes como um novo paciente e minha experiência foi impecável! Tanto o médico quanto o higienista foram maravilhosos. Obrigado Clínica Odontológica Aguiar!",
    autor: "Marcus Rodrigues",
  },
  {
    id: 2,
    depoimento:
      "A Dra. Larissa é incrível! Me fez sentir muito confortável e fez um ótimo trabalho.",
    autor: "Júlio Aquino",
  },
  {
    id: 3,
    depoimento:
      "A equipe da Clínica Odontológica Aguiar é calorosa e profissional. Eles realmente inspiraram nossos filhos a escovar com mais frequência e usar fio dental.",
    autor: "Ana Silva",
  },
  {
    id:4,
    depoimento:
      "Primeira vez aqui e eles me fizeram sentir como se estivesse em casa. Todos nós sabemos como isso pode ser uma experiência desafiadora, mas te garanto que vale a pena.",
    autor: "José Santos",
  }
];

const Depoimentos = () => {
  const [depoimentoAtual, setDepoimentoAutal] = useState(0);

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="mx-auto mb-8 w-12 h-12 text-cyan-400" />
          <div className="space-y-8">
            <p className="text-2xl text-cyan-900 md:text-4xl font-light leading-relaxed">
              {depoimentos[depoimentoAtual].depoimento}
            </p>
            <div className="mt-6">
              <p className="text-cyan-400 font-semibold text-xl">
                {depoimentos[depoimentoAtual].autor}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-12">
            {depoimentos.map((_, indice) => (
              <button
                key={indice}
                onClick={() => setDepoimentoAutal(indice)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  indice === depoimentoAtual
                    ? "bg-cyan-400 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Ver depoimentos ${indice + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depoimentos;

