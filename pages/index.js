import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavbarTest from "../components/Layout/NavbarTest";

import Example from "../components/Layout/tailwindNavbar";

export default function Home() {
  return (
    <div className="mx-auto">
      <Example />
      <NavbarTest />
    </div>
  );
}
