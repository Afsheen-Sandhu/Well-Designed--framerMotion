import React from 'react'

export const About = () => {

    const images = [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.png',
        '12.png'
               
    ]
  return (
    <div className='h-screen w-full py-30 bg-black'>
        <div className=' flex items-center justify-center pb-10'>
            <h1 className='font-quattrocento  text-white text-4xl font'>Hotels Well Designed</h1>
        </div>
        <div className='grid grid-cols-6 gap-4 px-30 py-20'>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={`/${image}`}
                    alt={`Image ${index + 1}`}
                    className={`w-full h-auto p-8 border-r-white border-r ${index < 6 ? 'border-b-white border-b' : ''}`}
                />
            ))}
        </div>
            
    </div>
  )
}
