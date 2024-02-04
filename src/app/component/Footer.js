import React from "react";
function Footer() {
  return (
    <>
      <main>
        <div className="footer mt-3">
          <div>
            <ul>
              <li className="fw-bold">Hobbycue</li>
              <li>About us</li>
              <li>Our service</li>
              <li>Work with Us </li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="fw-bold">How do I</li>
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="fw-bold">Quick Links</li>
              <li>Listing</li>
              <li>Blog Post</li>
              <li>Shop/Store</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <div>
              <h5>Social Media</h5>
              <div className="d-flex gap-3">
                <img src="Group60.svg" />
                <img src="Group61.svg" />
                <img src="Group62.svg" />
                <img src="Group63.svg" />
                <img src="Group59.svg" />
                <img src="Group58.svg" />
                <img src="Group57.svg" />
                <img src="Group56.svg" />
              </div>
            </div>
            <div className=" mt-5">
              <h5>Invite Friends</h5>
              <div className="input-group mb-3 border border-purple rounded">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Id"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
                <span class="input-group-text border border-purple bg-purple" id="basic-addon1">
                  Invite
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-part2 d-flex justify-content-center align-items-center mb-5 p-3">© Purple Cues Private Limited</div>
      </main>
    </>
  );
}
export default Footer;
