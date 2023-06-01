import { useEffect } from "react";
import { useState } from "react";
import URLSaved from "./URLSaved";

export default function URLForm() {
  const SHRTCODE = "https://api.shrtco.de/v2/shorten?url=";
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [urlData, setUrlData] = useState([]);

  function generateShortUrl(data) {
    setUrlData((prev) => [
      ...prev,
      { urlOriginal: input, urlShort: data, copied: false },
    ]);
    setErrorMessage(null);
    setInput("");
  }

  function copyURL() {}

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${SHRTCODE}${input}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          generateShortUrl(data.result.short_link);
        } else {
          setErrorMessage(data);
        }
      })
      .catch((error) => {
        setErrorMessage(error);
        console.log(errorMessage);
      });
  }

  useEffect(() => {
    localStorage.setItem("urlDataLocal", JSON.stringify(urlData));
  }, [urlData]);

  const savedURLs = urlData.map((url) => {
    return <URLSaved key={url} urlData={url} copyURL={copyURL} />;
  });

  return (
    <>
      <div className="url-form-wrapper">
        <form onSubmit={handleSubmit} className="url-form">
          <input
            type="text"
            placeholder="Shorten a link here..."
            onChange={(event) => setInput(event.target.value)}
            name="urlForm"
            value={input}
          />
          <button className="btn-main">
            Shorten It!
          </button>
        </form>
      </div>
      <div className="url-saved-wrapper">{savedURLs}</div>
    </>
  );
}
