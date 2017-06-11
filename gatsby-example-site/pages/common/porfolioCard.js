/**
 * Created by mponomarets on 6/11/17.
 */
/**
 * Created by mponomarets on 6/11/17.
 */
import React from 'react';
import {prefixLink} from 'gatsby-helpers';
import {config} from 'config';
import '../../css/bootstrap.min.css';
import '../../css/portfolio.css';

const PortfolioCard = ({siteUrl, thumbnail}) =>(
	<a href={siteUrl} className="portfolio-link" data-toggle="modal">
		<div className="caption">
			<div className="caption-content">
				<i className="fa fa-search-plus fa-3x"> </i>
			</div>
		</div>
		<img src={thumbnail} className="img-responsive" alt="Cabin"/>
	</a>

);

PortfolioCard.defaultProps = {
	siteUrl: 'https://react-bootstrap.github.io/components.html#forms',
	thumbnail:'https://hsto.org/getpro/habr/post_images/e4b/067/b17/e4b067b17a3e414083f7420351db272b.jpg'
};

export {PortfolioCard};
