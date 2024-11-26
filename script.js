//your JS code here. If required.

document.addEventListener("DOMContentLoaded",
						 (event)=>
							 {
								 let btn=document.getElementById("enterBtn");

								 const hele=document.createElement('h1');

								 const text=document.createTextNode('Entered Metaverse');

								 hele.appendChild(text);

								 btn.addEventListener("click", function()
													  {
														  let pele=document.getElementById("status");
														  pele.textContent="";
														  pele.appendChild(hele);
													  })
							 })