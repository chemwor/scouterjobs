import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import Brand from "@/components/homes/home-five/Brand"
import FooterFour from "@/layouts/footers/FooterFour"
import HeaderFour from "@/layouts/headers/HeaderFour"
import BLockFeatureOne from "./BLockFeatureOne"
import BlockFeatureThree from "../service-one/BlockFeatureTwo"
import BLockFeatureTwo from "./BLockFeatureTwo"
import FancyBanner from "@/components/common/FancyBanner"
import BLockFeatureThree from "./BLockFeatureThree"
import CloseJobForm from "../service-two/closeJob"
import BLockFeatureFour from "@/components/homes/home-one/BLockFeatureFour";
import HeaderOne from "@/layouts/headers/HeaderOne";


const ServiceTwo = () => {
   return (
      <>
         <HeaderOne />
         <BreadcrumbThree title="Our Services" link="#" link_title="Pages" sub_title="Services" style={false} />
         <BLockFeatureOne />
          <CloseJobForm />
         {/*<Brand />*/}
         {/*<BLockFeatureThree />*/}
         {/*<BlockFeatureThree style={true} />*/}
         {/*<BLockFeatureTwo />*/}
         <BLockFeatureFour />
         <FooterFour />
      </>
   )
}

export default ServiceTwo
