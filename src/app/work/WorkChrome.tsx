import Image from "next/image";
import Link from "next/link";
import styles from "./work.module.css";
import logo from "../../../public/figma/logo-mono-reverse.png";

/** Top bar shared by the /work pages: back to the landing page or the index. */
export function WorkBar() {
  return (
    <header className={styles.bar}>
      <Link href="/" className={styles.logo} aria-label="Entersight — trang chủ">
        <Image src={logo} alt="Entersight" priority />
      </Link>
      <nav className={styles.barLinks} aria-label="Điều hướng">
        <Link href="/work" className="btn">
          Tất cả dự án
        </Link>
        <Link href="/#contact" className="btn btn--solid">
          Liên hệ
        </Link>
      </nav>
    </header>
  );
}

export function WorkFoot() {
  return (
    <footer className={`container ${styles.foot}`}>
      <span>© {new Date().getFullYear()} Entersight · LauLau Creative</span>
      <Link href="/">entersight-tech.com</Link>
    </footer>
  );
}
