import { useEffect } from "react";
import { useState } from "react";
import URLSaved from "./URLSaved";

export default function URLForm() {
  // URL shortening API
  const SHRTCODE = "https://api.shrtco.de/v2/shorten?url=";
  // Initial states
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  // Check for URL data in local storage, initialize with empty array if none
  const [urlData, setUrlData] = useState(
    JSON.parse(localStorage.getItem("urlDataLocal")) || []
  );

  // Add entry to urlData state
  function generateShortUrl(data) {
    setUrlData((prev) => [
      { id: data, urlOriginal: input, urlShort: data, copied: false },
      ...prev,
    ]);
    setErrorMessage(null);
    setInput("");
  }

  // Generates error message based on API response (https://shrtco.de/docs)
  function showError(errorCode) {
    switch (errorCode) {
      case 1:
        setErrorMessage("Please enter a URL.");
        break;
      case 2:
        setErrorMessage("Please enter a valid URL.");
        break;
      case 3:
        setErrorMessage("Please wait a moment and try again.");
        break;
      default:
        setErrorMessage("Error. Please try again.");
    }
  }

  // Copy selected short URL to clipboard, change copied bool to true for 3 seconds
  function copyURL(urlObj) {
    navigator.clipboard.writeText(urlObj.urlShort);

    setUrlData((prev) =>
      prev.map((urlData) =>
        urlData.id === urlObj.id ? { ...urlData, copied: true } : urlData
      )
    );

    setTimeout(() => {
      setUrlData((prev) => {
        return prev.map((urlData) =>
          urlData.id === urlObj.id ? { ...urlData, copied: false } : urlData
        )
      });
    }, 3000);
  }

  // Sends request to API, adds response to local data
  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${SHRTCODE}${input}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          console.log("ok");
          generateShortUrl(data.result.short_link);
        } else {
          showError(data.error_code);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Update local data when urlData state is altered
  useEffect(() => {
    localStorage.setItem("urlDataLocal", JSON.stringify(urlData));
  }, [urlData]);

  // Generate saved URLs list
  const savedURLs = urlData.map((url) => {
    return <URLSaved key={url.urlShort} urlData={url} copyURL={copyURL} />;
  });

  return (
    <main className="url-app-container">
      <div className="url-form-container">
        <form onSubmit={handleSubmit} className="url-form">
          <div className="form-left">
            <input
              type="text"
              placeholder="Shorten a link here..."
              onChange={(event) => setInput(event.target.value)}
              name="urlForm"
              value={input}
              className={`${errorMessage ? "input-error" : ""}`}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <button className="btn-main">Shorten It!</button>
        </form>
      </div>
      <div className="url-saved-container">{savedURLs}</div>
    </main>
  );
}
