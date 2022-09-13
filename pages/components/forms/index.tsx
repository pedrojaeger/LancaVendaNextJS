import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const FormsApp = () => {
  const vendas: any[] = [];

  const [FormaDePagamento, setFormaDePagamento] = useState("");

  const onChangeFormaDePagamento = (event: SelectChangeEvent) => {
    setFormaDePagamento(event.target.value);
  };

  const [cliente, setCliente] = useState("");
  const [valor, setValor] = useState("");

  const lancarVenda = () => {
    console.log("pagamento lançado");
    console.log(cliente);
    console.log(valor);
    console.log(FormaDePagamento);
    let venda = { cliente, valor, FormaDePagamento };
    vendas.push(venda);
    console.log(vendas);
  };

  const onChangeNome = (evt: SelectChangeEvent) => {
    setCliente(evt.target.value as string);
  };
  const onChangeValor = (evt: any) => {
    setValor(evt.target.value);
  };
  const onChangePagamento = (evt: any) => {
    setValor(evt.target.value);
  };

  return (
    <>
      <Container maxWidth="sm" className="container">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop="15px"
          sx={{ bgcolor: "#cfe8fc", height: "80vh" }}
        >
          <h1>asdasd</h1>

          <TextField
            className="form"
            id="outlined-basic"
            label="Nome Cliente"
            variant="outlined"
            name="cliente"
            value={cliente}
            onChange={onChangeNome}
          />

          <TextField
            className="form"
            id="outlined-number"
            label="Valor"
            type="number"
            name="valor"
            onChange={onChangeValor}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <InputLabel>Forma de Pagamento</InputLabel>
          <Select
            sx={{ minWidth: 120 }}
            value={FormaDePagamento}
            label="Forma de Pagamento"
            onChange={onChangeFormaDePagamento}
          >
            <MenuItem value={1}>Pix Marcus</MenuItem>
            <MenuItem value={2}>Pix Angela</MenuItem>
            <MenuItem value={3}>Rede</MenuItem>
            <MenuItem value={4}>Cielo</MenuItem>
          </Select>

          <Button
            className="form"
            variant="contained"
            color="success"
            type="submit"
            onClick={lancarVenda}
          >
            Success
          </Button>
        </Box>
      </Container>
    </>
  );
};
export default FormsApp;
