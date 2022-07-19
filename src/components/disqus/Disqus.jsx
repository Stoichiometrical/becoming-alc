import "./disqus.css"

export default function Disqus(){

    return(
        <>
            <div className="disqusWrapper">
                <span className="shareStory">SHARE YOUR OWN STORY</span>
                <div id="disqus_thread">
                    <h1>HERE</h1>
                </div>
            </div>
            { disqus() }
        </>
    )
}

export function disqus(){
    var d = document, s = d.createElement('script');
    s.src = 'https://david-aaiy4bcfwj.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
}




