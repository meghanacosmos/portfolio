import React from 'react';
import '../css/main.css';

export default function Footer() {
    return (
        <div>
        <footer>
     	<div class="row">

     		<div class="col-six tab-full pull-right social">

     			<ul class="footer-social">        
			      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
			      <li><a href="#"><i class="fa fa-behance"></i></a></li>
			      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
			      <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
			      <li><a href="#"><i class="fa fa-instagram"></i></a></li>
			   </ul> 
	      		
	      </div>

      	<div class="col-eight tab-full">
	      	<div class="copyright">
		        	<span>© Copyright 2018 </span> 
		        	<span>Design by <a href="http://www.styleshout.com/">styleshout</a></span> 
		        	<span>Distributed by <a href="https://themewagon.com/">themewagon</a></span>	         	
		         </div>		                  
	      	</div>

	      	<div id="go-top">
		         <a class="smoothscroll" title="Back to Top" href="#top"><i class="fa fa-long-arrow-up"></i></a>
		      </div>

      	</div> 
   </footer>  

   {/* <div id="preloader"> 
    	<div id="loader"></div>
    </div>  */}
</div>
    );
}