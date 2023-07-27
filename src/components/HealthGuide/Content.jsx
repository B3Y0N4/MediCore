import React from "react";

function Content(props) {
	const {contentHeader, contentBody,styles} = props
	return (
		<div className={styles}>
			<div className="content-header"> {contentHeader} </div>
			<div className="content-body"> {contentBody} </div>
		</div>
	);
}

export default Content;
