import React, { ReactElement } from 'react'

interface Props {
    text: string
}

export default function List({
    text
}: Props): ReactElement {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}
