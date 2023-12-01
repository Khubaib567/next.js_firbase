import Image from "next/image"

function AddCheckIn() {
  return (
    <>
    {/* The button to open modal */}
    <label for="my_modal_6" class="btn btn-wide bg-[#7B5AFF] text-white hover:bg-[#7B5AFF] m-10">
    {/* <img src={Sign_icon} alt="Sign_icon" style={{width:"5%"}}/> */}
    <Image
      src='/static/sign.png'
      width={20}
      height={20}
      alt="Sign_icon"
    /> 
      Add Check In</label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" class="modal-toggle" />
    <div class="modal">
    <div class="modal-box ">
    
    <figure class="bg-[#7B5AFF] p-10 text-white text-center rounded-t-md text-xl font-semibold">
    Add Check In
    </figure>
    {/* Username */}
    <div class="mb-6 pt-3">
    <input type="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" placeholder="Username"/>
</div>
 {/* Customer Name */}
 <div class="mb-6 pt-2">
    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" placeholder="Customer Name"/>
</div>
{/* Email */}
<div class="mb-6 pt-2">
    <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" placeholder="Email"/>
</div>
    <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"><a href="#" class="text-[#3730a3] hover:underline dark:text-blue-500 ">Upload Photo</a></label>
  
    <div class="modal-action flex justify-center">
      <label for="my_modal_6" class="btn btn-wide bg-[#7B5AFF] text-white hover:bg-[#7B5AFF]">CHECK IN</label>
    </div>
   
  </div>
</div>
    </>
  )
}

export default AddCheckIn