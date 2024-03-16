import React from "react";
function Signup() {
  return (
    <>
      <main className="d-flex flex-column gap-3">
        <div
          class="btn-group border border-purple px-3"
          role="group"
          aria-label="First group"
        >
          <img src="Google.svg" />
          <button type="button" className="btn">
            Continue with Google
          </button>
        </div>
        <div
          class="btn-group border border-purple px-3"
          role="group"
          aria-label="First group"
        >
          <img src="Facebook.svg" />
          <button type="button" className="btn">
            Continue with Facebook
          </button>
        </div>
        <div className="d-flex justify-content-center">or connect with</div>
        <div>
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          {/* <div className="d-flex justify-content-between gap-5 align-items-center ">

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
             Remember me
            </label>
          </div>
          <div className="d-flex"><img src="Vector.svg"/>Forget Password</div>
          </div> */}
          <div
          class="mt-3 d-flex justify-content-center rounded border border-purple px-3">
          <button type="button" className="btn">
            Continue
          </button>
        </div>
        </div>
      </main>
    </>
  );
}
export default Signup;
