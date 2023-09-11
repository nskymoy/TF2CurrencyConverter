import Title from '../components/title';
import ScrapMetalConvert from '../components/scrapmetalconvert';
import ReclaimedMetal from '../components/reclaimedmetalconvert';
import RefinedMetalConvert from '../components/refinedmetalconvert';
import TF2Metals from '../components/typesofmetals';

export default function Home() {
  return (
    <>
    <Title/>
    <p>This website can be used to convert various currencies in TF2 (such as scrap metal, reclaimed metal, or refined metal).</p>
    <br></br>
    <br></br>
    <ScrapMetalConvert/>
    <ReclaimedMetal/>
    <RefinedMetalConvert/>
    <TF2Metals/>
    </>
  );
}
