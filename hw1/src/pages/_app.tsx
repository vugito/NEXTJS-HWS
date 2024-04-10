import "@/styles/globals.css";
import type {AppProps} from "next/app";
import BasicLayout from "@/components/BasicLayout/BasicLayout";

export default function App({Component, pageProps}: AppProps) {
    return (
        <BasicLayout>
            <Component {...pageProps} />
        </BasicLayout>
    );


}
