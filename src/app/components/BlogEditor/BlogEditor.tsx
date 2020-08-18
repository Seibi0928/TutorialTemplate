import * as React from 'react';
import { useParams } from "react-router-dom";

export default function EditBlog() {

    const { id } = useParams();

    return (<div>ID: {id}</div>);
}
