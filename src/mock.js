const comments = {
  length: 8,
  data: [
    { id: 1,
      added: '2017-06-19T00:10:10.795Z',
      username: 'User1',
      body: 'Even in these scenarios though, you can usually skirt away and clear the board.',
      rating: 0,
      parent: null,
      children: [
        { id: 6,
          added: '2017-06-19T00:11:10.795Z',
          username: 'User-name',
          body: "@User1 The only really bad position is when you go first and you don't have a natural selection or flash reincarnation. Even in these scenarios though, you can usually skirt away and clear the board.",
          rating: 0,
          parent: 1,
          children: null
        },
        { id: 7,
          added: '2017-06-19T00:12:10.795Z',
          username: 'User1',
          body: "@User-name Can i add youin game to watch some replays?",
          rating: 0,
          parent: 1,
          children: null
        },
        { id: 8,
          added: '2017-06-19T00:13:10.795Z',
          username: 'User-name',
          body: "@User-name Can i add youin game to watch some replays?",
          rating: 0,
          parent: 1,
          children: null
        }
      ]
    },
    { id: 2,
      added: '2017-06-19T00:11:10.795Z',
      username: 'User-name',
      body: 'Of course, but despite what one would guess initially, this deck\'s playstyle lends itself to remarkable consistency due to its ability to stabilize. The only really bad position is when you go first and you don\'t have a natural selection or flash reincarnation. Even in these scenarios though, you can usually skirt away and clear the board. Another point of consistency is that when you\'re in end game, you\'ll never be plagued by drawing 2-3 drops every other deck runs. You\'ll always get a power creature or removal.',
      rating: 22,
      parent: null,
      children: null
    },
    { id: 3,
      added: '2017-06-19T00:00:10.795Z',
      username: 'User-name',
      body: "Congrats. I've played a deck like this for a while but with different specific cards. It's not easy to pilot since you can't do much your first couple of turns but stall, and if you don't pull the right cards at the right time, you fall hopelessly behind.",
      rating: 0,
      parent: null,
      children: null
    },
    { id: 4,
      added: '2017-06-19T00:12:10.795Z',
      username: 'User2',
      body: "Yea Harvestor/meta is a classic. I put it back in after the Kron nerf. But yea Qeltar I totaly run the harvest package, although Sunsteel or taygete are both very valid alternatives. Congrats on S rank, always love seeing a fellow control player do succesfully.",
      rating: -10,
      parent: null,
      children: null
    },
    { id: 5,
      added: '2017-06-19T00:25:10.795Z',
      username: 'User-name',
      body: "This deck is heavily inspired by Mogwai's control magmar from last season http://managlow.com/wp-content/uploads/2016/07/MogwaiControlVaath07072016.png One of the most fun deck styles I've ever played and probably the most unique. I didn't find myself using silhouette tracer often and replaced kinetic equilibrium with thumping wave, also added another plasma storm and iridium scale. I believe these are more consistently useful than kinetic equilibrium. The main combo of the deck is going second, turn 2 flash reincarnate makantor, followed by keeper of the vale for guaranteed makantor.",
      rating: 0,
      parent: null,
      children: null
    }]
}
const json = JSON.stringify(comments)
export default json
