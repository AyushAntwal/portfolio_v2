import { proxy } from 'valtio'

const state = proxy({
  intro: false,
  colors: ['#ccc', '#EFBD4E', '#80C677', '#726DE8', '#EF074E', '#353934', '#4B0082', '#6A5ACD', '#483D8B', '#7B68EE'],
  positions: [{ position: [-0.10, 0.09, 0.15], name: 'right chest' }, { position: [0.07, 0.09, 0.15], name: 'left chest' }, { position: [0, 0.04, 0.15], name: 'center' }],
  decals: ['react', 'three2', 'ItsOkToTalk'],
  scale: 2000,
  color: '#353934',
  decal: 'story-background',
  position: [0, 0.04, 0.15],
  image: '',
})

export { state }