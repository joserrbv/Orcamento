import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import OrcamentoDoc from './OrcamentoDoc'; // Componente PDF separado

const Orcamento = () => {
  const [formData, setFormData] = useState({
    nomeContratado: '',
    cnpjCpfContratado: '',
    representanteContratado: '',
    enderecoContratado: '',
    emailContratado: '',
    referencia: '',
    nomeContratante: '',
    cnpjCpfContratante: '',
    enderecoContratante: '',
    emailContratante: '',
    representanteContratante: '',
    valorServico: '',
    itensServico: '',
    prazoExecucao: '1 dia corrido',
    formaPagamento: 'maneira parcelada, por meio de transferência Bancária',
    validadeOrcamento: '7 dias', // Novo campo para validade do orçamento, 
    dateOrcamento: '5 de Outubro',
    cityOrcamento: 'Boa Vista RR'
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2); // Avançar para o segundo momento
    }
  };

  const handlePreviousStep = () => {
    setStep(1); // Voltar para o primeiro momento
  };

  return (
    <div>
      <h1>Gerar Orçamento</h1>

      {step === 1 && (
        <form>
          <h2>Identificação do(a) CONTRATADO(A)</h2>
          {/* Formulário do primeiro momento */}
          <div>
            <label>Nome Completo do(a) CONTRATADO(A): </label>
            <input
              type="text"
              name="nomeContratado"
              value={formData.nomeContratado}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CNPJ ou CPF do(a) CONTRATADO(A): </label>
            <input
              type="text"
              name="cnpjCpfContratado"
              value={formData.cnpjCpfContratado}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Representante Legal do(a) CONTRATADO(A): </label>
            <input
              type="text"
              name="representanteContratado"
              value={formData.representanteContratado}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Endereço do(a) CONTRATADO(A): </label>
            <input
              type="text"
              name="enderecoContratado"
              value={formData.enderecoContratado}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Endereço Eletrônico do(a) CONTRATADO(A): </label>
            <input
              type="email"
              name="emailContratado"
              value={formData.emailContratado}
              onChange={handleChange}
            />
          </div>

          <button type="button" onClick={handleNextStep}>
            Confirmar e Continuar
          </button>
        </form>
      )}

      {step === 2 && (
        <form>
          <h2>Dados do Serviço e CONTRATANTE</h2>
          {/* Formulário do segundo momento */}
          <div>
            <label>Referente: </label>
            <input
              type="text"
              name="referencia"
              value={formData.referencia}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Nome Completo do CONTRATANTE: </label>
            <input
              type="text"
              name="nomeContratante"
              value={formData.nomeContratante}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CNPJ ou CPF do CONTRATANTE: </label>
            <input
              type="text"
              name="cnpjCpfContratante"
              value={formData.cnpjCpfContratante}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Endereço do CONTRATANTE: </label>
            <input
              type="text"
              name="enderecoContratante"
              value={formData.enderecoContratante}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Endereço Eletrônico do CONTRATANTE: </label>
            <input
              type="email"
              name="emailContratante"
              value={formData.emailContratante}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Representante Legal do CONTRATANTE: </label>
            <input
              type="text"
              name="representanteContratante"
              value={formData.representanteContratante}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Valor do Serviço: </label>
            <input
              type="text"
              name="valorServico"
              value={formData.valorServico}
              onChange={handleChange}
            />
          </div>

          {/* Novo campo para os itens do serviço */}
          <div>
            <label>Itens, Quantidade e Valor do Serviço:</label>
            <textarea
              name="itensServico"
              value={formData.itensServico}
              onChange={handleChange}
              rows="4"
              placeholder="Exemplo: Mão de obra para troca de lâmpadas, R$ 300,00"
            />
          </div>

          {/* Novos campos para execução e remuneração */}
          <div>
            <label>Prazo de Execução:</label>
            <input
              type="text"
              name="prazoExecucao"
              value={formData.prazoExecucao}
              onChange={handleChange}
              placeholder="Ex: 1 dia corrido"
            />
          </div>
          <div>
            <label>Forma de Pagamento:</label>
            <textarea
              name="formaPagamento"
              value={formData.formaPagamento}
              onChange={handleChange}
              rows="4"
              placeholder="Detalhes do pagamento"
            />
          </div>

          {/* Novo campo para validade do orçamento */}
          <div>
            <label>Validade do Orçamento:</label>
            <input
              type="text"
              name="validadeOrcamento"
              value={formData.validadeOrcamento}
              onChange={handleChange}
              placeholder="Ex: 7 dias"
            />
          </div>

          {/* Novo campo para data do orçamento */}
          <div>
            <label>Data do Orçamento: </label>
            <input
              type="text"
              name="dateOrcamento"
              value={formData.dateOrcamento}
              onChange={handleChange}
              placeholder="5 de outubro de 2024"
            />
          </div>

          {/* Novo campo para Cidade estado  do orçamento */}
          <div>
            <label>Cidade estado do Orçamento: </label>
            <input
              type="text"
              name="cityOrcamento"
              value={formData.cityOrcamento}
              onChange={handleChange}
              placeholder="Boa Vista RR"
            />
          </div>

          <button type="button" onClick={handlePreviousStep}>
            Voltar
          </button>
          <PDFDownloadLink
            document={<OrcamentoDoc formData={formData} />}
            fileName="orcamento.pdf"
          >
            {({ loading }) =>
              loading ? 'Gerando PDF...' : 'Confirmar e Baixar PDF'
            }
          </PDFDownloadLink>
        </form>
      )}
    </div>
  );
};

export default Orcamento;
