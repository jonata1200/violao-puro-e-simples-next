// src/app/termos-de-uso/page.tsx

export default function TermsOfUsePage() {
  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <div className="container mx-auto px-6 py-20 max-w-4xl prose prose-invert prose-lg">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">Termos de Uso</h1>
        <p className="text-gray-400 italic">Última atualização: 19 de outubro de 2025</p>

        <p>
          Estes Termos de Uso regem o seu acesso e uso do curso online "Violão Puro e Simples", oferecido por Gezo Rodrigues. Ao adquirir e acessar o Curso, você concorda integralmente com estes Termos.
        </p>

        <h2 className="text-2xl font-semibold text-white pt-6">1. Objeto</h2>
        <p>Concedemos ao Usuário uma licença de uso pessoal, limitada, não exclusiva e intransferível para acessar o conteúdo do Curso através da plataforma designada, pelo período especificado no ato da compra (2 anos).</p>

        <h2 className="text-2xl font-semibold text-white pt-6">2. Acesso e Uso da Conta</h2>
        <p>O Usuário é responsável por manter a confidencialidade de suas credenciais de acesso (login e senha). O compartilhamento de contas é estritamente proibido e pode resultar na suspensão ou cancelamento do acesso, sem direito a reembolso.</p>

        <h2 className="text-2xl font-semibold text-white pt-6">3. Propriedade Intelectual</h2>
        <p>Todo o conteúdo do Curso, incluindo, mas não se limitando a, videoaulas, textos, materiais de apoio, métodos e o Songbook digital, é protegido por leis de direitos autorais e é de propriedade exclusiva de Gezo Rodrigues. É vedada qualquer forma de cópia, reprodução, modificação, distribuição, venda ou engenharia reversa do material.</p>

        <h2 className="text-2xl font-semibold text-white pt-6">4. Pagamento e Política de Reembolso</h2>
        <p>O pagamento é processado através da plataforma Hotmart, sujeito aos seus próprios termos. Oferecemos uma garantia incondicional de 7 (sete) dias a contar da data da compra. Dentro deste período, o Usuário pode solicitar o cancelamento e o reembolso integral do valor investido.</p>

        <h2 className="text-2xl font-semibold text-white pt-6">5. Isenção de Garantias e Limitação de Responsabilidade</h2>
        <p>O Curso é fornecido "no estado em que se encontra". Embora nos esforcemos para oferecer um conteúdo de alta qualidade, não garantimos que o progresso do aprendizado do Usuário atingirá um nível específico, pois isso depende da prática e dedicação individual. Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos ou indiretos decorrentes do uso ou da incapacidade de usar o Curso.</p>

        <h2 className="text-2xl font-semibold text-white pt-6">6. Alterações nos Termos</h2>
        <p>Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. É sua responsabilidade revisar os Termos periodicamente.</p>
        
        <h2 className="text-2xl font-semibold text-white pt-6">7. Lei Aplicável e Foro</h2>
        <p>Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da comarca de Brasília para dirimir quaisquer litígios ou controvérsias oriundas destes Termos.</p>
      </div>
    </div>
  );
}