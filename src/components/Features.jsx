export default function Features(){
  return (
    <>
      <div className="px-6 py-10 flex flex-col gap-10">
        <header className="flex flex-col gap-5 items-center">
          <h1 className="font-bold text-5xl">Features</h1>
          <p className="text-center">We dream of advancing the welfare of local SMEs, and here are some features we offer at CafeAlyzer</p>
        </header>
        <section className="flex flex-col items-start gap-10">
          <div className="flex gap-3">
            <img src="/icons/ai.png" alt="ai image" className="h-12 w-12"/>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">AI Comparison Review</h2>
              <p>AI Review Comparison for Informed Cafe Choices.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src="/icons/save_history.png" alt="ai image" className="h-12 w-12"/>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Save History</h2>
              <p>Records and Stores User Activity History</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src="/icons/maps.png" alt="ai image" className="h-12 w-12"/>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Track Cafe Review</h2>
              <p>Tracks and Stores Cafe Review</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}