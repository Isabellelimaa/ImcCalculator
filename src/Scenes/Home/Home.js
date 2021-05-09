import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Form from '../../Components/Form';
import Imc from '../../Components/Imc';

function Home() {
  const [value, setValue] = useState({});
  const [imc, setImc] = useState();

  const onsubmit = async () => {
    let valorImc = value.peso / (value.altura * value.altura);
    setImc(valorImc.toLocaleString('pt-BR'));
  };

  const onchange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const renderImc = () => {
    if (imc) {
      return <Imc value={imc} />;
    }
  };

  return (
    <div style={styles.divPai}>
      <div style={styles.title}>Calcular IMC</div>
      <div style={styles.subTitle}>
        IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
        Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
      </div>
      {renderImc()}
      <Form handleSubmit={onsubmit} handleChange={onchange} value={value} />
    </div>
  );
}

const styles = {
  divPai: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '470px',
    margin: '200px auto 100px',
    padding: '45px',
    textAlign: 'center',
    alignItems: 'center',
    minHeight: '100px',
    backgroundColor: 'white',
    borderRadius:'9px'
  },
  title: {
    fontSize: '62px',
    textAlign: 'center',
    fontFamily: "'Sacramento', cursive",
    fontWeight: '600',
  },
  subTitle: {
    color: '#ABABAB',
    margin: '20px',
  },
};

export default withRouter(Home);
