import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/images/shape/title_shape_08.svg"
import fancyImg from "@/assets/images/assets/ils_02.svg"

const FancyBannerThree = () => {
   return (
      <div className="fancy-banner-three position-relative text-center z-1 pt-200 xl-pt-150 lg-pt-100 pb-250 xl-pb-200 lg-pb-120">
         <div className="container">
            <div className="row">
                <div className="col-xl-7 col-md-8 m-auto">
                    <div className="title-one mb-45 md-mb-30">
                        <h2>Start Earning Today</h2>
                    </div>
                    <div className="title-one mb-45 md-mb-30">
                        <p>Sign up now to begin taking gigs and making a difference. As Scouter Gigs expands, you’ll have even more ways to earn with new job opportunities</p>
                    </div>
                    <Link href="/contact" className="btn-five text-uppercase">Earn Now!</Link>
                </div>
            </div>
         </div>
          <Image src={fancyImg} alt="" className="lazy-img shapes w-100 illustration"/>
      </div>
   )
}

export default FancyBannerThree
