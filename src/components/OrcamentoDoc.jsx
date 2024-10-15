import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  textBold: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textBoldi: {
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: '100px',
  },
  text: {
    margin: 10,
    fontSize: 12,
    textAlign: 'justify',
  },
});

const OrcamentoDoc = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.textBold}>Orçamento</Text>
      </View>

      <View style={styles.section}>
        <Text>Identificação do(a) CONTRATADO(A):</Text>
        <Text style={styles.text}>
          {formData.nomeContratado.toUpperCase()}{"\n"}
          CNPJ/CPF Nº {formData.cnpjCpfContratado}{"\n"}
          Representante Legal: {formData.representanteContratado}{"\n"}
          Endereço: {formData.enderecoContratado}{"\n"}
          Endereço Eletrônico: {formData.emailContratado}
        </Text>
      </View>

      <View style={styles.section}>
        <Text>Referente:</Text>
        <Text style={styles.text}>{formData.referencia}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>O presente orçamento referente à prestação de serviço declara ao(à) CONTRATANTE, 
            {formData.nomeContratante}, sociedade empresária inscrita no CNPJ sob o nº {formData.cnpjCpfContratante}, 
            com sede na {formData.enderecoContratante}, e endereço eletrônico: {formData.emailContratante}, 
            representado por {formData.representanteContratante}, que o valor do(a) serviço ofertado(s) pelo 
            CONTRATADO(A) é de R$ {formData.valorServico} reais.</Text>
      </View>

      <View style={styles.section}>
        <Text>O(s) Item(ns) em questão, sua(s) quantidade(s) seu(s) respectivo(s) valor(es) são:</Text>
        <Text style={styles.text}>{formData.itensServico}</Text>
      </View>

      <View style={styles.section}>
        <Text>Execução e remuneração</Text>
        <Text style={styles.text}>
          1. O prazo de execução é de {formData.prazoExecucao}, iniciando o serviço de acordo com a data acertada após aprovação desse orçamento.{"\n"}
          2. O(a) CONTRATANTE se compromete a pagar {formData.formaPagamento}, o valor de R$ {formData.valorServico} reais.{"\n"}
          a. O preço proposto acima contempla todas as despesas necessárias ao pleno fornecimento, tais como obrigações sociais, impostos, taxas, etc. Contando que não seja necessário a utilização de Andaime.
        </Text>
      </View>

      <View style={styles.section}>
        <Text>Vigência</Text>
        <Text style={styles.text}>
          O presente orçamento tem validade de {formData.validadeOrcamento}, após este prazo, os valores apresentados podem ser alterados.
        </Text>
      </View>

      <Text style={styles.textBoldi}>{formData.cityOrcamento}, {formData.dateOrcamento}</Text>
    </Page>
  </Document>
);

export default OrcamentoDoc;
