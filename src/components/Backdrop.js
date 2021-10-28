function Backdrop(props) {
  // forwarding to the parent component - two ways of passing functions to components
  return <div className="backdrop" onClick={props.onCancel} />;
  // can be written as a self closing tag as there is no content within the tag, even though in regular HTML this is not a self-closing tag.
}

export default Backdrop;
