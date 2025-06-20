'use client';

export default function QuemSomos() {
  return (
    <div className="py-24 relative overflow-hidden bg-cyan-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-cyan-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-900">
              Por que escolher a Clínica Odontológica Aguiar
            </h2>
            <p className="text-xl text-cyan-600 mb-8">
              Na Clínica Odontológica Aguiar, acreditamos que um sorriso
              saudável transforma vidas. Sob a direção da Dra. Larissa Aguiar,
              nossa equipe une tecnologia de ponta, atendimento humanizado e
              excelência profissional para oferecer tratamentos odontológicos
              completos em um ambiente acolhedor e seguro.{' '}
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-full h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#005f78"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
                    <path d="M12.5 15.5l2 2" />
                    <path d="M15 13l2 2" />
                  </svg>{' '}
                </div>
                <div>
                  <h3 className="text-xl text-cyan-800 font-semibold mb-2">
                    Atendimento Humanizado
                  </h3>
                  <p className="text-cyan-500">
                    Priorizamos o conforto e a confiança dos pacientes,
                    oferecendo um ambiente acolhedor e uma equipe preparada para
                    cuidar com empatia de cada sorriso.{' '}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-full h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#005f78"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-dental"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 0 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 0 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 2 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -5 -4 -5c-1.423 0 -2.92 .911 -4 1.5z" />
                    <path d="M12 5.5l3 1.5" />
                  </svg>{' '}
                </div>
                <div>
                  <h3 className="text-xl text-cyan-800 font-semibold mb-2">
                    Cuidados de Última Geração{' '}
                  </h3>
                  <p className="text-cyan-500">
                    Contamos com equipamentos modernos e técnicas atualizadas
                    para garantir tratamentos seguros, eficazes e com resultados
                    duradouros.{' '}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-full h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#005f78"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-home-search"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M20.2 20.2l1.8 1.8" />
                  </svg>{' '}
                </div>
                <div>
                  <h3 className="text-xl text-cyan-800 font-semibold mb-2">
                    Facilidade e Acesso
                  </h3>
                  <p className="text-cyan-500">
                    Localização de fácil acesso, agendamento simples via
                    WhatsApp e atendimento personalizado para tornar sua
                    experiência mais prática desde o primeiro contato.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-square rounded-2xl bg-cyan-900 p-1">
            <div className="w-full h-full rounded-xl p-8 flex flex-col items-center justify-center">
              <div className="flex justify-center mb-6">
                <div className="bg-cyan-500/20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-report-medical text-cyan-400"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                    <path d="M10 14l4 0" />
                    <path d="M12 12l0 4" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Nossa missão
                </h3>
                <p className="text-cyan-400">
                  Promover saúde bucal de qualidade, tornando tratamentos
                  odontológicos acessíveis, humanizados e transformadores para
                  todos os nossos pacientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
