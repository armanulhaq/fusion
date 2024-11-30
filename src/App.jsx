import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Input from "./components/Input/Input";
import Response from "./components/Main/Response";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
// App.jsx
function App() {
    const [queries, setQueries] = useState([]); // Array to store all queries
    const [currentQuery, setCurrentQuery] = useState(""); // Current input query
    const [submittedQuery, setSubmittedQuery] = useState(""); // Last submitted query

    function handleSubmit() {
        if (currentQuery.trim()) {
            setSubmittedQuery(currentQuery);
            setQueries((prev) => [...prev, currentQuery]);
            setCurrentQuery(""); // Clear input after submission
        }
    }

    return (
        <>
            <Sidebar queries={queries} />
            <div className="main-app-container">
                <Nav />
                {submittedQuery === "" ? (
                    <Main />
                ) : (
                    <Response query={submittedQuery} />
                )}
                <Input
                    query={currentQuery}
                    setQuery={setCurrentQuery}
                    onSubmit={handleSubmit}
                />
            </div>
        </>
    );
}

export default App;
