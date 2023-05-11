import "./App.css";
import { Footer } from "./Components/Footer";
import { Form } from "./Components/Form";

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body style={{ background: "#1d1e1c" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: "36px",
          }}
        >
          <h1 style={{ color: "#ffb600" }}>Teste da Martina e da Aline</h1>

          <button
            style={{
              background: "#5837a4",
              border: "none",
              borderRadius: "8px",
              padding: "16px",
              width: "375px",
            }}
          >
            <a
              href="#monetizzeCompra"
              data-upsell="181e4de65c0fee2dac2a195c87aa4279"
              style={{ color: "#FFF", textDecoration: "none" }}
            >
              Comprar
            </a>
          </button>
        </div>
        <script
          type="text/javascript"
          src="https://app.monetizze.com.br/1buyclick.php?u=181e4de65c0fee2dac2a195c87aa4279"
        ></script>
      </body>
    </html>
  );
}

export default App;
