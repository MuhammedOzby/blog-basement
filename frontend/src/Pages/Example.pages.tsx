import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { calismalar } from '../../data';
export default class ExamplePage extends Component {
	render() {
		return (
			<>
				{calismalar.map((data, index) => (
					<Link to={`/article/${data.icerikYolu}`} style={{ color: 'var(--main-text-color)' }} key={index}>
						<article className="tile is-child" style={{ border: 'solid 2px', borderRadius: '15px', padding: '10px' }}>
							<p className="title">{data.baslik}</p>
							<p className="subtitle">{data.aciklama}</p>
						</article>
					</Link>
				))}
			</>
		);
	}
}
