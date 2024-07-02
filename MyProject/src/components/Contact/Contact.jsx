import React from 'react'

function Contact() {
  return (
    <div className='max-w-md w-full mx-auto p-6 bg-#fdfdfd rounded-lg shadow-md'>
      <h2 className='text-3xl text-center text-red-500 font-bold mb-6'>Contact Us</h2>
      <form action="">
        <div className='mb-4'>
            <label className='block text-white text-sm font-semibold mb-2' htmlFor="">Your Name</label>
            <input placeholder='example' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-400' required type="text" />
        </div>
        <div className='mb-4'>
            <label  className='block text-white text-sm font-semibold mb-2' htmlFor=""></label>
            <input placeholder= 'abc@example.com' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-400' required type="text" />
        </div>
        <div className='mb-4'>
            <label className='block text-white text-sm font-semibold mb-2' htmlFor=""></label>
            <textarea rows= '4' placeholder='Type Your Message here..' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-400' name="" id=""></textarea>
        </div>
        <div>
          <button type='submit' className='bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-white '>Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact