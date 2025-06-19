"use server"

import { redirect } from "next/navigation"

export async function enviarFormulario(dadosDoFormulario) {
  const nome = dadosDoFormulario.get("nome")
  const email = dadosDoFormulario.get("email")
  const numero = dadosDoFormulario.get("numero")
  const mensagem = dadosDoFormulario.get("mensagem")

  const mensagemDoWhatsapp = `*Nova Consulta - Clínica Aguiar*

*Nome:* ${nome}
*Email:* ${email}
*Telefone:* ${numero}
*Mensagem:* ${mensagem}

_Mensagem enviada através do site da clínica_`

  const mensagemCodificada = encodeURIComponent(mensagemDoWhatsapp)

  const numeroWhatsapp = "5561999999999" 

  const urlDoWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`

  redirect(urlDoWhatsapp)
}
