import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { Button } from "./button";

interface PreviewProps {
  name: string;
  message: string;
  confetti: boolean;
  invisible: boolean | string;
  video: string;
}

const Preview: React.FC<PreviewProps> = ({
  name,
  message,
  confetti,
  invisible,
  video,
}) => {
  const { width, height } = useWindowSize();

  return (
    <div className="bg-[#ffebf0] border-2 md:mr-4 flex flex-col rounded-lg shadow-lg">

        <div className="bg-white w-full mx-auto p-4 rounded-xl">
            <h2 className="text-2xl font-bold text-[#ff4d4d] mb-4">
                Preview Page 1
            </h2>

            <div className="flex border-2 p-4 shadow-sm rounded-xl items-center mx-auto justify-center">
                <div className="rounded-lg flex items-center justify-center">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-bold text-[#ff4d4d]">
                    {name}, will you be my valentine?
                    </h1>
                    <div className="flex justify-center pt-6 space-x-4">
                    <Button className="inline-flex h-12 items-center justify-center rounded-md bg-[#ff4d4d] px-10 text-lg font-medium text-white shadow transition-colors hover:bg-[#ff1a1a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff1a1a] disabled:pointer-events-none disabled:opacity-50">
                        Yes
                    </Button>
                    <button
                        className={`inline-flex h-12 items-center justify-center rounded-md ${
                        invisible && "hover:opacity-0"
                        } border border-[#ff4d4d] bg-white px-10 text-lg font-medium text-[#ff4d4d] shadow-sm transition-colors hover:bg-[#ffebf0] hover:text-[#ff1a1a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff1a1a] disabled:pointer-events-none disabled:opacity-50`}
                    >
                        No
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>

    <div className=" bg-white w-full mx-auto p-4  shadow-sm rounded-xl">
      <h2 className="text-2xl pt-6 font-bold text-[#ff4d4d] mb-4">
        Preview Page 2
      </h2>

      <div className="flex flex-col items-start border-2 p-2 rounded-xl md:mt-4 justify-center">
        <div className="rounded-lg flex items-center justify-center">
          {/* <h1 className="text-base max-w-xl pb-6 font-bold text-gray-500">
            Thank you for being my Valentine's day date {name}!!
        </h1> */}
        </div>
        <div className="bg-white rounded-2xl p-2 pb-12">
            <div className="aboslute">
                <div className="relative top-0 bottom-0 w-full left-0">
                {confetti && <Confetti width={450} height={350} />}
                </div>
            </div>
            <h1 className="text-xl pb-6 text-center pt-12 text-gray-500 font-bold max-w-xl">
              {message}
            </h1>
            <div className="w-1/4 mx-auto pt-8 h-auto">
            {video && ( // Render video element if videoUrl is not empty
                <video controls autoPlay>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            )}
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Preview;

interface ButtonProps {
  invisible: boolean;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ invisible, onClick }) => {
  if (invisible) {
    return null; // Render nothing if invisible is true
  }
};
