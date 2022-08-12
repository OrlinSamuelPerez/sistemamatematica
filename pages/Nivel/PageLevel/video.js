
export default function Video(props) {
    const LinkVideo = props.LinkVideo.substr((props.LinkVideo.length - 11), props.LinkVideo.length)  ;
    return (
      <>
        <div className="video">
            <iframe
              src={"https://www.youtube.com/embed/"+LinkVideo+"?autoplay=1&origin"}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
        </div>
      </>
    )
  }
  