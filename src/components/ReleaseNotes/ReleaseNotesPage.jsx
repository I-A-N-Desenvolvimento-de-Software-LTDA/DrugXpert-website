import React from 'react';

const ReleaseNotesPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Release Notes</h1>
      
      {/* Versão 1.0.0 */}
      <section className="my-4 sm:my-8 p-4 sm:p-8 bg-gray-50 rounded-lg">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Versão 1.0.0 - Janeiro 2024</h2>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-start">
          <img 
            src="/assets/release-notes/update.png" 
            alt="Version 1.0 features" 
            className="w-[100px] h-[100px] object-cover rounded-lg"
          />
          <ul className="list-disc pl-4 space-y-2 w-full md:w-1/2">
            <li>Lançamento inicial do DrugXpert</li>
            <li>Sistema de busca de medicamentos</li>
            <li>Interface responsiva</li>
            <li>Base de dados inicial</li>    
          </ul>
        </div>
      </section>

      {/* Versão 0.9.0 */}
      <section className="my-4 sm:my-8 p-4 sm:p-8 bg-gray-50 rounded-lg">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Versão 0.9.0 (Beta) - Dezembro 2023</h2>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-start">
          <img 
            src="/assets/release-notes/config.png" 
            alt="Version 1.0 features" 
            className="w-[100px] h-[100px] object-cover rounded-lg"
          />
          <div className="w-full md:w-1/2">
            <ul className="list-disc pl-4 space-y-2">
              <li>Beta test com grupo selecionado de usuários</li>
              <li>Implementação inicial do sistema de busca</li>
              <li>Correção de bugs reportados pelos testadores</li>
              <li>Melhorias de performance</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-700">Beta fechado - Acesso limitado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Versão 0.8.0 */}
      <section className="my-4 sm:my-8 p-4 sm:p-8 bg-gray-50 rounded-lg">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Versão 0.8.0 (Alpha) - Outubro 2023</h2>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-start">
          <img 
           src="/assets/release-notes/security.png" 
           alt="Version 1.0 features" 
           className="w-[100px] h-[100px] object-cover rounded-lg"
          />
          <div className="w-full md:w-1/2">
            <ul className="list-disc pl-4 space-y-2">
              <li>Primeira versão alpha</li>
              <li>Interface básica implementada</li>
              <li>Primeiros testes de integração</li>
              <li>Base de dados preliminar</li>
            </ul>
            <div className="mt-4 p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-red-700">Alpha interno - Apenas para desenvolvimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="my-4 sm:my-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Roadmap</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative p-4 sm:p-8">
          {/* Linha do tempo - visível apenas em telas grandes */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
          
          {/* Timeline Items */}
          {['Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'].map((quarter, index) => (
            <div key={quarter} className="bg-white p-4 rounded-lg shadow-md z-10 text-center">
              <h3 className="text-[#5c8d2f] font-semibold mb-2">{quarter}</h3>
              <p className="text-sm">Integração com APIs de farmácias</p>
              <p className="text-sm mt-2">Comparação de preços</p>
            </div>
          ))}
        </div>

        {/* Em Planejamento Section */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-[#5c8d2f] mb-4">Em Planejamento</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm">Marketplace farmacêutico</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm">Programa de fidelidade</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm">Integração com convênios</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReleaseNotesPage;
