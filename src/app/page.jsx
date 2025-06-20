import Image from 'next/image';
import BotaoWhatsApp from './BotaoWhatsApp';
import Depoimentos from './Depoimentos';
import Link from 'next/link';
import Atendimentos from './atendimentos';
import Portifolio from './portifolio';
import FormularioDeContato from './area_de_contato';
import QuemSomos from './quem_somos';
import Localizacao from './localizacao';
export default function Clinica() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8F3]">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
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
            </svg>
            <span className="text-xl font-bold text-cyan-800">
              Clínica Odontológica Aguiar
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              className="text-sm font-medium text-cyan-900 hover:text-cyan-700"
              href="#inicio"
            >
              Início
            </Link>
            <Link
              className="text-sm font-medium text-cyan-900 hover:text-cyan-700"
              href="#quem-somos"
            >
              Quem somos
            </Link>
            <Link
              href="#portifolio"
              className="text-sm font-medium text-cyan-900 hover:text-cyan-700"
            >
              Portifólio de Serviços
            </Link>
            <Link
              href="#atendimentos"
              className="text-sm font-medium text-cyan-900 hover:text-cyan-700"
            >
              Serviços oferecidos
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm font-medium text-cyan-900 hover:text-cyan-700"
            >
              Depoimentos
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium text-cyan-900 hover:text-cyan-700"
            >
              Contato
            </Link>
            <Link
              href="#localizacao"
              className=" text-sm font-medium text-cyan-900 hover:text-cyan-700"
            >
              Localização
            </Link>
          </nav>
          <button className="bg-cyan-800 hover:bg-cyan-900 text-white">
            Contate-nos
          </button>
        </div>
      </header>

      <main className="flex-1">
        <section
          id="inicio"
          className="relative pt-35 pb-30 md:pt-50 md:pb-50 bg-cyan-900"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/logo4.png"
              alt="Logo Clínica Odontológica Aguiar"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-50 mb-6">
                Carinho em cada detalhe, saúde em cada sorriso
              </h1>
              <p className="text-lg md:text-xl text-cyan-100 mb-8">
                Alcance o sorriso dos seus sonhos que possa transmitr saúde,
                confiança e felicidade com uma equipe que preza pelo seu
                conforto e bem-estar a preços acessíveis.
              </p>
            </div>
          </div>
        </section>
        <section id="quem-somos">
          <QuemSomos />
        </section>
        <section id="portifolio" className="pt-20 pb-1">
          <div className="container">
            <h2 className="sm:text-3xl md:text-5xl font-bold text-cyan-900 text-center mb-12">
              Portifólio dos nossos serviços
            </h2>
            <div className="flex justify-center">
              <Portifolio />
            </div>
          </div>
        </section>

        <section id="atendimentos" className="pt-1 pb-2 pt-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 text-center mb-12">
              <Atendimentos />
            </h2>
          </div>
        </section>

        <section id="depoimentos">
          <Depoimentos />
        </section>

        <section id="contato" className="pt-16 bg-cyan-800">
          <FormularioDeContato />
        </section>

        <section id="localizacao" className="py-16 bg-cyan-50 text-cyan-900">
          <Localizacao />
        </section>
      </main>
      <footer className="bg-cyan-900 text-cyan-100 py-12 ">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-home"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>{' '}
                <span className="text-xl font-bold text-white">
                  Clínica Odontológica Aguiar
                </span>
              </div>
              <p className="mb-4">
                Fornecendo atendimento odontotológico de qualidade desde 2003.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-cyan-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ecfeff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M16.5 7.5v.01" />
                  </svg>{' '}
                </Link>
                <Link href="#" className="text-white hover:text-cyan-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ecfeff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>{' '}
                </Link>
                <Link href="#" className="text-white hover:text-cyan-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ecfeff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>{' '}
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/logo2.png"
                alt="Logo Clínica Odontológica Aguiar"
                className=""
                width={500}
                height={500}
              />
            </div>
            <BotaoWhatsApp />
          </div>

          <div className="border-t border-cyan-700 mt-8 pt-8 text-center">
            <p>
              © {new Date().getFullYear()} João Víctor Santos Silva. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
