import { forwardRef } from "react";

const Features = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="px-10 py-10 flex flex-col gap-14 lg:gap-24 lg:my-28">
        <header className="flex flex-col gap-10 items-center" data-aos="zoom-in" data-aos-duration="1000">
          <h1 className="font-bold text-5xl">Features</h1>
          <p className="text-center md:w-96 lg:w-96">We dream of advancing the welfare of local SMEs, and here are some features we offer at CafeAlyzer</p>
        </header>
        <section className="flex flex-col md:flex-row lg:flex-row md:justify-center lg:justify-center items-start gap-10 lg:gap-24 md:flex-wrap lg:flex-wrap">
          <div className="flex gap-3 md:w-4/12 lg:w-3/12" data-aos="zoom-in" data-aos-duration="1500">
            <img src="/icons/ai.png" alt="ai image" className="h-12 w-12" />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">AI Comparison Review</h2>
              <p>AI Review Comparison for Informed Cafe Choices.</p>
            </div>
          </div>
          <div className="flex gap-3 md:w-4/12 lg:w-3/12" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/icons/save_history.png" alt="ai image" className="h-12 w-12" />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Save History</h2>
              <p>Records and Stores User Activity History</p>
            </div>
          </div>
          <div className="flex gap-3 md:w-4/12 lg:w-3/12" data-aos="zoom-in" data-aos-duration="3000">
            <img src="/icons/maps.png" alt="ai image" className="h-12 w-12" />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Track Cafe Review</h2>
              <p>Tracks and Stores Cafe Review</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

Features.displayName = "Features";

export default Features;
