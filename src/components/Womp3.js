/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF} from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/womp3.gltf')
  return (
    <group {...props} dispose={null} scale = {0.5}>
      <mesh geometry={nodes.Node.geometry} material={materials.material_0}>
      </mesh>
    </group>
  )
}

useGLTF.preload('/womp3.gltf')