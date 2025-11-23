'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function StoryPage() {
  useEffect(() => {
    document.body.classList.add('whiteboard-page-black');
    return () => {
      document.body.classList.remove('whiteboard-page-black');
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .story-page-container {
          font-family: 'Montserrat', sans-serif;
          background: #F1F2F2;
          min-height: 100vh;
        }
        
        .story-container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .story-header {
          background: #00391F;
          color: #F5ED60;
          padding: 3rem 2.5rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        
        .story-header::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          border: 40px solid #F5ED60;
          border-radius: 50%;
          opacity: 0.2;
        }
        
        .story-logo {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        
        .story-header h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 1;
        }
        
        .story-date {
          font-size: 1.1rem;
          opacity: 0.9;
          position: relative;
          z-index: 1;
        }
        
        .story-content {
          padding: 3rem 2.5rem;
        }
        
        .story-content p {
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
          line-height: 1.8;
          color: #231F20;
        }
        
        .story-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 2.5rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          display: block;
        }
        
        .image-caption {
          text-align: center;
          font-size: 0.9rem;
          color: #666;
          font-style: italic;
          margin-top: -1.5rem;
          margin-bottom: 2rem;
        }
        
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          margin: 2.5rem 0;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          background: #000;
        }
        
        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
        
        .video-caption {
          text-align: center;
          font-size: 0.95rem;
          color: #00391F;
          font-weight: 600;
          margin-top: 0.75rem;
          margin-bottom: 2rem;
        }
        
        .milestone-box {
          background: #F5ED60;
          padding: 2rem;
          border-radius: 8px;
          margin: 2.5rem 0;
          border-left: 4px solid #00391F;
        }
        
        .milestone-box p {
          margin-bottom: 0;
          font-weight: 600;
          font-size: 1.1rem;
          color: #00391F;
        }
        
        .story-content strong {
          font-weight: 800;
          color: #00391F;
        }
        
        .closing {
          background: linear-gradient(135deg, #00391F 0%, #004d28 100%);
          color: white;
          padding: 2.5rem;
          margin-top: 3rem;
          border-radius: 8px;
          text-align: center;
        }
        
        .closing p {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 0;
        }
        
        .closing-emphasis {
          margin-top: 1.5rem;
        }
        
        .closing-thanks {
          margin-top: 1.5rem;
          font-size: 1.3rem;
          color: #F5ED60;
        }
        
        @media (max-width: 640px) {
          .story-header {
            padding: 2rem 1.5rem;
          }
          
          .story-header h1 {
            font-size: 2rem;
          }
          
          .story-content {
            padding: 2rem 1.5rem;
          }
          
          .story-content p {
            font-size: 1rem;
          }
          
          .story-logo {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="story-page-container">
        <div className="story-container">
          <div className="story-header">
            <div className="story-logo">🐵</div>
            <h1>Our Story</h1>
            <p className="story-date">October 30, 2025</p>
          </div>

          <div className="story-content">
            <p>Takeoff Monkey was founded by Tommy Lather in 2019 in Winston Salem, North Carolina. Tommy has worked in landscape construction since he was a teenager, and spent most of his career working in a sales & estimating capacity in Austin, Texas. During that time, Tommy experienced the bottleneck of the commercial estimating process: the takeoff. A takeoff is the process of scouring through construction drawings, aka 'blueprints', scaling, counting, and measuring all of the necessary materials for a given scope of work. In Tommy's case, this involved counting an untold number of trees, plants, shrubs, sprinkler heads, concrete pavers, furnishings, etc. This process, while extremely time-consuming and tedious, is critical to the success of a project. An inaccurate takeoff can lead to enormous financial loss if under-counted, or an artificially high bid, costing the company the contract, if over-counted. Performing this task is a catch 22. The process is so time consuming and mind-numbing, companies are sometimes inclined to assign it to inexperienced and less costly employees. However, it takes a seasoned, experienced eye to execute accurately. On the other hand, your seasoned industry veterans are likely not going to be happy performing takeoffs all day every day.</p>

            <img src="/story/first_office.jpg" alt="Tommy's first office" className="story-image" loading="lazy" width="800" height="600" />
            <p className="image-caption">The original office - where it all began (2019)</p>

            <p>Tommy connected with a small team overseas and began training them… One job, one scope at a time. After some years, Tommy was able to deliver more than twice the number of bids in the same amount of time, with the same, or higher level of accuracy.</p>

            <p>In 2018, Tommy left Texas and relocated to North Carolina. Once there, he began receiving requests from former co-workers, old friends, and ex-competitors to assist with their estimating efforts. Tommy started saying 'yes', and <strong>incorporated in February of 2019</strong>. Our very first customer was Landscape Hub, an online marketplace of nursery material to the commercial construction industry. Landscape Hub began offering free takeoff services to their customers in an effort to capture more business. The value to Landscape Hub and its customers was obvious and immediate. Who wouldn't want to cut extensive hours of tedious manual work out of their day?</p>

            <img src="/story/travel4.jpg" alt="Tommy with Landscape Hub founder" className="story-image" loading="lazy" width="800" height="600" />
            <p className="image-caption">Tommy with the owner of Landscape Hub - our very first customer</p>

            <div className="video-container">
              <iframe 
                src="https://www.youtube.com/embed/41TXpoKLyuk?si=UeAH4z0xtIsk3A9W" 
                title="First Explainer Video" 
                loading="lazy" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-caption">🎬 Our First Explainer Video</p>

            <p>Tommy continued expanding his customer base, both through cold calls, and by connecting with his existing and well-established network. Little by little, page by page, Takeoff Monkey grew. When covid appeared in 2020, the concept of remote workers "clicked" for much of the company's audience. Customers' W2 employees were now successfully working remote, which eliminated a lot of hesitation around the idea, paving the way to further Takeoff Monkey's success. By the end of 2020, Tommy began exploring the possibility of raising capital to grow the business.</p>

            <div className="milestone-box">
              <p>💰 In early 2021 Takeoff Monkey caught the attention of a small industry-run fund owned by members of the leadership team at Ruppert Landscape, one of the largest and most reputable landscape contractors in the U.S.</p>
            </div>

            <p>This partnership provided not only capital but also deep industry insight, industry credibility, and allowed for expansion across operations, technology, and market reach.</p>

            <p>By the end of 2022, Tommy had caught the attention of yet another investor. This time from a former client and experienced entrepreneur who had recently exited his own business. With the latest backing and proven market traction, Takeoff Monkey refined its platform, scaling its customer base, and became a leading estimating solution in the landscape industry.</p>

            <img src="/story/coozies.jpg" alt="Original Takeoff Monkey koozies" className="story-image" loading="lazy" width="800" height="600" />
            <p className="image-caption">The original Takeoff Monkey koozies with our first logo</p>

            <p>In 2023 Takeoff Monkey introduced its dedicated resource pricing model; a flat monthly 12-month 'subscription'. Before 2023, Takeoff Monkey's revenue was entirely per-project. As an added incentive to switch to the subscription model, Takeoff Monkey introduced custom bid boards to each of their subscription customers. The bid boards initially acted as a portal for customers to send, receive, and get updates on projects which Takeoff Monkey had in the works. Not only was this a major hit with customers, it eliminated manual steps that the Takeoff Monkey team would otherwise have to take to get a project into their queue. As these boards amassed customer data, insightful analytics became available into customer behavior, customers' clients', win rates, productivity, and more. Gradually, these 'bid boards' became a centralized hub for Takeoff Monkey customers' entire pre-construction staff: bid calendar, forecasting, vendor pricing solicitation, CRM, just to name a few of the new purposes the bid boards served.</p>

            <img src="/story/major_milestone1.jpg" alt="First $100k month celebration" className="story-image" loading="lazy" width="800" height="600" />
            <p className="image-caption">🎉 Celebrating our first $100k month!</p>

            <p><strong>The bid boards were a major 'lightbulb moment' for Tommy.</strong> Tommy realized that not a single one of his customers had a CRM. Most customers used excel, or outlook to manage their bid tracking & bid calendar. Many customers were going off their 'gut' on their estimators' productivity, guessing at their win-rates, and accepting invitations to bid based on a 'feeling' instead of data. There was too much opportunity here to ignore.</p>

            <p>By mid-2023 Tommy and his team built out the necessary technology and operations needed to support its growing customer base. As a result, Takeoff Monkey entered a high-growth phase and solidified its position as the go-to estimating solution in the landscape industry. As the workload steadily increased, surpassing six-figures per month, the smallest efficiencies through automation became valuable. The company was able to deploy internal 'widgets' that turned small, but time-consuming processes into a streamlined effort, saving the company hundreds of hours of manual labor per week, and reducing the margin for error to at or very near zero.</p>

            <div className="video-container">
              <iframe 
                src="https://www.youtube.com/embed/xqq_oS7vH-Y?si=sZ-64PRMD_NV3Jx6" 
                title="Famous Intro Video" 
                loading="lazy" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-caption">🎥 Our Famous Intro Video</p>

            <img src="/story/video4.jpg" alt="Film crew after 16-hour shoot" className="story-image" loading="lazy" width="800" height="600" />
            <p className="image-caption">The film crew after a grueling 16-hour shoot</p>

            <img src="/story/video5.jpg" alt="Another shot from filming" className="story-image" loading="lazy" width="800" height="600" />
            <p className="image-caption">Behind the scenes - creating content that tells our story</p>

            <p>For the next two years, Tommy and his growing team learned, experimented, and employed various third party applications and middleware to automate as much of the business as possible. Always making customer experience and employee efficiency top priority. It was during this period that Tommy learned the shortcomings of many commonly-used platforms, gained a tremendous amount of knowledge of customer behaviors & patterns, and began to shape the idea for Takeo. If only there was one piece of software that could perform the functions of the dozens of third party applications and homegrown widgets the company had built and connected…</p>

            <p>The idea for Takeo began to take shape in early 2025, and by mid-year was a clear and obvious vision. Through the help of Marc, Janine, and Kerosene Ventures, here we are!</p>

            <div className="closing">
              <p><strong>Poised and ready to revolutionize the construction industry for subcontractors, putting powerful, accessible technology into the hands of the hundreds of thousands of contractors who build our country.</strong></p>
              <p className="closing-emphasis">Together, we'll level the playing field, giving subcontractors the same (or more) technological horsepower as their general contractor clients, adding endless efficiency to pre-construction departments across North America, and improving the quality of life in an otherwise chaotic, fragmented industry.</p>
              <p className="closing-thanks">Thank you for reading! 🐵</p>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', padding: '3rem 0', background: '#F1F2F2' }}>
          <Link 
            href="/whiteboard" 
            style={{ 
              fontSize: '1.1rem', 
              fontWeight: '600', 
              color: '#00391F',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Whiteboard
          </Link>
        </div>
      </div>
    </>
  );
}
