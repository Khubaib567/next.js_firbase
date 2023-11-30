import React from 'react'


function CheckInBox() {
  return (
    // <div>
    <>
    {/* The button to open modal */}
<label for="my_modal_1" class="btn btn-primary">Check In</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_1" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
    <div class="modal-action">
    <label for="my_modal_1" class="btn">Close</label>
      <label for="my_modal_1" class="btn btn-primary">Add</label>
    </div>
  </div>
</div>
    </>
       
    // </div>
  )
}

export default CheckInBox