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
        { name: "Menu", id: "#inventory" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="D K CAFE"
      button={{
        text: "View Menu",        href: "#inventory"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars"}}
      title="Brewed to Perfection"
      description="Discover the finest coffee blends and artisanal snacks at D K CAFE. Your cozy corner for great taste and warm memories."
      buttons={[
        {
          text: "Explore Menu",          href: "#inventory"},
      ]}
      mediaItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2vc1pw&_wi=1", imageAlt: "cozy coffee shop interior" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=sf441f&_wi=1", imageAlt: "fresh roasted coffee beans" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4regq9&_wi=1", imageAlt: "latte art on a cup of coffee" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=0mrpqb", imageAlt: "fresh baked pastries" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rwqra8", imageAlt: "coffee shop atmosphere" },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Crafted with Passion"
      description="D K CAFE is dedicated to sourcing the highest quality beans and preparing every cup with meticulous care. Whether you are grabbing a quick espresso or meeting friends, we welcome you to our space."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2wq46i"
      imageAlt="cafe owner pouring coffee"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Artisanal Coffee",          description: "Hand-picked beans, roasted in small batches for optimal freshness.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2vc1pw&_wi=2",          imageAlt: "fresh coffee"},
        {
          title: "Cozy Atmosphere",          description: "Your comfortable neighborhood spot to relax, work, or catch up.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=sf441f&_wi=2",          imageAlt: "cozy seating"},
        {
          title: "Daily Freshness",          description: "Baked goods prepared fresh in-house every single morning.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4regq9&_wi=2",          imageAlt: "baked goods"},
      ]}
      title="Why D K CAFE?"
      description="Every sip, every bite, a story of passion."
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
          id: "1",          brand: "Espresso",          name: "Signature Blend",          price: "₹150",          rating: 5,
          reviewCount: "120",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6kkkso"},
        {
          id: "2",          brand: "Latte",          name: "Vanilla Infused",          price: "₹220",          rating: 5,
          reviewCount: "85",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=54m74y"},
        {
          id: "3",          brand: "Pastry",          name: "Butter Croissant",          price: "₹180",          rating: 4,
          reviewCount: "150",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=udyz69"},
        {
          id: "4",          brand: "Cold Brew",          name: "Nitro Coffee",          price: "₹250",          rating: 5,
          reviewCount: "90",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nsqsal"},
        {
          id: "5",          brand: "Snack",          name: "Dark Chocolate Cookie",          price: "₹120",          rating: 5,
          reviewCount: "210",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vygryv"},
      ]}
      title="Popular Menu"
      description="Our customer favorites and daily staples."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",          value: "5000+",          title: "Cups Brewed",          description: "Serving smiles daily",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fbza7l"},
        {
          id: "2",          value: "15",          title: "Years Local",          description: "Part of your morning routine",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=z2qpfe"},
        {
          id: "3",          value: "100%",          title: "Ethical Beans",          description: "Sourced with respect",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=arl167"},
      ]}
      title="By The Numbers"
      description="Our journey in brewing quality."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Do you offer vegan options?",          content: "Yes! We have several plant-based milks and vegan pastries available."},
        {
          id: "2",          title: "Can I work from your cafe?",          content: "Definitely, we have free high-speed WiFi and comfortable seating."},
        {
          id: "3",          title: "Do you provide delivery?",          content: "Yes, we are listed on all major food delivery platforms."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=11helg"
      title="Cafe FAQs"
      description="Got a question? We have answers."
      faqsAnimation="slide-up"
      imageAlt="cafe customer"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="The coffee here is simply the best in town. Every time I walk into D K CAFE, it feels like home. Their croissants are out of this world!"
      rating={5}
      author="Priya K."
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=tnu6by",          alt: "customer"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=g5bl6c",          alt: "customer"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gk34q2",          alt: "customer"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=m7j6uo",          alt: "customer"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=06b0fu",          alt: "customer"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Visit Us"
      description="Swing by, say hello, or plan your next event with us. We would love to serve you!"
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Anything specific on your mind?"}}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kqqm31"
      imageAlt="cafe front"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="D K CAFE"
      columns={[
        {
          title: "Menu",          items: [
            {
              label: "Drinks",              href: "#inventory"},
            {
              label: "Food",              href: "#inventory"},
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
              label: "Privacy",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2025 D K CAFE. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
