import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ccc', '#EFBD4E', '#80C677', '#726DE8', '#EF674E', '#353934'],
  decals: ['react', 'three2', 'pmndrs','ItsOkToTalk'],
  color: '#ccc',
  decal: 'ItsOkToTalk'
})

export { state }