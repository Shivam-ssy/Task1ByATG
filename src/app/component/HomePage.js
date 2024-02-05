import React from "react";
import CustomLayout from "./CustomLayout";
import Signup from "./Signup";
function HomePage(){
    return(
        <>
            <div className="Homepage bg-lighter">
              <div className="d-flex align-items-start gap-3 HomePart1 flex-column" style={{height:"100%",paddingTop:"8em"}}>
                <h3>Exolore your <span className="text-blue">hobby</span> or <span className="text-purple">passion</span></h3>
                <div>
                    Sign-in to interact with a community of fellow hobbyists and an echo-system of expert, teachers, <br/>
                    suppliers, classes, workshops and places to practice, participate or perform. Your Hobby may be <br/>
                    about visual or performing arts, sports, games, gardening, model working, cooking, indoor or <br/>
                    outdoor activities... 
                </div>
                <div>
                    If you are an expert or a seller you can add your listing and promote yourself your students, <br/> products, 
                    services or event. Hope on your hobbyhorse and enjoy your ride.
                </div>
              </div>
              <div className="HomePart2">
                <CustomLayout>
                  <Signup/>
                </CustomLayout>
              </div>
              <div className="mt-3 mt-md-0">
             <img src="Group27.svg" className=" homeImage " />
            </div> 
            </div>
        </>
    )
}
export default HomePage;