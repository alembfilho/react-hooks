import { Title } from "./Title";
import { ThemeButtom } from "./ThemeButtom";

export function Theme({ setDarkMode }) {
    return (<>
        <Title hook='useContext' />
        <ThemeButtom setDarkMode={setDarkMode} />
    </>)
}

