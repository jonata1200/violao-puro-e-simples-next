export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-orange-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                // AQUI ESTÁ A MUDANÇA:
                alt="Logo do curso Violão Puro e Simples" 
                className="h-24 w-auto"
              />
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">
              © 2025 Gezo Rodrigues. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs">
              Transformando vidas através da música há 40 anos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}