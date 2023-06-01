import PropTypes from "prop-types";

export default function Card(props) {
  Card.propTypes = {
    icon: PropTypes.string,
    heading: PropTypes.string,
    body: PropTypes.string,
  };

  const { icon, heading, body } = props;

  return (
    <div className="card">
      <div className="icon-wrapper">
        <img src={icon} />
      </div>
      <h3>{heading}</h3>
      <p>{body}</p>
    </div>
  );
}
