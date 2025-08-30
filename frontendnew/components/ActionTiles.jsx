import Link from "next/link"

export default function ActionTiles() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 pb-14 grid md:grid-cols-2 gap-6">
        <Link
          href="/post-task"
          className="tile focus:outline-none focus:ring-2 focus:ring-[#4442dd]"
          aria-label="Post a task"
        >
          <div className="flex items-center gap-4">
            <img src="/images/icon-worker.jpg" alt="Helper" className="h-12 w-12 rounded-lg object-cover" />
            <div>
              <h4 className="tile-title">Post a Task</h4>
              <p className="tile-text">Describe your need and get instant help.</p>
            </div>
          </div>
        </Link>

        <Link
          href="/find-work"
          className="tile tile-outline focus:outline-none focus:ring-2 focus:ring-[#4442dd]"
          aria-label="Find work"
        >
          <div className="flex items-center gap-4">
            <img src="/images/icon-worker.jpg" alt="Worker" className="h-12 w-12 rounded-lg object-cover" />
            <div>
              <h4 className="tile-title">Find Work</h4>
              <p className="tile-text">Offer your time and earn in your area.</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
