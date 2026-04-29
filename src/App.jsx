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

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
