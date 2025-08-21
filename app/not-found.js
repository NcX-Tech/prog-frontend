import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Página não encontrada</h1>
        <p style={{ color: "white", marginBottom: "2rem" }}>
          A página que você está procurando não existe.
        </p>
        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "1.1rem",
          }}
        >
          Voltar para a página inicial
        </Link>
      </main>
    </div>
  );
}
