import { Provider } from "react-redux";
import { SessionProvider } from 'next-auth/react'
import { store } from "../store/store";
import "../styles/globals.css";
import MainLayout from "../components/layouts/MainLayout";
import MainLayoutWithRedux from "../components/layouts/MainLayoutWithRedux";

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    // <SessionProvider session={session}>
      <Provider store={store}>
        <MainLayoutWithRedux>
          <Component {...pageProps} />
        </MainLayoutWithRedux>
        {/* <MainLayout>
          <Component {...pageProps} />
        </MainLayout> */}
      </Provider>
    // </SessionProvider>
  );
}

export default MyApp;
