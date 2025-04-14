import { Cookie } from "lucide-react";

const PoliticaDePrivacidadePage = () => {
  return (
    <>
      <div className="flex  flex-col items-center justify-center p-10 gap-2">
        <Cookie size={48} />
        <h1 className="text-3xl font-bold">Política de Cookies</h1>
      </div> 
      <main className="max-w-4xl mx-auto px-4 py-10 text-white text-justify">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Coleta de Dados</h2>
          <p>Coletamos dados pessoais como nome, e-mail e telefone via formulários, além de informações de navegação via cookies.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Finalidade</h2>
          <p>Usamos os dados para contato, envio de conteúdo e melhoria da experiência do usuário.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Compartilhamento</h2>
          <p>Compartilhamos dados anonimizados com ferramentas como Google Analytics para análise de desempenho.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
          <p>Utilizamos cookies essenciais e de análise. Você pode desativá-los nas configurações do navegador.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Seus Direitos</h2>
          <p>Você pode solicitar acesso, correção ou exclusão dos seus dados pelo e-mail privacidade@somosicev.com.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Segurança</h2>
          <p>Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Contato</h2>
          <p>Para dúvidas, envie um e-mail para privacidade@somosicev.com.</p>
        </section>

        <p className="text-sm text-gray-500 mt-10">Última atualização: 09 de abril de 2025</p>
      </main>    
    </>
   );
}
 
export default PoliticaDePrivacidadePage;