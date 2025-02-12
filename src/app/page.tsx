import CES from "@/components/static/CES";
import Hero from "@/components/static/Hero";
import Mission from "@/components/static/Mission";
import Pricing from "@/components/static/Pricing";
import Reviews from "@/components/static/Reviews";
import ScreenshotReviews from "@/components/static/ScreenshotReviews";
import Faqs from "@/components/static/Faqs";
import Marquees from "@/components/static/Marquees";
import WarehouseSection from "@/components/static/WarehouseSection";

export default function Home() {
  return (
<>
<Hero />
<Mission />
<Marquees />
<CES />
<WarehouseSection/>
<Reviews/>
<ScreenshotReviews/>
<Pricing/>
<Faqs />
</>
  );
}
