import React from 'react';
import HealthGuide from './../components/HealthGuide/healthGuide';
import pageStyles from './Guide.css?inline';
function Guide(){
	return(
		<div className="guide-page">
			<HealthGuide props={pageStyles}/>
		</div>
	);
}

export default Guide;