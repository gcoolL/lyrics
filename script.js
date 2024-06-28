let currentsong = ""

let lyrics = document.getElementById("lyrics")
let songLyrics = {
  [`Idol`]: 
  `Couldn't beat her smile, it stirred up all the media`
  `Secret side, I wanna know it`
  `So mysterious`
  `Even that elusive side, part of her controlled area`
  `Complete and perfect`
  `All you say is a bunch of lies`
  `Dear miss genius idol, unmatched`
  `What did you eat today?`
  `What book do you love?`
  `Whenever you go out for fun, tell me, where do you go?`
  `Haven't eaten anything`
  `It's a secret, unknown`
  `Any questions you're facing, always acting so vaguely`
  `So unconcerned, although you brightly glow`
  `Any seemingly unveiled secrets are as sweet as honey`
  `Confusing, why, why, why?`
  `Essential lie, lie, lie`
  `So, what is your type of guy?`
  `Any partner?`
  `So, now, answer this`
  `"I don't have any idea how I could love anyone"`
  `"I don't seem to know what it signifies"`
  `Cannot find out if it's true or it's a lie`
  `Once again, there's somebody who's fallen for the words and cues`
  `Made him lose his head over you`
  `That emotion melts all hearts, all eyes on you`
  `Cause you are perfect, the most ultimate idol`
  `Unrivaled, will not appear again`
  `It's the brightest star reborn, yes, indeed`
  `Using that smiling face`
  `That "I love you" again`
  `Now, everybody is lured and captivated by you`
  `The pupil that you got`
  `The words you vocalize`
  `Even when untrue, it's your perfected Ai`
  `Right, right, we all know she's very special, yes`
  `We had lost the fight before it started, so impressed`
  `Miss I'm such a star`
  `We're serving as support to her grace`
  `Cannot tell me everything was because of her`
  `No, it's not right`
  `Out of line`
  `How can we not feel jealous while being around`
  `It's not a joke, you know, right?`
  `So, I cannot forgive you for that`
  `Completely deny`
  `Imperfect you that I sight`
  `Myself, no pardon allowed`
  `I won't allow anyone if it's not you, strongest of all`
  `That emotion seized all hearts worshiping you`
  `Yes, indeed`
  `So strong, it's you, unrivaled idol`
  `There cannot be weaknesses to find`
  `The brightest star is residing in you`
  `The gaps and shortcomings, don't show'em`
  `Dammit, dammit`
  `Parts nobody wants to know should remain hidden`
  `One and only`
  `If it's different, no way, no way`
  `Such a true love, it's the realest Ai`
  `Showing this smile, my own weapon`
  `Boiling media`
  `Keeping everything about my secret deep inside`
  `"I'm in love with you," my career is built on such a lie`
  `It's the way I know to show my love, without a doubt`
  `Running down, my sweat is flowing`
  `Cleanest aqua, right?`
  `Ruby hidden under my eyelids where it resides`
  `I sing and dance around`
  `Look at me, I'm Maria`
  `So, lying surely is the greatest kind of love`
  `I recall no one that loved me whole before`
  `And I've not been in love with anybody before`
  `Now, the lies I'm making up`
  `I'm hoping that a day comes when they all become true`
  `And I keep wishing they do`
  `One day, I will hold everything that I pursue`
  `Yes, I am so greedy, true voracious idol`
  `So, sincerely, what I'm wishing for is to love each of you with all my heart`
  `And so, today, I lie again`
  `The words I vocalize inside of me`
  `I'm wishing that one day they come true`
  `Up to this day, I've not been able to let you`
  `And you hear me saying those meaningful words`
  `I said it at last`
  `I know it's not a lie as I'm voicing these words`
  `I love you`
}

let timestamps = {
  [00:00.72],
  [00:03.60],          
  [00:05.03],           
  [00:06.18],
  [00:09.38],
  [00:10.47],
  [00:11.92], 
  [00:17.35],
  [00:18.95],
  [00:20.29],
  [00:23.29],
  [00:24.61],
  [00:26.16],
  [00:28.88],
  [00:31.59],
  [00:34.56],
  [00:35.98],
  [00:37.33],
  [00:38.59],
  [00:39.24],
  [00:40.38],
  [00:44.06],
  [00:46.24],
  [00:49.07],
  [00:52.82],
  [00:54.91],
  [00:57.77],
  [01:01.04],
  [01:03.54],
  [01:07.29],
  [01:08.81],
  [01:10.07],
  [01:13.11],
  [01:14.56],
  [01:15.53],
  [01:18.82],
  [01:21.64],
  [01:24.20],
  [01:25.09],
  [01:27.46],
  [01:29.43],
  [01:30.35],
  [01:31.09],
  [01:33.30],
  [01:34.17],
  [01:35.47],
  [01:36.47],
  [01:37.42],
  [01:38.65],
  [01:41.22],
  [01:44.05],
  [01:44.77],
  [01:47.26],
  [01:49.83],
  [01:52.82],
  [01:55.30],
  [01:56.04],
  [01:58.91],
  [02:00.18],
  [02:01.79],
  [02:05.14],
  [02:06.74],
  [02:08.35],
  [02:11.09],
  [02:14.73],
  [02:17.91],
  [02:19.58],
  [02:21.18],
  [02:23.94],
  [02:25.54],
  [02:27.58],
  [02:31.52],
  [02:34.52],
  [02:37.54],
  [02:39.58],
  [02:43.06],
  [02:44.96],
  [02:47.94],
  [02:51.32],
  [02:56.75],
  [02:58.96],
  [03:01.24],
  [03:03.39],
  [03:05.78],
  [03:09.16],
  [03:10.59],
  [03:13.21],
}
lyrics.innerHTML = songLyrics[`Idol`]

for (let at = 0; at < songLyrics[`Idol`].length; at++) {
  console.log(songLyrics[`Idol`].charAt(at))
  if (songLyrics[`Idol`].charAt(at) == "[") {
    songLyrics[`Idol`].replace(songLyrics[`Idol`].charAt(at))
  }  
}
