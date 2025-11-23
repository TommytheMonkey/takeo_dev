'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function StoryPage() {
  useEffect(() => {
    document.body.classList.add('whiteboard-page-black');
    return () => {
      document.body.classList.remove('whiteboard-page-black');
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="w-full bg-black pt-12 pb-8 md:pt-16 md:pb-12">
        <div className="flex justify-center">
          <Link href="/whiteboard">
            <img 
              src="/tkm-logo-white.png" 
              alt="Takeoff Monkey" 
              className="h-32 md:h-40 lg:h-48 w-auto cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="px-6 py-8 md:px-12 md:py-12">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
              Takeo: pre-construction, unjammed
            </h1>
            
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-base">
              <a 
                href="/TOM_Deck_2025_10_30.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                See the deck
              </a>
              <Link 
                href="/whiteboard/story" 
                className="font-bold text-[#E9E44C] underline transition-all duration-150"
              >
                Our Story
              </Link>
              <a 
                href="/platform-overview.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                Platform Overview
              </a>
              <Link 
                href="/whiteboard/widgets" 
                className="font-bold text-white hover:text-[#E9E44C] hover:underline transition-all duration-150"
              >
                Demo
              </Link>
            </nav>
          </header>

          <article className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🐵</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Our Story</h2>
              <p className="text-lg text-gray-400">October 30, 2025</p>
            </div>
            
            <div className="text-white text-base md:text-lg leading-relaxed space-y-6">
              <div className="float-left mr-6 mb-6 w-64 md:w-80">
                <Image
                  src="/tommy-lather.jpg"
                  alt="Tommy Lather"
                  width={320}
                  height={400}
                  className="rounded-lg w-full h-auto shadow-xl"
                />
              </div>

              <p>
                Takeoff Monkey was founded by Tommy Lather in 2019 in Winston Salem, North Carolina. Tommy has worked in landscape construction since he was a teenager, and spent most of his career working in a sales & estimating capacity in Austin, Texas. During that time, Tommy experienced the bottleneck of the commercial estimating process: the takeoff. A takeoff is the process of scouring through construction drawings, aka blueprints, scaling, counting, and measuring all of the necessary materials for a given scope of work. In Tommy's case, this involved counting an untold number of trees, plants, shrubs, sprinkler heads, concrete pavers, furnishings, etc. This process, while extremely time-consuming and tedious, is critical to the success of a project. An inaccurate takeoff can lead to enormous financial loss if under-counted, or an artificially high bid, costing the company the contract, if over-counted. Performing this task is a catch 22. The process is so time consuming and mind-numbing, companies are sometimes inclined to assign it to inexperienced and less costly employees. However, it takes a seasoned, experienced eye to execute accurately. On the other hand, your seasoned industry veterans are likely not going to be happy performing takeoffs all day every day.
              </p>

              <div className="clear-both"></div>

              <Image
                src="/story/first_office.jpg"
                alt="Tommy's first office"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto shadow-xl my-8"
              />
              <p className="text-center text-sm text-gray-400 italic -mt-4 mb-8">
                The original office - where it all began (2019)
              </p>

              <p>
                Tommy connected with a small team overseas and began training them… One job, one scope at a time. After some years, Tommy was able to deliver more than twice the number of bids in the same amount of time, with the same, or higher level of accuracy.
              </p>

              <p>
                In 2018, Tommy left Texas and relocated to North Carolina. Once there, he began receiving requests from former co-workers, old friends, and ex-competitors to assist with their estimating efforts. Tommy started saying yes, and <strong className="font-bold text-[#E9E44C]">incorporated in February of 2019</strong>. Our very first customer was Landscape Hub, an online marketplace of nursery material to the commercial construction industry. Landscape Hub began offering free takeoff services to their customers in an effort to capture more business. The value to Landscape Hub and its customers was obvious and immediate. Who wouldn't want to cut extensive hours of tedious manual work out of their day?
              </p>

              <Image
                src="/story/travel4.jpg"
                alt="Tommy with Landscape Hub founder"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto shadow-xl my-8"
              />
              <p className="text-center text-sm text-gray-400 italic -mt-4 mb-8">
                Tommy with the owner of Landscape Hub - our very first customer
              </p>

              <div className="my-10">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/41TXpoKLyuk?si=UeAH4z0xtIsk3A9W"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
                <p className="text-center text-base font-semibold text-[#E9E44C] mt-3 mb-8">
                  🎬 Our First Explainer Video
                </p>
              </div>

              <p>
                Tommy continued expanding his customer base, both through cold calls, and by connecting with his existing and well-established network. Little by little, page by page, Takeoff Monkey grew. When covid appeared in 2020, the concept of remote workers "clicked" for much of the company's audience. Customers' W2 employees were now successfully working remote, which eliminated a lot of hesitation around the idea, paving the way to further Takeoff Monkey's success. By the end of 2020, Tommy began exploring the possibility of raising capital to grow the business.
              </p>

              <div className="bg-[#E9E44C] p-6 md:p-8 rounded-lg my-8 border-l-4 border-[#00391F]">
                <p className="font-semibold text-lg text-[#00391F] mb-0">
                  💰 In early 2021 Takeoff Monkey caught the attention of a small industry-run fund owned by members of the leadership team at Ruppert Landscape, one of the largest and most reputable landscape contractors in the U.S.
                </p>
              </div>

              <p>
                This partnership provided not only capital but also deep industry insight, industry credibility, and allowed for expansion across operations, technology, and market reach.
              </p>

              <p>
                By the end of 2022, Tommy had caught the attention of yet another investor. This time from a former client and experienced entrepreneur who had recently exited his own business. With the latest backing and proven market traction, Takeoff Monkey refined its platform, scaling its customer base, and became a leading estimating solution in the landscape industry.
              </p>

              <Image
                src="/story/coozies.jpg"
                alt="Original Takeoff Monkey koozies"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto shadow-xl my-8"
              />
              <p className="text-center text-sm text-gray-400 italic -mt-4 mb-8">
                The original Takeoff Monkey koozies with our first logo
              </p>

              <p>
                In 2023 Takeoff Monkey introduced its dedicated resource pricing model; a flat monthly 12-month subscription. Before 2023, Takeoff Monkey's revenue was entirely per-project. As an added incentive to switch to the subscription model, Takeoff Monkey introduced custom bid boards to each of their subscription customers. The bid boards initially acted as a portal for customers to send, receive, and get updates on projects which Takeoff Monkey had in the works. Not only was this a major hit with customers, it eliminated manual steps that the Takeoff Monkey team would otherwise have to take to get a project into their queue. As these boards amassed customer data, insightful analytics became available into customer behavior, customers' clients, win rates, productivity, and more. Gradually, these bid boards became a centralized hub for Takeoff Monkey customers' entire pre-construction staff: bid calendar, forecasting, vendor pricing solicitation, CRM, just to name a few of the new purposes the bid boards served.
              </p>

              <Image
                src="/story/major_milestone1.jpg"
                alt="First $100k month celebration"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto shadow-xl my-8"
              />
              <p className="text-center text-sm text-gray-400 italic -mt-4 mb-8">
                🎉 Celebrating our first $100k month!
              </p>

              <p>
                <strong className="font-bold text-[#E9E44C]">The bid boards were a major lightbulb moment for Tommy.</strong> Tommy realized that not a single one of his customers had a CRM. Most customers used excel, or outlook to manage their bid tracking & bid calendar. Many customers were going off their gut on their estimators' productivity, guessing at their win-rates, and accepting invitations to bid based on a feeling instead of data. There was too much opportunity here to ignore.
              </p>

              <p>
                By mid-2023 Tommy and his team built out the necessary technology and operations needed to support its growing customer base. As a result, Takeoff Monkey entered a high-growth phase and solidified its position as the go-to estimating solution in the landscape industry. As the workload steadily increased, surpassing six-figures per month, the smallest efficiencies through automation became valuable. The company was able to deploy internal widgets that turned small, but time-consuming processes into a streamlined effort, saving the company hundreds of hours of manual labor per week, and reducing the margin for error to at or very near zero.
              </p>

              <div className="my-10">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/xqq_oS7vH-Y?si=sZ-64PRMD_NV3Jx6"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
                <p className="text-center text-base font-semibold text-[#E9E44C] mt-3 mb-8">
                  🎥 Our Famous Intro Video
                </p>
              </div>

              <Image
                src="/story/video4.jpg"
                alt="Film crew after 16-hour shoot"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto shadow-xl my-8"
              />
              <p className="text-center text-sm text-gray-400 italic -mt-4 mb-8">
                The film crew after a grueling 16-hour shoot
              </p>

              <Image
                src="/story/video5.jpg"
                alt="Another shot from filming"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto shadow-xl my-8"
              />
              <p className="text-center text-sm text-gray-400 italic -mt-4 mb-8">
                Behind the scenes - creating content that tells our story
              </p>

              <p>
                For the next two years, Tommy and his growing team learned, experimented, and employed various third party applications and middleware to automate as much of the business as possible. Always making customer experience and employee efficiency top priority. It was during this period that Tommy learned the shortcomings of many commonly-used platforms, gained a tremendous amount of knowledge of customer behaviors & patterns, and began to shape the idea for Takeo. <span className="bg-[#E9E44C] px-2 py-1 rounded font-semibold text-black">Takeo became the obvious next evolution of the company.</span>
              </p>

              <p>
                The idea for Takeo began to take shape in early 2025, and by mid-year was a clear and obvious vision. Through the help of Marc, Janine, and Kerosene Ventures, here we are!
              </p>

              <div className="bg-gradient-to-br from-[#00391F] to-[#004d28] p-8 md:p-10 rounded-lg my-10 border-l-4 border-[#E9E44C] text-center">
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  <strong className="text-[#E9E44C]">Poised and ready to revolutionize the construction industry for subcontractors, putting powerful, accessible technology into the hands of the hundreds of thousands of contractors who build our country.</strong>
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Together, we'll level the playing field, giving subcontractors the same (or more) technological horsepower as their general contractor clients, adding endless efficiency to pre-construction departments across North America, and improving the quality of life in an otherwise chaotic, fragmented industry.
                </p>
                <p className="text-2xl text-[#E9E44C] font-semibold">
                  Thank you for reading! 🐵
                </p>
              </div>
            </div>
          </article>

          <div className="text-center mt-12">
            <Link 
              href="/whiteboard" 
              className="text-lg font-semibold hover:text-[#E9E44C] transition-colors inline-flex items-center gap-2 text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Whiteboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
