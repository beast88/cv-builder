import React from 'react'
import Personal from './Personal'
import Education from './Education'
import Experience from './Experience'

const Resume = () => {
	return (
		<main>
			<Personal />
			<hr />
			<Education />
			<hr />
			<Experience />
			<hr />
		</main>
	)
}

export default Resume