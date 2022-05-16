/** @format */

function ContainerImage(props) {
	return <img style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", zIndex: "-1"}} src={props.path} alt="" />;
}

export default ContainerImage;
