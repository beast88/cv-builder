import React, {Component} from 'react'

class Education extends Component{
	constructor(){
		super()
		this.state = {
			education: [{
				id: 1,
				school: '',
				from: '',
				to: '',
				qualification: '',
				grade: ''
			}]
		}
	}

	render(){
		return(
			<div className="education">
				<h3>Education</h3>

				<form className="education-form hidden">
					<div className="form-control">
						<label for="school">Name of University or School:</label>
						<input
							type="text"
							name="school"
							placeholder="Enter Here" 
						/>
					</div>

					<div className="form-control">
						<label for="from">From:</label>
						<input
							type="text"
							name="from"
							placeholder="YYYY" 
						/>
					</div>

					<div className="form-control">
						<label for="to">To:</label>
						<input
							type="text"
							name="to"
							placeholder="YYYY" 
						/>
					</div>

					<div className="form-control">
						<label for="qualification">Qualification/Degree:</label>
						<input
							type="text"
							name="qualification"
							placeholder="Enter Here" 
						/>
					</div>

					<div className="form-control">
						<label for="grade">Grade:</label>
						<input
							type="text"
							name="grade"
							placeholder="Enter Here" 
						/>
					</div>

				</form>

				<p>Add a Qualification</p>
			</div>
		)
	}

}

export default Education