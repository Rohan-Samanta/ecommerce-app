import React from "react";
import Nav from "../nav/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Welcome to Ecommerce</h2>
            <p className="text-center">
              Choose a catagory to start shopping now
            </p>
            <div className="row m-5">
              <div className="col">
                <div className="card py-5 rounded bg-dark text-white">
                  <h5 className="text-center">Electronics</h5>
                </div>
              </div>
              <div className="col">
                <div className="card py-5 rounded bg-dark text-white">
                  <h5 className="text-center">Fashions</h5>
                </div>
              </div>
              <div className="col">
                <div className="card py-5 rounded bg-dark text-white">
                  <h5 className="text-center">Household</h5>
                </div>
              </div>
              <div className="col">
                <div className="card py-5 rounded bg-dark text-white">
                  <h5 className="text-center">Appliances</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
