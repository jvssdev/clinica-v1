'use client';

import { enviarFormulario } from './enviar_formulario';
import { useActionState } from 'react';

export default function FormularioDeContato() {
  const [estado, acao, pendente] = useActionState(enviarFormulario, null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-cyan-900 mb-4">
            Entre em Contato Conosco
          </h2>
          <p className="text-lg text-cyan-800 max-w-2xl mx-auto">
            Estamos aqui para esclarecer suas dúvidas e agendar sua consulta.
            Entre em contato através do formulário ou pelos nossos canais
            diretos.
          </p>
        </div>

        <div className="bg-cyan-50 rounded-lg shadow-md border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div>
              <div className="text-4xl mb-4">
                <h3 className="text-xl font-semibold text-center">
                  Envie sua Mensagem
                </h3>
                <div className="flex justify-center">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-message-circle-plus"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.007 19.98a9.869 9.869 0 0 1 -4.307 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.992 1.7 2.93 4.04 2.747 6.34" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-2">
              Precisa de atendimento urgente? Preencha o formulário abaixo e
              entraremos em contato via WhatsApp!
            </p>
          </div>
          <div className="p-6">
            <form action={acao} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome Completo *
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    disabled={pendente}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefone *
                  </label>
                  <input
                    id="numero"
                    name="numero"
                    type="tel"
                    required
                    placeholder="(61) 99999-9999"
                    disabled={pendente}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  disabled={pendente}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  placeholder="Descreva como podemos ajudá-lo..."
                  rows={4}
                  disabled={pendente}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={pendente}
              >
                {pendente ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Enviando...
                  </>
                ) : (
                  <>Enviar via WhatsApp</>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Campos obrigatórios. Ao enviar, você será redirecionado para o
                WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
