import Blog from "@/components/sections/blog/Blog";
import Contact from "@/components/sections/contact/Contact";
import Feedback from "@/components/sections/feedback/Feedback";
import Hero from "@/components/sections/hero/Hero";
import Pricing from "@/components/sections/pricing/PricingAndFeedback";

import Service from "@/components/sections/service/Service";
import Team from "@/components/sections/team/Team";

export default function Page() {
  return (
    <>
      <Hero />
      <Service />
      <Team />
      <Pricing />
      <Feedback />
      <Blog />
      <Contact />
    </>
  );
}
