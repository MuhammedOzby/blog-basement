import SyntaxHighlighter from "react-syntax-highlighter";
import { Component } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import { getContent } from "../lib/getDataFromGit";

function withParams(Elem: typeof Component) {
  return (props: any) => <Elem params={useParams()} />;
}

class MakalePage extends Component<
  { params: { dosyaYolu: string } },
  { makale: string }
> {
  constructor(props: { params: { dosyaYolu: string } }) {
    super(props);
    this.state = { makale: "" };
  }
  async componentDidMount(): Promise<void> {
    this.setState({
      ...this.state,
      makale: await getContent(this.props.params.dosyaYolu),
    });
  }
  render() {
    return (
      <div className="makale">
        <ReactMarkdown
          children={this.state.makale}
          components={{
            h1: ({ node, ...props }) => <h1 className="is-size-2" {...props} />,
            h2: ({ node, ...props }) => <h1 className="is-size-3" {...props} />,
            h3: ({ node, ...props }) => <h1 className="is-size-4" {...props} />,
            h4: ({ node, ...props }) => <h1 className="is-size-5" {...props} />,
            h5: ({ node, ...props }) => <h1 className="is-size-6" {...props} />,
            h6: ({ node, ...props }) => <h1 className="is-size-7" {...props} />,
            code({ node, inline, className, children }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code className={className}>{children}</code>
              );
            },
          }}
        />
        <SyntaxHighlighter
          children={"console.log()"}
          language={"javascript"}
          PreTag="div"
        />
      </div>
    );
  }
}

export default withParams(MakalePage);
