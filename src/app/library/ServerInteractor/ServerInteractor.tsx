import { ArticleLike } from 'Models/Article/Article';
// DI用インタフェース ここにAPI通信処理を置くとテストコード作成が楽です
export interface ServerInteractor {
    fetchArticles(): Promise<ArticleLike[]>;
}
export class ServerInteractorModule implements ServerInteractor {
    public async fetchArticles(): Promise<ArticleLike[]> {
        const response = await fetch('/api/articles');
        return await response.json() as ArticleLike[];
    }
}
