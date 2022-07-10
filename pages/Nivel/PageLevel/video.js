
export default function Video(props) {
    const LinkVideo = props.LinkVideo.substr((props.LinkVideo.length - 11), props.LinkVideo.length)  ;
    console.log(LinkVideo)
    return (
      <>
        <div className="video">
            <iframe
              src={"https://www.youtube.com/embed/"+LinkVideo}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
        </div>
        {props.boton}
      </>
    )
  }
  