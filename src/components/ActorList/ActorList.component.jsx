import React, { Fragment } from 'react';
import Actor from '../Actor/Actor.component';

const ActorList = ({ object })=> {
        return(
            <Fragment>
                {object?object.map((actor, i)=>{
                    return(
                        <Actor key={i} info={actor} />
                    )
                }):''}
            </Fragment>
        )
    }

export default ActorList;