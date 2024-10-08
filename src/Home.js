// // src/Home.js

// import React from "react";
// import { Helmet } from "react-helmet";

// function Home() {
//   return (
//     <>
//       <Helmet>
//           <title>Challenge</title>
//           <meta name="description" content="Generated by create-t3-app" />
//           <link rel="icon" href="./../public/images/favicon-32x32.png" />
//       </Helmet>
//       <main className="flex min-h-screen flex-col items-center justify-center bg-pale-blue font-hanken">
//         <div className="bg-white w-[430px] h-[300px] rounded-3xl flex">
//           <aside className="bg-gradient-to-b from-slate-blue-light to-slate-blue-dark w-1/2 rounded-3xl flex flex-col justify-between items-center gap-4 px-4 py-8">
//             <div className="text-gray-300 text-sm font-bold">Your Result</div>
//             <div className="flex items-center flex-col justify-center text-white bg-gradient-to-b from-violet-blue to-slate-blue-dark w-32 h-32 rounded-full gap-2">
//               <span className="text-4xl font-bold">76</span>
//               <span className="text-xs text-gray-400">of 100</span>
//             </div>
//             <div className="flex flex-col gap-2 text-center px-4">
//               <div className="text-white text-xl">Great</div>
//               <div className="text-gray-300 text-center text-xs">
//                 You scored higher than 65% of the people who have taken these tests.
//               </div>
//             </div>
//           </aside>

//           <div className="px-4 py-8 flex flex-col w-1/2 justify-between">
//             <h1 className="text-lg font-bold">Summary</h1>

//             <ul className="flex flex-col gap-3">
//               <li className="bg-light-red-light flex justify-between p-2 text-sm rounded-lg">
//                 <div className="flex gap-2">
//                   <img src="/icon-reaction.svg" alt="" />
//                   <span className="text-light-red-default">Reaction</span>
//                 </div>
//                 <div>
//                   80 <span className="text-gray-500">/ 100</span>
//                 </div>
//               </li>

//               <li className="bg-orangey-yellow-light flex justify-between p-2 text-sm rounded-lg">
//                 <div className="flex gap-2">
//                   <img src="/icon-memory.svg" alt="" />
//                   <span className="text-orangey-yellow-default">Memory</span>
//                 </div>
//                 <div>
//                   92 <span className="text-gray-500">/ 100</span>
//                 </div>
//               </li>

//               <li className="bg-green-teal-light flex justify-between">
//                 <div className="flex gap-2 p-2 text-sm rounded-lg">
//                   <img src="/icon-verbal.svg" alt="" />
//                   <span className="text-green-teal-default">Verbal</span>
//                 </div>
//                 <div>
//                   61 <span className="text-gray-500">/ 100</span>
//                 </div>
//               </li>

//               <li className="bg-cobalt-blue-light flex justify-between">
//                 <div className="flex gap-2 p-2 text-sm rounded-lg">
//                   <img src="/icon-visual.svg" alt="" />
//                   <span className="text-cobalt-blue-default">Visual</span>
//                 </div>
//                 <div>
//                   72 <span className="text-gray-500">/ 100</span>
//                 </div>
//               </li>
//             </ul>

//             <button className="bg-dark-gray-blue px-4 py-2 text-pale-blue rounded-3xl w-full text-sm">Continue</button>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Home;

// src/Home.js

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {

  return (
    <HelmetProvider>
      <>
        <Helmet>
            <title>Challenge</title>
            <meta name="description" content="Generated by create-t3-app" />
            <link rel="icon" href="./../public/images/favicon-32x32.png" />
        </Helmet>
        <main className="flex min-h-screen flex-col items-center justify-center bg-pale-blue font-hanken">
          <div className="bg-white w-[430px] h-[300px] rounded-3xl flex sm:flex-col sm:w-full sm:h-screen">
            <aside className="bg-gradient-to-b from-slate-blue-light to-slate-blue-dark w-1/2 rounded-3xl flex flex-col justify-between items-center gap-4 px-4 py-8 sm:w-full sm:px-16 sm:h-3/4 sm:rounded-t-none">
              <div className="text-gray-300 text-sm font-bold">Your Result</div>
              <div className="flex items-center flex-col justify-center text-white bg-gradient-to-b from-violet-blue to-slate-blue-dark w-32 h-32 rounded-full gap-2">
                <span className="text-4xl font-bold">76</span>
                <span className="text-xs text-gray-400">of 100</span>
              </div>
              <div className="flex flex-col gap-2 text-center px-4">
                <div className="text-white text-xl">Great</div>
                <div className="text-gray-300 text-center text-xs">
                  You scored higher than 65% of the people who have taken these tests.
                </div>
              </div>
            </aside>

            <div className="px-4 py-4 flex flex-col w-1/2 justify-between gap-2 sm:w-full sm:gap-4">
              <h1 className="text-lg font-bold">Summary</h1>

              <ul className="flex flex-col gap-3">
                <li className="bg-light-red-light flex justify-between p-2 text-sm rounded-lg">
                  <div className="flex gap-2">
                    <img src="./../images/icon-reaction.svg" alt="" />
                    <span className="text-light-red-default">Reaction</span>
                  </div>
                  <div>
                    80 <span className="text-gray-500">/ 100</span>
                  </div>
                </li>

                <li className="bg-orangey-yellow-light flex justify-between p-2 text-sm rounded-lg">
                  <div className="flex gap-2">
                    <img src="./../images/icon-memory.svg" alt="" />
                    <span className="text-orangey-yellow-default">Memory</span>
                  </div>
                  <div>
                    92 <span className="text-gray-500">/ 100</span>
                  </div>
                </li>

                <li className="bg-green-teal-light flex justify-between p-2 text-sm rounded-lg">
                  <div className="flex gap-2">
                    <img src="./../images/icon-verbal.svg" alt="" />
                    <span className="text-green-teal-default">Verbal</span>
                  </div>
                  <div>
                    61 <span className="text-gray-500">/ 100</span>
                  </div>
                </li>

                <li className="bg-cobalt-blue-light flex justify-between p-2 text-sm rounded-lg">
                  <div className="flex gap-2">
                    <img src="./../images/icon-visual.svg" alt="" />
                    <span className="text-cobalt-blue-default">Visual</span>
                  </div>
                  <div>
                    72 <span className="text-gray-500">/ 100</span>
                  </div>
                </li>
              </ul>

              <button className="bg-dark-gray-blue px-4 py-2 text-pale-blue rounded-3xl w-full text-sm transition-all duration-700 ease-in-out hover:bg-gradient-to-b hover:from-slate-blue-light hover:to-slate-blue-dark hover:scale-95">Continue</button>
            </div>
          </div>
        </main>
      </>
    </HelmetProvider>
  );
}

export default Home;