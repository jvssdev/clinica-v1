'use server';

export async function enviarFormulario(_estadoAnterior, dadosDoFormulario) {
  const nome = dadosDoFormulario.get('nome');
  const numero = dadosDoFormulario.get('numero');
  const email = dadosDoFormulario.get('email');
  const mensagem = dadosDoFormulario.get('mensagem');

  if (!nome || !numero || !email || !mensagem) {
    return {
      success: false,
      message: 'Por favor, preencha todos os campos obrigatórios.',
    };
  }

  const mensagemDoWhatsapp = `Olá, meu nome é ${nome} e gostaria de agendar uma consulta.\n\nEmail: ${email}\nTelefone: ${numero}\nMensagem: ${mensagem}`;
  const mensagemCodificada = encodeURIComponent(mensagemDoWhatsapp);
  const urlDoWhatsapp = `https://wa.me/5561999999999?text=${mensagemCodificada}`;
  try {
    return {
      success: true,
      message: 'Redirecionando para o WhatsApp...',
      redirect: urlDoWhatsapp,
    };
  } catch (error) {
    console.error('Erro ao enviar mensagem para o WhatsApp:', error);
    return {
      success: false,
      message:
        'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.',
    };
  }
}
