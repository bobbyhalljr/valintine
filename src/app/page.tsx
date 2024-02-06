'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter()

  return (
    <section
      key="1"
      className="w-full h-screen flex flex-col items-center justify-center bg-[#ffebf0] bg-opacity-50 bg-repeat bg-pattern-hearts"
    >

      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-500">Love is in the air 💨 ❤️</h1>
        <h1 className="text-5xl font-bold text-[#ff4d4d]">Valentina, will you be my valentine?</h1>
        <div className="flex justify-center pt-6 space-x-4">
          <Button
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#ff4d4d] px-10 text-lg font-medium text-white shadow transition-colors hover:bg-[#ff1a1a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff1a1a] disabled:pointer-events-none disabled:opacity-50"
            onClick={() => router.push('/yes')}
          >
            Yes
          </Button>
          <Button className="inline-flex h-12 items-center justify-center rounded-md border border-[#ff4d4d] bg-white px-10 text-lg font-medium text-[#ff4d4d] shadow-sm transition-colors hover:bg-[#ffebf0] hover:text-[#ff1a1a] hover:opacity-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff1a1a] disabled:pointer-events-none disabled:opacity-50">
            No
          </Button>
        </div>
      </div>

    </section>
  )
}

