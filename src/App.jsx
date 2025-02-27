import "./app.css";
import Layout from "./layout/Layout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

//paypal
const initialOptions = {
  "client-id": "ATSO-VjpC-750td4pmkUmy4FGhEPZFA22NcahubsmWM7rECj2Wh5W2e9hlOuEBFzDkSTCGgOIY83jdA6",
  currency: "USD",
  intent: "capture",
};

function App() {
  return (
    <>
    <PayPalScriptProvider options={initialOptions}>
    <Layout/>
    </PayPalScriptProvider>
     
    </>
  );
}

export default App;
