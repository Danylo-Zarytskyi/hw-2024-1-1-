'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Text from './text/index';

export default function Home() {
  const [mount, setMount] = useState(true);
  const [inputText, setInputText] = useState('');
  const [submittedTexts, setSubmittedTexts] = useState([]);

  const handleToggle = () => {
    setMount(!mount);
  }

  const handleInputChange = (ev) => {
    setInputText(ev.target.value);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSubmittedTexts([...submittedTexts, inputText]);
  }

  return (
    <main className={styles.cont}>
      <button onClick={handleToggle}>
        {mount ? 'Hide' : 'Show'}
      </button>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Write something..."
        />
        <button type="submit">Submit</button>
      </form>
      {mount && <Text texts={submittedTexts}/>}
    </main>
  );
}
