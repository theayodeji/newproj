import React from 'react'
import {ReactComponent as Tick} from "./Tick.svg"
import './Badge.scss'

function Badge({type, img}) {
  return (
    <>
    {type === 'new' && <span className='badge' type={type}>New</span>}
    {type === 'trending' && <span className='badge' type={type}>Trending</span>}
    {type === 'verified' && <span className='badge' type={type}><Tick /></span>}
    {type === 'soon' && <span className='badge' type={type}>Coming Soon</span>}
    {type === 'icon' && <span className='badge' type={type}>{img}</span>}
    </>
    
  )
}

export default Badge