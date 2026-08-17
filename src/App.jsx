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
import DisneyCruiseDiningGuide from "./pages/Disneycruisediningguide/Disneycruisediningguide";
import BestDisneyCruiseCabins from "./pages/BestDisneyCruiseCabins/BestDisneyCruiseCabins";
import Disneycruisebookingtimeline from "./pages/Disneycruisebookingtimeline/Disneycruisebookingtimeline";
import Disneycruisepackinglist from "./pages/Disneycruisepackinglist/Disneycruisepackinglist"
import VikingRhineRiverCruises from "./pages/VikingRhineRiverCruises/VikingRhineRiverCruises";
import VikingChristmasMarketCruises from "./pages/VikingChristmasMarketCruises/VikingChristmasMarketCruises";
import Vikingmediterraneancruises from "./pages/Vikingmediterraneancruises/Vikingmediterraneancruises"
import Vikingalaskacruises from "./pages/Vikingalaskacruises/Vikingalaskacruises"
import VikingIcelandCruises from "./pages/VikingIcelandCruises/VikingIcelandCruises"
import VikingVsAmaWaterways from "./pages/VikingVsAmaWaterways/VikingVsAmaWaterways";
import VikingVsTauck from "./pages/VikingVsTauck/VikingVsTauck";
import Vikingvsscenic from "./pages/Vikingvsscenic/Vikingvsscenic";
import Vikingvsuniworld from "./pages/Vikingvsuniworld/Vikingvsuniworld";
import Whyiresistedviking from "./pages/Whyiresistedviking/Whyiresistedviking";
import VikingCruiseResourceCenter from "./pages/VikingCruiseResourceCenter/VikingCruiseResourceCenter";
import DonorRiverCruises from "./pages/Donorrivercruises/Donorrivercruises";
import Donorsafaris from "./pages/Donorsafaris/Donorsafaris";
import TravelProgramsOperaCompanies from "./pages/TravelProgramsOperaCompanies/TravelProgramsOperaCompanies";
import TravelProgramsSymphonyOrchestras from "./pages/TravelProgramsSymphonyOrchestras/TravelProgramsSymphonyOrchestras";
import Performingartstravel from "./pages/Performingartstravel/Performingartstravel";
import Whytraveldonorengagement from "./pages/Whytraveldonorengagement/Whytraveldonorengagement";
import Exploravsregent from "./pages/Exploravsregent/Exploravsregent";
import Exploravsritzcarlton from "./pages/Exploravsritzcarlton/Exploravsritzcarlton";
import Exploravsviking from "./pages/Exploravsviking/Exploravsviking";
import Exploravsoceania from "./pages/Exploravsoceania/Exploravsoceania";
import Exploravsscenic from "./pages/Exploravsscenic/Exploravsscenic";
import Exploravsponant from "./pages/Exploravsponant/Exploravsponant";
import Exploravscrystal from "./pages/Exploravscrystal/Exploravscrystal";
import PrivateEquityFamilyTravel from "./pages/PrivateEquityFamilyTravel/PrivateEquityFamilyTravel";
import FamilyLegacyTravel from "./pages/FamilyLegacyTravel/FamilyLegacyTravel";
import MultigenerationalLuxuryTravel from "./pages/MultigenerationalLuxuryTravel/MultigenerationalLuxuryTravel";
import Familyofficetravelplanning from "./pages/Familyofficetravelplanning/Familyofficetravelplanning";
import Executivefamilyretreats from "./pages/Executivefamilyretreats/Executivefamilyretreats";
import Familygovernanceretreats from "./pages/Familygovernanceretreats/Familygovernanceretreats";
import Luxuryfamilycelebrations from "./pages/Luxuryfamilycelebrations/Luxuryfamilycelebrations";
import Privatejetconciergetravel from "./pages/Privatejetconciergetravel/Privatejetconciergetravel";
import Privatevillasexclusiveresorts from "./pages/Privatevillasexclusiveresorts/Privatevillasexclusiveresorts";
import Safarisexpeditionsbucketlisttravel from "./pages/Safarisexpeditionsbucketlisttravel/Safarisexpeditionsbucketlisttravel";
import Luxurywellnessretreats from "./pages/Luxurywellnessretreats/Luxurywellnessretreats";
import Philanthropicpurposedriventravel from "./pages/Philanthropicpurposedriventravel/Philanthropicpurposedriventravel";
import Luxurycruisesforaffluentfamilies from "./pages/Luxurycruisesforaffluentfamilies/Luxurycruisesforaffluentfamilies";
import Internationalfamilyadventures from "./pages/Internationalfamilyadventures/Internationalfamilyadventures";
import Businessmilestoneliquidityeventtravel from "./pages/Businessmilestoneliquidityeventtravel/Businessmilestoneliquidityeventtravel";
import Privacysecuritytravelplanning from "./pages/Privacysecuritytravelplanning/Privacysecuritytravelplanning";
import Buildingstrongerfamiliesthroughtravel from "./pages/Buildingstrongerfamiliesthroughtravel/Buildingstrongerfamiliesthroughtravel";
import Scenicluxuryyachtguide from "./pages/Scenicluxuryyachtguide/Scenicluxuryyachtguide";
import Sceniceclipsereviews from "./pages/Sceniceclipsereviews/Sceniceclipsereviews";
import Sceniceclipseiireviews from "./pages/Sceniceclipseiireviews/Sceniceclipseiireviews";
import ScenicvsPonant from "./pages/ScenicvsPonant/ScenicvsPonant";
import ScenicVsSeabourn from "./pages/ScenicvsSeabourn/ScenicVsSeabourn";
import IsScenicWorthIt from "./pages/IsScenicworthit/IsScenicWorthIt";
import Whatisincludedonscenic from "./pages/Whatisincludedonscenic/Whatisincludedonscenic";
import ScenicGreenlandCruises from "./pages/ScenicGreenlandCruises/ScenicGreenlandCruises";
import Scenicmediterraneancruises from "./pages/Scenicmediterraneancruises/Scenicmediterraneancruises";
import Scenicicelandcruises from "./pages/Scenicicelandcruises/Scenicicelandcruises";
import Scenicfoodreview from "./pages/Scenicfoodreview/Scenicfoodreview";
import Sceniccabinsguide from "./pages/Sceniccabinsguide/Sceniccabinsguide";
import Bestscenicsuites from "./pages/Bestscenicsuites/Bestscenicsuites";
import ScenicHelicopterExperience from "./pages/ScenicHelicopterExperience/ScenicHelicopterExperience";
import ScenicSubmarineExperience from "./pages/ScenicSubmarineExperience/ScenicSubmarineExperience";
import BestExpeditionCruises from "./pages/BestExpeditionCruises/BestExpeditionCruises";
import BestLuxuryExpeditionCruises from "./pages/BestLuxuryExpeditionCruises/BestLuxuryExpeditionCruises";
import UniworldRiverCruises from "../src/pages/UniworldRiverCruises/UniworldRiverCruises";
import UniworldRiverCruisesReview from "./pages/UniworldRiverCruisesReview/UniworldRiverCruisesReview";
import Uniworldcruiseandrailjourneys from "./pages/Uniworldcruiseandrailjourneys/Uniworldcruiseandrailjourneys";
import Uniworldrhinerivercruises from "./pages/Uniworldrhinerivercruises/Uniworldrhinerivercruises";
import WhatIsIncludedOnUniworld from "./pages/Whatisincludedonuniworld/Whatisincludedonuniworld";
import UniworldRiverCruiseCost from "./pages/Uniworldrivercruisecost/Uniworldrivercruisecost";
import IsUniworldWorthIt from "./pages/IsUniworldWorthIt/IsUniworldWorthIt";
import UniworldShipsSuites from "./pages/UniworldShipsSuites/UniworldShipsSuites";
import Uniworlddanuberivercruises from "./pages/Uniworlddanuberivercruises/Uniworlddanuberivercruises";
import Uniworldseinerivercruises from "./pages/Uniworldseinerivercruises/Uniworldseinerivercruises";
import Uniworldrhonesaonerivercruises from "./pages/Uniworldrhonesaonerivercruises/Uniworldrhonesaonerivercruises";
import Uniworldbordeauxrivercruises from "./pages/Uniworldbordeauxrivercruises/Uniworldbordeauxrivercruises";
import UniworldCabinCategories from "./pages/UniworldCabinCategories/UniworldCabinCategories";
import UniworldBestCabins from "./pages/UniworldBestCabins/UniworldBestCabins";
import UniworldBestItineraries from "./pages/UniworldBestItineraries/UniworldBestItineraries";
import FirstTimeUniworldRiverCruiseGuide from "./pages/FirstTimeUniworldRiverCruiseGuide/FirstTimeUniworldRiverCruiseGuide";
import UniworldVeniceItalyRiverCruises from "./pages/UniworldVeniceItalyRiverCruises/UniworldVeniceItalyRiverCruises";
import UniworldEgyptNileRiverCruises from "./pages/UniworldEgyptNileRiverCruises/UniworldEgyptNileRiverCruises";
import Uniworldvsavalonwaterways from "./pages/Uniworldvsavalonwaterways/Uniworldvsavalonwaterways";
import Uniworldvstauckrivercruises from "./pages/Uniworldvstauckrivercruises/Uniworldvstauckrivercruises";
import Uniworldvsriversideluxurycruises from "./pages/Uniworldvsriversideluxurycruises/Uniworldvsriversideluxurycruises";
import UniworldFoodDining from "./pages/UniworldFoodDining/UniworldFoodDining";
import UniworldDressCodePacking from "./pages/UniworldDressCodePacking/UniworldDressCodePacking";
import UniworldAirfareTransfers from "./pages/UniworldAirfareTransfers/UniworldAirfareTransfers";
import UniworldSoloTravel from "./pages/UniworldSoloTravel/UniworldSoloTravel";
import UniworldFamilyCruises from "./pages/UniworldFamilyCruises/UniworldFamilyCruises";
import UniworldChristmasMarketCruises from "./pages/UniworldChristmasMarketCruises/UniworldChristmasMarketCruises";
import UniworldvsScenicRiverCruises from "./pages/UniworldvsScenicRiverCruises/UniworldvsScenicRiverCruises";
import UniworldvsAmaWaterways from "./pages/UniworldvsAmaWaterways/UniworldvsAmaWaterways";
import CelebrityCruises from "./pages/CelebrityCruises/CelebrityCruises";
import WhatsIncludedCelebrityCruise from "./pages/WhatsIncludedCelebrityCruise/WhatsIncludedCelebrityCruise";
import CelebrityCruiseShipsCompleteFleetGuide from "./pages/CelebrityCruiseShipsCompleteFleetGuide/CelebrityCruiseShipsCompleteFleetGuide";
import CelebrityStateroomsSuitesGuide from "./pages/CelebrityStateroomsSuitesGuide/CelebrityStateroomsSuitesGuide";
import Celebritybeyondcruiseshipguide from "./pages/Celebritybeyondcruiseshipguide/Celebritybeyondcruiseshipguide";
import Celebrityapexcruiseshipguide from "./pages/Celebrityapexcruiseshipguide/Celebrityapexcruiseshipguide";
import Celebrityedgecruiseshipguide from "./pages/Celebrityedgecruiseshipguide/Celebrityedgecruiseshipguide";
// import Celebrityedgevssolsticeseries from "./pages/Celebrityedgevssolsticeseries/Celebrityedgevssolsticeseries";
// import Celebrityrivercruises from "./pages/Celebrityrivercruises/Celebrityrivercruises";
// import Celebrityrhinerivercruises  from "./pages/Celebrityrhinerivercruises/Celebrityrhinerivercruises";

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

          <Route
            path="/disney-cruise-dining-guide"
            element={<DisneyCruiseDiningGuide />}
          />

          <Route
            path="/best-disney-cruise-cabins"
            element={<BestDisneyCruiseCabins />}
          />

          <Route
            path="/disney-cruise-booking-timeline"
            element={<Disneycruisebookingtimeline />}
          />

          <Route
            path="/disney-cruise-packing-list"
            element={< Disneycruisepackinglist />}
          />

          <Route
            path="/viking-rhine-river-cruises"
            element={< VikingRhineRiverCruises />}
          />

          <Route
            path="/viking-christmas-market-cruises"
            element={< VikingChristmasMarketCruises />}
          />

          <Route
            path="/viking-mediterranean-cruises"
            element={< Vikingmediterraneancruises />}
          />

          <Route
            path="/viking-alaska-cruises"
            element={< Vikingalaskacruises />}
          />

          <Route
            path="/viking-iceland-cruises"
            element={< VikingIcelandCruises />}
          />

          <Route
            path="/viking-vs-amawaterways"
            element={< VikingVsAmaWaterways />}
          />

          <Route
            path="/viking-vs-tauck"
            element={< VikingVsTauck />}
          />

          <Route
            path="/viking-vs-scenic"
            element={< Vikingvsscenic />}
          />

          <Route
            path="/viking-vs-uniworld"
            element={< Vikingvsuniworld />}
          />

          <Route
            path="/why-i-resisted-viking-for-years"
            element={< Whyiresistedviking />}
          />

          <Route
            path="/viking-cruise-resource-center"
            element={< VikingCruiseResourceCenter />}
          />

          <Route
            path="/donor-river-cruises"
            element={< DonorRiverCruises />}
          />

          <Route
            path="/donor-safaris"
            element={< Donorsafaris />}
          />

          <Route
            path="/travel-programs-for-opera-companies"
            element={< TravelProgramsOperaCompanies />}
          />

          <Route
            path="/travel-programs-for-symphony-orchestras"
            element={< TravelProgramsSymphonyOrchestras />}
          />

          <Route
            path="/Travel-Programs-for-Theaters&Performing-Arts-Organizations"
            element={< Performingartstravel />}
          />

          <Route
            path="/why-travel-increases-donor-engagement-and-fundraising"
            element={< Whytraveldonorengagement />}
          />

          <Route
            path="/explora-vs-regent"
            element={< Exploravsregent />}
          />

          <Route
            path="/explora-vs-ritz-carlton-yacht-collection"
            element={< Exploravsritzcarlton />}
          />

          <Route
            path="/explora-vs-viking"
            element={< Exploravsviking />}
          />

          <Route
            path="/explora-vs-oceania"
            element={< Exploravsoceania />}
          />

          <Route
            path="/explora-vs-scenic"
            element={< Exploravsscenic />}
          />

          <Route
            path="/explora-vs-ponant"
            element={< Exploravsponant />}
          />

          <Route
            path="/explora-vs-crystal"
            element={< Exploravscrystal />}
          />

          <Route
            path="/private-equity-family-travel"
            element={<PrivateEquityFamilyTravel />}
          />

          <Route
            path="/family-legacy-travel"
            element={<FamilyLegacyTravel />}
          />

          <Route
            path="/multigenerational-luxury-travel"
            element={<MultigenerationalLuxuryTravel />}
          />

          <Route
            path="/family-office-travel-planning"
            element={<Familyofficetravelplanning />}
          />

          <Route
            path="/executive-family-retreats"
            element={<Executivefamilyretreats />}
          />

          <Route
            path="/family-governance-retreats"
            element={<Familygovernanceretreats />}
          />

          <Route
            path="/luxury-family-celebrations"
            element={<Luxuryfamilycelebrations />}
          />

          <Route
            path="/private-jet-concierge-travel"
            element={<Privatejetconciergetravel />}
          />

          <Route
            path="/private-villas-exclusive-resorts"
            element={<Privatevillasexclusiveresorts />}
          />

          <Route
            path="/safaris-expeditions-bucket-list-travel"
            element={<Safarisexpeditionsbucketlisttravel />}
          />

          <Route
            path="/luxury-wellness-retreats"
            element={<Luxurywellnessretreats />}
          />

          <Route
            path="/philanthropic-purpose-driven-travel"
            element={<Philanthropicpurposedriventravel />}
          />

          <Route
            path="/luxury-cruises-for-affluent-families"
            element={<Luxurycruisesforaffluentfamilies />}
          />

          <Route
            path="/international-family-adventures"
            element={<Internationalfamilyadventures />}
          />

          <Route
            path="/business-milestone-liquidity-event-travel"
            element={<Businessmilestoneliquidityeventtravel />}
          />

          <Route
            path="/privacy-security-travel-planning"
            element={<Privacysecuritytravelplanning />}
          />

          <Route
            path="/building-stronger-families-through-travel"
            element={<Buildingstrongerfamiliesthroughtravel />}
          />

          <Route
            path="/scenic-luxury-yacht-guide"
            element={<Scenicluxuryyachtguide />}
          />


          <Route
            path="/scenic-eclipse-reviews"
            element={<Sceniceclipsereviews />}
          />

          <Route
            path="/scenic-eclipse-ii-reviews"
            element={<Sceniceclipseiireviews />}
          />

          <Route
            path="/scenic-vs-ponant"
            element={<ScenicvsPonant />}
          />

          <Route
            path="/scenic-vs-seabourn"
            element={<ScenicVsSeabourn />}
          />

          <Route
            path="/is-scenic-worth-it"
            element={<IsScenicWorthIt />}
          />

          <Route
            path="/what-is-included-on-scenic"
            element={<Whatisincludedonscenic />}
          />

          <Route
            path="/scenic-mediterranean-cruises"
            element={<Scenicmediterraneancruises />}
          />

          <Route
            path="/scenic-iceland-cruises"
            element={<Scenicicelandcruises />}
          />

          <Route
            path="/scenic-greenland-cruises"
            element={<ScenicGreenlandCruises />}
          />

          <Route
            path="/scenic-food-review"
            element={<Scenicfoodreview />}
          />

          <Route
            path="/scenic-cabins-guide"
            element={<Sceniccabinsguide />}
          />

          <Route
            path="/best-scenic-suites"
            element={<Bestscenicsuites />}
          />

          <Route
            path="/scenic-helicopter-experience"
            element={<ScenicHelicopterExperience />}
          />

          <Route
            path="/scenic-submarine-experience"
            element={<ScenicSubmarineExperience />}
          />

          <Route
            path="/best-expedition-cruises"
            element={<BestExpeditionCruises />}
          />

          <Route
            path="/best-luxury-expedition-cruises"
            element={<BestLuxuryExpeditionCruises />}
          />

          <Route
            path="/uniworld-river-cruises"
            element={<UniworldRiverCruises />}
          />
          <Route
            path="/uniworld-river-cruises-review"
            element={<UniworldRiverCruisesReview />}
          />

          <Route
            path="/uniworld-river-cruises/cruise-and-rail"
            element={<Uniworldcruiseandrailjourneys />}
          />

          <Route
            path="/uniworld-river-cruises/rhine"
            element={<Uniworldrhinerivercruises />}
          />

          <Route
            path="/uniworld-river-cruises/whats-included/"
            element={<WhatIsIncludedOnUniworld />}
          />

          <Route
            path="/uniworld-river-cruises/cost-deals/"
            element={<UniworldRiverCruiseCost />}
          />

          <Route
            path="/uniworld-river-cruises/is-uniworld-worth-it/"
            element={<IsUniworldWorthIt />}
          />

          <Route
            path="/uniworld-river-cruises/ships-suites/"
            element={<UniworldShipsSuites />}
          />

          <Route
            path="/uniworld-river-cruises/danube"
            element={<Uniworlddanuberivercruises />}
          />

          <Route
            path="/uniworld-river-cruises/seine"
            element={<Uniworldseinerivercruises />}
          />

          <Route
            path="/uniworld-river-cruises/rhone-saone"
            element={<Uniworldrhonesaonerivercruises />}
          />

          <Route
            path="/uniworld-river-cruises/bordeaux"
            element={<Uniworldbordeauxrivercruises />}
          />

          <Route
            path="/uniworld-river-cruises/cabin-categories/"
            element={<UniworldCabinCategories />}
          />

          <Route
            path="/uniworld-river-cruises/best-cabins/"
            element={<UniworldBestCabins />}
          />

          <Route
            path="/uniworld-river-cruises/best-itineraries/"
            element={<UniworldBestItineraries />}
          />

          <Route
            path="/uniworld-river-cruises/first-time-guide/"
            element={<FirstTimeUniworldRiverCruiseGuide />}
          />

          <Route
            path="/uniworld-river-cruises/italy-venice"
            element={<UniworldVeniceItalyRiverCruises />}
          />

          <Route
            path="/uniworld-river-cruises/egypt-nile"
            element={<UniworldEgyptNileRiverCruises />}
          />

          <Route
            path="/uniworld-river-cruises/uniworld-vs-avalon"
            element={<Uniworldvsavalonwaterways />}
          />

          <Route
            path="/uniworld-river-cruises/uniworld-vs-tauck"
            element={<Uniworldvstauckrivercruises />}
          />

          <Route
            path="/uniworld-river-cruises/uniworld-vs-riverside"
            element={<Uniworldvsriversideluxurycruises />}
          />

          <Route
            path="/uniworld-river-cruises/food-dining/"
            element={<UniworldFoodDining />}
          />

          <Route
            path="/uniworld-river-cruises/dress-code-packing/"
            element={<UniworldDressCodePacking />}
          />

          <Route
            path="/uniworld-river-cruises/airfare-transfers/"
            element={<UniworldAirfareTransfers />}
          />

          <Route
            path="/uniworld-river-cruises/solo-travel/"
            element={<UniworldSoloTravel />}
          />

          <Route
            path="/uniworld-river-cruises/family-cruises/"
            element={<UniworldFamilyCruises />}
          />

          <Route
            path="/uniworld-river-cruises/christmas-markets/"
            element={<UniworldChristmasMarketCruises />}
          />

          <Route
            path="/uniworld-river-cruises/uniworld-vs-scenic"
            element={< UniworldvsScenicRiverCruises />}
          />

          <Route
            path="/uniworld-river-cruises/uniworld-vs-amawaterways"
            element={<UniworldvsAmaWaterways />}
          />

          <Route
            path="/celebrity-cruises"
            element={<CelebrityCruises />}
          />

          <Route
            path="/celebrity-cruises/whats-included"
            element={<WhatsIncludedCelebrityCruise />}
          />

          <Route
            path="/celebrity-cruises/ships"
            element={<CelebrityCruiseShipsCompleteFleetGuide />}
          />

          <Route
            path="/celebrity-cruises/staterooms-suites"
            element={<CelebrityStateroomsSuitesGuide />}
          />

          <Route
            path="/celebrity-cruises/ships/celebrity-beyond"
            element={<Celebritybeyondcruiseshipguide />}
          />

          <Route
            path="/celebrity-cruises/ships/celebrity-apex"
            element={<Celebrityapexcruiseshipguide />}
          />

          <Route
            path="/celebrity-cruises/ships/celebrity-edge"
            element={<Celebrityedgecruiseshipguide />}
          />

          {/* <Route
            path="/celebrity-cruises/edge-vs-solstice-series"
            element={<Celebrityedgevssolsticeseries  />}
          />

          <Route
            path="/celebrity-cruises/river-cruises"
            element={<Celebrityrivercruises  />}
          />

          <Route
            path="/celebrity-cruises/river-cruises/rhine"
            element={<Celebrityrhinerivercruises   />}
          />

 */}

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
