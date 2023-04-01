import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    const iRunOnlyOnce = () => {
        console.log("bla");
    };
    useEffect(() => {
        console.log(keyword);
    }, [keyword, counter]);
    useEffect(iRunOnlyOnce, []);
    return (
        <div>
            <input
                onChange={onChange}
                type="text"
                value={keyword}
                placeholder="serch here"
            ></input>
            <h1 className={styles.title}>{counter}</h1>
            <button onClick={onClick}>click</button>
            <Button text="hello"></Button>
        </div>
    );
}

export default App;
