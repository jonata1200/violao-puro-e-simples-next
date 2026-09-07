// src/app/politica-de-cookies/page.tsx

export default function CookiesPolicyPage() {
  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <div className="container mx-auto px-6 py-20 max-w-4xl prose prose-invert prose-lg">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">Política de Cookies</h1>
        <p className="text-gray-400 italic">Última atualização: 19 de outubro de 2025</p>
        
        <h2 className="text-2xl font-semibold text-white pt-6">1. O que são Cookies?</h2>
        <p>Cookies são pequenos arquivos de texto que os sites que você visita armazenam no seu navegador. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.</p>

        <h2 className="text-2xl font-semibold text-white pt-6">2. Tipos de Cookies que Utilizamos</h2>
        <p>Nosso site utiliza as seguintes categorias de cookies:</p>
        <h3 className="text-xl font-semibold text-white">2.1. Cookies Estritamente Necessários</h3>
        <p>Esses cookies são essenciais para que você possa navegar pelo site e usar seus recursos. Por exemplo, o cookie que armazena seu consentimento (`cookie_consent`) para esta política.</p>
        <h3 className="text-xl font-semibold text-white">2.2. Cookies de Desempenho e Análise</h3>
        <p>Utilizamos cookies para coletar informações sobre como os visitantes utilizam nosso site. Usamos o Google Analytics para entender o comportamento do usuário de forma agregada e anônima, como as páginas mais visitadas e o tempo gasto no site. Isso nos ajuda a otimizar a experiência do usuário. Exemplos: `_ga`, `_gid`.</p>
        
        <h2 className="text-2xl font-semibold text-white pt-6">3. Como Controlar os Cookies</h2>
        <p>Você pode controlar e gerenciar cookies de várias maneiras. A maioria dos navegadores permite que você visualize quais cookies possui e os exclua individualmente, ou bloqueie cookies de sites específicos ou de todos os sites.</p>
        <p>Você pode encontrar informações sobre como gerenciar cookies nos navegadores mais populares nos links abaixo:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/pt-BR/kb/protecao-aprimorada-contra-rastreamento-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/pt-br/windows/excluir-e-gerenciar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Microsoft Edge</a></li>
        </ul>
        <p>Lembre-se que, se você bloquear os cookies, sua experiência em nosso site pode ser afetada.</p>
        
        <h2 className="text-2xl font-semibold text-white pt-6">4. Alterações na Política de Cookies</h2>
        <p>Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas. Recomendamos que você revise esta página regularmente para se manter informado.</p>
      </div>
    </div>
  );
}