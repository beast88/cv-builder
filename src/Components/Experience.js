import React, {Component} from 'react'
import uniqid from 'uniqid'

class Experience extends Component{
	constructor(){
		super()
		this.state = {
			activeForm: false,
			activeButton: true,
			jobs: [],
			default: {
				company: '',
				city: '',
				from: '',
				to: '',
				role: '',
				desc: ''
			}
		}
	}

	render() {

		let hiddenButton = this.state.activeButton ? "add-item" : "add-item hidden"

		return(
			<div className="experience">
				<h3>Work Experience</h3>

				<form className="experience-form">
					<div className="form-control">
						<label for="company">Company:</label>
						<input
							type="text"
							name="company"
							placeholder="Enter Here"
							value={this.state.default.company} 
						/>
					</div>

					<div className="form-control">
						<label for="city">City:</label>
						<input
							type="text"
							name="city"
							placeholder="Enter Here"
							value={this.state.default.city} 
						/>
					</div>

					<div className="form-control w-50">
						<label for="from">From:</label>
						<input
							type="text"
							name="from"
							placeholder="YYYY"
							value={this.state.default.from} 
						/>
					</div>

					<div className="form-control w-50">
						<label for="to">To:</label>
						<input
							type="text"
							name="to"
							placeholder="YYYY"
							value={this.state.default.to} 
						/>
					</div>

					<div className="form-control">
						<label for="role">Role:</label>
						<input
							type="text"
							name="role"
							placeholder="Enter Here"
							value={this.state.default.role} 
						/>
					</div>

					<div className="form-control">
						<label for="desc">Description of chief responsibilities:</label>
						<textarea
							name="desc"
							placeholder="Give a quick explanation of your role. Keep it to 2 or 3 sentences."
							value={this.state.default.desc} 
						/>
					</div>

					<div className="form-control buttons">
						<button className="submit"><i className="fa fa-plus-circle"></i> Save</button>
						<button className="cancel"><i className="fa fa-ban"></i> Cancel</button>
					</div>

				</form>

				<button className={hiddenButton}><i className="fa fa-plus-circle"></i> Add</button>
			</div>
		)
	}
}

export default Experience