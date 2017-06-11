/**
 * Created by mponomarets on 6/4/17.
 */
import React, {Component} from 'react';
import {prefixLink} from 'gatsby-helpers';
import {config} from 'config';
import '../../css/bootstrap.min.css';
import '../../css/skillsStyles.css';
import {SkillsCard} from '../common';
import Info from '../info.json';

class Skills extends Component {

	renderColumn () {
		const {skills} = Info.info;
		return skills.map((elem, index) => {
			return (
				<div className="col-sm-4 col-lg-4 col-md-4 skillsContainer" key={index}>
					<SkillsCard title={elem.title} skillsList={elem.listSkills}/>
				</div>
			)
		})
	}

	render () {
		return (
			<div id="skills">
				<div className="row rowPadding skillsBackground">{this.renderColumn()}</div>
			</div>
		)
	}
}
export {Skills};
