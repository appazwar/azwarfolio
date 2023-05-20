import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@azwarapp/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Azwar App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {/* Bio */}
        <div className="bg-black h-full flex items-center pb-10">
          <div className="m-auto max-w-6xl grid sm:grid-cols-2 gap-1 p-2 sm:p-0">
            <div>
              <h1 className="text-xl font-bold text-yellow-400 hover:animate-bounce ">
                SOFTWARE ENGINEER
              </h1>
              <p className="pt-8 text-4xl sm:text-5xl font-semibold text-white">
                HI, I AM FULLSTACK DEVELOPER
              </p>
              <p className="pt-6 text-gray-300 sm:text-xl font-light">
                My mission is to design and develop a website that you and your
                audience love.I am a web and system developer with robust
                problem-solving skills. I am a web and system developer with
                robust problem-solving skills. I also has been familiar with MVC
                architecture in my previous project. Able to work with team and
                commited with given task.I am a web and system developer with
                robust problem-solving skills.
              </p>

              {/* WhatsApp */}
              <div className="pt-10 sm:flex gap-2 items-center">
                <div>
                  <button className="font-semibold text-white sm:text-xl bg-green-700 p-2 sm:p-4 rounded-3xl  hover:border border-white hover:bg-black">
                    LET'S CHAT ON WHATSAPP
                  </button>
                </div>
                <div>
                  <button className="font-semibold text-white sm:text-xl p-2 sm:p-4 rounded-3xl hover:text-gray-300 pt-2 sm:pt-2 pl-2 sm:pl-0">
                    OR SEND ME AND EMAIL
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Image src={"/azwarapp.png"} width={700} height={500} alt="image"/>
            </div>
          </div>
        </div>
        {/* Programming Language */}
        <div className="h-full bg-gray-300 pt-1 p-2 sm:p-0">
          <div className="m-auto max-w-6xl ">
            <div className="pt-6">
              <h2 className="text-2xl font-semibold text-gray-600 pb-4">
                Programming Language
              </h2>
              <div className="grid sm:grid-cols-3 gap-2 items-center">
                <div>
                  <Image src={"/js-icon.png"} width={400} height={400} alt="image" />
                </div>
                <div>
                  <Image src={"/html-icon.png"} width={400} height={400} alt="image"/>
                </div>
                <div className="pl-20">
                  <Image src={"/php-icon.png"} width={250} height={200} alt="image"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Framework*/}
        <div className="h-full bg-gray-100 pt-1 p-2 sm:p-0">
          <div className="m-auto max-w-6xl ">
            <div className="pt-6">
              <h2 className="text-2xl font-semibold text-gray-600 pb-4">
                Framework
              </h2>
              <div className="grid sm:grid-cols-3 gap-2 items-center">
                <div>
                  <Image src={"/laravel-logo.png"} width={400} height={400} alt="image"/>
                </div>
                <div>
                  <Image src={"/react-logo.png"} width={400} height={200} alt="image"/>
                </div>
                <div className="pl-20">
                  <Image src={"/next-js-logo.png"} width={250} height={200} alt="image"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Work*/}
        <div className="h-full bg-gray-300 pt-1 p-2 sm:p-10">
          <div className="m-auto max-w-6xl ">
            <div className="pt-6">
              <h2 className="text-4xl font-semibold text-gray-600 pb-4">
                RECENT WORK
              </h2>
              <div className="">
                <div>
                  <Image
                    src={"/penang360-project.jpeg"}
                    width={700}
                    height={400}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
