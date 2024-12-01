import axios from "axios";
import { useState, useEffect } from "react";
import "./response.css";
import ReactMarkdown from "react-markdown";
import { assets } from "../../assets/assets";

const Response = ({ query }) => {
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setLoading(true);
        setResponse("");
        setError("");

        try {
            const res = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
                    import.meta.env.VITE_FUSION_API_KEY
                }`,
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
            <div className="main">
                <div className="mainContainer">
                    <div className="querySection">
                        <img src={assets.user_icon} alt="" />
                        <p>{query}</p>
                    </div>
                    <div className="responseSection">
                        <img src="/favicon.png" alt="" />
                        <div className="content">
                            {loading && (
                                <p className="loading">
                                    <hr />
                                    <hr />
                                    <hr />
                                </p>
                            )}
                            {error && <p>{error}</p>}
                            {response && (
                                <ReactMarkdown className="responseContainer">
                                    {response}
                                </ReactMarkdown>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Response;
