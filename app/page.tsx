import { HeroSection } from "@/components/hero-section";
import { NavigationTabs } from "@/components/navigation-tabs";
import { PropertyDescription } from "@/components/property-description";
import { AdvantagesSection } from "@/components/advantages-section";
import { DesignerLobby } from "@/components/designer-lobby";
import { ContactForm } from "@/components/contact-form";
import { InfrastructureSection } from "@/components/infrastructure-section";
import { LocationSection } from "@/components/location-section";
import { LayoutsSection } from "@/components/layouts-section";
import { FacadeSection } from "@/components/facade-section";
import { CourtyardSection } from "@/components/courtyard-section";
import { FullWidthSlider } from "@/components/full-width-slider";

export default function PropertyListing() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <HeroSection />
      <NavigationTabs />
      <PropertyDescription />
      <AdvantagesSection />
      {/* <InfrastructureSection /> */}

      {/* <FullWidthSlider
        photos={[
          {
            src: "/images/photo1.jpg",
            alt: "Beautiful landscape",
          },
          {
            src: "/images/photo2.jpg",
            alt: "City view",
          },
        ]}
        aspectRatio="video"
        autoPlay={true}
        interval={5000}
      /> */}
      <LocationSection />
      {/* <LayoutsSection /> */}
      <FacadeSection />
      <DesignerLobby />
      {/* <FullWidthSlider
        photos={[
          {
            src: "/images/photo1.jpg",
            alt: "Beautiful landscape",
          },
          {
            src: "/images/photo2.jpg",
            alt: "City view",
          },
        ]}
        aspectRatio="video"
        autoPlay={true}
        interval={5000}
      /> */}
      {/* <CourtyardSection />
      <FullWidthSlider
        photos={[
          {
            src: "/place",
            alt: "Beautiful landscape",
          },
          {
            src: "/images/photo2.jpg",
            alt: "City view",
          },
        ]}
        aspectRatio="video"
        autoPlay={true}
        interval={5000}
      /> */}
      <ContactForm />
    </main>
  );
}
