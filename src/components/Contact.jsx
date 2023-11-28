export default function Contact(){
  return (
    <>
      <section className="px-6 py-10 flex flex-col gap-10 md:mt-24 lg:mt-24 md:flex-row lg:flex-row md:justify-between lg:justify-between">
        <div className="flex flex-col gap-5 items-start md:w-4/12 lg:w-4/12">
          <h3 className="font-semibold text-xl">Contact</h3>
          <div className="flex items-center gap-2 ">
            <img src="/icons/instagram.png" alt="instagram icon" className="h-8 w-8"/>
            <p>cafealyzer</p>
          </div>
          <div className="flex items-center gap-3  px-1">
            <img src="/icons/email.png" alt="whatsapp icon" className="h-6 w-6"/>
            <p>cafealyzer@gmail.com</p>
          </div>
        </div>
        <div className="md:w-4/12 lg:w-4/12">
          <h3 className="font-semibold text-xl">Supported By</h3>
          <img src="/icons/bangkit.png" alt="" className="h-28" />
          <img src="/icons/google.png" alt="" className="h-12" />
          <img src="/icons/ristek.png" alt="" className="h-28" />
        </div>
        <div className="space-y-5 md:w-4/12 lg:w-4/12">
          <img src="/icons/logo.png" alt="" className="w-44" />
          <p>AI Based Analysis and Recommendations Consultant for New UMKM Cafes</p>
        </div>
      </section>
    </>
  )
}