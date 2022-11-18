import React from 'react'
import pool from './pool.jpg'
import floor1 from './floor1.jpg'
import floor2 from './floor2.jpg'
import floor3 from './floor3.jpg'
export default function Amenities() {
  return (
    <div>
    <h1>  Amenities</h1>
      <img className='pool' src={pool} alt='pool'/>
<div>
    <ul>
        <li>Pool</li>
        <li>Indoor Gym</li>
        <li>Club House</li>
        <li>Chindrens Play Ground</li>
        <li>On site -24Hr Maintance Service</li>
        <li>Conference Room</li>
        <li>In Unit Laundary</li>
    </ul>
</div>
<hr />
<div>
    <h3>Floor Plans</h3>
<div className='floor-ct'>
<img className='floor' src={floor1} alt='floor'/>
<img className='floor' src={floor2} alt='floor'/>
<img className='floor' src={floor3} alt='floor'/>
</div>
</div>

    </div>
  )
}
