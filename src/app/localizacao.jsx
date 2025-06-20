export default function Localizacao() {
  return (
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Torne o seu sonho de ter um sorriso encantador em realidade agora!
        </h2>
        <p className="text-lg md:text-lg mb-8 text-cyan-100">
          Entre em contato conosco agora para obter mais informações ou agendar
          uma visita.
        </p>
        <div className="space-y-6">
          <div className="text-cyan-900 bg-cyan-50 rounded-lg shadow-md border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                Informações de Contato
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <span className="text-gray-500">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-gray-600">(61) 99999-9999</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-500">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">contato@clinicaaguiar.com.br</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-500">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-map"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
                    <path d="M9 4v13" />
                    <path d="M15 7v13" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-left text-gray-600">
                    Praça dos Cristais
                    <br />
                    Setor Militar Urbano – Brasília, DF
                    <br />
                    CEP: 70630-500
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto py-12">
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
  );
}
