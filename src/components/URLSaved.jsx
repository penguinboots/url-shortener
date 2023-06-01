import PropTypes from "prop-types";

export default function URLSaved(props) {
  URLSaved.propTypes = {
    urlData: PropTypes.Object,
    copyURL: PropTypes.func,
  };

  const { urlData, copyURL } = props;

  return (
    <div className="url-saved">
      <div className="url-left">
        <span>{urlData.urlOriginal}</span>
      </div>
      <hr />
      <div className="url-right">
        <div className="short-url">https://{urlData.urlShort}</div>
        <button
          className={`btn-main ${urlData.copied ? "btn-copied" : ""}`}
          onClick={() => copyURL(urlData)}
        >
          {urlData.copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
