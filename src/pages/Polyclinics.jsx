import React from 'react';
import Polyclinic from './../components/PolyclinicsDiv/Polyclinic';

function Polyclinics(){
	return(
		<div>
			<Polyclinic name="Clinic1" location="Location1"/>
			<Polyclinic name='Clinic2' location='Location2'/>
			<Polyclinic/>
			<Polyclinic/>
		</div>
	);
}

export default Polyclinics;