import React from 'react';

const Imc = (props) => {
  return (
    <div style={styles.container}>
        <p style={styles.p}>SEU IMC: {props.value}</p>
    </div>
  );
};
const styles = {
  container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF'
    },
    p: {
        backgroundColor: '#8844ee',
        padding: '10px 15px',
        borderRadius: '100px',
        maxWidth: '150px'
    }
};
export default Imc;
