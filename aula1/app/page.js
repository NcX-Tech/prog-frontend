import styles from "./page.module.css";
import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Programação Front-End</h1>
        <Profile />
      </main>
    </div>
  );
}
