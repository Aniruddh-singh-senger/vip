import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getData } from './Redux/action'
import "./style.css";


const Data =(props) =>  {

  useEffect(() => {
    props.getData()
},[])
 
    const { Data } = props.Data

    return (
      <>    
      <section className="main-card--cointainer"> 
        {Data.map((curElem) => {
          const { id, floor, grossm2, price,apartment_id,aptNo } = curElem;
          return (
            <>
            <Link style={{textDecoration: "none", color:"black"}} to="/Building/:id">
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title">AptNo: {aptNo}</h2>
                    <h3> Price: {price} </h3>
                    <span className="card-description subtle">
                    Grossm: {grossm2}
                    </span>
                    <div className="card-read">Floor: {floor} </div>
                  </div>
                  <span style={{ textAlign: "center" }} className="card-tag  subtle"> Apartment_id: {apartment_id}</span>
                </div>
              </div>
              </Link>
            </>
          );
        })}
        
        
      </section>
      </>
    )
  }


const mapStateToProps = (state) => ({ Data: state.Data })

export default connect(mapStateToProps, { getData })(Data)