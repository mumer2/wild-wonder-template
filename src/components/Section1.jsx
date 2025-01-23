import React, { useEffect, useRef } from 'react';
import '../styles/Section1Text.css';
import t2 from '../images/t2.avif';
import t3 from '../images/t3.webp';
import t4 from '../images/t4.avif';
import t5 from '../images/t5.webp';
import t6 from '../images/t6.avif';
import t7 from '../images/t7.avif';

export const Section1 = () => {
  const textPathRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (textPathRef.current) {
        textPathRef.current.setAttribute('startOffset', -scrollTop * 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <div>
            <div class="grid grid-cols-2 gap-2 p-10">
                <div className='section1-text p-10'>
                    <h1>DELICIOUS GUT HEALTH</h1>
                    <p>wildwonder is the world’s first sparkling prebiotic + probiotic beverage. Our flavors are inspired by heritage and taste like a California produce stand.</p>
                    <button>Shop Now</button>

                </div>
                <div>
                    <div class="image-wrap rounded-full">
                        <img class="feature-row__image lazyautosizes lazyloaded" data-widths="[180, 360, 540, 750, 900, 1080]" data-aspectratio="1.1425891181988743" data-sizes="auto" alt="" data-srcset="//drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_180x.gif?v=1661586625 180w, //drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_360x.gif?v=1661586625 360w, //drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_540x.gif?v=1661586625 540w, //drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_750x.gif?v=1661586625 750w, //drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_900x.gif?v=1661586625 900w, //drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_1080x.gif?v=1661586625 1080w" sizes="554px" srcset="//drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_180x.gif?v=1661586625 180w, //drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_360x.gif?v=1661586625 360w, //drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_540x.gif?v=1661586625 540w, //drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_750x.gif?v=1661586625 750w, //drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_900x.gif?v=1661586625 900w, //drinkwildwonder.com/cdn/shop/files/Guava-Rose-Pour-2_1080x.gif?v=1661586625 1080w"/>  
                        </div>
                </div>
            </div>


            <div id="shopify-section-template--17853958783165__16591739280cd6642c" className="shopify-section wavy_image_main">
      <div className="wavy_text top_wavy_img">
        <div className="wavy_text_wrapper">
          <div className="wavy_back_img animate_curve">
            <div className="image">
              <img
                className="img lazyloaded"
                alt="Background image"
                data-src="//drinkwildwonder.com/cdn/shop/files/Group_2386_1920x.png?v=1659173521"
                src="//drinkwildwonder.com/cdn/shop/files/Group_2386_1920x.png?v=1659173521"
              />
            </div>
            <div className="upper_svg">
              <svg className="text-container curve_text_svg" viewBox="0 0 1920 450" data-section-id="template--17853958783165__16591739280cd6642c">
                <path id="curve" d="M 0 420 Q 160 420 240 340 Q 400 200 510 150 Q 660 120 860 160 Q 1020 210 1180 220 Q 1320 240 1440 210 Q 1560 180 1620 150 Q 1780 100 1920 100"></path>
                <text x="25">
                  <textPath href="#curve" className="textPath_curve" startOffset="-410" ref={textPathRef}>
                    Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life Happy Gut Happy Life
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="wavy_top_img">
            <img
              className="img lazyloaded"
              alt="Boost happiness"
              data-src="//drinkwildwonder.com/cdn/shop/files/Component-1-_-1_df82cfec-c240-4940-a55d-7fb2606d0cf1_600x.png?v=1661583349"
              src="//drinkwildwonder.com/cdn/shop/files/Component-1-_-1_df82cfec-c240-4940-a55d-7fb2606d0cf1_600x.png?v=1661583349"
            />
          </div>
        </div>
      </div>
    </div>

    <div className='bg-[#C2EAF3] w-[100%] h-[100%] mt-20'>

        <div className='flex justify-center items-center'>
            <h1 className='mt-[120px] text-[60px] uppercase font-semibold text-[#2A317D]'>Featured In</h1>
            </div>

            <div>
            <div class="grid grid-cols-3 gap-8 p-20 mx-[100px] items-center justify-center">

                <div className='w-[110px] justify-center items-center'>
                    <img src={t2} alt="" />
                    
                </div>
                <div className='w-[110px] mx-20 justify-center items-center'>
                <img src={t4} alt="" />
                
                </div>
                <div className='w-[130px] mx-[150px] justify-center items-center'>
                <img src={t6} alt="" />
                
                </div>

                <div className='w-[120px] justify-center items-center'>
                    
                    <img src={t3} alt="" />
                </div>
                <div className='w-[340px] h-[28px] justify-center items-center'>
                
                <img src={t5} alt="" />
                </div>
                <div className='w-[290px] h-[78px] mx-20 justify-center items-center'>
                
                <img src={t7} alt="" />
                </div>

                </div>
            </div>

    </div>


        </div>
    )
}
