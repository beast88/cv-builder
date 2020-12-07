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
				id: uniqid(),
				company: '',
				city: '',
				from: '',
				to: '',
				role: '',
				desc: ''
			}
		}
	}

	toggleForm = () => {
		this.setState({
			activeForm: !this.state.activeForm,
			activeButton: !this.state.activeButton
		})
	}

	handleAdd = () => {
		this.toggleForm()
	}

	handleChange = (e) => {
		const {name, value} = e.target

		this.setState({
			default: {...this.state.default, [name]: value}
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.setState({
			jobs: [...this.state.jobs, this.state.default]
		})

		this.toggleForm()
		this.resetForm()
	}

	handleCancel = (e) => {
		e.preventDefault()
		this.toggleForm()
		this.resetForm()
	}

	resetForm = () => {
		this.setState({
			default: {...this.state.default,
				id: uniqid(),
				company: '',
				city: '',
				from: '',
				to: '',
				role: '',
				desc: ''
			}
		})

	}

	render() {

		let hiddenForm = this.state.activeForm ? "experience-form" : "experience-form hidden"
		let hiddenButton = this.state.activeButton ? "add-item" : "add-item hidden"

		return(
			<div className="experience">
				<h3>Work Experience</h3>

				<form className={hiddenForm} onSubmit={this.handleSubmit}>
					<div className="form-control">
						<label for="company">Company:</label>
						<input
							type="text"
							name="company"
							placeholder="Enter Here"
							value={this.state.default.company}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-control">
						<label for="city">City:</label>
						<input
							type="text"
							name="city"
							placeholder="Enter Here"
							value={this.state.default.city}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-control w-50">
						<label for="from">From:</label>
						<input
							type="text"
							name="from"
							placeholder="YYYY"
							value={this.state.default.from}
							onChange={this.handleChange} 
						/>
					</div>

					<div className="form-control w-50">
						<label for="to">To:</label>
						<input
							type="text"
							name="to"
							placeholder="YYYY"
							value={this.state.default.to}
							onChange={this.handleChange} 
						/>
					</div>

					<div className="form-control">
						<label for="role">Role:</label>
						<input
							type="text"
							name="role"
							placeholder="Enter Here"
							value={this.state.default.role}
							onChange={this.handleChange} 
						/>
					</div>

					<div className="form-control">
						<label for="desc">Description of chief responsibilities:</label>
						<textarea
							name="desc"
							placeholder="Give a quick explanation of your role. Keep it to 2 or 3 sentences."
							value={this.state.default.desc}
							onChange={this.handleChange} 
						/>
					</div>

					<div className="form-control buttons">
						<button className="submit"><i className="fa fa-plus-circle"></i> Save</button>
						<button className="cancel" onClick={this.handleCancel}><i className="fa fa-ban"></i> Cancel</button>
					</div>

				</form>

				<button className={hiddenButton} onClick={this.handleAdd}><i className="fa fa-plus-circle"></i> Add</button>
			</div>
		)
	}
}

export default Experience