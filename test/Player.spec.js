import expect from 'expect'
import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Player from '../src/Player'

test('Player component', t => {
  const wrapper = mount(
    <Player
      title='EASYFUN - Be Your USA feat. Iiris'
      audioUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/449016357"
    />
  )

  t.pass(expect(wrapper.props().audioUrl).toEqual('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/449016357'))
  t.pass(expect(wrapper.props().title).toEqual('EASYFUN - Be Your USA feat. Iiris'))

  t.end()
})
