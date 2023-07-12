import React from "react"
import PropTypes from "prop-types"

const YoutubeEmbed = ({ embedId }) => (
  <div className="overflow-hidden pb-[50%] relative h-0">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      // frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      allowFullScreen
      title="Embedded youtube"
      className="w-full h-full absolute top-0 left-0"
    />
  </div>
)

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
}

export default YoutubeEmbed
