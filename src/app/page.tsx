import styles from "./page.module.css";
import TestComponent from "./components/TestComponent";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Testing h1 from consumer</h1>
          <TestComponent />
        </main>
      </div>
    </>
  );
}
