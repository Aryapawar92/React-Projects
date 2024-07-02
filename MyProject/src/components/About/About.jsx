import React from 'react'
import Card from './Card';

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className='grid lg:grid-cols-4 gap-5 mx-auto'>
                    <div>
                      <Card/>
                    </div>
                    <div>
                      <Card/>
                    </div>
                    <div>
                      <Card/>
                    </div>
                    <div>
                      <Card/>
                    </div>
                    <div>
                      <Card/>
                    </div>
                    <div>
                      <Card/>
                    </div>
                    <div>
                      <Card/>
                    </div>
                    <div>
                      <Card/>
                    </div>
                    
                  </div>
                  
              </div>
          </div>
      </div>
  );
}
