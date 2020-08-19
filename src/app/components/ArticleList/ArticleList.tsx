import * as React from 'react';
import Article from 'Models/Article/Article';
import { ServerInteractorModule, ServerInteractor } from 'Library/ServerInteractor/ServerInteractor';

export default function ArticleListPage() {
    // ただのサンプルコード
    return (
        <>
            <h1>ブログ記事たち</h1>
            {/* propからDIしてる */}
            <ArticleList interactor={new ServerInteractorModule()} />
        </>
    );
}

type ArticleListProp = { interactor: ServerInteractor }
type ArticleListState = { articles: Article[] | null };
class ArticleList extends React.Component<ArticleListProp, ArticleListState, unknown> {
    private readonly interactor: ServerInteractor;

    constructor(_: ArticleListProp) {
        super(_);
        this.state = { articles: null };
        const { interactor } = this.props;
        this.interactor = interactor
        this.fetchData(); // 非同期ロード
    }

    private async fetchData() {
        const articleLikes = await this.interactor.fetchArticles();
        this.setState({
            articles: articleLikes.map(x => new Article(x))
        });
    }

    public render() {
        const { articles } = this.state;
        
        if (articles === null) {
            return <h2>Loading posts...</h2>;
        }
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {articles.map((x, i) => x.render(i + 1))}
            </div>);
    }
}
