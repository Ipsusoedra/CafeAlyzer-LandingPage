export default function Hero(){
  return (
    <>
      <div className="flex flex-col gap-5 px-6 py-10">
        <div>
          <h1 className="font-bold text-5xl">Compare Your Business</h1>
        </div>
        <div>
          <p>CafeAlyzer revolutionizes the coffee industry by offering analysis and recommendations. Leveraging artificial intelligence, the app assists new SME cafe owners in making strategic decisions, providing insights into market trends.</p>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-primary px-10 py-2 rounded-full text-white font-semibold">Download</button>
        </div>
      </div>
    </>
  )
}