import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import HeaderFour from "@/layouts/headers/HeaderFour"
import FooterFour from "@/layouts/footers/FooterFour"
import ProjectDetailsArea from "./ProjectDetailsArea"
import FancyBanner from "@/components/common/FancyBanner"
import JobBoardGrid from "@/components/inner-pages/projects/project-details/jobBoard";

const ProjectFour = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Single Projects" link="pricing_01" link_title="Project" sub_title="Vintage City" style={false} />
          <JobBoardGrid/>
          {/*<ProjectDetailsArea />*/}
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ProjectFour;
