import React, { useState, useRef } from 'react';
import generatePDF, {Margin} from 'react-to-pdf';
import '../../src/index.css'


const FormularioContrato = () => {
  const [primeiroMomento, setPrimeiroMomento] = useState({
    nomeContratado: '',
    cpfCnpjContratado: '',
    representanteLegal: '',
    enderecoContratado: '',
    emailContratado: '',
  });

  const [segundoMomento, setSegundoMomento] = useState({
    referente: '',
    nomeContratante: '',
    cpfCnpjContratante: '',
    enderecoContratante: '',
    emailContratante: '',
    representanteLegalContratante: '',
    valorServico: '',
  });

  const [terceiroMomento, setTerceiroMomento] = useState({
    itensEquantidades: '',
    diaCorrido: '',
    parceladaOuunica:'',
    banco:'',
    agencia:'',
    conta:'',
    pix:'',
    parcelas:'',
    valorParcelas:'',
    validadeOrcamento:'',
    cidadeEstado:'',
    dataDoOrcamento:'',
    
  });

  const ref = useRef();

  const handlePrimeiroMomentoChange = (e) => {
    setPrimeiroMomento({
      ...primeiroMomento,
      [e.target.name]: e.target.value,
    });
  };

  const handleSegundoMomentoChange = (e) => {
    setSegundoMomento({
      ...segundoMomento,
      [e.target.name]: e.target.value,
    });
  };

  const handleTerceiroMomentoChange = (e) => {
    setTerceiroMomento({
      ...terceiroMomento,
      [e.target.name]: e.target.value,
    });
  };

  const personalizacao = {
    filename: "Orcamento.pdf",
method: 'save',
// resolution: Resolution.HIGH,

page: {
  // margin is in MM, default is Margin.NONE = 0, MEDIUM, SMALL
  margin: Margin.SMALL,
  // default is 'A4', letter
  format: 'A4',
  // default is 'portrait', "landscape"
  orientation: 'PORTRAIT',
},

  }

  const recuperarPdf = () => document.getElementById('conteudo');



  return (
    <div >
      <h2>Acompanhe sua edição, no texto após os formulários</h2>
      <form>
        <label>
          Nome Completo do Cliente:
          <input
            type="text"
            name="nomeContratado"
            value={primeiroMomento.nomeContratado}
            onChange={handlePrimeiroMomentoChange}
          />
        </label>
        <br />
        <label>
          CNPJ ou CPF:
          <input
            type="text"
            name="cpfCnpjContratado"
            value={primeiroMomento.cpfCnpjContratado}
            onChange={handlePrimeiroMomentoChange}
          />
        </label>
        <br />
        <label>
          Representante Legal:
          <input
            type="text"
            name="representanteLegal"
            value={primeiroMomento.representanteLegal}
            onChange={handlePrimeiroMomentoChange}
          />
        </label>
        <br />
        <label>
          Endereço:
          <input
            type="text"
            name="enderecoContratado"
            value={primeiroMomento.enderecoContratado}
            onChange={handlePrimeiroMomentoChange}
          />
        </label>
        <br />
        <label>
          Endereço Eletrônico:
          <input
            type="email"
            name="emailContratado"
            value={primeiroMomento.emailContratado}
            onChange={handlePrimeiroMomentoChange}
          />
        </label>
      </form>

      <h2>Segundo Momento</h2>
      <form>
        <label>
          Referente:
          <input
            type="text"
            name="referente"
            value={segundoMomento.referente}
            onChange={handleSegundoMomentoChange}
          />
        </label>
        <br />
        <label>
          Nome Completo do Profissional ou Empresa:
          <input
            type="text"
            name="nomeContratante"
            value={segundoMomento.nomeContratante}
            onChange={handleSegundoMomentoChange}
          />
        </label>
        <br />
        <label>
          CNPJ ou CPF do CONTRATANTE:
          <input
            type="text"
            name="cpfCnpjContratante"
            value={segundoMomento.cpfCnpjContratante}
            onChange={handleSegundoMomentoChange}
          />
        </label>
        <br />
        <label>
          Endereço do CONTRATANTE:
          <input
            type="text"
            name="enderecoContratante"
            value={segundoMomento.enderecoContratante}
            onChange={handleSegundoMomentoChange}
          />
        </label>
        <br />
        <label>
          Endereço Eletrônico do CONTRATANTE:
          <input
            type="email"
            name="emailContratante"
            value={segundoMomento.emailContratante}
            onChange={handleSegundoMomentoChange}
          />
        </label>
        <br />
        <label>
          Representante Legal do CONTRATANTE:
          <input
            type="text"
            name="representanteLegalContratante"
            value={segundoMomento.representanteLegalContratante}
            onChange={handleSegundoMomentoChange}
          />
        </label>
        <br />
        <label>
          Valor do Serviço:
          <input
            type="text"
            name="valorServico"
            value={segundoMomento.valorServico}
            onChange={handleSegundoMomentoChange}
          />
        </label>
        </form>
        <br />
        <h2>Terceiro Momento</h2>
        <form action="">
        <label>
          Itens e Quantidades:
          <input
            type="text"
            name="itensEquantidades"
            value={terceiroMomento.itensEquantidades}
            onChange={handleTerceiroMomentoChange}
          />
        </label>
        <br />
        <label>
          Periodo para realizar o serviço:
          <input
            type="text"
            name="diaCorrido"
            value={terceiroMomento.diaCorrido}
            onChange={handleTerceiroMomentoChange}
          />
        </label>
        <br />
        <label>
        parcelada ou unica:
          <input
            type="text"
            name="parceladaOuunica"
            value={terceiroMomento.parceladaOuunica}
            onChange={handleTerceiroMomentoChange}
          />
        </label>
        <br />
        <label>
        Banco
          <input
            type="text"
            name="banco"
            value={terceiroMomento.banco}
            onChange={handleTerceiroMomentoChange}
          />
        </label>
        <br />
        <label>
        Agencia
          <input
            type="text"
            name="agencia"
            value={terceiroMomento.agencia}
            onChange={handleTerceiroMomentoChange}
          />
        </label>
        <br />
        <label>
        Conta
          <input
            type="text"
            name="conta"
            value={terceiroMomento.conta}
            onChange={handleTerceiroMomentoChange}
          />
        </label>
        <br />
        <label>
        Pix
          <input
            type="text"
            name="pix"
            value={terceiroMomento.pix}
            onChange={handleTerceiroMomentoChange}
          />
        </label>
        <br />
        <label>
        Parcelas
          <input
            type="text"
            name="parcelas"
            value={terceiroMomento.parcelas}
            onChange={handleTerceiroMomentoChange}
          />
        </label>
        <br />
        <label>
        Valor parcelas
          <input
            type="text"
            name="valorParcelas"
            value={terceiroMomento.valorParcelas}
            onChange={handleTerceiroMomentoChange}
          />
        </label>
        <br />
        <label>
        Validade do Orcamento
          <input
            type="text"
            name="validadeOrcamento"
            value={terceiroMomento.validadeOrcamento}
            onChange={handleTerceiroMomentoChange}
          />
        </label>
        <br />
        <label>
        Cidade e estado
          <input
            type="text"
            name="cidadeEstado"
            value={terceiroMomento.cidadeEstado}
            onChange={handleTerceiroMomentoChange}
          />
        </label>
        <br />
        <label>
        dataDoOrcamento
          <input
            type="text"
            name="dataDoOrcamento"
            value={terceiroMomento.dataDoOrcamento}
            onChange={handleTerceiroMomentoChange}
          />
        </label>


      </form>
      <div style={{ border: '1px solid' }}>
      <div id='conteudo' ref={ref} style={{ margin: '20px', padding: '20px' }}>
        <h2>Orçamento</h2>
        
        <div id='primeiroMomento'>
        <p>Identificação do(a) CONTRATADO(A): {primeiroMomento.nomeContratado}</p>
        <p>CNPJ Nº {primeiroMomento.cpfCnpjContratado}</p>
        <p>Representante Legal: {primeiroMomento.representanteLegal}</p>
        <p>Endereço: {primeiroMomento.enderecoContratado}</p>
        <p>Endereço Eletrônico: {primeiroMomento.emailContratado}</p>
        </div>
        <p>Referente: {segundoMomento.referente}</p>

        <p id='justificado'> O presente orçamento referente a prestação de serviço, declara ao(à) CONTRATANTE, {segundoMomento.nomeContratante}, sociedade empresária inscrita no CNPJ sob o nº {segundoMomento.cpfCnpjContratante}, com sede na {segundoMomento.enderecoContratante}, e endereço eletrônico: {segundoMomento.emailContratante}, representado por {segundoMomento.representanteLegalContratante}, que o valor do(a) serviço, ofertado(s) pelo CONTRATADO(A), é de R$ {segundoMomento.valorServico} reais.</p>

        <p> <strong>O(s) Item(ns) em questão, sua(s) quantidade(s) e seu(s) respectivo(s) valor(es) são:</strong></p>
        <p id='justificado'>{terceiroMomento.itensEquantidades}</p>
        <p></p>

        <p><strong>Execução e remuneração</strong></p>
        <ol>
          <li id='justificado'> O prazo de execução é de {terceiroMomento.diaCorrido}, iniciando o serviço de acordo com a data acertada após aprovação desse orçamento.</li>
          <li id='justificado'> O(a) CONTRATANTE se compromete a pagar de maneira {terceiroMomento.parceladaOuunica} ao(à) CONTRATADO(A), por meio de transferência bancária, para o Banco {terceiroMomento.banco}, Agencia {terceiroMomento.agencia}, Conta nº {terceiroMomento.conta}, PIX nº {terceiroMomento.pix}, o valor de R$ {segundoMomento.valorServico} reais, em {terceiroMomento.parcelas} de R$ {terceiroMomento.valorParcelas} reais, com o primeiro vencimento no início do serviço e as demais no término do serviço.</li>
          <ul>
            <li id='justificado'>
            a.	O preço proposto acima comtempla todas as despesas necessárias ao pleno fornecimento, tais como obrigações sociais, impostos, taxas, etc. Contando que não seja necessário a utilização de Andaime.
          
            </li>
          </ul>
        </ol>
        
          

        <p><strong>Vigência</strong></p>
        <p id='validade'>O presente orçamento tem validade de {terceiroMomento.validadeOrcamento}, após este prazo, os valores apresentados podem ser alterados.</p>

        <p id='rodape'><strong>{terceiroMomento.cidadeEstado},{terceiroMomento.dataDoOrcamento}</strong></p>
      </div>
      </div>
     
      {/* botão PDF  */}
      <button onClick={() => generatePDF(recuperarPdf, personalizacao)}>Gerar PDF</button>
      
      
    </div>
  );
};

export default FormularioContrato;
