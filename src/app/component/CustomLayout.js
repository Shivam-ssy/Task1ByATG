import React from "react";
function CustomLayout({children}){
    return(
        <>
            <div>
                <div className="d-flex justify-content-center align-items-center">
                    <ul className=" list-unstyled d-flex gap-3">
                        <li>Sign up</li>
                        <li>Join in</li>
                    </ul>
                </div>
                <main className="d-flex justify-content-center align-items-center">{children}</main>
            </div>
        </>
    )
}
export default CustomLayout;