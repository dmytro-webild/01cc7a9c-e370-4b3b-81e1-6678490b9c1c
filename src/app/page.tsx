"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "#hero" },
        { name: "About", id: "#about" },
        { name: "Inventory", id: "#inventory" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="Sri Hari Cars"
      button={{
        text: "View Inventory",        href: "#inventory"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars"}}
      title="Drive Your Dream Home"
      description="Sri Hari Cars brings you a curated selection of premium pre-owned vehicles. Reliability, quality, and service in every drive."
      buttons={[
        {
          text: "Explore Inventory",          href: "#inventory"},
      ]}
      mediaItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2vc1pw", imageAlt: "luxury car dealership interior showroom" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=sf441f", imageAlt: "family car parked on street" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4regq9", imageAlt: "sporty hatchback car fast" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=0mrpqb", imageAlt: "professional car inspection service" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rwqra8", imageAlt: "luxury interior car leather seats" },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Decades of Trust"
      description="At Sri Hari Cars, we don't just sell cars; we build relationships. Every vehicle undergoes a rigorous multi-point inspection to ensure you get nothing but the best performance and peace of mind."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2wq46i"
      imageAlt="car dealership showroom interior"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Certified Quality",          description: "Every car is inspected by expert technicians to guarantee peak performance.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2vc1pw",          imageAlt: "Certified inspection"},
        {
          title: "Fair Pricing",          description: "Transparent, competitive pricing with no hidden costs for complete buyer peace of mind.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=sf441f",          imageAlt: "Fair pricing"},
        {
          title: "Easy Finance",          description: "Get quick loan approvals and flexible repayment options through our banking partners.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4regq9",          imageAlt: "Easy finance"},
      ]}
      title="Why Choose Sri Hari?"
      description="Experience a transparent, hassle-free car buying journey."
    />
  </div>

  <div id="inventory" data-section="inventory">
      <ProductCardTwo
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      animationType="slide-up"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          brand: "Toyota",          name: "Fortuner",          price: "₹32,50,000",          rating: 5,
          reviewCount: "12",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6kkkso"},
        {
          id: "2",          brand: "Hyundai",          name: "Creta",          price: "₹14,20,000",          rating: 5,
          reviewCount: "8",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=54m74y"},
        {
          id: "3",          brand: "Maruti",          name: "Swift",          price: "₹6,50,000",          rating: 4,
          reviewCount: "15",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=udyz69"},
        {
          id: "4",          brand: "Kia",          name: "Seltos",          price: "₹15,80,000",          rating: 5,
          reviewCount: "10",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nsqsal"},
        {
          id: "5",          brand: "Mahindra",          name: "XUV700",          price: "₹22,10,000",          rating: 5,
          reviewCount: "22",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vygryv"},
      ]}
      title="Featured Collection"
      description="Our current selection of premium, pre-inspected vehicles."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",          value: "1000+",          title: "Cars Sold",          description: "Happy families on the road",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fbza7l"},
        {
          id: "2",          value: "20+",          title: "Years Experience",          description: "Serving the automotive community",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=z2qpfe"},
        {
          id: "3",          value: "500+",          title: "Happy Clients",          description: "Reliable partnerships and trust",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=arl167"},
      ]}
      title="Our Impact"
      description="Delivering excellence one vehicle at a time."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Do you provide car warranties?",          content: "Yes, we offer comprehensive warranties on select certified pre-owned vehicles."},
        {
          id: "2",          title: "Can I test drive a vehicle?",          content: "Absolutely! We encourage you to schedule a test drive at our showroom."},
        {
          id: "3",          title: "How is the valuation process?",          content: "Our experts evaluate vehicles based on age, mileage, condition, and market demand to offer you the best price."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=11helg"
      title="Common Questions"
      description="Answers to your queries about our process and vehicles."
      faqsAnimation="slide-up"
      imageAlt="customer asking car questions"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="The service at Sri Hari Cars was impeccable. They found me the perfect car within my budget, and the documentation was flawless. Highly recommended!"
      rating={5}
      author="Ankit R."
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=tnu6by",          alt: "happy customer portrait car"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=g5bl6c",          alt: "happy family car purchase"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gk34q2",          alt: "happy young professional car"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=m7j6uo",          alt: "happy couple car purchase"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=06b0fu",          alt: "happy senior driver car"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch"
      description="Ready to book your test drive or sell your vehicle? Reach out to us."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "What car are you looking for?"}}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kqqm31"
      imageAlt="car dealership front office"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Sri Hari Cars"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2025 Sri Hari Cars. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
