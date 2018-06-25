import React from 'react';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string;
            };
        };
    };
}

export default class extends React.Component<IndexPageProps, {}> {
    constructor(props: IndexPageProps, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <div>
                Bacon ipsum dolor amet pastrami porchetta spare ribs boudin, meatball tail sirloin jowl andouille bacon.
                Jerky hamburger bacon, meatball buffalo landjaeger pork belly tenderloin beef ribs ham hock turducken
                ribeye. Corned beef strip steak andouille, pork belly short ribs meatball tenderloin pork chop shoulder
                shank capicola alcatra. Brisket ground round spare ribs frankfurter picanha bresaola cupim salami kevin
                ham hock pancetta swine andouille drumstick alcatra. Kevin picanha biltong, chuck prosciutto tri-tip
                pork loin ribeye leberkas filet mignon porchetta salami. Leberkas pork short loin ground round, spare
                ribs short ribs shank pancetta filet mignon turkey.
            </div>
        );
    }
}

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
