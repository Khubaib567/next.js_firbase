import React from 'react'
import CheckInBox from '@/widgets/CheckInBox'

function Card() {
  return (
    <div>
        {/* Added CheckIns Section */}
      <div class="mx-10">
      <h1 class="font-semibold text-start text-xl">Added CheckIns</h1> 
      </div>
      {/* Card Container */}
       
<div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"> 
   {/* First Card */}
   <div class="card w-80 bg-base-100 shadow-xl p-4">
    <figure class="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    {/* <div class="card-actions"> */}
    <CheckInBox />
    {/* </div> */}
  </div>
    </div>
    {/* Second Card */}
    <div class="card w-80 bg-base-100 shadow-xl p-4">
    <figure class="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
    <CheckInBox />
    </div>
  </div>
    </div> 
    {/* Third Card */}
    <div class="card w-80 bg-base-100 shadow-xl p-4">
    <figure class="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
    <CheckInBox />
    </div>
  </div>
    </div> 
    {/* Forth Card */}
    <div class="card w-80 bg-base-100 shadow-xl p-4">
    <figure class="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <CheckInBox />
    </div>
  </div>
    </div>
</div> 
    </div>
  )
}

export default Card