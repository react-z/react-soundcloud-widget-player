# react-soundcloud-widget-player

[![npm version](https://badge.fury.io/js/react-soundcloud-widget-player.svg)](https://badge.fury.io/js/react-soundcloud-widget-player)

![](https://raw.githubusercontent.com/StevenIseki/react-soundcloud-widget-player/master/example/screenshot.gif)

react-soundcloud-widget-player is a simple SoundCloud player using the [Widget API](https://developers.soundcloud.com/docs/api/html5-widget)

## Installation

`yarn add react-soundcloud-widget-player`

## Usage

```javascript
import Player from 'react-soundcloud-widget-player'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  render() {
    return (
      <div>
        <Player
          client_id="c5a171200f3a0a73a523bba14a1e0a29"
          audio_id="193179003"
          title="Easyfun - Fanta"
        />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
```

## Styles

Uses styled-components 💅 for the base styling.

## Development
    yarn
    npm run dev

## Build
    yarn
    npm run build
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
