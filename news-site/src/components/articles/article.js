import React from 'react'
import './article.scss'
import {Card, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core";


export class Article extends React.Component {
    render() {
        return (
            <div>

                <Card className="cardroot">
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5" className="Title">
                                Live From Space aaaaaaaaaaaaaaaaaaaaaa
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" className="Description">
                                Mac Miller
                            </Typography>
                        </CardContent>
                    </div>
                    <CardMedia
                        className="cover"
                        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            // <div className="base">
            //     <img alt="" />
            //     <div className="articleText" >
            //         <h1>hello</h1>
            //         <p>Bada Bing Bada Boom! Testing out the availability of room! </p>
            //     </div>
            // </div>
        )
    }
}


