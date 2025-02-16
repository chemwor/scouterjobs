import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import HeaderFour from "@/layouts/headers/HeaderFour"
import FooterFour from "@/layouts/footers/FooterFour"
import ProjectDetailsArea from "./ProjectDetailsArea"
import FancyBanner from "@/components/common/FancyBanner"
import JobBoardGrid from "@/components/inner-pages/projects/project-details/jobBoard";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import HeaderOne from "@/layouts/headers/HeaderOne";
import BLockFeatureFour from "@/components/homes/home-one/BLockFeatureFour";

const ProjectFour = () => {
   return (
      <>
         <HeaderOne />
         <BreadcrumbThree title="Claim A Job" link="pricing_01" link_title="Project" style={false} />
          <JobBoardGrid/>
          <BLockFeatureFour/>
         <FooterFour />
      </>
   )
}

export default ProjectFour;
