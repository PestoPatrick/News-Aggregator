import React from 'react'
import './article-list.scss'
import {Article} from "../articles/article";

export class ArticleList extends React.Component {
    render() {
        return (
            <Article/>
        )
    }
}

/* how to dynamically render components:
            IMAGES is just an array and could be anything
            key is how react identifies each component internally
           {IMAGES.map(image => (
          <Image source={image} key={image} />
        ))} */


