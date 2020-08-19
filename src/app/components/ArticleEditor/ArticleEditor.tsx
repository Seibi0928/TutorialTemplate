import * as React from 'react';
import { useParams } from "react-router-dom";

export default function ArticleEditor() {

    const { id } = useParams();

    return (<div>ID: {id}</div>);
}
