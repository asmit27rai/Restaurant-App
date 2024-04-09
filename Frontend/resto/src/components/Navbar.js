import React, { useState, useRef } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <nav className="navbar fixed-top navbar-dark bg-dark justify-content-between">
      <div className="d-flex align-items-center">
        <a className="navbar-brand font-weight-bold font-italic mx-auto">
          <b className="m-auto">RESTO</b>
        </a>
      </div>
      <form className="form-inline">
      <button type="button" className="btn btn-primary m-2" >
          Register
        </button>
        <button type="button" className="btn btn-primary m-2" >
          LoginIn
        </button>
        <button type="button" className="btn btn-primary m-2" onClick={toggleModal}>
          About Us
        </button>
      </form>
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
          ref={modalRef}
          onClick={(e) => {
            if (e.target === modalRef.current) {
              closeModal();
            }
          }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">About RESTO</h5>
              </div>
              <div className="modal-body">
                <div id="about-us">
                  <h2>Welcome to RESTO!</h2>
                  <p>At RESTO, we offer:</p>
                  <ul>
                    <li>
                      <strong>Exceptional Dining:</strong> Experience the finest
                      in [cuisine type] cuisine with our carefully crafted
                      dishes.
                    </li>
                    <li>
                      <strong>Fresh Ingredients:</strong> Enjoy meals made with
                      the freshest locally sourced produce, meats, and seafood.
                    </li>
                    <li>
                      <strong>Warm Hospitality:</strong> Our friendly staff is
                      dedicated to providing you with attentive service and a
                      welcoming atmosphere.
                    </li>
                    <li>
                      <strong>Sustainability:</strong> We're committed to
                      sustainability, minimizing our environmental impact and
                      supporting local farmers and producers.
                    </li>
                    <li>
                      <strong>Memorable Experiences:</strong> Whether you're
                      celebrating a special occasion or enjoying a casual meal,
                      we promise to make your dining experience unforgettable.
                    </li>
                  </ul>
                  <p>
                    Join us at RESTO for a culinary journey like no other. Thank
                    you for choosing us—we look forward to serving you soon!
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
