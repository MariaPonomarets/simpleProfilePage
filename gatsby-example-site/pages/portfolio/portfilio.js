/**
 * Created by mponomarets on 6/4/17.
 */
import React, {Component} from 'react';
import {prefixLink} from 'gatsby-helpers';
import {config} from 'config';
import '../../css/bootstrap.min.css';
import '../../css/portfolio.css';
import Info from '../info.json';
import {PortfolioCard} from '../common';

class Portfolio extends Component {
	renderRow (fromIndex, toIndex) {
		const {portfolioList} = Info.info;
		let data = portfolioList.slice(fromIndex, toIndex);
		return data.map((elem, index) => {
			return (
				<div className="col-sm-4 portfolio-item elementPortfolio" key={index}>
					<PortfolioCard siteUrl={elem.siteUrl} thumbnail={elem.thumbnail}/>
				</div>
			)
		})
	}

	render () {
		return (
			<div id="portfolio">
				<div className="row rowPadding">
					{this.renderRow(0, 3)}
				</div>
				<div className="row rowPadding">
					{this.renderRow(0, 3)}
				</div>
			</div>
		)
	}
}
export {Portfolio};