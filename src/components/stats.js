import React from 'react'
import '../css/main.css'
export default function Stats () {
    return (
        <section id="stats" class="count-up">

		<div class="row">
			<div class="col-twelve">

				<div class="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list" style={{display:'flex' , justifyContent:'space-between'}}>

					<div class="bgrid stat" >

						<div class="icon-part">
							<i class="icon-pencil-ruler"></i>
						</div>

						<h3 class="stat-count">
							1500
						</h3>

						<h5 class="stat-title">
							Projects Completed
						</h5>

					</div>				

					<div class="bgrid stat">

						<div class="icon-part">
							<i class="icon-users"></i>
						</div>

						<h3 class="stat-count">
							900
						</h3>

						<h5 class="stat-title">
							Happy Clients
						</h5>

					</div> 

					<div class="bgrid stat">

						<div class="icon-part">
							<i class="icon-badge"></i>
						</div>

						<h3 class="stat-count">
							200
						</h3>

						<h5 class="stat-title">
							Awards Received
						</h5>

					</div> 								

					<div class="bgrid stat">

						<div class="icon-part">
							<i class="icon-light-bulb"></i>
						</div>

						<h3 class="stat-count">
							120
						</h3>

						<h5 class="stat-title">
							Crazy Ideas
						</h5>

					</div> 

					<div class="bgrid stat">

						<div class="icon-part">
							<i class="icon-cup"></i>
						</div>

						<h3 class="stat-count">
							1500
						</h3>

						<h5 class="stat-title">
							Coffee Cups
						</h5>

					</div> 

					<div class="bgrid stat">

						<div class="icon-part">
							<i class="icon-clock"></i>
						</div>

						<h3 class="stat-count">
							7200
						</h3>

						<h5 class="stat-title">
							Hours
						</h5>

					</div> 

				</div> 

			</div> 
		</div> 

	</section> 

    );
}