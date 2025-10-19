// src/app/politica-de-privacidade/page.tsx
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <div className="container mx-auto px-6 py-20 max-w-4xl prose prose-invert prose-lg">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">Política de Privacidade</h1>
        <p className="text-gray-400 italic">Última atualização: 19 de outubro de 2025</p>

        <p>
          Bem-vindo à Política de Privacidade do curso "Violão Puro e Simples". Este documento estabelece como Gezo Rodrigues coleta, utiliza, armazena e protege as informações pessoais dos nossos usuários e alunos.
        </p>

        <h2 className="text-2xl font-semibold text-white pt-6">1. Informações que Coletamos</h2>
        <p>Coletamos informações de duas formas principais:</p>
        <h3 className="text-xl font-semibold text-white">1.1. Informações Fornecidas Diretamente por Você</h3>
        <p>Ao se inscrever no curso, você nos fornece dados como nome completo e endereço de e-mail. As informações de pagamento são processadas diretamente por nossa parceira de pagamentos, a Hotmart, e não são armazenadas em nossos servidores.</p>
        <h3 className="text-xl font-semibold text-white">1.2. Informações Coletadas Automaticamente</h3>
        <p>Ao navegar em nosso site, podemos coletar dados como: endereço IP, tipo de navegador, sistema operacional, informações do dispositivo e dados de uso através de cookies e tecnologias de análise, como o Google Analytics.</p>

        <h2 className="text-2xl font-semibold text-white pt-6">2. Como Utilizamos Suas Informações</h2>
        <p>As informações coletadas são utilizadas para as seguintes finalidades:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Provisão do Serviço:</strong> Para processar sua matrícula, gerenciar sua conta e fornecer acesso ao conteúdo do curso.</li>
            <li><strong>Comunicação:</strong> Para enviar e-mails importantes sobre o status do curso, atualizações de conteúdo e suporte ao aluno.</li>
            <li><strong>Marketing:</strong> Para enviar, com seu consentimento, informações sobre novas ofertas, promoções e conteúdos que possam ser do seu interesse. Você pode optar por não receber essas comunicações a qualquer momento.</li>
            <li><strong>Melhoria do Site:</strong> Para analisar como os usuários interagem com o site, otimizar a experiência de navegação e melhorar nosso conteúdo.</li>
            <li><strong>Segurança e Cumprimento Legal:</strong> Para proteger nosso site contra fraudes e cumprir com obrigações legais e regulatórias.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white pt-6">3. Armazenamento e Segurança dos Dados</h2>
        <p>Seus dados são armazenados em servidores seguros. Adotamos medidas técnicas e administrativas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Reteremos seus dados pelo tempo necessário para cumprir os propósitos descritos nesta política ou conforme exigido por lei.</p>

        <h2 className="text-2xl font-semibold text-white pt-6">4. Compartilhamento de Dados com Terceiros</h2>
        <p>Não vendemos ou alugamos suas informações pessoais. O compartilhamento ocorre apenas com os seguintes parceiros e para as seguintes finalidades:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Processadores de Pagamento (Hotmart):</strong> Para processar a compra do curso.</li>
            <li><strong>Ferramentas de Análise (Google Analytics):</strong> Para análise de tráfego de forma anonimizada.</li>
            <li><strong>Autoridades Legais:</strong> Se exigido por lei, ordem judicial ou para proteger nossos direitos.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white pt-6">5. Cookies</h2>
        <p>Utilizamos cookies para melhorar sua experiência. Para obter informações detalhadas sobre os cookies que usamos, consulte nossa <Link href="/politica-de-cookies" className="text-orange-400 hover:underline">Política de Cookies</Link>.</p>

        <h2 className="text-2xl font-semibold text-white pt-6">6. Seus Direitos (LGPD)</h2>
        <p>Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Confirmar a existência de tratamento dos seus dados.</li>
            <li>Acessar seus dados.</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>Solicitar a portabilidade dos seus dados a outro fornecedor.</li>
            <li>Revogar o consentimento.</li>
        </ul>
        <p>Para exercer seus direitos, entre em contato conosco através do e-mail listado abaixo.</p>

      </div>
    </div>
  );
}