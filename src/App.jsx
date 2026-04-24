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
            path="/first-time-japan-itinerary"
            element={<FirstTimeJapan />}
          ></Route>
          <Route
            path="/best-time-to-visit-japan"
            element={<BestTimeJapan />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
