import { forwardRef } from "react";

const Hero = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="flex flex-col lg:flex-row gap-5 px-10 py-10 my-28 md:my-28 lg:my-28">
        <div className="flex flex-col gap-14 lg:w-4/12 md:gap-16 lg:gap-16" data-aos="fade-right" data-aos-duration="1500">
          <h1 className="font-bold text-5xl text-center lg:text-left">Compare Your Business</h1>
          <p className="text-center lg:text-left lg:leading-loose">
            CafeAlyzer revolutionizes the coffee industry by offering analysis and recommendations. Leveraging artificial intelligence, the app assists new SME cafe owners in making strategic decisions, providing insights into market
            trends.
          </p>
          <div className="flex justify-center items-center lg:items-start lg:justify-start">
            <button className="bg-primary px-10 py-2 rounded-full text-white font-semibold">Download</button>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-8/12 lg:justify-center lg:items-center" data-aos="fade-left" data-aos-duration="3000">
          <div className="relative">
            <img src="/assets/handphone.jpg" alt="handphone image" className="h-96 bg-contain rounded-3xl" />
            <div className="absolute top-28 -left-20 shadow-xl px-4 py-1 rounded-xl bg-white">
              <img src="/icons/analytics.png" alt="" className="w-28" draggable="false" />
            </div>
            <div className="absolute top-11 -right-24 shadow-xl px-4 py-1 rounded-xl bg-white">
              <img src="/icons/export.png" alt="" className="w-40" draggable="false" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

Hero.displayName = "Hero";

export default Hero;
