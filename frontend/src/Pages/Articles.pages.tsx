import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { calismalar } from '../../data';

export interface Articles {
	articleID: number;
	headline: string;
	alternativeHeadline: string;
	keywords: string;
	description: string;
	dateCreated: string;
	dateModified: string;
}

export default class ArticlesPage extends Component<{}, { articles: Array<Articles> | null }> {
	constructor(props: object) {
		super(props);
		this.state = {
			articles: null,
		};
	}
	componentDidMount(): void {
		fetch('/api/articles')
			.then((data) => data.json())
			.then((data) => this.setState({ ...this.state, articles: data }));
	}
	articleListRender() {
		if (this.state.articles && this.state.articles !== null) {
			return this.state.articles.map((data, index) => (
				<Link to={`/articles/${data.articleID}`} style={{ color: 'var(--main-text-color)' }} key={index}>
					<article className="tile is-child" style={{ border: 'solid 2px', borderRadius: '15px', padding: '10px' }}>
						<p className="title">{data.headline}</p>
						<p className="subtitle">{data.description}</p>
					</article>
				</Link>
			));
		} else {
			return <></>;
		}
	}
	render() {
		return <>{this.articleListRender()}</>;
	}
}
