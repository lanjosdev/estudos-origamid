import { useContext } from "react";
import { GlobalContext } from "../../context/global/GlobalContext";

export const ButtonClear = () => {
    const { clearData } = useContext(GlobalContext);

    return (
        <button onClick={clearData}>
            Limpar
        </button>
    )
}