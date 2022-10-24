import "../styles/globals.css";
import AuthProvider from "../context/useAuth";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AuthProvider>
      <Toaster />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
