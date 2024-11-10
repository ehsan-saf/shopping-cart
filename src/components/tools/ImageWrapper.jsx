import PropTypes from "prop-types";

ImageWrapper.propTypes = {
  width: PropTypes.number,
  height: PropTypes.height,
  customeStyle: PropTypes.object,
  children: PropTypes.element,
};

function ImageWrapper({ width, height, customeStyle, children }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...customeStyle,
      }}
    >
      {children}
    </div>
  );
}

export default ImageWrapper;
