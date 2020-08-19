import * as React from 'react';

export interface ArticleLike {
    id: number;
    title: string;
    body: string;
    created_date: string;
    last_updated_date: string;
}
export default class Article implements ArticleLike {
    id: number = 0;
    title: string = '';
    body: string = '';
    created_date: string = '';
    last_updated_date: string = '';
    get createdDate() { return new Date(this.created_date); }
    set createdDate(date: Date) { this.created_date = date.toString(); }
    get lastUpdateDate() { return new Date(this.last_updated_date); }
    set lastUpdateDate(date: Date) { this.last_updated_date = date.toString(); }

    constructor(source: ArticleLike) {
        Object.assign(this, source);
    }

    public render(key: number): JSX.Element {
        const flexChild ={ borderRadius: '10px', backgroundColor: 'white', width: '15rem', margin: '0.5rem' }; 
        return (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', width: '16rem', margin: '1rem', backgroundColor: 'silver' }}>
                <div style={flexChild} >
                    id: {this.id}
                </div>
                <div style={flexChild}>
                    title: {this.title}
                </div>
                <div style={flexChild}>
                    body: {this.body}
                </div>
                <div style={flexChild}>
                    created at: {this.created_date}
                </div>
                <div style={flexChild}>
                    updated at: {this.last_updated_date}
                </div>
            </div>);
    }
}
