/**
 * Created by mponomarets on 6/11/17.
 */
//https://uploads.strikinglycdn.com/static/backgrounds/nature/184.jpg
import React, {Component} from 'react';
import {prefixLink} from 'gatsby-helpers';
import {config} from 'config';
import '../../css/bootstrap.min.css';
import '../../css/skillsStyles.css';

class SkillsCard extends Component {
	constructor (props){
		super(props);
		this.state={
			title:this.props.title,
			listSkills:this.props.skillsList
		}
	}
	renderListItems(){

		return this.state.listSkills.map((elem,index)=>{
			return(
				<li key={index}>{elem}</li>
			)
		})
	}
	render () {
		return (
			<div>
				<h4>{this.state.title}</h4>
				<ul className="list">
					{this.renderListItems()}
				</ul>
			</div>

		)
	}
}

SkillsCard.defaultProps = {
	title: 'This is place for titles',
	description: 'This is place for description'
};

export {SkillsCard};