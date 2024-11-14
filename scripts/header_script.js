// List of headers to cycle through
//    "<center><img src=\"images/AWSBUILDERSKIWI.png\"></center><text class=\"heading_subtitle\">NZs Premiere Tech Connection Hub! Link up with Presenters and Members today!</text>",

const headers = [
    "<br /><h1>! Mi Casa, Su Casa !<br>Discord server available for your remote presentations</h1>",

    `<div class=\"presenter-content\"><div class=\"presenter-column-1\">
        <a href=\"https://www.chiwaichan.co.nz\" target="_blank"><img src=\"images/presenter-banners/2.png\"></a>
      </div>
      <div class=\"presenter-column-2\">
        <a href=\"https://awsfanboy.kiwi\" target="_blank"><img src=\"images/presenter-banners/4.png\"></a>
      </div></div>`,

    "<br /><h1>Connect with your community on Discord today</h1>",

    `<div class=\"presenter-content\"><div class=\"presenter-column-1\">
        <a href=\"https://chamila.dev/blog\" target="_blank"><img src=\"images/presenter-banners/3.png\"></a>
      </div>
      <div class=\"presenter-column-2\">
        <a href=\"https://www.linkedin.com/in/ramstack/\" target="_blank"><img src=\"images/presenter-banners/5.png\"></a>
      </div></div>`,
    
    `<div class=\"presenter-content\"><div class=\"presenter-column-1\">
        <img src=\"images/presenter-banners/younext.png\"></a>
      </div>
      <div class=\"presenter-column-2\">
        <a href=\"https://dunlop.geek.nz\" target="_blank"><img src=\"images/presenter-banners/1.png\"></a> 
      </div></div>`,

    "<br /><h1>Discord has a powerful event management system to host your conference style remote presentations.</h1>",

    "<img src=\"images/AWSBUILDERSKIWI.png\" class=\"logo-image\"><br /><br /><h2>NZs Premiere Tech Connection Hub! Link up with Presenters and Members today!<h2>",
];
  
  let currentIndex = 0;
  
  function changeHeader() {
    // Select the header content div
    const headerContent = document.getElementById('headerbarContent');
  
    // Trigger slide-out animation before changing content
    headerContent.style.animation = 'none'; // Reset animation
    void headerContent.offsetWidth;          // Trigger reflow to reset animation
    headerContent.style.animation = 'slide-in 1s ease forwards';
  
    // Update content and cycle to the next index
    headerContent.innerHTML = `${headers[currentIndex]}`;
    currentIndex = (currentIndex + 1) % headers.length;
  }
  
  // Change header every 3 seconds
  setInterval(changeHeader, 2000);
  