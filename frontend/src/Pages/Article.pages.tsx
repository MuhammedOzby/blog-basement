import SyntaxHighlighter from 'react-syntax-highlighter';
import { Component } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export interface ArticleData {
	articleID: number;
	headline: string;
	alternativeHeadline: string;
	genre: string;
	keywords: string;
	description: string;
	articleBody: string;
	content: string;
	datePublished: string;
	dateCreated: string;
	dateModified: string;
	author: Author;
}

export interface Author {
	userID: number;
	username: string;
	surname: string;
	email: string;
	jobTitle: string;
	name: string;
	telephone: string;
	url: string;
}

function withParams(Elem: typeof Component) {
	return (props: any) => <Elem params={useParams()} />;
}

class ArticlePage extends Component<{ params: { articleID: string } }, { article?: ArticleData }> {
	constructor(props: { params: { articleID: string } }) {
		super(props);
		this.state = {};
	}
	componentDidMount(): void {
		fetch(`/api/articles/${this.props.params.articleID}`)
			.then((data) => data.json())
			.then((result) => {
				this.setState({
					...this.state,
					article: result,
				});
			})
			.catch((err) => {});
	}
	render() {
		return (
			<div className="makale">
				<ReactMarkdown
					remarkPlugins={[remarkMath, remarkGfm]}
					rehypePlugins={[rehypeKatex]}
					children={this.state.article?.articleBody || ''}
					components={{
						blockquote: ({ node, ...props }) => <blockquote className="block" {...props} />,
						h1: ({ node, ...props }) => <h1 className="is-size-2" {...props} />,
						h2: ({ node, ...props }) => <h1 className="is-size-3" {...props} />,
						h3: ({ node, ...props }) => <h1 className="is-size-4" {...props} />,
						h4: ({ node, ...props }) => <h1 className="is-size-5" {...props} />,
						h5: ({ node, ...props }) => <h1 className="is-size-6" {...props} />,
						h6: ({ node, ...props }) => <h1 className="is-size-7" {...props} />,
						code({ node, inline, className, children }) {
							const match = /language-(\w+)/.exec(className || '');
							return !inline && match ? (
								<SyntaxHighlighter
									children={String(children).replace(/\n$/, '')}
									language={match[1]}
									PreTag="div"
									className="higlighter"
									style={docco}
								/>
							) : (
								<code className={'has-text-warning-dark'}>{children}</code>
							);
						},
					}}
				/>
			</div>
		);
	}
}

export default withParams(ArticlePage);
