'use client'
import React from 'react'
import Card from './Card'
import { state } from '@/store/store'
import { useSnapshot } from 'valtio'
function ColorPicker() {
    useSnapshot(state);
    return (
        <div className="flex flex-col gap-6 mx-2 my-4" >
            {state.colors.map((color) =>
                <button key={color} className={`w-[25px] bg-white h-[25px] rounded-full hover:scale-110`}
                    style={{ backgroundColor: color, border: color === state.color ? '2px solid black' : '2px solid ' + color }}
                    onClick={() => {
                        state.color = color;
                    }}
                ></button>
            )}
        </div>
    )
}

function ImagePickers() {
    useSnapshot(state);
    return (
        <div className="flex gap-6 mx-2 my-4" >
            {state.decals.map((decal) =>
                <img key={decal} src={`/${decal}.png`} alt={decal} className="h-[50px]"
                    onClick={() => { state.decal = decal; state.image = '' }}
                />
            )}
            <button className="h-[50px] border flex justify-center items-center rounded-full border-white"
                onClick={() => {
                    document.getElementById('imageUpload')?.click();
                }}
            >
                <span className="material-symbols-outlined">
                    add
                </span>
            </button>
            <input type="file" id="imageUpload" style={{ display: 'none' }} onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                    const url = URL.createObjectURL(file);
                    state.image = url;
                }
            }} />
        </div>
    )
}

function ImagePosition() {
    useSnapshot(state);
    return (
        <div className="flex gap-2 mx-2 my-4" >
            {state.positions.map((position) =>
                <button key={position.name} className="border uppercase px-2 py-1 border-white rounded-xl"
                    style={{ backgroundColor: position.position === state.position ? 'black' : 'white', color: position.position === state.position ? 'white' : 'black' }}
                    onClick={() => {
                        state.position = position.position
                    }}
                >
                    {position.name}
                </button>
            )}

        </div>
    )
}

function SizeSlider() {
    useSnapshot(state);
    console.log(state.scale);

    return (
        <div className="flex gap-6 w-48  mx-2 my-4" >
            <input type="range" className='w-full' min="1000" max="7000" value={7000 - state.scale + 1000} onChange={(e) => state.scale = 7000 - Number(e.target.value) + 1000} />
        </div>
    )
}


export { ColorPicker, ImagePickers, ImagePosition, SizeSlider }