import React from 'react'
import { ActorCard, ActorImg, ActorName, ActorCharacter } from './Actor.styles'

const Actor = ({ info } )=> {
        return (
            <ActorCard>
                <ActorImg name={info['name']} url={info['profile_path']} />
                <ActorName>{info['name']}</ActorName>
                <ActorCharacter>{info['character']}</ActorCharacter>
            </ActorCard>
        )
    }

export default Actor;