import React from 'react'
import EditableLabel from './EditableLabel'

const Personal = () => {
	return (
		<div className="personal">
			<div className="personal-info">
				<EditableLabel value='First Name' tag='h1' />
				<EditableLabel value='Last Name' tag='h1' />
				<EditableLabel value='Occupation' tag='h5' />

			</div>

			<div className="contact">

			</div>
		</div>
	)
}

export default Personal