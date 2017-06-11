import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers';
import Helmet from 'react-helmet';
import {config} from 'config';
import {rhythm} from '../utils/typography';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import '../css/bootstrap.min.css';

export default class Template extends React.Component {
	static propTypes = {
		children: PropTypes.any
	};

	render () {
		return (
			<div>
				<Helmet
					title={config.siteTitle}
					meta={[
						{name: "description", content: "Sample"},
						{name: "keywords", content: "sample, something"},
					]}
				/>
				<Navbar inverse collapseOnSelect fixedTop className="headerStyle">
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#main">PMP</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<Navbar.Brand>
								<a href="#aboutMe" className="menuElem">About me</a>
							</Navbar.Brand>
							<Navbar.Brand>
								<a href="#skills" className="menuElem">My skills</a>
							</Navbar.Brand>
							<Navbar.Brand>
								<a href="#portfolio" className="menuElem">Portfolio</a>
							</Navbar.Brand>
							<Navbar.Brand>
								<a href="#form" className="menuElem">Contact</a>
							</Navbar.Brand>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				{this.props.children}
			</div>
		)
	}
}
