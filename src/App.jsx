// App.jsx — routes updated April 2026
import EmeraldYachts from "../src/pages/EmeraldYachts/EmeraldYachts";
import DrakePassagePage from "../src/pages/DrakePassagePage/DrakePassagePage";
import ScenicVSSilversea from "../src/pages/ScenicVSSilversea/ScenicVSSilversea";
import AntarcticaCruise from "../src/pages/AntarcticaCruise/AntarcticaCruise";
import ScenicAntarctica from "../src/pages/ScenicAntarctica/ScenicAntarctica";
import ScenicvsEmeraldYachts from "../src/pages/ScenicvsEmeraldYachts/ScenicvsEmeraldYachts";
import EmeraldAzzurraVsEmeraldSakara from "../src/pages/EmeraldAzzurraVsEmeraldSakara/EmeraldAzzurraVsEmeraldSakara";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import LuxuryTravel from "./pages/LuxuryTravel/LuxuryTravel";
import ScenicVSFourSeasonsYachts from "./pages/ScenicVSFourSeasonsYachts/ScenicVSFourSeasonsYachts";
import EmeraldVsRitzCarltonPage from "./pages/EmeraldVSRitzCarltonYacht/Emeraldvsritzcarlton";
import LuxuryYachtCruises from "./pages/LuxuryYachtCruises/LuxuryYachtCruises";
import RiversideLuxuryCruises from "./pages/RiversideLuxuryCruises/RiversideLuxuryCruises";
import RiversideVikingRiverCruises from "./pages/RiversideVikingRiverCruises/RiversideVikingRiverCruises";
import RiversidevsAmaWaterways from "./pages/RiversidevsAmaWaterways/RiversidevsAmaWaterways";
import DistinctiveVoyageSailings from "./pages/DistinctiveVoyageSailings/DistinctiveVoyageSailings";
import OrientExpress from "./pages/OrientExpress/OrientExpress";
import TripToJapan from "./pages/TripToJapan/TripToJapan";
import FirstTimeJapan from "./pages/FirstTimeJapan/FirstTimeJapan";
import BestTimeJapan from "./pages/BestTimeVisitJapan/Besttimejapan";
import JapanTravelCost from "./pages/JapanTravelCost/JapanTravelCost";
import Japanlandvscruise from "./pages/Japanlandvscruise/Japanlandvscruise";
import LuxuryTravelToJapan from "./pages/LuxuryTravelJapan/LuxuryTravelToJapan";
import AzamaraCruisesGuide from "./pages/AzamaraCruisesGuide/AzamaraCruisesGuide";
import AzamaraVSVikingCruise from "./pages/AzamaraVSVikingCruise/AzamaraVSVikingCruise";
import AzamaraCabinsGuide from "./pages/AzamaraCabinsGuide/AzamaraCabinsGuide";
import AzamaraCabinsAlaskaGuide from "./pages/AzamaraCabinsAlaskaGuide/AzamaraCabinsAlaskaGuide";
import AzamaraAlaskaCruises from "./pages/AzamaraAlaskaCruises/AzamaraAlaskaCruises";
import WorldCruises from "./pages/WorldCruises2027-2029/WorldCruises";
import WorldCruiseCost from "./pages/WorldCruiseCost/WorldCruiseCost";
import RegentSevenSeasWorldCruiseGuide from "./pages/RegentSevenSeasWorldCruiseGuide/RegentSevenSeas";
import KenyaSafariMicato from "./pages/KenyaSafariwithMicatoSafaris/Kenyasafarimicato";
import KenyaVsTanzaniaSafari from "./pages/KenyaVsTanzaniaSafari/KenyaVsTanzaniaSafari";
import BestTimeGreatMigrationSafari from "./pages/BestTimeGreatMigrationSafari/BestTimeGreatMigrationSafari";
import LuxuryKenyaSafari from "./pages/LuxuryKenyaSafari/LuxuryKenyaSafari";
import LuxuryAfricanSafariCost from "./pages/LuxuryAfricanSafariCost/LuxuryAfricanSafariCost";
import BestAfricaSafari from "./pages/BestAfricanSafariForFirstTime/BestAfricaSafari";
import LuxurySafariAfrica from "./pages/Luxurysafariafrica/Luxurysafariafrica";
import BestAfricanSafariForFamilies from "./pages/BestAfricanSafariForFamilies/Bestafricasafariforfamilies";
import AzamaraShipComparison from "./pages/AzamaraShipComparison/Azamarashipcomparison";
import AzamaraMediterraneanCruises from "./pages/AzamaraMediterraneanCruises/AzamaraMediterraneanCruises";
import AzamaravsRegentSevenSeas from "./pages/AzamaravsRegentSevenSeas/AzamaravsRegentSevenSeas";
import AzamaraGreeceCruises from "./pages/AzamaraGreeceCruises/AzamaraGreeceCruises";
import AzamaraJapanCruises from "./pages/AzamaraJapanCruises/AzamaraJapanCruises";
import AzamaraWorthIt from "./pages/AzamaraWorthIt/AzamaraWorthIt";
import AzamaraCabinsGuide2026 from "./pages/AzamaraCabinsGuide2026/AzamaraCabinsGuide2026";
import BestCabinsOnAzamara from "./pages/BestCabinsOnAzamara/BestCabinsOnAzamara";
import FirstTimeLuxuryTravelers from "./pages/FirstTimeLuxuryTravelers/FirstTimeLuxuryTravelers";
import BestSuitesExploraJourneys from "./pages/BestSuitesExploraJourneys/BestSuitesExploraJourneys";
import BookExplora from "./pages/BookExplora/BookExplora";
import ExploraFAQ from "./pages/ExploraFAQ/ExploraFAQ";
import ExploraJourneysVsSilversea from "./pages/ExploraJourneysVsSilversea/ExploraJourneysVsSilversea";
import HXExpeditionsCruises from "./pages/HXExpeditionsCruises/HXExpeditionsCruises";
import Hxexpeditionsantarctica from "./pages/Hxexpeditionsantarctica/Hxexpeditionsantarctica";
import HXExpeditionsSvalbardCruises from "./pages/HXExpeditionsSvalbardCruises/HXExpeditionsSvalbardCruises";
import Hxexpeditionsgreenland from "./pages/Hxexpeditionsgreenland/Hxexpeditionsgreenland";
import HXExpeditionsGalápagosCruises from "./pages/HXExpeditionsGalápagosCruises/HXExpeditionsGalápagosCruises";
import Hxvsvikingexpeditions from "./pages/Hxvsvikingexpeditions/Hxvsvikingexpeditions";
import HXExpeditionsVsSilverseaExpeditions from "./pages/HXExpeditionsVsSilverseaExpeditions/HXExpeditionsVsSilverseaExpeditions";
import BestHXExpeditions from "./pages/Besthxexpeditions/Besthxexpeditions";
import Hxexpeditionsships from "./pages/Hxexpeditionsships/Hxexpeditionsships";
import DisneyCruiseAdultsWithoutKids from "./pages/DisneyCruiseAdultsWithoutKids/DisneyCruiseAdultsWithoutKids";
import Disneyluxurycruise from "./pages/Disneyluxurycruise/Disneyluxurycruise";
import DisneyCruiseWorthMoney from "./pages/DisneyCruiseWorthMoney/DisneyCruiseWorthMoney";
import DisneyvsRoyalCaribbean from "./pages/Disneyvsroyalcaribbean/Disneyvsroyalcaribbean";
import DisneyConciergeWorthIt from "./pages/DisneyConciergeWorthIt/DisneyConciergeWorthIt";
import Bestdisneycruiseshipforadults from "./pages/Bestdisneycruiseshipforadults/Bestdisneycruiseshipforadults";
import Disneyvscelebritycruises from "./pages/Disneyvscelebritycruises/Disneyvscelebritycruises";
import DisneyWishVsDisneyTreasure from "./pages/DisneyWishVsDisneyTreasure/DisneyWishVsDisneyTreasure";
import CastawayCayVsLookoutCay from "./pages/CastawayCayVsLookoutCay/CastawayCayVsLookoutCay";
import DisneyConciergeBenefitsExplained from "./pages/DisneyConciergeBenefitsExplained/DisneyConciergeBenefitsExplained";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<OrientExpress />}></Route>
          <Route path="/emerald-yachts" element={<EmeraldYachts />}></Route>
          <Route
            path="/DrakePassagePage"
            element={<DrakePassagePage />}
          ></Route>
          <Route
            path="/scenic-vs-silversea-antarctica"
            element={<ScenicVSSilversea />}
          ></Route>
          <Route
            path="/antarctica-cruise-cost"
            element={<AntarcticaCruise />}
          ></Route>
          <Route
            path="/scenic-antarctica-cruise"
            element={<ScenicAntarctica />}
          ></Route>
          <Route path="/luxury-travel" element={<LuxuryTravel />}></Route>
          <Route
            path="/ScenicvsEmeraldYachts"
            element={<ScenicvsEmeraldYachts />}
          ></Route>
          <Route
            path="/scenic-vs-four-seasons-yachts"
            element={<ScenicVSFourSeasonsYachts />}
          ></Route>
          <Route
            path="/emerald-azzurra-vs-emerald-sakara"
            element={<EmeraldAzzurraVsEmeraldSakara />}
          ></Route>
          <Route
            path="/emerald-yachts-vs-ritz-carlton-yacht-collection"
            element={<EmeraldVsRitzCarltonPage />}
          ></Route>
          <Route
            path="/luxury-yacht-cruises"
            element={<LuxuryYachtCruises />}
          ></Route>
          <Route
            path="/riverside-luxury-cruises"
            element={<RiversideLuxuryCruises />}
          ></Route>
          <Route
            path="/riverside-vs-viking-river-cruises"
            element={<RiversideVikingRiverCruises />}
          ></Route>
          <Route
            path="/riverside-vs-amawaterways"
            element={<RiversidevsAmaWaterways />}
          ></Route>
          <Route
            path="/distinctive-voyage-sailings"
            element={<DistinctiveVoyageSailings />}
          ></Route>
          <Route path="/trip-to-japan" element={<TripToJapan />}></Route>
          <Route
            path="/luxury-travel-to-japan"
            element={<LuxuryTravelToJapan />}
          ></Route>
          <Route
            path="/first-time-japan-itinerary"
            element={<FirstTimeJapan />}
          ></Route>
          <Route
            path="/japan-travel-cost"
            element={<JapanTravelCost />}
          ></Route>
          <Route
            path="/best-time-to-visit-japan"
            element={<BestTimeJapan />}
          ></Route>
          <Route
            path="/japan-land-vs-cruise"
            element={<Japanlandvscruise />}
          ></Route>
          <Route
            path="/azamara-cruises-guide-2026-2027"
            element={<AzamaraCruisesGuide />}
          ></Route>
          <Route
            path="/azamara-vs-viking-ocean-cruises"
            element={<AzamaraVSVikingCruise />}
          ></Route>
          <Route
            path="/azamara-cabins-guide"
            element={<AzamaraCabinsGuide />}
          ></Route>
          <Route
            path="/azamara-alaska-cruises"
            element={<AzamaraAlaskaCruises />}
          ></Route>
          <Route
            path="/azamara-cabins-alaska-guide"
            element={<AzamaraCabinsAlaskaGuide />}
          ></Route>
          <Route
            path="/world-cruises"
            element={<WorldCruises />}
          ></Route>
          <Route
            path="/world-cruise-cost"
            element={<WorldCruiseCost />}
          ></Route>
          <Route
            path="/regent-seven-seas-world-cruise-guide"
            element={<RegentSevenSeasWorldCruiseGuide />}
          ></Route>
          <Route
            path="/luxury-kenya-safari-micato"
            element={<KenyaSafariMicato />}
          ></Route>
          <Route
            path="/kenya-vs-tanzania-safari"
            element={<KenyaVsTanzaniaSafari />}
          ></Route>
          <Route
            path="/best-time-great-migration-safari"
            element={<BestTimeGreatMigrationSafari />}
          ></Route>

          <Route
            path="/luxury-kenya-safari"
            element={<LuxuryKenyaSafari />}
          ></Route>
          <Route
            path="/luxury-african-safari-cost"
            element={<LuxuryAfricanSafariCost />}
          ></Route>
          <Route
            path="/best-african-safari-for-first-timers"
            element={<BestAfricaSafari />}
          ></Route>

          <Route
            path="/best-country-for-luxury-safari-in-africa/"
            element={<LuxurySafariAfrica />}
          />

          <Route
            path="/best-african-safari-for-families/"
            element={<BestAfricanSafariForFamilies />}
          />

          <Route
            path="/azamara-ship-comparison"
            element={<AzamaraShipComparison />}
          />

          <Route
            path="/azamara-mediterranean-cruises"
            element={<AzamaraMediterraneanCruises />}
          />

          <Route
            path="/azamara-vs-regent-seven-seas"
            element={<AzamaravsRegentSevenSeas />}
          />

          <Route
            path="/azamara-greece-cruises"
            element={<AzamaraGreeceCruises />}
          />

          <Route
            path="/azamara-japan-cruises"
            element={<AzamaraJapanCruises />}
          />

          <Route
            path="/azamara-worth-it"
            element={<AzamaraWorthIt />}
          />

          <Route
            path="/azamara-cabins-guide-2026"
            element={<AzamaraCabinsGuide2026 />}
          />

          <Route
            path="/best-cabins-on-azamara"
            element={<BestCabinsOnAzamara />}
          />

          <Route
            path="/best-explora-cruises-for-first-time-luxury-travelers"
            element={<FirstTimeLuxuryTravelers />}
          />

          <Route
            path="/best-suites-on-explora-journeys"
            element={<BestSuitesExploraJourneys />}
          />

          <Route
            path="/should-you-book-explora-through-a-travel-advisor"
            element={<BookExplora />}
          />

          <Route
            path="/explora-faq-before-booking"
            element={<ExploraFAQ />}
          />

          <Route
            path="/explora-journeys-vs-silversea"
            element={<ExploraJourneysVsSilversea />}
          />

          <Route
            path="/hx-expeditions"
            element={<HXExpeditionsCruises />}
          />

          <Route
            path="/hx-expeditions-antarctica-cruises"
            element={<Hxexpeditionsantarctica />}
          />

          <Route
            path="/hx-expeditions-svalbard-cruises"
            element={<HXExpeditionsSvalbardCruises />}
          />

          <Route
            path="/hx-expeditions-greenland-cruises"
            element={<Hxexpeditionsgreenland />}
          />

          <Route
            path="/hx-expeditions-galapagos-cruises"
            element={<HXExpeditionsGalápagosCruises />}
          />

          <Route
            path="/hx-expeditions-vs-viking-expeditions"
            element={<Hxvsvikingexpeditions />}
          />

          <Route
            path="/hx-expeditions-vs-silversea-expeditions"
            element={<HXExpeditionsVsSilverseaExpeditions />}
          />

          <Route
            path="/best-hx-expeditions-cruises-for-first-timers"
            element={<BestHXExpeditions />}
          />

          <Route
            path="/hx-expeditions-ships"
            element={<Hxexpeditionsships />}
          />

          <Route
            path="/disney-cruise-for-adults-without-kids"
            element={<DisneyCruiseAdultsWithoutKids />}
          />

          <Route
            path="/what-luxury-travelers-get-wrong-about-disney-cruise-line"
            element={<Disneyluxurycruise />}
          />

          <Route
            path="/is-disney-cruise-line-worth-the-money"
            element={<DisneyCruiseWorthMoney />}
          />

          <Route
            path="/disney-cruise-vs-royal-caribbean"
            element={<DisneyvsRoyalCaribbean />}
          />

          <Route
            path="/is-disney-concierge-worth-it"
            element={<DisneyConciergeWorthIt />}
          />

          <Route
            path="/best-disney-cruise-ship-for-adults"
            element={<Bestdisneycruiseshipforadults />}
          />

          <Route
            path="/disney-cruise-vs-celebrity-cruises"
            element={<Disneyvscelebritycruises />}
          />

          <Route
            path="/disney-wish-vs-disney-treasure"
            element={<DisneyWishVsDisneyTreasure />}
          />

          <Route
            path="/castaway-cay-vs-lookout-cay"
            element={<CastawayCayVsLookoutCay />}
          />

          <Route
            path="/disney-concierge-benefits-explained"
            element={<DisneyConciergeBenefitsExplained />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
