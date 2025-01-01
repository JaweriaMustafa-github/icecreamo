import React from 'react'
const Reservation = () => {

  return (
    <section className='bg-pink-700'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font bold mb-6 text-white'>Make A Reservation</h2>
        <form className='max-w-md mx-auto'>
          <div className='mb-4 text-white'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full p-3 boarder border-grey-300 rounded-md'
              required
            />
          </div>

          <div className='mb-4'>
            <input
             type="email"
             placeholder='Your Email'
             className='w-full p-3 boarder border-grey-300 rounded-md'
             required 
             />
          </div>

          <div className='mb-4'>
            <input
             type="date"
             className='w-full p-3 boarder border-grey-300 rounded-md'
             required 
             />
          </div>

          <div className='mb-4'>
            <input
             type="time"
             className='w-full p-3 boarder border-grey-300 rounded-md'
             required 
             />
          </div>

          <div className='mb-4'>
            <button className='bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-orange-500'>Reserve Table

            </button>
          </div>
        </form>
      </div>
    </section>

  )



}

export default Reservation;