import { Home as HomeIcon, Search, Library } from "lucide-react"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a href="" className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
              <HomeIcon/>
              Home
            </a>
            <a href="" className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
              <Search/>
              Search
            </a>
            <a href="" className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
              <Library/>
              Your Library
            </a>
          </nav>
          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc- hover:text-zinc-100">Puras 🥵 </a>
            <a href="" className="text-sm text-zinc- hover:text-zinc-100">Hot hits </a>
            <a href="" className="text-sm text-zinc- hover:text-zinc-100">Top 50 Brazil </a>
            <a href="" className="text-sm text-zinc- hover:text-zinc-100">Trap hits </a>
            <a href="" className="text-sm text-zinc- hover:text-zinc-100">This is Kyan </a>
            <a href="" className="text-sm text-zinc- hover:text-zinc-100">This is Racionais </a>
            <a href="" className="text-sm text-zinc- hover:text-zinc-100">Two door cinema Club </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">

          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
    </div>
  )
}
