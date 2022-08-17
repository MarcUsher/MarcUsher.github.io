import React from 'react'
import '../../assets/button.css'

export default function Button(props) {
  return (
    <div>
        <a href={props.url} className="button animated-button" target='_blank' rel='noreferrer'>
            {(props.type === "app")
            ?
            "Open Project"
            :
            "View on GitHub"
            }
        </a>
    </div>
  )
}
