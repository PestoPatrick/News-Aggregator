import React from 'react'
import './article-list.scss'
import {Article} from "../articles/article";


export class ArticleList extends React.Component {

    //I think i will try using Axios instead as well

    componentDidMount() {
        const apikey = 'https://newsapi.org/v2/everything&apiKey=1bb5eaf19afb4fdbaf06ca6028ab6355';
        fetch(apikey)
            .then((response) => response.json())
            .then((data) => console.log('This is your data', data));
    }

    render() {
        return (
            <div>
            <Article/>
            <h1>Check the console</h1>
            </div>
        )
    }
}

/* how to dynamically render components:
            IMAGES is just an array and could be anything
            key is how react identifies each component internally
           {IMAGES.map(image => (
          <Image source={image} key={image} />
        ))} */


