import React, {Component} from 'react'

class Skills extends Component{
	constructor(){
		super()
		this.state = {
			skill: '',
			skills: [],
			activeForm: false,
			activeButton: true
		}
	}

	handleAdd = () => {
		this.toggleForm()
	}

	handleCancel = (e) => {
		e.preventDefault()
		this.toggleForm()
		this.resetForm()
	}

	handleChange = (e) => {
		const {name, value} = e.target

		this.setState({
			[name]: value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.setState({
			skills: [...this.state.skills, this.state.skill]
		})

		this.toggleForm()
		this.resetForm()
	}

	toggleForm = () => {
		this.setState({
			activeForm: !this.state.activeForm,
			activeButton: !this.state.activeButton
		})
	}

	resetForm = () => {
		this.setState({
			skill: ''
		})
	}

	render(){
		let hiddenForm = this.state.activeForm ? "skill-form" : "skill-form hidden"
		let hiddenButton = this.state.activeButton ? "add-item" : "add-item hidden"

		return(
			<div className="skills">
				<h3>Skills</h3>

				<form className={hiddenForm} onSubmit={this.handleSubmit}>
					<div className="form-control">
					<label for="skill">Show off your skills:</label>
					<input
						type="text"
						name="skill"
						placeholder="Enter a skill"
						value={this.state.skill}
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

export default Skills