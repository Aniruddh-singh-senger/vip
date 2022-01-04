import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import Card from './card'
import { getUsers } from './Redux/action'


const Users = (props)=>  {

  useEffect(() => {
    props.getUsers()
},[])
 
    const { Users } = props.Users
    return (
      <>
        {Users.map(u =>
          <div style={{ display: "flex", justifyContent: "space-evenly", cursor:"pointer" }} key={u.id}>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Prices
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {u.prices.map((ce) => {
                  return <li><a className="dropdown-item" >{ce}</a></li>
                })}
              </ul>
            </div>

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                floor
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {u.floor.map((ce) => {
                  return <li><a className="dropdown-item" >{ce}</a></li>
                })}
              </ul>
            </div>

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Bedroom
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {u.bedroom.map((ce) => {
                  return <li><a className="dropdown-item" >{ce}</a></li>
                })}
              </ul>
            </div>

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Grossm
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {u.grossm2.map((ce) => {
                  return <li><a className="dropdown-item" >{ce}</a></li>
                })}
              </ul>
            </div>
          </div>
        )}
        <Card />
      </>
    )
  }


const mapStateToProps = (state) => ({ Users: state.Users })

export default connect(mapStateToProps, { getUsers })(Users)