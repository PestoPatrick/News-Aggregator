import React from 'react'
import './article-list.scss'
import {Article} from "../articles/article";
import {useState, useEffect} from 'react';


//Transforming these classes into functions and using react hooks

export function ArticleList() {
    const [data,setData] = useState([])

    //I think i will try using Axios instead as well
    async function getData() {
        const apikey = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15';
        const response = await fetch(apikey)
        const data = await response.json();
        setData(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return data

        return (
            <div>
                {data.map((el) => (
                    <li key={el.id}>{el.title}</li>
                ))}
            <h1>Check the console</h1>
            </div>
        )
}

/* how to dynamically render components:
            IMAGES is just an array and could be anything
            key is how react identifies each component internally
           {IMAGES.map(image => (
          <Image source={image} key={image} />
        ))} */


