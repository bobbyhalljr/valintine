"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import Banner from "@/components/ui/banner"
import Link from "next/link"
import { DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog"
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Preview from "@/components/ui/preview"

export default function Component() {

    // State variables for form data
  const [name, setName] = useState("Valentina");
  const [message, setMessage] = useState("");
  const [video, setVideo] = useState("");
  const [confetti, setConfetti] = useState(false);
  const [invisible, setInvisible] = useState(false);
  const [purchased, setPurchased] = useState(false)
  
  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name: name,
      message: message,
      confetti: confetti,
      invisible: invisible,
      video: video
    };
    console.log(formData);
  };

   // Function to handle change in the input field and update video URL
   const handleVideoChange = (e: any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setVideo(url);
  };

  return (
    <div className="w-screen px-4 mx-auto h-screen">
      <section id='hero' className="w-full h-auto mt-12 mx-4 flex px-2 md:px-0 flex-col items-center justify-center bg-white">
        <div className="container px-4 pb-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-[#ff4d4d]">
              Impress Your Valentine with a Personalized Message
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 pb-6 font-medium">
              Customize this template with your recipient's name, a special
              message, and even a video to create a memorable Valentine's Day
              surprise.
            </p>
          </div>
        </div>


        <div className='flex flex-col mx-4 md:flex-row'>
          <Preview
                name={name}
                message={message}
                confetti={confetti}
                invisible={invisible}
                video={video}
              /> 
          {/* <div className="max-w-6xl mx-auto grid grid-cols-1 pb-12 lg:grid-cols-2 gap-6"> */}
            {/* <div className="rounded-lg bg-slate-100 shadow-lg p-6"> */}
              <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-slate-100 shadow-lg p-6">
                <div>
                  <label
                    className="block text-gray-700 font-medium pb-2"
                    htmlFor="name"
                  >
                    Recipient's Name
                  </label>
                  <input
                    className="w-full border border-gray-200 rounded-md p-2"
                    id="name"
                    placeholder="Enter name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium pb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full border border-gray-200 rounded-md p-2 h-24"
                    id="message"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}                />
                </div>
                <div className="flex items-center pt-4 py-4 px-2 rounded-lg justify-between">
                  <label
                    className="text-gray-700 font-medium"
                    htmlFor="confetti"
                  >
                    Confetti
                  </label>
                  <input
                    className="form-checkbox h-5 w-5 text-gray-700 font-medium"
                    id="confetti"
                    type="checkbox"
                    checked={confetti}
                    onChange={(e) => setConfetti(e.target.checked)}
                  />
                </div>
                <span className="text-xs text-gray-700">Make confetti rain down 🎉</span>
                <div className="flex items-center pt-4 justify-between">
                  <label
                    className="text-gray-700 font-medium"
                    htmlFor="invisible"
                  >
                    Invisible No Button
                  </label>
                  <input
                    className="form-checkbox h-5 w-5 text-gray-700 font-medium"
                    id="invisible"
                    type="checkbox"
                    checked={invisible}
                    onChange={(e) => setInvisible(e.target.checked)}
                    />
                </div>
                <span className="text-xs text-gray-700">The "no" button disappears when hovered 😏</span>
                <div className="py-4">
                  <label
                    className="block text-gray-700 font-medium pb-2"
                    htmlFor="video"
                  >
                    Upload Video
                  </label>
                  <input
                    className="w-full border bg-white border-gray-400 rounded-md p-4"
                    type="file" accept="video/*" onChange={handleVideoChange}
                  />
                </div>
                <div className="flex justify-center pt-6 md:pt-12 space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button type='submit' className="inline-flex mt-6 w-full h-12 items-center justify-center rounded-md bg-[#ff4d4d] px-10 py-4 text-lg font-medium text-white shadow transition-colors hover:bg-[#ff1a1a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff1a1a] disabled:pointer-events-none disabled:opacity-50">
                    Buy Now - $29
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%] rounded-xl mx-auto">
                  <Card className="my-8 bg-slate-300/30">
                    <CardHeader>
                      <CardTitle>Payment Form</CardTitle>
                      <CardDescription>
                        Enter your payment information.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="Enter your card number"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="CVC" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4">Pay Now</Button>
                    </CardFooter>
                  </Card>
                </DialogContent>
              </Dialog>
            </div>
              </form>
            {/* </div> */}
          {/* </div> */}
        </div>
      </section>

      <Banner/>

      <section className="bg-gray-50/80 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center pb-4 my-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 mx-4 space-x-4 md:grid-cols-3 gap-8">
            <div className="flex flex-col border-2 p-4 rounded-lg shadow-lg border-gray-300 pb-8 items-center">
              <div className="rounded-full bg-white border-2 border-[#ff4d4d] flex items-center justify-center w-16 h-16 mb-4">
                <span className="text-[#ff4d4d] text-2xl font-bold">1</span>
              </div>
              <p className="text-center font-semibold text-gray-900">
                Create Your Message
              </p>
              <p className="text-base text-center pt-2 text-gray-600">
                Customize the template with your recipient's name and a
                heartfelt message.
              </p>
            </div>
            <div className="flex flex-col border-2 p-4 rounded-lg shadow-lg border-gray-300 pb-8 items-center">
              <div className="rounded-full bg-white border-2 border-[#ff4d4d] flex items-center justify-center w-16 h-16 mb-4">
                <span className="text-[#ff4d4d] text-2xl font-bold">2</span>
              </div>
              <p className="text-center font-semibold text-gray-900">
                Add Personalization
              </p>
              <p className="text-base text-center pt-2 text-gray-600">
                Add a personal video to make the surprise even more special.
              </p>
            </div>
            <div className="flex flex-col border-2 p-4 rounded-lg shadow-lg border-gray-300 items-center">
              <div className="rounded-full bg-white border-2 border-[#ff4d4d] flex items-center justify-center w-16 h-16 mb-4">
                <span className="text-[#ff4d4d] text-2xl font-bold">3</span>
              </div>
              <p className="text-center font-semibold text-gray-900">
                Share Your Message
              </p>
              <p className="text-base text-center pt-2 text-gray-600">
                Share the unique link with your loved one and make this
                Valentine's Day unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mx-auto py-12 bg-[#ff4d4d]/10">
        <div className="container px-4 md:px-6">
          <div className="text-center space-x-4 md:spcae-x-0 space-y-6">
            <h2 className="text-3xl font-bold text-[#ff4d4d] py-8">
              Modern and Fun Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 space-y-4 lg:gap-12">
              <div className="flex border p-4 rounded-xl shadow-md bg-white flex-col items-center justify-center space-y-4">
                <HeartIcon className="text-4xl fill-red-400 stroke-red-400 drop-shadow-lg" />
                <h3 className="text-xl font-bold text-[#ff4d4d]">
                  Personalized Templates
                </h3>
                <p className="text-[#ff4d4d]">
                  Create custom messages with our template.
                </p>
              </div>
              <div className="flex border p-4 rounded-xl shadow-md bg-white flex-col items-center justify-center space-y-4">
                <GiftIcon className="text-6xl fill-red-400 stroke-red-700 drop-shadow-lg" />
                <h3 className="text-xl font-bold text-[#ff4d4d]">
                  Video Messages
                </h3>
                <p className="text-[#ff4d4d]">
                  Add a personal touch with video messages for your loved ones.
                </p>
              </div>
              <div className="flex border p-4 rounded-xl shadow-md bg-white flex-col items-center justify-center space-y-4">
                <StarIcon className="text-8xl fill-red-400 stroke-red-400 drop-shadow-lg" />
                <h3 className="text-xl font-bold text-[#ff4d4d]">
                  Surprise Elements
                </h3>
                <p className="text-[#ff4d4d]">
                  Enhance your messages with surprise elements and animations
                  like raining confetti and an invisible "No" button
                </p>
              </div>
            </div>
          </div>
          <div className='mx-auto w-2/5 py-12'>
            <Link href='#hero' className='inline-flex mt-6 w-full h-12 items-center justify-center rounded-md bg-[#ff4d4d] px-10 py-4 text-lg font-medium text-white shadow transition-colors hover:bg-[#ff1a1a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff1a1a] disabled:pointer-events-none disabled:opacity-50'>Get Started</Link>
          </div>
        </div>
      </section>
      <footer className="bg-gray-700 p-4 mx-auto flex justify-center text-white">
        Created with ♥️ and hard work by:{" "}
        <Link
          className="ml-1 underline hover:text-gray-100/80 font-bold"
          href="https://bobbyhall.dev"
        >
          Bobby Hall Jr
        </Link>
      </footer>
    </div>
  );
}

function GiftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function InfoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}