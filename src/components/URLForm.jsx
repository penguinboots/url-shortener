import { useState } from "react";

export default function URLForm() {
  const SHRTCODE = "https://api.shrtco.de/v2/shorten?url=";
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [urlData, setUrlData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${SHRTCODE}${input}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          console.log(data.result.short_link);
        } else {
          setErrorMessage(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function generateShortUrl(data) {
    setUrlData((prev) => [
      ... prev, { urlOriginal: input, urlShort: data, copied: false },
    ]);
    setErrorMessage(null);
    setInput('');
  }

  return (
    <div className="url-form-wrapper">
      <form onSubmit={handleSubmit} className="url-form">
        <input
          type="text"
          placeholder="Shorten a link here..."
          onChange={(event) => setInput(event.target.value)}
          name="urlForm"
          value={input}
        />
      </form>
    </div>
  );
}
