import React from "react"

function Disqus () = {
    const disqus_config = () => {
        this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    }
    var d = document, s = d.createElement('script');
    s.src = 'https://thruster.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
        return <Disqus>
}

export default Discus