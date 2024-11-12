import React from "react";
import Image from "next/image";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-b from-pink-200 to-pink-700">
        <div className="py-4 px-2 mx-auto max-w-screen-lg sm:py-4 lg:px-6">
          {/* Updated grid to display items horizontally */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 h-full ">
            {/* Image 1 */}
            <div className="bg-gradient-to-r from-pink-700 to-pink-200 flex flex-col">
              <a
                href=""
                className="group relative flex overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <Image src="/images/ice-cream-cones-with-frame-mock-up.jpg"
                  alt="Icecream 1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  width={500}
                  height={500}>
                  </Image>
              </a>
              </div>

               

                 {/* Image 2 & 3 */}
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 bg-gradient-to-r from-pink-700 to-pink-200">
                  <a href="" 
                  className="flex group relative overflow-hidden rounded-lg px-4 pb-4 pt-40 ">
                    <Image 
                    src="/images/Ice cream balls topped with cookies and candies.jpg" alt="Icecream 3" 
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    height={500}
                    width={500}> 
                    </Image> 
                  </a>
                  <a href="" 
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 ">
                    <Image src="/images/Icecream with sprinkles.jpeg" alt="Icecream 4" 
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    height={200}
                    width={300}></Image>
                  </a>
                </div>

                {/* Image 4 */}
                <div className="bg-gradient-to-r from-pink-700 to-pink-200 flex flex-col">
                <a href=""
                className="group relative flex overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                  <Image src="/images/icecream.jpeg" 
                  alt="Icecream 5" 
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  width={500}>
                  </Image>
                </a>
                </div>

                 {/* Image 5 & 6 */}
                 <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 bg-gradient-to-r from-pink-700 to-pink-200">
                  <a href="" 
                  className="flex group relative overflow-hidden rounded-lg px-4 pb-4 pt-40 ">
                    <Image src="/images/close-up-view-cotton-candy-ice-cream-cone.jpeg" alt="Icecream 6" 
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    height={1700}
                    width={1700}>
                    </Image> 
                  </a>
                  <a href="" 
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 ">
                    <Image src="/images/top-view-ice-cream-table.jpeg" alt="Icecream 7" 
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    height={500}
                    width={500}> 
                    </Image>
                  </a>
                </div>
                 {/* Image 7 */}
                 <div className="bg-gradient-to-r from-pink-700 to-pink-200 flex flex-col">
                <a href=""
                className="group relative flex overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                 <Image src="/images/Side view chocolate ice cream with nuts and wafer rolls.jpg" 
                  alt="Icecream 2" 
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  width={500}>
                  </Image>
                </a>
                </div>

            </div>

            
          </div>
      </section>
    </div>
  );
}
