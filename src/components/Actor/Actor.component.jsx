import React from "react";
import { ActorCard, ActorImg, ActorName, ActorCharacter } from "./Actor.styles";

const Actor = ({ info }) => {
  return (
    <ActorCard>
      <ActorImg name={info["name"]} url={info["profile_path"]} />
      <ActorName className="mx-auto font-semibold text-black text-lg mb-2">
        {info["name"]}
      </ActorName>
      <ActorCharacter className="mx-auto">{info["character"]}</ActorCharacter>
    </ActorCard>
  );
};

export default Actor;
