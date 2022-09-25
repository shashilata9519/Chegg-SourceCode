import React, { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  const [location, setLocation] = useState("");
  const [place, setPlace] = useState([]);
  const [itemLocation, setItemLocation] = useState("");
  const [item, setItem] = useState([]);
  const [workshop,setWorkshop]=useState([])

  const handleLocation = () => {
    getLocation();
  };
  const handleProduct = () => {
    getProductData();
  };
  const handleWorkshop=()=>{
    getWorkshop()
  }

  const getProductData = async () => {
    let result = await axios
      .get("https://cheggproject1.herokuapp.com/product")
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
      });
  };
  const getWorkshop = async () => {
    let result = await axios
      .get("https://cheggproject1.herokuapp.com/workshop")
      .then((res) => {
        setWorkshop(res.data);
        console.log(res.data);
      });
  };

  const getLocation = async () => {
    let result = await axios
      .get("https://cheggproject1.herokuapp.com/location")
      .then((res) => {
        setPlace(res.data);
        console.log(res.data);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <a className="navbar-brand fs-1" href="/">
          Chegg
        </a>
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
                <a
                  className="nav-link mx-5 "
                  aria-current="page"
                  
                >
                  Student Id : 12411
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-3"
                  aria-current="page"
                  
                >
                  State : Delhi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-5 "
                  aria-current="page"
                  
                >
                  Subject : Soil Fertility
                </a>
              </li>
              
              <li className="nav-item">
                <a
                  className="nav-link mx-3"
                  aria-current="page"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={handleLocation}
                >
                  Local Support
                </a>
              </li>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Local Support 
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body location">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={location}
                        onChange={(e) => {
                          setLocation(e.target.value);
                          console.log(e.target.value);
                        }}
                      >
                        <option>choose state</option>
                        <option>Bihar</option>

                        <option>Haryana</option>
                        <option>Uttar Pradesh</option>
                      </select>
                      <hr />
                      <ul>
                        {location === "Bihar" ? (
                          <>
                            {place
                              .filter(
                                (i) => i._id === "632c7a81a99ed7479a1ce33c"
                              )
                              .map((i) => {
                                return (
                                  <>
                                    <div key={i._id}>
                                      <div className="th">
                                        <div>{i.city[0]}</div>

                                        <a href={i.link[0]} target="_blank">
                                          lab location
                                        </a>
                                      </div>
                                      <br />
                                      <div className="th">
                                        <div>{i.city[1]}</div>

                                        <a href={i.link[1]} target="_blank">
                                          lab location
                                        </a>
                                      </div>
                                      <br />
                                      <div className="th">
                                        <div> {i.city[2]}</div>

                                        <a href={i.link[2]} target="_blank">
                                          lab location
                                        </a>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                          </>
                        ) : (
                          <div></div>
                        )}
                      </ul>
                      <ul>
                        {location === "Uttar Pradesh" ? (
                          <>
                            {place
                              .filter(
                                (i) => i._id === "632d3bd2df9ecd45e2bcda0b"
                              )
                              .map((i) => {
                                return (
                                  <>
                                    <div key={i._id}>
                                      <div className="th">
                                        <div>{i.city[0]}</div>

                                        <a href={i.link[0]} target="_blank">
                                          lab location
                                        </a>
                                      </div>
                                      <br />
                                      <div className="th">
                                        <div>{i.city[1]}</div>

                                        <a href={i.link[1]} target="_blank">
                                          lab location
                                        </a>
                                      </div>
                                      <br />
                                      <div className="th">
                                        <div>{i.city[2]}</div>

                                        <a href={i.link[2]} target="_blank">
                                          lab location
                                        </a>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                          </>
                        ) : (
                          <div></div>
                        )}
                      </ul>
                      <ul>
                        {location === "Haryana" ? (
                          <>
                            {place
                              .filter(
                                (i) => i._id === "632d3bcadf9ecd45e2bcda0a"
                              )
                              .map((i) => {
                                return (
                                  <>
                                    <div key={i._id}>
                                      <div className="th">
                                        <div>{i.city[0]}</div>

                                        <a href={i.link[0]} target="_blank">
                                          lab location
                                        </a>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                          </>
                        ) : (
                          <div></div>
                        )}
                      </ul>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <li className="nav-item">
                <a
                  className="nav-link mx-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  onClick={handleProduct}
                >
                  Relevent Material
                </a>
              </li>
              <div
                className="modal fade"
                id="exampleModal1"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Purchase for Soil Fertility
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={itemLocation}
                        onChange={(e) => {
                          setItemLocation(e.target.value);
                          console.log(e.target.value);
                        }}
                      >
                        <option>choose state</option>
                        <option>Bihar</option>

                        <option>Haryana</option>
                        <option>Maharasthra</option>
                      </select>
                      <ul className="itemStyle">
                        {itemLocation === "Bihar" ? (
                          <>
                            {item
                              .filter(
                                (i) => i._id === "632d4651df9ecd45e2bcda0c"
                              )
                              .map((i) => {
                                return (
                                  <>
                                    <div key={i._id}>
                                      <div>
                                        <br />
                                        <div>
                                          <span>City : </span> {i.city[0]}
                                        </div>

                                        <div>
                                         <span>Organic Fertilizer Shop :</span> 
                                          {i.organicFertilizers[0]}
                                        </div>
                                      </div>
                                      <br />
                                      <div>
                                        <div><span>City :</span> {i.city[1]}</div>

                                        <div>
                                         <span>Organic Fertilizer Shop : </span> 
                                          {i.organicFertilizers[1]}
                                        </div>
                                      </div>
                                      <br />
                                      <div>
                                        <div><span> City :</span> {i.city[2]}</div>

                                        <div>
                                         <span> Organic Fertilizer Shop:</span>
                                          {i.organicFertilizers[2]}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                          </>
                        ) : (
                          <div></div>
                        )}
                      </ul>
                      <ul>
                        {itemLocation === "Haryana" ? (
                          <>
                            {item
                              .filter(
                                (i) => i._id === "632d4744df9ecd45e2bcda0d"
                              )
                              .map((i) => {
                                return (
                                  <>
                                    <div key={i._id}>
                                      <div>
                                        <br />
                                        <div> <span>City : </span>{i.city[0]}</div>

                                        <div>
                                         <span> Organic Fertilizer Shop : </span>
                                          {i.organicFertilizers[0]}
                                        </div>
                                      </div>
                                      <br />
                                      <div>
                                        <div> <span>City : </span>{i.city[1]}</div>

                                        <div>
                                         <span> Organic Fertilizer Shop : </span>
                                          {i.organicFertilizers[2]}
                                        </div>
                                      </div>
                                      <br />
                                      <div>
                                        <div> <span>City : </span>{i.city[2]}</div>

                                        <div>
                                         <span> Organic Fertilizer Shop : </span>
                                          {i.organicFertilizers[2]}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                          </>
                        ) : (
                          <div></div>
                        )}
                      </ul>
                      <ul>
                        {itemLocation === "Maharasthra" ? (
                          <>
                            {item
                              .filter(
                                (i) => i._id === "632d47aedf9ecd45e2bcda0e"
                              )
                              .map((i) => {
                                return (
                                  <>
                                    <div key={i._id}>
                                      <div>
                                        <br />
                                        <div><span>City : </span>{i.city[0]}</div>

                                        <div>
                                          <span>Organic Fertilizer Shop : </span>
                                          {i.organicFertilizers[0]}
                                        </div>
                                      </div>
                                      <br />
                                      <div>
                                        <div><span>City : </span>{i.city[1]}</div>

                                        <div>
                                          <span>Organic Fertilizer Shop : </span>
                                          {i.organicFertilizers[1]}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                          </>
                        ) : (
                          <div></div>
                        )}
                      </ul>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <li className="nav-item">
                <a
                  className="nav-link mx-3"
                  data-bs-toggle="modal"
                  data-bs-target="#examplework"
                  onClick={handleWorkshop}
                >
                  Workshop
                </a>
              </li>
              <div
                className="modal fade"
                id="examplework"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                      * For (Internship)  visit the link given below.
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                     
                    
                          {
                            workshop.map((i)=>{
                              return(
                                <>
                              <div key={i._id} className="my-3">
                                  <div><span>State : </span>{i.state}</div>
                                  <div><span>City : </span>{i.city}</div>
                                  <div><span>Lab : </span>{i.lab} <a href={i.link}>visit</a></div>

                              </div>
                              </>
                              )
                            })
                          }
                          
                    </div>
                    
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </>
      </div>
    </nav>
  );
}

export default Navbar;
