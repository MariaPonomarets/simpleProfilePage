/**
 * Created by mponomarets on 6/11/17.
 */
/**
 * Created by mponomarets on 6/11/17.
 */
import React, {Component} from 'react';
import {prefixLink} from 'gatsby-helpers';
import {config} from 'config';
import '../../css/bootstrap.min.css';
import '../../css/skillsStyles.css';
import '../../css/formStyles.css';

class Form extends Component {
	constructor (props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		}
	}

	onChange (text, field) {
		console.log(text, field);
		switch (field) {
			case 'name':
				return this.setState({name: text});
			case 'email':
				return this.setState({email: text});
			case 'message':
				return this.setState({message: text});
			default:
				console.log('Huiston, we have a problem');
		}
	}

	handleSubmit (event) {
		alert('A name was submitted: ' + this.state.name + ' A email was submitted: ' + this.state.email + ' A message was submitted: ' + this.state.message);
		event.preventDefault();
	}

	render () {
		return (
			<div id="form">
				<div className="rowPadding skillsBackground">
					<form className="formStyle" onSubmit={(e) => this.handleSubmit(e)}>
						<h3>Connect with me:</h3>
						<div className="inputContainer">
							<span className="inputName">Name</span>
							<input className="inputStyle" type="text" name="firstname"
								   placeholder="Input name ..."
								   onChange={(event) => this.onChange(event.target.value, 'name')}
								   required={true}
							/>
						</div>
						<div className="inputContainer">
							<span className="inputName">Email</span>
							<input className="inputStyle" type="email" name="email"
								   placeholder="Input name ..."
								   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required={true}
								   onChange={(event) => this.onChange(event.target.value, 'email')}/>
						</div>
						<div className="inputContainer">
							<span className="inputName">Message</span>
							<textarea className="textareaStyle" placeholder="Input your message" required={true}
									  title="Input text"
									  onChange={(event) => this.onChange(event.target.value, 'message')}/>
						</div>
						<div className="inputContainer">
							<input type="submit" className="buttonSubmit" value="Submit"/>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
export {Form};

