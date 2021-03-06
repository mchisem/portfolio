 new fullpage("#fullpage", {
     autoScrolling: true,
     navigation: true,
     onLeave: (origin, destination, direction) => {
         const section = destination.item;
         const title = section.querySelector("h1");
         const tl = new TimelineMax({delay: 0.5});
         const video = document.querySelector("#watch");
         const resume = document.querySelector("#file");
         const img1 = document.querySelector("#img1");
         const img2 = document.querySelector("#one");

         tl.fromTo(title, 0.5, 
            {y: "100", opacity: 0}, {y: 0, opacity: 1});
        
        if(destination.index === 0) {
            document.getElementById("home").style.color = "black";
            document.getElementById("contact").style.color = "black";

            video.classList.remove("hide");
          
            tl.fromTo(video, 0.5,
                {y: 0, opacity: 0}, {y: 0, opacity: 1}
                );
        }

        else if(destination.index === 1) {
            document.getElementById("home").style.color = "white";
            document.getElementById("contact").style.color = "white";

            video.classList.add("hide");

            tl.fromTo(resume, 0.5,
                {x: "100", opacity: 0}, {x: 0, opacity: 1} 
                 );
        }  

        else if(destination.index === 2) {
            document.getElementById("contact").style.color = "black";
            document.getElementById("home").style.color = "black";

            video.classList.add("hide");

            tl.fromTo(img1, 0.5,
                {x: "-100", opacity: 0}, {x: 0, opacity: 1} 
                 );

        }
 
        else if(destination.index === 3) {
            document.getElementById("contact").style.color = "black";
            document.getElementById("home").style.color = "black";

            video.classList.add("hide");

            tl.fromTo(img2, 0.5,
                {x: "100", opacity: 0}, {x: 0, opacity: 1} 
                 );
        }

        else if(destination.index === 4) {
            video.classList.add("hide");
        }
     }
 });