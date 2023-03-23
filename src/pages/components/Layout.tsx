import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

import { ReactNode } from "react";

interface MyProps {
    children?: ReactNode;
}

export default function Layout({ children }: MyProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <title>LFE_PokeNext</title>
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}