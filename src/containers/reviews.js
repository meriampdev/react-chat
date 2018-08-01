import React from 'react'
import '../reviews.css'

class Reviews extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container">
      	<h2 className="page-title">Testimonial/Review Styles</h2>
      	<ul className="nav nav-pills">
      		<li className="active">
      			<a href="#one" data-toggle="tab">Style 1</a>
      		</li>
      		<li>
      			<a href="#two" data-toggle="tab">Style 2</a>
      		</li>
      		<li>
      			<a href="#three" data-toggle="tab">Style 3</a>
      		</li>
      	</ul>
      	<div className="tab-content">
      		<div className="tab-pane fade in active" id="one">
      			<div className="row">
      				<div className="col-sm-6">
      					<div className="testimonial-wrap">
      						<div className="testimonial">
      							<strong>"Lorem ipsum dolor..."</strong>
      			        <p>
      			          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptas odit consectetur necessitatibus suscipit libero nam porro hic, cumque quos, aspernatur voluptatem laboriosam modi voluptatum nesciunt deleniti repellat error doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      			        </p>
      						</div>
      						<cite className="testimonial-author">
      							<span className="name">
      								<strong>Betty Crocker</strong>
      								St. James, NY
      							</span>
      							<span className="stars">
      								<i className="fa fa-star"></i>
      								<i className="fa fa-star"></i>
      								<i className="fa fa-star"></i>
      								<i className="fa fa-star"></i>
      								<i className="fa fa-star"></i>
      							</span>
      						</cite>
      					</div>
      				</div>
      				<div className="col-sm-6">
      					<div className="testimonial-wrap">
      						<div className="testimonial">
      							<strong>"Lorem ipsum dolor..."</strong>
      			        <p>
      			          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptas odit consectetur necessitatibus suscipit libero nam porro hic, cumque quos, aspernatur voluptatem laboriosam modi voluptatum nesciunt deleniti repellat error doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      			        </p>
      						</div>
      						<cite className="testimonial-author">
      							<span className="name">
      								<strong>James Smith</strong>
      								Smithtown, NY
      							</span>
      							<span className="stars">
      								<i className="fa fa-star"></i>
      								<i className="fa fa-star"></i>
      								<i className="fa fa-star"></i>
      								<i className="fa fa-star"></i>
      								<i className="fa fa-star"></i>
      							</span>
      						</cite>
      					</div>
      				</div>
      			</div>
      		</div>
      		<div className="tab-pane fade" id="two"></div>
      		<div className="tab-pane fade" id="three"></div>
      	</div>
      </div>
    )
  }
}

export default Reviews
