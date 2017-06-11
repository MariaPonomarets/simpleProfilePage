import React, {Component} from 'react';
import {prefixLink} from 'gatsby-helpers';
import {config} from 'config';
import {Row} from 'react-bootstrap';
import '../css/bootstrap.min.css';
import {AboutMe} from './aboutMe/aboutMe.js';
import {Skills} from './skills/skills';
import {Portfolio} from './portfolio/portfilio.js';
import {Form} from './form/form';
import '../css/headerStyles.css';
import Info from './info.json';


class Index extends Component {
	render () {
		const {name, profession} = Info.info;
		return (
			<div>
				<Row id="main">
					<div className="intro">
						<div className="info">
							<p className="title">professional bio</p>
							<h1>{name}</h1>
							<h1>{profession}</h1>
						</div>
					</div>
				</Row>
				<AboutMe/>
				<Skills/>
				<Portfolio/>
				<Form/>
			</div>
		)
	}
}

export default Index;