const atendimentos = [
  {
    nome: 'Exames Odontológicos',
    descricao:
      'A prevenção começa com uma avaliação completa. Realizamos exames odontológicos periódicos para identificar possíveis problemas bucais e garantir um acompanhamento personalizado para a sua saúde oral.',
  },
  {
    nome: 'Clareamento Dental',
    descricao:
      'Restaure a beleza do seu sorriso com um clareamento dental eficaz e supervisionado por profissionais. Ideal para remover manchas e recuperar o brilho natural dos dentes de forma segura.',
  },
  {
    nome: 'Tratamentos Ortodônticos',
    descricao:
      'Alinhe seu sorriso com nossos tratamentos ortodônticos personalizados. Oferecemos desde aparelhos tradicionais até soluções mais discretas, adequadas para crianças, adolescentes e adultos.',
  },
  {
    nome: 'Implantes Dentários',
    descricao:
      'Recupere a funcionalidade e a estética do seu sorriso com implantes dentários seguros e duradouros. Indicados para quem perdeu um ou mais dentes, os implantes devolvem conforto ao mastigar, falar e sorrir com confiança.',
  },
];

export default function Atendimento() {
  return (
    <section className="container space-y-16 py-24 md:py-24 text-center">
      <div className="mx-auto max-w-[58rem]">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Serviços Oferecidos
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Entenda mais sobre alguns atendimentos que oferecemos
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {atendimentos.map((atendimento) => (
          <div
            key={atendimento.nome}
            className="relative overflow-hidden rounded-lg border p-8 text-center"
          >
            <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-check"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>{' '}
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="font-bold text-cyan-900">{atendimento.nome}</h3>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground text-cyan-800">
              {atendimento.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
