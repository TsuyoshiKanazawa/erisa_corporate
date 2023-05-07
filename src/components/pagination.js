import React from "react"


const style = {
    margin: '0'
};

export const Pagenation = ({ pageContext }) => {
    const { numberOfPages, humanPageNumber } = pageContext;

    const pages = Array.from({ length: numberOfPages }, (v, i) => i + 1);

    return (
        <>
            {
                pages.map(page => (
                    humanPageNumber !== page
                        ? <a key={page} href={page === 1 ? "/information" : `/information/page/${page}`} style={style}>{page}</a>
                        : <span style={style}>{page}</span>
                ))
            }
        </>
    )
}
