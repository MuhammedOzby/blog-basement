import SyntaxHighlighter from 'react-syntax-highlighter';
import { Component } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import { ResumeSchema } from '../DTO/ResumeSchema.schema';

export interface User {
	userID: number;
	givenName: string;
	additionalName: string;
	familyName: string;
	email: string;
	image: null | string;
	jobTitle: string;
	telephone: string;
	url: string;
	resumeMarkDown: string;
	resume: null | ResumeSchema;
}

export default class ProfilePages extends Component<{}, { userInfo?: User }> {
	constructor(props: object) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		fetch('/api/profile')
			.then((data) => data.json())
			.then((data) => this.setState({ ...this.state, userInfo: data }));
	}
	profileArea(): JSX.Element {
		if (this.state.userInfo) {
			return (
				<>
					<div className="block">
						<h1 className="is-size-4">
							{this.state.userInfo.givenName} {this.state.userInfo.familyName.toUpperCase()}
						</h1>
					</div>
				</>
			);
		}
		return <></>;
	}
	render() {
		return (
			<div id="profile">
				{this.profileArea()}
				<ReactMarkdown
					remarkPlugins={[remarkMath, remarkGfm]}
					rehypePlugins={[rehypeKatex]}
					children={this.state.userInfo?.resumeMarkDown || ''}
					components={{
						blockquote: ({ node, ...props }) => <blockquote className="block" {...props} />,
						h1: ({ node, ...props }) => <h1 className="is-size-4" {...props} />,
						h2: ({ node, ...props }) => <h1 className="is-size-5" {...props} />,
						h3: ({ node, ...props }) => <h1 className="is-size-6" {...props} />,
						h4: ({ node, ...props }) => <h1 className="is-size-7" {...props} />,
					}}
				/>
			</div>
		);
	}
}
