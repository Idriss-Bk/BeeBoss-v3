import CES from "@/components/static/CES";
import Hero from "@/components/static/Hero";
import Mission from "@/components/static/Mission";
import Pricing from "@/components/static/Pricing";
import Reviews from "@/components/static/Reviews";
import ScreenshotReviews from "@/components/static/ScreenshotReviews";
import Marquees from "../components/static/Marquees";
import Faqs from "@/components/static/Faqs";

export default function Home() {
  return (
<>
<Hero />
<Marquees />
<Mission />
<CES />
<Reviews/>
<ScreenshotReviews/>
<Pricing/>
<Faqs />
</>
  );
}
