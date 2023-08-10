'use client'
import React, { useState } from 'react';
import FadeInOnScroll from '../Scripts/FadeInOnScroll';

const Contato = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    const formData = {
      nome: event.target.nome.value,
      email: event.target.email.value,
      telefone: event.target.telefone.value,
      mensagem: event.target.mensagem.value,
    };

    try {
      const response = await fetch("http://62.72.9.99:8081/mensagem/adicionar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {      // Verificar se o navegador respondeu com OK e a mensagem foi enviada
        throw new Error("Network response was not ok"); // Caso tenha dado erro, ele responde pra gente que não foi enviada
      }

      setIsEmailSent(true);
      alert("Email enviado com sucesso!");  // se ocorreu tudo certo ele enviara uma mensagem que deu certo
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao enviar o email. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <section className="text-gray-600 body-font relative" id="contato">
        <div class="container px-5 py-16 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Entre em Contato</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Envie uma mensagem para nosso Whatsapp, Instagram, Linkedin ou se preferir envie um email:</p>
        </div>
        <FadeInOnScroll>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={sendEmail} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="nome" className="leading-7 text-sm text-gray-600">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="sobrenome" className="leading-7 text-sm text-gray-600">Sobrenome</label>
                  <input
                    type="text"
                    id="sobrenome"
                    name="sobrenome"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="telefone" className="leading-7 text-sm text-gray-600">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="mensagem" className="leading-7 text-sm text-gray-600">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className={`flex mx-auto text-white bg-vhbtn border-0 py-2 px-8 focus:outline-none hover:bg-vhbtn2 duration-[200ms] rounded text-lg ${isEmailSent ? 'cursor-not-allowed opacity-50' : ''}`}
                  disabled={isEmailSent}
                >
                  {isEmailSent ? 'Email Enviado' : 'Enviar'}
                </button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500">vhwebsolutions@email.com</a>
          <p class="leading-normal my-5">Vitor e Henrique,
            <br/>Florianópolis, Santa Catarina.
          </p>
          
        </div>
            </form>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Contato;
