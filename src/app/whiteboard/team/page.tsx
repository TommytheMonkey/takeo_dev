'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function TeamPage() {
  useEffect(() => {
    document.body.classList.add('whiteboard-page-black');
    return () => {
      document.body.classList.remove('whiteboard-page-black');
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .team-page-header {
          background: #00391F;
          color: #F5ED60;
          padding: 2rem 2.5rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .team-page-header::before {
          content: '';
          position: absolute;
          left: -100px;
          top: -100px;
          width: 300px;
          height: 300px;
          border: 60px solid #F5ED60;
          border-radius: 50%;
          opacity: 0.1;
        }

        .team-page-header::after {
          content: '';
          position: absolute;
          right: -80px;
          bottom: -80px;
          width: 250px;
          height: 250px;
          border: 50px solid #F5ED60;
          border-radius: 50%;
          opacity: 0.1;
        }

        .team-logo {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .team-page-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 1;
        }

        .team-subtitle {
          font-size: 1.1rem;
          font-weight: 400;
          opacity: 0.9;
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto;
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
          background: #F1F2F2;
          min-height: 100vh;
        }

        .section-label {
          font-size: 0.85rem;
          font-weight: 800;
          color: #00391F;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .section-label::after {
          content: '';
          flex: 1;
          height: 2px;
          background: #00391F;
          opacity: 0.2;
        }

        .founder-section {
          margin-bottom: 3rem;
        }

        .founder-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          display: grid;
          grid-template-columns: 300px 1fr;
        }

        .founder-image {
          background: linear-gradient(135deg, #00391F 0%, #004d28 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 380px;
          padding: 2rem;
        }

        .founder-photo {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          border: 6px solid #F5ED60;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .founder-content {
          padding: 2.5rem;
        }

        .member-name {
          font-size: 1.75rem;
          font-weight: 800;
          color: #00391F;
          margin-bottom: 0.25rem;
        }

        .member-title {
          font-size: 1rem;
          font-weight: 600;
          color: #00391F;
          opacity: 0.7;
          margin-bottom: 1rem;
        }

        .member-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #231F20;
          opacity: 0.7;
        }

        .member-bio {
          font-size: 1rem;
          line-height: 1.8;
          color: #231F20;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .team-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .card-header {
          background: linear-gradient(135deg, #00391F 0%, #004d28 100%);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .card-photo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          flex-shrink: 0;
          border: 3px solid #F5ED60;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .card-avatar {
          width: 80px;
          height: 80px;
          background: #F5ED60;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: #00391F;
          font-weight: 800;
          flex-shrink: 0;
          border: 3px solid rgba(255,255,255,0.2);
        }

        .card-title-group {
          color: white;
        }

        .card-name {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .card-role {
          font-size: 0.9rem;
          opacity: 0.85;
          font-weight: 600;
        }

        .card-body {
          padding: 1.5rem;
        }

        .card-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .card-bio {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #231F20;
        }

        .cta-section {
          background: #F5ED60;
          padding: 3rem 2rem;
          text-align: center;
          margin-top: 3rem;
        }

        .cta-section h2 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #00391F;
          margin-bottom: 1rem;
        }

        .cta-section p {
          font-size: 1.1rem;
          color: #231F20;
          max-width: 600px;
          margin: 0 auto 1.5rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #00391F;
          color: #F5ED60;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 800;
          text-decoration: none;
          font-size: 1rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .back-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 57, 31, 0.3);
        }

        @media (max-width: 768px) {
          .team-page-header {
            padding: 1.5rem;
          }

          .team-page-header h1 {
            font-size: 2rem;
          }

          .team-container {
            padding: 2rem 1rem;
          }

          .founder-card {
            grid-template-columns: 1fr;
          }

          .founder-image {
            min-height: 250px;
          }

          .founder-photo {
            width: 160px;
            height: 160px;
          }

          .founder-content {
            padding: 1.5rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="team-page-header">
        <div className="team-logo">
          <Link href="/whiteboard" style={{ color: '#F5ED60', textDecoration: 'none' }}>
            🐵 TAKEOFF MONKEY
          </Link>
        </div>
        <h1>Meet Our Team</h1>
        <p className="team-subtitle">The passionate people behind Takeoff Monkey, bringing decades of landscape industry expertise to revolutionize preconstruction.</p>
      </div>

      <div className="team-container">
        {/* Founder Section */}
        <div className="founder-section">
          <div className="section-label">Founder</div>
          <div className="founder-card">
            <div className="founder-image">
              <img src="/team/tommy.jpg" alt="Tommy Lather" className="founder-photo" />
            </div>
            <div className="founder-content">
              <h2 className="member-name">Tommy Lather</h2>
              <p className="member-title">Founder</p>
              <div className="member-meta">
                <span className="meta-item"><span>📍</span> Winston-Salem / Greensboro, NC</span>
                <span className="meta-item"><span>📅</span> Since February 2019</span>
              </div>
              <p className="member-bio">
                Tommy Lather has worked in the green construction industry for over 25 years, gaining deep expertise in every facet of the business—from supply chain and operations management to sales and estimating. Along the way, he discovered a passion for developing and implementing systems and processes that leverage the latest technology to deliver unimaginable efficiencies for his customers.
                <br /><br />
                Over the past four years, Tommy has become a self-taught programmer, diving deep into Python, web application development, data engineering, and automation. This hands-on technical journey—combined with his industry expertise—fuels Takeoff Monkey's mission to build innovative solutions that transform how contractors work.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="section-label">Leadership</div>
        <div className="team-grid">
          <div className="team-card">
            <div className="card-header">
              <img src="/team/logan.jpg" alt="Logan Hart" className="card-photo" />
              <div className="card-title-group">
                <h3 className="card-name">Logan Hart</h3>
                <p className="card-role">Chief Technology Officer</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                <span className="meta-item"><span>📍</span> Falls Church, VA</span>
                <span className="meta-item"><span>📅</span> Since July 2025</span>
              </div>
              <p className="card-bio">
                Logan Hart brings over 20 years of experience in enterprise architecture, cloud computing, and cybersecurity to Takeoff Monkey. A seasoned technology leader, Logan specializes in AI/ML integration, data fabric architecture, digital twins, and DevOps—driving digital transformation initiatives that deliver measurable business impact. His strategic vision and deep technical expertise help shape Takeoff Monkey's platform architecture and long-term technology roadmap.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="card-header">
              <img src="/team/janet.jpg" alt="Janet Lee" className="card-photo" />
              <div className="card-title-group">
                <h3 className="card-name">Janet Lee</h3>
                <p className="card-role">Director of Operations</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                <span className="meta-item"><span>📍</span> Dallas-Fort Worth, TX</span>
                <span className="meta-item"><span>📅</span> Since September 2021</span>
              </div>
              <p className="card-bio">
                Janet's experience in the landscape and horticulture industry began in 1990, building a foundation that spans estimating, construction operations, purchasing, design, sales, and management. A natural leader with a talent for building and managing high-performing teams, Janet brings exceptional people skills and a customer-first mindset to everything she does. She joined Takeoff Monkey in 2021 and oversees daily operations, customer service, production, and quality—ensuring every client receives an outstanding experience.
              </p>
            </div>
          </div>
        </div>

        {/* Production Team Section */}
        <div className="section-label">Production Team</div>
        <div className="team-grid">
          <div className="team-card">
            <div className="card-header">
              <img src="/team/amy.jpg" alt="Amy MacPherson" className="card-photo" />
              <div className="card-title-group">
                <h3 className="card-name">Amy MacPherson</h3>
                <p className="card-role">Production Manager</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                <span className="meta-item"><span>📍</span> Dallas-Fort Worth, TX</span>
                <span className="meta-item"><span>📅</span> Since August 2022</span>
              </div>
              <p className="card-bio">
                Amy transformed her passion for plants early in her career, spending over a decade with a large commercial nursery distributor where she developed an encyclopedic knowledge of plant materials. In the seven years that followed, she became a multi-faceted keystone at a large commercial landscape contracting firm, mastering the intricacies of estimating, operations, and project coordination. Amy joined the Takeoff Monkey crew in 2022 and brings her deep horticultural expertise and sharp eye for detail to every project.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="card-header">
              <img src="/team/leah.jpg" alt="Leah Piatt" className="card-photo" />
              <div className="card-title-group">
                <h3 className="card-name">Leah Piatt</h3>
                <p className="card-role">Production Manager</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                <span className="meta-item"><span>📍</span> Charlotte, NC</span>
                <span className="meta-item"><span>📅</span> Since March 2023</span>
              </div>
              <p className="card-bio">
                Leah began her career in 2019 working for a commercial landscaper, where she quickly learned the critical importance of speed and accuracy in her role as an estimator. Her ability to deliver precise work under tight deadlines made her a standout performer. Since joining Takeoff Monkey in 2023, Leah has leveraged her passion for customer service and technology to consistently exceed client expectations, combining technical precision with a genuine commitment to client success.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="card-header">
              <img src="/team/priscilla.jpg" alt="Priscilla" className="card-photo" />
              <div className="card-title-group">
                <h3 className="card-name">Priscilla</h3>
                <p className="card-role">Production Manager</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                <span className="meta-item"><span>📍</span> Dallas-Fort Worth, TX</span>
                <span className="meta-item"><span>📅</span> Since April 2024</span>
              </div>
              <p className="card-bio">
                Priscilla spent six years in purchasing and estimating for one of the country's largest landscape contractors, where she honed her skills working on complex, high-volume projects. Armed with an exceptionally high level of organization and meticulous attention to detail, she brings a disciplined, systematic approach to every takeoff. Priscilla joined Takeoff Monkey as a Production Manager and has quickly become a tremendous asset to the crew.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="card-header">
              <img src="/team/april.jpg" alt="April Bielamowicz" className="card-photo" />
              <div className="card-title-group">
                <h3 className="card-name">April Bielamowicz</h3>
                <p className="card-role">Production Manager</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                <span className="meta-item"><span>📍</span> Dallas-Fort Worth, TX</span>
                <span className="meta-item"><span>📅</span> Since May 2025</span>
              </div>
              <p className="card-bio">
                April began her career in the landscape industry in 2013, quickly developing a strong foundation in project coordination and client service. Known for her exceptional attention to detail, resourcefulness, and positive attitude, she thrives in fast-paced, deadline-driven environments. April's high level of organization makes her a natural fit for complex projects with demanding timelines. She joined Takeoff Monkey in May 2025 and is excited to contribute her experience and energy to the team.
              </p>
            </div>
          </div>
        </div>

        {/* Technology & Marketing Section */}
        <div className="section-label">Technology & Marketing</div>
        <div className="team-grid">
          <div className="team-card">
            <div className="card-header">
              <img src="/team/konur.jpg" alt="Konur Papageorgiou" className="card-photo" />
              <div className="card-title-group">
                <h3 className="card-name">Konur Papageorgiou</h3>
                <p className="card-role">Developer</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                <span className="meta-item"><span>📍</span> Charlotte, NC</span>
                <span className="meta-item"><span>📅</span> Since April 2023</span>
              </div>
              <p className="card-bio">
                Konur Papageorgiou brings over eight years of programming experience to Takeoff Monkey, with deep expertise in JavaScript, React, Python, C#, and modern web technologies. Before transitioning to software development, Konur sharpened his design sensibilities and collaborative skills working in the film industry as a Production Designer, Script Supervisor, and Assistant Locations Manager. This unique background gives him an exceptional eye for detail and user experience, combined with strong communication skills that make him a highly effective team collaborator.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="card-header">
              <div className="card-avatar">CC</div>
              <div className="card-title-group">
                <h3 className="card-name">Cara Clark</h3>
                <p className="card-role">Marketing Assistant</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                <span className="meta-item"><span>📍</span> West Palm Beach, FL</span>
                <span className="meta-item"><span>📅</span> Since July 2023</span>
              </div>
              <p className="card-bio">
                Cara has become a chameleon of expertise since joining Takeoff Monkey in July 2023, seamlessly adapting to whatever the team needs. With 18 years of leadership experience spanning event planning, marketing, web management, and advertising, she brings a rare versatility that drives success across multiple areas of the business. Her diverse background and can-do attitude make her an invaluable asset to every initiative she touches.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '3rem 2rem', background: '#F1F2F2' }}>
        <Link href="/whiteboard" className="back-link">
          ← Back to Whiteboard
        </Link>
      </div>
    </>
  );
}
