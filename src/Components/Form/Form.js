import React from 'react';
import { Input, Button, InputLabel } from '@material-ui/core';

const Form = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.line}>
        <InputLabel>Altura</InputLabel>
        <Input type="number" value={props.altura} name="altura" onChange={(e) => props.handleChange(e)} required/>
      </div>
      <div style={styles.line}> 
        <InputLabel>Peso</InputLabel>
        <Input type="number" value={props.peso} name="peso" onChange={(e) => props.handleChange(e)} required/>
      </div>
      <Button onClick={props.handleSubmit} style={styles.button}>
        Enviar
      </Button>
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth:'450px',
  },
  line : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '10px',
  },
  button: {
    backgroundImage: 'linear-gradient( to top, #8844ee, #c5aaed)',
    border: 0,
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '100px',
    fontSize: '12px',
    letterSpacing: '0.8px',
    zIndex: 999,
    width: '100px',
    marginTop: '12px',
  },
};
export default Form;
