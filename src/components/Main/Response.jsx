import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./response.module.css";
import ReactMarkdown from "react-markdown";

const Response = ({ query }) => {
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Function to handle API submission
    const handleSubmit = async () => {
        setLoading(true);
        setResponse(""); // Clear previous response
        setError(""); // Clear previous error

        try {
            const res = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBXxSbY_sP1pXYx16GXH1Br75XRtte5lDI`,
                method: "post",
                data: {
                    contents: [{ parts: [{ text: query }] }],
                },
            });

            const answer = res.data.candidates[0].content.parts[0].text;
            console.log(answer);
            setResponse(answer);
        } catch (error) {
            console.error(error);
            setError("Sorry - Something went wrong. Please try again!");
        } finally {
            setLoading(false); // Stop loading regardless of success or failure
        }
    };

    // Call handleSubmit only when query changes and is not empty
    useEffect(() => {
        if (query) {
            handleSubmit();
        }
    }, [query]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.mainContainer}>
                    {loading && (
                        <p className={styles.loading}>
                            Hang tight! <br /> We are negotiating with the
                            server gods.
                        </p>
                    )}
                    {error && <p>{error}</p>}
                    {response && (
                        <ReactMarkdown className={styles.response}>
                            {response}
                        </ReactMarkdown>
                    )}
                </div>
            </div>
        </>
    );
};

export default Response;
