import * as React from 'react';
import { useParams } from "react-router-dom";

export default function EditWriter() {
    const { writerName } = useParams();

    return (<div>WriterName: {writerName}</div>);
}
