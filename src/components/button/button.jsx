import "./index.css";
export function Button({ children, func }) {
    return <button onClick={func} className="button">{children}</button>
    
}
