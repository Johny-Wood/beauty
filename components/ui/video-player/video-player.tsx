'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { BaseReactPlayerProps } from 'react-player/base'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

import PlayIcon from '../../icons/PlayIcon'

import './index.css'

const PlayButton = () => {
  return (
    <button>
      <PlayIcon />
    </button>
  )
}

const VideoPlayer = (props: BaseReactPlayerProps) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        width="100%"
        height="100%"
        playIcon={<PlayButton />}
        playing
        {...props}
      />
    </div>
  )
}

export default VideoPlayer
