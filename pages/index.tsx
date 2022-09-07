import type { NextPage } from "next";
import * as React from "react";
import NavBarApp from "./components/navbar";
import FormsApp from "./components/forms";
import Layout from "./components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <FormsApp />
      </Layout>
    </>
  );
};

export default Home;
