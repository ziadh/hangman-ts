import styles from "./keyboard.module.css";

const KEYS = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
};
export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn}  ${isActive ? styles.active : ""}  ${
              isInActive ? styles.inactive : ""
            }`}
            disabled={isInActive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
