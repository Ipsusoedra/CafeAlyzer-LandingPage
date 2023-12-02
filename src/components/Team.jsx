/* eslint-disable react/no-unescaped-entities */
import { forwardRef, useEffect, useState } from "react";

const peoples = [
  {
    name: "Salih Arya Gumilang",
    image: "/assets/arya.png",
    role: "Mobile Developer",
  },
  {
    name: "Vincent Khenndy",
    image: "/assets/vincent.png",
    role: "Mobile Developer",
  },
  {
    name: "Zikri Ahmad Suanda",
    image: "/assets/zikri.png",
    role: "Cloud Computing",
  },
  {
    name: "Iip Sudrajat",
    image: "/assets/iip.png",
    role: "Cloud Computing",
  },
  {
    name: "Ahmad Nur Ihsanudin",
    image: "/assets/ahsan.png",
    role: "Machine Learning",
  },
  {
    name: "Hajjar Ayu Cahyani K",
    image: "/assets/ayu.png",
    role: "Machine Learning",
  },
  {
    name: "Elfira Ratna Syaharani",
    image: "/assets/elfira.png",
    role: "Maching Learning",
  },
];

const Team = forwardRef((props, ref) => {
  let [current, setCurrent] = useState(0);

  let prev = () => {
    if (current === 0) setCurrent(peoples.length - 1);
    else setCurrent(current - 1);
  };

  let next = () => {
    if (current === peoples.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  console.log(current);

  return (
    <>
      <div ref={ref} className="relative flex flex-col gap-12 my-24 md:my-44 lg:my-44">
        <h1 className="font-bold text-5xl text-center">Let's Meet Our Team</h1>
        <div className="px-24 flex justify-center ">
          <section className={`pt-24 relative flex pl-10 overflow-x-hidden gap-20 snap-x`}>
            {peoples.map((people, index) => (
              <div key={index} className={`snap-center flex flex-col gap-5 min-w-fit transition ease-out duration-500`} style={{ transform: `translateX(-${(current - 3) * 100}%)` }}>
                <div className="relative flex flex-col items-center bg-secondary h-60 w-72 rounded-xl">
                  <img src={people.image} alt="" className="h-80 absolute -top-20" />
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="font-semibold text-xl">{people.name}</h3>
                  <p>{people.role}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div onClick={prev} className="absolute  top-[50%] left-5 translate-x-0 hover:-translate-x-3 duration-200 hover:cursor-pointer">
          <img src="/icons/prev.png" alt="" className="w-12" />
        </div>
        <div onClick={next} className="absolute  top-[50%] right-5 translate-x-0 hover:translate-x-3 duration-200 hover:cursor-pointer">
          <img src="/icons/next.png" alt="" className="w-12" />
        </div>
      </div>
    </>
  );
});

Team.displayName = "Team";

export default Team;
