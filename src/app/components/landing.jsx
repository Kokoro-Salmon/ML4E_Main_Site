import React from 'react'
import './landing.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Landing() {
  return (
    <>
    <div className="header">
      {/* Logo and Title */}
      <div className="logo-title">
        <Image src="/ML4E.png" width={63.56} height={63.48} alt="ML4Everyone Logo" />
        <p className="title">ML4Everyone</p>
      </div>
      {/* Navigation Links */}
      <div className="nav-links">
        <Link href="/project" className="link">Project</Link>
        <Link href="/about" className="link">About Us</Link>
        <Link href="/resources" className="link">Resources</Link>
        <Link href="/contact" className="link">Contact Us</Link>
      </div>
      {/* Secondary Logo */}
      <div className="secondary-logo">
        <Image src="/NITR.png" alt="NITR Logo" width={61.29} height={64.44} />
      </div>
    </div>
    <div className="hero">
      <h1>ML4E</h1>
    
    <div className="wrapper">
      
      <p >The Future of</p>
      <div className='words'>
        <span>IOT</span>
        <span>ML</span>
        <span>IOT</span>
        <span>ML</span>
        <span>IOT</span>
      </div>
      </div>
      </div>
      </>
    )
}
