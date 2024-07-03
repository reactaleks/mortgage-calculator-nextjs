import styles from "./page.module.css";
import MortgageCalculatorComponent from "../components/MortgageCalculatorComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <MortgageCalculatorComponent/>
    </main>
  );
}
