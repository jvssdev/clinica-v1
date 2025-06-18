import Image from "next/image";
import BotaoWhatsApp from "./BotaoWhatsApp";
import Depoimentos from "./Depoimentos";
import {
  Home,
  MapPin,
  Check,
} from "lucide-react";
import Link from "next/link";
import Atendimentos from "./atendimentos";
// export default function Home() {
//   return (
//     <>
//
//
//
//       Bem-vindo à Clínica Odontológica Aguiar
//
// Cuidando do seu sorriso com dedicação, conforto e confiança.
//
// Sob a nova direção da Dra. Larissa Aguiar, nossa clínica está comprometida em oferecer um atendimento odontológico acessível, humano e de alta qualidade. Aqui, você será recebido por uma equipe acolhedora e experiente, pronta para acompanhar você em todas as etapas da sua saúde bucal — da prevenção aos tratamentos mais avançados.
//
// Com foco em excelência clínica e atendimento personalizado, oferecemos tudo o que você precisa em um só lugar:
//
//     Restaurações estéticas, próteses e implantes dentários
//
//     Ortodontia, clareamento e facetas para transformar seu sorriso
//
//     Limpezas, exames preventivos e orientações para manter sua saúde bucal em dia
//
// Seja bem-vindo à Clínica Aguiar — onde o seu sorriso é a nossa prioridade.
// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Clínica Odontológica Aguiar{" "}
//           </li>
//         </ol>
//         <Depoimentos/>
//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <BotaoWhatsApp />
//       </footer>
//     </div>
//
//     </>
//       );
// }

