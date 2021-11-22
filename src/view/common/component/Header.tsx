import React from 'react';

interface Props {
    title: string;
}

const Header = ({title}: Props): JSX.Element => (
    <head>
        <title>{title}</title>
        <meta charSet="utf-8"/>
    </head>
)

export default Header