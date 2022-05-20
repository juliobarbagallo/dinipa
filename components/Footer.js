import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://dinipamedical.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/logo.png" alt="Dinipa Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}
