import React from "react"
import '../css/main.css'

export default function Header() {
	const [click, setClick] = React.useState(false)
    return(
        <header>   	
   	<div class="row">

   		<div class="top-bar"  onClick={ () => setClick(!click)}>
   			<a class="menu-toggle" href="#"><span>Menu</span></a>

	   		<div class="logo" >
		         <a href="#">Meg</a>
		      </div>		      
			{ click && <nav id="main-nav-wrap">
					<ul class="main-navigation">
						<li class="current"><a class="smoothscroll"  href="#intro" title="">Home</a></li>
						<li><a class="smoothscroll"  href="#about" title="">About</a></li>
						<li><a class="smoothscroll"  href="#resume" title="">Resume</a></li>
						<li><a class="smoothscroll"  href="#portfolio" title="">Portfolio</a></li>
						<li><a class="smoothscroll"  href="#services" title="">Services</a></li>					
						<li><a class="smoothscroll"  href="#contact" title="">Contact</a></li>	
						<li><a href="styles.html" title="">Style Demo</a></li>				
					</ul>
				</nav>
			}		   		
   		</div> 
   	</div> 	
   </header> 
    );
}