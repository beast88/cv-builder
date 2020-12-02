import React, {Component} from 'react'

class EditableLabel extends Component{
	constructor(props) {
		super(props)
		this.state = {
			text: props.value,
			isEditing: false,
			tag: props.tag
		}
	}

	handleClick = () => {
		this.setState({
			text: this.state.text,
			isEditing: true
		})
	}

	handleBlur = () => {
		this.setState({
			text: this.state.text,
			isEditing: false
		})
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	enter = (e) => {
		if(e.keyCode === 13) {
			this.setState({
				text: this.state.text,
				isEditing: false
			})
		}
	}

	render() {
		return(
			this.state.isEditing ?
			<input 
				type="text" 
				value={this.state.text}
				autoFocus={true}
				onBlur={this.handleBlur}
				onChange={this.handleChange}
				onKeyDown={this.enter}
			/> 
			:
			<this.state.tag onClick={this.handleClick}>{this.state.text}</this.state.tag>
		)
	}

}

export default EditableLabel