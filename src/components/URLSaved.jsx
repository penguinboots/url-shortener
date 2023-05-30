import PropTypes from "prop-types";

export default function URLSaved(props) {
  URLSaved.propTypes = {
    urlData: PropTypes.Object,
    copyURL: PropTypes.func
  };

  const { urlData, copyURL } = props;

  return (
    <div className="url-saved">
      <div className="url-left">{urlData.urlOriginal}</div>
      <div className="url-right">
        <div className="short-url">{urlData.urlShort}</div>
        <button className="copy-btn">Copy</button>
      </div>
    </div>
  );
}
