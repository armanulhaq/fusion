import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Input from "./components/Input/Input";
import Response from "./components/Main/Response";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

function App() {
    function handleSubmit() {
        setSubmittedQuery(query);
        setQuery("");
    }

    const [query, setQuery] = useState("");
    const [submittedQuery, setSubmittedQuery] = useState("");
    return (
        <>
            <Sidebar />

            <div className="main-app-container">
                <Nav />
                {submittedQuery === "" ? (
                    <Main />
                ) : (
                    <Response query={submittedQuery} />
                )}

                <Input
                    setQuery={setQuery}
                    query={query}
                    onSubmit={handleSubmit}
                />
            </div>
        </>
    );
}

export default App;
