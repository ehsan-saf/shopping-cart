import PropTypes from "prop-types";

ImageWrapper.propTypes = {
  width: PropTypes.number,
  height: PropTypes.height,
  children: PropTypes.element,
};

function ImageWrapper({ width, height, children }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        margin: "auto 0 auto auto",
        display: "grid",
        placeContent: "center",
      }}
    >
      {children}
    </div>
  );
}

export default ImageWrapper;
