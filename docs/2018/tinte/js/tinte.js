'use strict'
function initCanvas(e, t) {
  ;(canvas = document.getElementById('canvas')),
    (canvas.width = e),
    (canvas.height = t),
    (ctx = canvas.getContext('2d'))
}
function initDiffPt() {
  for (i = 0; i < verNum; i++) diffPt[i] = 0
}
function rnd() {
  ;(xx = Math.floor(Math.random() * (verNum - 2))), (autoDiff = 400), (diffPt[xx] = 700)
}
function draw() {
  for (
    ctx.beginPath(),
      ctx.moveTo(0, window.innerHeight - 900),
      ctx.fillStyle = color1,
      ctx.lineTo(vertexes[0].x, vertexes[0].y),
      i = 1;
    i < vertexes.length;
    i++
  )
    ctx.lineTo(vertexes[i].x, vertexes[i].y)
  for (
    ctx.lineTo(canvas.width, window.innerHeight),
      ctx.lineTo(0, window.innerHeight),
      ctx.fill(),
      ctx.beginPath(),
      ctx.moveTo(0, window.innerHeight),
      ctx.fillStyle = color2,
      ctx.lineTo(vertexes[0].x + 15, vertexes[0].y + 5),
      i = 1;
    i < vertexes.length;
    i++
  )
    ctx.lineTo(vertexes[i].x + 15, vertexes[i].y + 5)
  ctx.lineTo(canvas.width, window.innerHeight), ctx.lineTo(0, window.innerHeight), ctx.fill()
}
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height),
    (autoDiff -= 0.9 * autoDiff),
    (diffPt[xx] = autoDiff)
  var e
  for (i = xx - 1; i > 0; i--)
    (e = xx - i), e > dd && (e = dd), (diffPt[i] -= (diffPt[i] - diffPt[i + 1]) * (1 - 0.01 * e))
  for (i = xx + 1; i < verNum; i++)
    (e = i - xx), e > dd && (e = dd), (diffPt[i] -= (diffPt[i] - diffPt[i - 1]) * (1 - 0.01 * e))
  for (i = 0; i < vertexes.length; i++) vertexes[i].updateY(diffPt[i])
  draw()
}
function Vertex(e, t, i) {
  ;(this.baseY = i),
    (this.x = e),
    (this.y = t),
    (this.vy = 0),
    (this.targetY = 0),
    (this.friction = 0.15),
    (this.deceleration = 0.95)
}
function resize() {
  ;(canvasW = document.getElementById('container').offsetWidth + 40),
    initCanvas(canvasW, window.innerHeight / 7)
  var e = canvas.width,
    t = canvas.height
  for (i = 0; i < verNum; i++) vertexes[i] = new Vertex((e / (verNum - 1)) * i, t / 1.5, t / 1.5)
  initDiffPt()
}
function init() {
  resize()
  var e = 30,
    t = (1e3 / e) >> 0
  setInterval(update, t),
    setInterval(rnd, 9e3),
    setInterval(rnd, 11e3),
    addListener(window, 'resize', resize),
    (canvas.onmousedown = function(e) {
      var t, i
      e
        ? ((t = e.pageX), (i = e.pageY))
        : ((t = event.x + document.body.scrollLeft), (i = event.y + document.body.scrollTop)),
        0.9 * window.innerHeight < i &&
          ((autoDiff = 700),
          t < canvas.width - 2 &&
            ((xx = 1 + Math.floor(((verNum - 2) * t) / canvas.width)), (diffPt[xx] = autoDiff)))
    })
}
!(function() {
  function e() {
    var e = 0
    for (e = 0; e < a.length; e++) a[e].bbaudio.pause(), a[e].updateDisplay()
  }
  function t(e, t) {
    var i = t - e.toString().length + 1
    return new Array(+(i > 0 && i)).join('0') + e
  }
  function i(e) {
    if (isNaN(e)) return '--:--'
    var i = Math.floor(e / 60)
    return (e -= 60 * i), t(i, 2) + ':' + t(e, 2)
  }
  function n(e) {
    return (
      (e = decodeURI(e)),
      e
        .split('/')
        .pop()
        .split('.')
        .shift()
    )
  }
  var a = [],
    o = function(e) {
      ;(this.bbplayer = e),
        (this.bbaudio = e.getElementsByTagName('audio').item(0)),
        (this.bbdebug = e.getElementsByClassName('bb-debug').item(0)),
        this.bbaudio.setAttribute('preload', 'auto'),
        (this.state = this.bbaudio.autoplay ? 'playing' : 'paused'),
        (this.repeat = !!this.bbaudio.loop),
        this.bbaudio.removeAttribute('loop'),
        (this.trackList = []),
        this.init()
    }
  ;(o.prototype.log = function(e) {
    this.bbdebug &&
      (this.bbdebug.appendChild(document.createTextNode(e)),
      this.bbdebug.appendChild(document.createElement('br')),
      (this.bbdebug.scrollTop = this.bbdebug.scrollHeight - this.bbdebug.clientHeight))
  }),
    (o.prototype.canPlay = function(e) {
      return (
        !(!/mp3/i.test(e) || !this.bbaudio.canPlayType('audio/mpeg')) ||
        !(!/ogg/i.test(e) || !this.bbaudio.canPlayType('audio/ogg'))
      )
    }),
    (o.prototype.loadSources = function() {
      var e = this,
        t = []
      e.log('func: loadSources'),
        [].forEach.call(e.bbaudio.getElementsByTagName('source'), function(i) {
          var n = i
              .getAttribute('src')
              .split('/')
              .pop(),
            a = n.split('.').pop(),
            o = n.split('.').shift(),
            d = e.canPlay(a)
          e.trackList.indexOf(o) === -1 && d === !0 ? e.trackList.push(o) : t.push(i)
        }),
        [].forEach.call(t, function(e) {
          e.parentNode.removeChild(e)
        })
    }),
    (o.prototype.updateDisplay = function() {
      var e = this.bbaudio,
        t = i(Math.ceil(e.duration)),
        a = i(Math.ceil(e.currentTime)),
        o = n(e.currentSrc) + '/6'
      ;(this.bbplayer.getElementsByClassName('bb-trackLength').item(0).innerHTML = t),
        (this.bbplayer.getElementsByClassName('bb-trackTime').item(0).innerHTML = a),
        (this.bbplayer.getElementsByClassName('bb-trackTitle').item(0).innerHTML = o)
      var d = this.bbplayer.getElementsByClassName('bb-play').item(0)
      this.bbaudio.paused
        ? (d.classList.remove('bb-playing'), d.classList.add('bb-paused'))
        : (d.classList.remove('bb-paused'), d.classList.add('bb-playing'))
    }),
    (o.prototype.loadTrack = function(e) {
      var t = this.bbaudio
        .getElementsByTagName('source')
        .item(e)
        .getAttribute('src')
      ;(this.bbaudio.src = t),
        'paused' === this.state && this.bbaudio.pause(),
        (this.currentTrack = e),
        this.log('func: loadTrack: loaded ' + t)
    }),
    (o.prototype.loadNext = function() {
      this.log('func: loadNext')
      var e = this.bbaudio.getElementsByTagName('source').length,
        t = (1 + this.currentTrack) % e
      t <= this.currentTrack && !this.repeat && (this.state = 'paused'), this.loadTrack(t)
    }),
    (o.prototype.loadPrevious = function() {
      this.log('func: loadPrevious')
      var e = this.bbaudio.getElementsByTagName('source').length,
        t = (this.currentTrack + (e - 1)) % e
      this.loadTrack(t)
    }),
    (o.prototype.setAudioEventHandlers = function() {
      var e = this
      e.log('func: setAudioEventHandlers'),
        e.bbaudio.addEventListener('abort', function() {
          e.log('event: audio abort')
        }),
        e.bbaudio.addEventListener('canplay', function() {
          e.log('event: audio canplay'),
            'playing' === e.state && this.paused && this.play(),
            e.updateDisplay()
        }),
        e.bbaudio.addEventListener('canplaythrough', function() {
          e.log('event: audio canplaythrough')
        }),
        e.bbaudio.addEventListener('durationchange', function() {
          e.log('event: audio durationchange')
        }),
        e.bbaudio.addEventListener('emptied', function() {
          e.log('event: audio emptied')
        }),
        e.bbaudio.addEventListener('ended', function() {
          e.log('event: audio ended'), e.loadNext()
        }),
        e.bbaudio.addEventListener('error', function() {
          e.log('event: audio error')
        }),
        e.bbaudio.addEventListener('loadeddata', function() {
          e.log('event: audio loadeddata')
        }),
        e.bbaudio.addEventListener('loadedmetadata', function() {
          e.log('event: audio loadedmetadata')
        }),
        e.bbaudio.addEventListener('loadstart', function() {
          e.log('event: audio loadstart')
        }),
        e.bbaudio.addEventListener('pause', function() {
          e.log('event: audio pause')
        }),
        e.bbaudio.addEventListener('play', function() {
          e.log('event: audio play')
        }),
        e.bbaudio.addEventListener('playing', function() {
          e.log('event: audio playing')
        }),
        e.bbaudio.addEventListener('progress', function() {
          e.log('event: audio progress')
        }),
        e.bbaudio.addEventListener('ratechange', function() {
          e.log('event: audio ratechange')
        }),
        e.bbaudio.addEventListener('seeked', function() {
          e.log('event: audio seeked')
        }),
        e.bbaudio.addEventListener('seeking', function() {
          e.log('event: audio seeking')
        }),
        e.bbaudio.addEventListener('stalled', function() {
          e.log('event: audio stalled')
        }),
        e.bbaudio.addEventListener('suspend', function() {
          e.log('event: audio suspend')
        }),
        e.bbaudio.addEventListener('timeupdate', function() {
          e.updateDisplay()
        }),
        e.bbaudio.addEventListener('volumechange', function() {
          e.log('event: audio volumechange')
        }),
        e.bbaudio.addEventListener('waiting', function() {
          e.log('event: audio waiting')
        })
    }),
    (o.prototype.setClickHandlers = function() {
      var t = this
      t.log('func: setClickHandlers')
      var i = t.bbaudio
      ;[].forEach.call(t.bbplayer.getElementsByClassName('bb-forward'), function(e) {
        e.addEventListener('click', function() {
          t.log('event: click .bb-forward'), t.loadNext()
        })
      }),
        [].forEach.call(t.bbplayer.getElementsByClassName('bb-play'), function(i) {
          i.addEventListener('click', function() {
            t.log('event: click .bb-play'),
              t.bbaudio.paused
                ? (e(), t.bbaudio.play(), (t.state = 'playing'))
                : (t.bbaudio.pause(), (t.state = 'paused')),
              t.updateDisplay()
          })
        }),
        [].forEach.call(t.bbplayer.getElementsByClassName('bb-rewind'), function(e) {
          e.addEventListener('click', function() {
            t.log('event: click .bb-rewind')
            var e = i.currentTime
            e > 1.5 ? (i.currentTime = 0) : t.loadPrevious()
          })
        }),
        t.bbdebug &&
          t.bbdebug.click(function() {
            $(this).empty()
          })
    }),
    (o.prototype.init = function() {
      var e = this
      e.setAudioEventHandlers(),
        e.loadSources(),
        (e.currentTrack = 0),
        e.setClickHandlers(),
        e.updateDisplay()
    }),
    document.addEventListener('DOMContentLoaded', function() {
      ;[].forEach.call(document.getElementsByClassName('bbplayer'), function(e) {
        a.push(new o(e))
      })
    })
})()
var canvas,
  ctx,
  vertexes = [],
  diffPt = [],
  autoDiff = 700,
  verNum = 250,
  canvasW = window.innerWidth + 40,
  xx = 150,
  dd = 40,
  i,
  color1 = '#333',
  color2 = '#000';

function addListener(e, t, i) {
  e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent('on' + t, i)
}
Vertex.prototype.updateY = function(e) {
  this.targetY = e + this.baseY
    this.vy += this.targetY - this.y
    this.y += this.vy * this.friction
    this.vy *= this.deceleration
}
addListener(window, 'load', init)
