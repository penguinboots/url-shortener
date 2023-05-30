import PropTypes from "prop-types";

export default function URLSaved(props) {
  URLSaved.propTypes = {
    urlData: PropTypes.Object,
    copyURL: PropTypes.func
  };
  
  const { urlData, copyURL } = props;

  return (
    <div>
      <span className="url-left">{urlData.urlOriginal}</span>
      <span className="url-right">
        <span className="short-url">{urlData.urlShort}</span>
        <button className="copy-btn">Copy</button>
      </span>
    </div>
  );
}
