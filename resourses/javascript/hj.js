function hj(x)
{
  if(x==1)
      {
         document.querySelector("#animation").classList.add("animated"); 
           document.querySelector("#animation").classList.add("jello");
           document.querySelector("#animation").classList.add("infinite"); 
      }
    else
    if(x==2)
      {
          document.querySelector("#animation").classList.remove("animated"); 
           document.querySelector("#animation").classList.remove("jello");
           document.querySelector("#animation").classList.remove("infinite");
            
      }
    else if(x==3)
      {
         document.querySelector("#animation1").classList.add("animated"); 
           document.querySelector("#animation1").classList.add("jello");
           document.querySelector("#animation1").classList.add("infinite"); 
      }
    else
    if(x==4)
      {
          document.querySelector("#animation1").classList.remove("animated"); 
           document.querySelector("#animation1").classList.remove("jello");
           document.querySelector("#animation1").classList.remove("infinite");
            
      }
}
