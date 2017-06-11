/**
 * Created by mponomarets on 6/4/17.
 */
import React, {Component} from 'react';
import {prefixLink} from 'gatsby-helpers';
import {config} from 'config';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import '../../css/bootstrap.min.css';
import '../../css/aboutMeStyles.css';
import Info from '../info.json';

class AboutMe extends Component {
	render () {
		const {name, icon, whatIdo, iDoNotDo, aboutMe}=Info.info;
		return (
			<Grid>
				<Row id="aboutMe">
					<Col md={8} xs={8} xsOffset={2} mdOffset={2} className="aboutMeContainer">
						<Image responsive
							   src={icon}/>
						<h1 className="name">{name}</h1>
						<h4>
							<p className="text-in-center">{whatIdo}</p>
							<p className="text-in-center">{iDoNotDo}</p>
						</h4>
						<section>
							<p className="text-in-center">{aboutMe}</p>
						</section>
					</Col>
				</Row>
			</Grid>
		)
	}
}
export {AboutMe};