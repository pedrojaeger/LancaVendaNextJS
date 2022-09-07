import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const FormsApp = () => {
  const formasDePagamento = [
    { label: "PIX Marcus", pagamento: 1 },
    { label: "PIX Angela", pagamento: 2 },
    { label: "Cielo", pagamento: 3 },
    { label: "Rede", pagamento: 4 },
  ];

  function lancarVenda() {
    console.log("pagamento");
  }

  return (
    <>
      <React.Fragment>
        <Container maxWidth="sm">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="15px"
            sx={{ bgcolor: "#cfe8fc", height: "80vh" }}
          >
            <h1 className="teste">asdasd</h1>
            <TextField
              id="outlined-basic"
              label="Nome Cliente"
              variant="outlined"
            />

            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={formasDePagamento}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Forma de Pagamento" />
              )}
            />

            <Button variant="contained" color="success" onClick={lancarVenda}>
              Success
            </Button>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};
export default FormsApp;
