import React, { useState } from 'react';

export function Other() { 
    const [num, setNum] = useState<number>(0);
    return <div>
        <input type="number" value={num} />
        <input
            type="button"
            role="button"
            value="Click me!!"
            onClick={() => setNum(num + 1)}
            readOnly />
            <span>aaa445a4fffffffffz5</span>
        </div>;
}