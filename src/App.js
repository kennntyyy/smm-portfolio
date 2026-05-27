import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioSamples = [
    {
      src: '/Screenshot 2026-05-27 123931.png',
      title: 'Event Promotion: LET Recognition Ceremony',
      description: 'Video promotion for "Practice Teachers\' Pinning Ceremony and Recognition of 2023 LET Passers." Highlighted event details with professional branding.',
      meta: 'Facebook | Video Post'
    },
    {
      src: '/Screenshot 2026-05-27 123856.png',
      title: 'Workshop Promotion: Photography & Videography',
      description: 'Professional flyer design for a full-day workshop with speaker photo, schedule, focus points, and call-to-action. Drove event registration.',
      meta: 'Facebook | Promotional Design'
    },
    {
      src: '/Screenshot 2026-05-27 123830.png',
      title: 'Event Highlight Carousel: Cristal e-College Palaro 2024',
      description: 'Carousel post showcasing event highlights with professional photography, engaging visuals, and strong community reach and participation.',
      meta: 'Facebook | Carousel Post'
    },
    {
      src: '/Screenshot 2026-05-27 124000.png',
      title: 'Club Recruitment Campaign',
      description: 'Informational post with QR code for Ce-C Symmetrical Multimedia Club. Highlighted skills development, opportunities, and community benefits.',
      meta: 'Facebook | Recruitment Post'
    }
  ];
  return (
    <div className="portfolio">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>Kent Paul Vergara</h1>
          <h2>Strategic Social Media Manager | Virtual Assistant | Content Creator</h2>
          <p className="hero-summary">
            Professional social media specialist focused on content strategy, audience
            engagement, brand consistency, and client support.
          </p>

          <div className="hero-tags">
            <span>Content Strategy</span>
            <span>Community Engagement</span>
            <span>Analytics Reporting</span>
            <span>Platform Management</span>
          </div>
        </div>

        <div className="profile-placeholder card">
          <img src="/20250919_144901_005.jpg" alt="Kent Paul Vergara - Professional headshot" className="profile-image" />
        </div>
      </header>

      <section className="grid two-col">
        <div className="card">
          <h3>Professional Summary</h3>
          <p>
            I'm a dedicated social media manager with a passion for building authentic brand connections and driving measurable results. I specialize in creating strategic content that resonates with audiences while maintaining brand consistency across all platforms.
          </p>
          <p style={{marginTop: '0.8rem'}}>
            With expertise in content planning, platform management, and data-driven optimization, I help businesses grow their online presence through organized, consistent posting and engagement strategies. I take pride in delivering quality work that reflects my clients' values and drives real business impact.
          </p>
        </div>

        <div className="card">
          <h3>Core Services</h3>
          <ul className="clean-list">
            <li>Social media content planning and scheduling</li>
            <li>Caption writing and brand voice development</li>
            <li>Community management and audience engagement</li>
            <li>Performance reporting and optimization</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h3>My Background & Expertise</h3>
        </div>
        <div className="card">
          <p>
            I have experience managing social media for clients in the industry, including content scheduling, engagement, and analytics. My strongest skills include content planning, platform management, and reporting. I bring value by staying organized, posting consistently, and using data to improve results.
          </p>
          <p style={{marginTop: '1rem', fontSize: '0.95rem', color: '#5fb3b0', fontWeight: '500'}}>
            <strong>Education:</strong> Bachelor of Science in Information Technology
          </p>
          <p style={{marginTop: '1.25rem', color: '#5fb3b0', fontWeight: '500'}}>
            I'm dedicated to helping businesses build authentic connections with their audiences through strategic, data-driven social media management.
          </p>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Leadership & Management Experience</p>
          <h3>Page Management & Community Leadership</h3>
        </div>
        <div className="grid two-col">
          <div className="card highlight">
            <h4>Ce-C Symmetrical Multimedia Club</h4>
            <p><strong>President</strong> | 2023 – 2025</p>
            <p>
              Led club initiatives, supported team collaboration, and helped guide multimedia
              projects with a focus on creativity, professionalism, and consistent execution.
            </p>
          </div>
          <div className="card highlight">
            <h4>Bible Baptist Bohol</h4>
            <p><strong>Page Manager & Content Creator</strong> | April 2026 – Present</p>
            <p>
              Managing active Facebook page with strategic content planning and community engagement.
              Delivered 343.3K views (↑84.3%), 13.4K interactions (↑249.5%), and 173.3K organic reach (↑375.9%) in 4 weeks.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Training Highlight</p>
          <h3>Ascension Business Solutions, LLC (ABS)</h3>
        </div>
        <div className="card highlight">
          <p><strong>Social Media Management Training</strong></p>
          <ul className="clean-list">
            <li>Content planning and scheduling</li>
            <li>Client communication and professionalism</li>
            <li>Analytics tracking and reporting</li>
            <li>HIPAA compliance and data privacy awareness</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Featured Work</p>
          <h3>Live Client Case Study: Bible Baptist Bohol</h3>
        </div>

        <div className="card">
          <p style={{fontSize: '0.9rem', color: '#7a8a94', marginBottom: '1.5rem'}}><strong>Client:</strong> Bible Baptist Bohol | <strong>Duration:</strong> Ongoing | <strong>Date Range:</strong> April 29 – May 26, 2026 | <strong>My Role:</strong> Page Manager & Content Creator</p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem'}}>
            <img src="/Screenshot 2026-05-27 125021.png" alt="Facebook Content Overview - Views and engagement metrics" style={{width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid #d8e8e8'}} />
            <img src="/Screenshot 2026-05-27 125043.png" alt="Facebook Performance Analytics - Views, interactions, and follows" style={{width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid #d8e8e8'}} />
            <img src="/Screenshot 2026-05-27 125056.png" alt="Active Campaign Performance - Music Ministers post" style={{width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid #d8e8e8'}} />
            <img src="/Screenshot 2026-05-27 125115.png" alt="Active Campaign Performance - ThruPlays post" style={{width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid #d8e8e8'}} />
            <img src="/Screenshot 2026-05-27 125143.png" alt="Weekly Activity Summary and insights" style={{width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid #d8e8e8'}} />
          </div>

          <div style={{backgroundColor: '#f3faf9', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #5fb3b0'}}>
            <p style={{fontSize: '0.9rem', color: '#4f6470', margin: '0'}}><strong>Key Results Achieved:</strong></p>
            <ul style={{fontSize: '0.9rem', color: '#4f6470', margin: '0.5rem 0 0 1rem', lineHeight: '1.7'}}>
              <li>343.3K total views (↑84.3% growth)</li>
              <li>13.4K content interactions (↑249.5% growth)</li>
              <li>173.3K organic reach (↑375.9%)</li>
              <li>86.4K reach in last week alone</li>
              <li>1.7K active followers (organic growth)</li>
              <li>7.1K Facebook page visits (↑19.6%)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Other Portfolio Samples</p>
          <h3>Ce-C Symmetrical Multimedia Club Work</h3>
        </div>

        <div className="work-grid">
          {portfolioSamples.map((sample, index) => (
            <article 
              key={index} 
              className="card work-card"
              onClick={() => setSelectedImage(sample)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={sample.src} 
                alt={sample.title} 
                className="work-image" 
              />
              <h4>{sample.title}</h4>
              <p>{sample.description}</p>
              <p className="work-meta"><strong>Platform:</strong> {sample.meta}</p>
            </article>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
          </div>
        </div>
      )}

      <section className="grid two-col">
        <div className="card">
          <h3>Skills & Tools</h3>
          <ul className="clean-list">
            <li>Canva / Adobe Express</li>
            <li>Meta Business Suite</li>
            <li>Content writing and editing</li>
            <li>Scheduling and workflow organization</li>
            <li>Basic analytics and reporting</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Get in Touch</p>
          <h3>Contact & Availability</h3>
        </div>
        <div className="contact-info card">
          <div style={{marginBottom: '1.5rem'}}>
            <h4 style={{marginBottom: '0.5rem', color: '#2f5f68'}}>Email</h4>
            <p style={{color: '#5fb3b0', fontSize: '1.05rem', fontWeight: '500'}}>kp.vergz@gmail.com</p>
          </div>
          <div>
            <h4 style={{marginBottom: '0.5rem', color: '#2f5f68'}}>Available For</h4>
            <p>Homecare, healthcare, and small business social media management</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;