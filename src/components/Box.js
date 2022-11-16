import React from "react";

import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three/src/loaders/TextureLoader";
import texture from "../images/map.jpg"

export default function Box(){
    const colorMap = useLoader(TextureLoader, texture);

    return (<mesh rotation = {[90, 0, 20]}>
        <boxGeometry attach = "geometry" args = {[3,3,3]}/>
        <meshStandardMaterial map= {colorMap} />
    </mesh>);
}