export default function Clinica() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8F3]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-cyan-800" />
            <span className="text-xl font-bold text-cyan-800">
              Clínica Odontológica Aguiar
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-sm font-medium text-cyan-900 hover:text-cyan-700" href="#inicio">
                Início
            </Link>
            <Link href="#properti" className="text-sm font-medium text-cyan-900 hover:text-cyan-700">
                Properti
            </Link>
            <Link href="#atendimentos" className="text-sm font-medium text-cyan-900 hover:text-cyan-700">
                Serviços Oferecidos
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium text-cyan-900 hover:text-cyan-700">
                Depoimentos
            </Link>
            <Link href="#contato" className="text-sm font-medium text-cyan-900 hover:text-cyan-700">
                Contato
            </Link>
          </nav>
          <button className="bg-cyan-800 hover:bg-cyan-900 text-white">
            Contate-nos
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative pt-12 pb-20 md:pt-24 md:pb-40">
          <div className="absolute inset-0 z-0">
            <Image
              src="/logo.webp"
              alt="Logo Clínica Odontológica Aguiar"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-900 mb-6">
                Atendimento odontológico feito com o carinho que o seu sorriso merece
              </h1>
              <p className="text-lg md:text-xl text-cyan-800 mb-8">
                Alcance o sorriso dos seus sonhos que possa transmitr saúde, confiança e felicidade com uma equipe que preza pelo seu conforto e bem-estar a preços acessíveis.              </p>
            </div>
          </div>
        </section>

        {/* Property Showcase */}
        <section id="properti" className="py-16 bg-cyan-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 text-center mb-12">
              Pilihan Hunian Eksklusif
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Property 1 */}
                <div className="relative h-64">
                  {/* <Image */}
                  {/*   src="/images/property-1.jpg" */}
                  {/*   alt="Rumah Tipe Melati" */}
                  {/*   fill */}
                  {/*   className="object-cover" */}
                  {/* /> */}
                </div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-cyan-900">
                      Tipe Melati
                    </h3>
                    <span className="text-lg font-semibold text-cyan-800">
                      Rp 850 juta
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-700 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">
                      Bintaro, Jakarta Selatan
                    </span>
                  </div>
                  <p className="text-cyan-800 mb-4">
                    Rumah 2 lantai dengan 3 kamar tidur, 2 kamar mandi, dan
                    taman belakang yang luas.
                  </p>
                  <button className="w-full bg-cyan-800 hover:bg-cyan-900">
                    Lihat Detail
                  </button>

              {/* Property 2 */}
                <div className="relative h-64">
                  {/* <Image */}
                  {/*   src="/images/property-2.jpg" */}
                  {/*   alt="Apartemen Tipe Dahlia" */}
                  {/*   fill */}
                  {/*   className="object-cover" */}
                  {/* /> */}
                </div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-cyan-900">
                      Tipe Dahlia
                    </h3>
                    <span className="text-lg font-semibold text-cyan-800">
                      Rp 1,2 miliar
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-700 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">
                      Kemang, Jakarta Selatan
                    </span>
                  </div>
                  <p className="text-cyan-800 mb-4">
                    Rumah mewah dengan 4 kamar tidur, 3 kamar mandi, ruang
                    keluarga luas, dan kolam renang pribadi.
                  </p>
                  <button className="w-full bg-cyan-800 hover:bg-cyan-900">
                    Lihat Detail
                  </button>

              {/* Property 3 */}
                <div className="relative h-64">
                  {/* <Image */}
                  {/*   src="/images/property-3.jpg" */}
                  {/*   alt="Rumah Tipe Anggrek" */}
                  {/*   fill */}
                  {/*   className="object-cover" */}
                  {/* /> */}
                </div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-cyan-900">
                      Tipe Anggrek
                    </h3>
                    <span className="text-lg font-semibold text-cyan-800">
                      Rp 650 juta
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-700 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">BSD City, Tangerang</span>
                  </div>
                  <p className="text-cyan-800 mb-4">
                    Rumah nyaman dengan 2 kamar tidur, 2 kamar mandi, dan akses
                    mudah ke atendimentos umum.
                  </p>
                  <button className="w-full bg-cyan-800 hover:bg-cyan-900">
                    Lihat Detail
                  </button>
            </div>
            <div className="text-center mt-12">
              <button
                variant="outline"
                className="border-cyan-800 text-cyan-800 hover:bg-cyan-100"
              >
                Lihat Semua Properti
              </button>
            </div>
          </div>
        </section>

        <section id="atendimentos" className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 text-center mb-12">
              <Atendimentos/> 
            </h2>
          </div>
        </section>

        {/* Depoimentosals */}
        <section id="depoimentos" className="py-16 bg-cyan-50">
          <Depoimentos/>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cyan-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Torne o seu sonho de ter um sorriso encantador em realidade agora!
              </h2>
              <p className="text-lg md:text-xl mb-8 text-cyan-100">
                Não perca a oportunidade de ter atendimentos odontológicos confortáveis a um preço acessível. Entre em contato conosco agora para obter mais informações ou agendar uma visita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-800 hover:bg-cyan-100 text-lg px-8 py-6">
                  Contate-nos
                </button>
                <button
                  variant="outline"
                  className="border-white text-white hover:bg-cyan-700 text-lg px-8 py-6"
                >
                  Agende uma visita
                </button>
              </div>
            </div>
          </div>
        </section>

<section id="localizacao" className="py-12 px-4">
  <h2 className="text-2xl font-bold mb-4 text-center">Como chegar</h2>
  
<div className="max-w-3xl mx-auto px-4">
  <div className="max-w-3xl mx-auto px-4">
    <iframe
      title="Localização da Clínica Aguiar"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12247.428642167338!2d-47.89124835214896!3d-15.795352521492701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3baf9a15a8a9%3A0x816ce47727594834!2sPra%C3%A7a%20dos%20Cristais!5e0!3m2!1spt-BR!2sbr!4v1718648789206!5m2!1spt-BR!2sbr"
      className="w-full h-96 rounded-lg shadow-md border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>
</section>
      </main>

      {/* Footer */}
      <footer id="contato" className="bg-cyan-900 text-cyan-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-6 w-6 text-white" />
                <span className="text-xl font-bold text-white">
                  Clínica Odontológica Aguiar
                </span>
              </div>
              <p className="mb-4">
                Fornecendo atendimento odontotológico de qualidade desde 2003.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-cyan-300">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>                </Link>
                <Link href="#" className="text-white hover:text-cyan-300">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>                </Link>
                <Link href="#" className="text-white hover:text-cyan-300">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>                </Link>  
              </div>
            </div>
<BotaoWhatsApp />
            {/* ... demais colunas do footer */}
          </div>

          <div className="border-t border-cyan-700 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} João Víctor Santos Silva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
