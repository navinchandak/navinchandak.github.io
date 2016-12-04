document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">')
document.write('<head>')
document.write('	<title> Navin\'s webspace </title>')
document.write('</head>')
function x ( x,y) {
	if(x==0 || x==undefined) 
			{s="";}
			else if(x==1)	
				 {s="../";}
					if(y!="no") {
						document.write( '<div style="padding:13px;" class="topdiv"><center><span class="mhead" style="font-size:1.5em; font-weight:bold;">NAVIN CHANDAK</span></br><span class="mhead" style="font-size:0.82em; font-weight:bold;">Computer Science and Engineering, IIT Bombay</span></center></div>' )}
						document.write( '<table width="100%"	 id="nav"> <tr> ' )
						document.write( '<td><a href="'+s+'./">HOME</a></td> ' )
						document.write( '<td><a href="'+s+'acads.html">ACADEMICS</a></td> ' )
						document.write( '<td><a href="'+s+'projects.html">PROJECTS</a></td>' )
						document.write( '<td><a href="'+s+'resume.pdf">R&EacuteSUM&Eacute</a></td>')
						//document.write( '<td><a href="'+s+'interests.html">Interests</a></td>' )
						//document.write( '<td><a href="'+s+'index.html">MY DIR	</a></td>' )
						document.write( '<td><a href="'+s+'contact.html">CONTACT</a></td> ' )
						document.write( '<td><a href="'+s+'ra">MY DIR</a></td>' )
						document.write( '</tr> </table>' )
}
function highlight(x) {
		nav=document.getElementById("nav");
			a=nav.getElementsByTagName("a");
				var i;
					for(i=0;i<a.length;i++) {
								if(endmatch(a[i].href,x)) {
										//			a[i].style.backgroundColor="#ffcc22";
													return;
															}
																}
}
function endmatch(x,y) {
		var flag=1;
			for(var i=x.length-1; i>=x.length-y.length;i--) {
						if(x[i]!=y[i-(x.length-y.length)]) {flag=0; break; }
							}
								if(flag==0) {
											return false;
												}
													else {
																return true;
																	}
}

function  showAll(){
//	alert("haha");
	$('.accordion-body').collapse('show');
}
function  hideAll(){
	$('.accordion-body').collapse('hide');
}

function addImage(id,imageName){
	if(imageName==null){
		imageName="img1.png";
	}
	var projectname=id.parentNode.id;
	var imageLink="projects/"+projectname+"/"+imageName;
	var desc=document.getElementById(id.href.split("#").pop()).firstChild;

	if(desc.firstChild.tagName!="IMG"){
		var image=document.createElement("img");
		image.src=imageLink;
		image.height="145px";
		projects=document.getElementsByClassName("accordion-inner");
		for(var i=0;i<projects.length;i++){
			if(projects[i].isEqualNode(desc)==true){
				if(i%2==0){
					image.className="pimgr";
				}
				else{ 
					image.className="pimgl";
				}
			}
		}
		desc.insertBefore(image,desc.firstChild);
	}
	
}

