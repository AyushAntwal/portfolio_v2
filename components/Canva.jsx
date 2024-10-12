import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Center, Environment } from '@react-three/drei'
import { CameraRig, Backdrop, Shirt } from './CameraRig';
function Canva({ position = [0, 0, 0], fov = 20, element = 'root' }) {
  const rootElement = document.getElementById(element)
  return (
    <Suspense fallback={'Loading'}>
      <Canvas shadows camera={{ position, fov }} gl={{ preserveDrawingBuffer: true }} eventSource={rootElement ?? undefined} eventPrefix="client">
        <ambientLight intensity={0.5} />
        <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr' />
        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </Suspense>
  )
}

export default Canva
