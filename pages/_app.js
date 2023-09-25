import "../styles/globals.css";
import "react-quill/dist/quill.snow.css";
import Layout from "../components/Layout/Layout";
import Context from "../context/Context";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Context>
      {router.pathname !== "/admin" ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
      <ToastContainer
        bodyClassName={() => "font-[estedad] text-sm"}
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Context>
  );
}

export default MyApp;
