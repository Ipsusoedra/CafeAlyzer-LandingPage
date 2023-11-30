import { useEffect, useState } from 'react'

const peoples = [
  {
    'name': 'Salih Arya Gumilang',
    'image': '/assets/arya.png',
    'role': 'Mobile Developer'
  },
  {
    'name': 'Vincent Khenndy',
    'image': '/assets/people1.png',
    'role': 'Mobile Developer'
  },
  {
    'name': 'Zikri Ahmad Suanda',
    'image': '/assets/zikri.png',
    'role': 'Cloud Computing'
  },
  {
    'name': 'Iip Sudrajat',
    'image': '/assets/iip.png',
    'role': 'Cloud Computing'
  },
  {
    'name': 'Ahmad Nur Ihsanudin',
    'image': '/assets/ahsan.png',
    'role': 'Machine Learning'
  },
  {
    'name': 'Hajjar Ayu Cahyani K',
    'image': '/assets/people2.png',
    'role': 'Machine Learning'
  },
  {
    'name': 'Elfira Ratna Syaharani',
    'image': '/assets/people3.png',
    'role': 'Maching Learning'
  },
]

export default function Team() {
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

    return () => clearInterval(interval); // Membersihkan interval saat komponen tidak lagi digunakan
  }, [current]); // Efek hanya dijalankan ketika nilai current berubah

  return (
    <>
      <div id="team" className="relative flex flex-col gap-12 my-24 md:my-52 lg:my-52">
        <h1 className="font-bold text-5xl text-center">Let's Meet Our Team</h1>
        <div className='px-24 '>
          <section className={`pt-24 relative flex overflow-x-hidden gap-20`}
          >
            {peoples.map((people, index) => (
              <div key={index} className={`flex flex-col gap-5 min-w-fit transition ease-out duration-500`}
                style={{
                  transform: `translateX(-${current * 85}%)`,
                }}
              >
                <div className="relative flex flex-col items-center bg-secondary h-60 w-72 rounded-xl">
                  <img src={people.image} alt="" className="h-80 absolute -top-20   " />
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="font-semibold text-xl">{people.name}</h3>
                  <p>{people.role}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div onClick={prev} className='absolute  top-[50%] left-5 translate-x-0 hover:-translate-x-3 duration-200 hover:cursor-pointer'>
          <img src="/icons/prev.png" alt="" className='w-12' />
        </div>
        <div onClick={next} className='absolute  top-[50%] right-5 translate-x-0 hover:translate-x-3 duration-200 hover:cursor-pointer'>
          <img src="/icons/next.png" alt="" className='w-12' />
        </div>
      </div>
    </>
  )
}