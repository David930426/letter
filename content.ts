/* ============================================================================
   CONTENT.TS  —  THIS IS THE ONLY FILE YOU NEED TO EDIT.
   ----------------------------------------------------------------------------
   Everything between the "quotes" is text you can rewrite in your own words.
   Keep the quotes, the commas and the curly braces exactly where they are.
   All the text below is DUMMY PLACEHOLDER TEXT - replace it all.

   Image paths are relative to the /public folder, so "/img/photo-01.svg"
   means the file public/img/photo-01.svg
   ============================================================================ */

export const content = {
  /* ---------------------------------------------------------------- BASICS */
  meta: {
    // Shows in the browser tab
    pageTitle: "Happy Birthday, Her Name",
    // Used by link previews when you share the site
    description: "A little something made by hand.",
    // Tab icon (any emoji)
    favicon: "🎂",
  },

  /* --------------------------------------------------- OPENING ENVELOPE ---
     The little sealed envelope she sees before the site opens.             */
  envelope: {
    smallLine: "A letter has arrived for",
    name: "Her Name",
    buttonLabel: "Open it",
    hint: "click the envelope",
  },

  /* -------------------------------------------------------------- HERO --- */
  hero: {
    eyebrow: "Today is a very important day",
    title: "Happy Birthday",
    name: "Her Name",
    subtitle:
      "This is dummy text that you will replace later. Write here the first thing you would say to her if the whole world went quiet for one second.",
    dateLine: "09 . 09 . 2026",
    scrollHint: "scroll down",
  },

  /* -------------------------------------------------- TIME TOGETHER ---
     A live counter that ticks up from the day you two started.
     Format is YEAR-MONTH-DAY, then 24h time.                           */
  counter: {
    title: "And we have been us for",
    startDate: "2024-10-25T01:00:00",
    footnote:
      "Dummy footnote - write something small and warm here, like a private joke or the place where it all started.",
    labels: {
      years: "years",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
    },
  },

  /* ------------------------------------------------------------ LETTER ---
     The long love letter. Add or remove paragraphs freely -
     every string in the list becomes its own paragraph.                  */
  letter: {
    kicker: "A letter",
    title: "To the best thing that ever happened to me",
    paragraphs: [
      "This is placeholder text and you should replace every word of it. Start the way you actually talk to her, not the way letters are supposed to sound. Tell her what today means and why you wanted to build something instead of buying something.",
      "Write the second paragraph about a small ordinary moment - the way she laughs at her own jokes before the punchline, the song she plays too loud in the car, the face she makes when she is concentrating. Small things are more convincing than big words.",
      "Use this one for the harder, truer part. What she changed about your life. What you were like before her. What you are afraid of forgetting. Be specific; specific is what makes someone cry in a good way.",
      "Close with what you want for her this year - not what you want from her. Her dreams, her health, her peace, the things she keeps saying she will start next month.",
    ],
    signoff: "All of it, always,",
    signature: "Your Name",
  },

  /* ------------------------------------------------------------- STORY ---
     Your timeline. Add as many items as you like.
     image: put your file in public/img/ and write "/img/your-file.jpg"    */
  story: {
    kicker: "Our story",
    title: "The long way here",
    subtitle:
      "Dummy subtitle - a single line that introduces your timeline of moments.",
    items: [
      {
        date: "Chapter One",
        title: "The day we met",
        text: "Dummy text. Describe where you were, what she was wearing, what you stupidly said first, and what you thought the moment she turned around.",
        image: "/img/story-01.svg",
      },
      {
        date: "Chapter Two",
        title: "The first real conversation",
        text: "Dummy text. The night that went too long, the messages you re-read, the exact moment you knew this was not going to be casual.",
        image: "/img/story-02.svg",
      },
      {
        date: "Chapter Three",
        title: "The first trip",
        text: "Dummy text. Somewhere far or somewhere ten minutes away - write about the version of her you only get to see when nobody else is around.",
        image: "/img/story-03.svg",
      },
      {
        date: "Chapter Four",
        title: "Today",
        text: "Dummy text. Where you are now, and the fact that you would choose all of it again, including the parts that were hard.",
        image: "/img/story-04.svg",
      },
    ],
  },

  /* ----------------------------------------------------------- GALLERY ---
     Replace each src with "/img/your-photo.jpg" once you add photos.      */
  gallery: {
    kicker: "The archive",
    title: "Proof",
    subtitle: "Dummy subtitle - one line about this pile of photos.",
    photos: [
      { src: "/img/photo-01.svg", caption: "Dummy caption one" },
      { src: "/img/photo-02.svg", caption: "Dummy caption two" },
      { src: "/img/photo-03.svg", caption: "Dummy caption three" },
      { src: "/img/photo-04.svg", caption: "Dummy caption four" },
      { src: "/img/photo-05.svg", caption: "Dummy caption five" },
      { src: "/img/photo-06.svg", caption: "Dummy caption six" },
      { src: "/img/photo-07.svg", caption: "Dummy caption seven" },
      { src: "/img/photo-08.svg", caption: "Dummy caption eight" },
    ],
  },

  /* ------------------------------------------------------------- VIDEO ---
     Upload your video to YouTube (Unlisted is fine), then copy ONLY the id:
        https://www.youtube.com/watch?v=XXXXXXXXXXX   ->   "XXXXXXXXXXX"
        https://youtu.be/XXXXXXXXXXX                  ->   "XXXXXXXXXXX"    */
  video: {
    kicker: "Press play",
    title: "I made you something",
    subtitle:
      "Dummy subtitle - tell her to put headphones on, or to not watch it in public.",
    youtubeId: "aqz-KE-bpKQ",
    // Leave "" to use YouTube's own thumbnail, or use "/img/your-cover.jpg"
    posterImage: "",
    caption: "Dummy caption under the video.",
  },

  /* ----------------------------------------------------------- REASONS ---
     Little cards. Icon can be any emoji.                                   */
  reasons: {
    kicker: "A short list",
    title: "Reasons, in no order",
    subtitle: "Dummy subtitle - the list is obviously longer than this.",
    items: [
      {
        icon: "☕",
        title: "Reason one",
        text: "Dummy text about a tiny habit of hers that you find unreasonably lovely.",
      },
      {
        icon: "🎧",
        title: "Reason two",
        text: "Dummy text about something she taught you without meaning to teach you anything.",
      },
      {
        icon: "🌧️",
        title: "Reason three",
        text: "Dummy text about how she is on the bad days, which is the real test.",
      },
      {
        icon: "📚",
        title: "Reason four",
        text: "Dummy text about the way she talks about the thing she loves.",
      },
      {
        icon: "🍜",
        title: "Reason five",
        text: "Dummy text about food, because there is always a food one.",
      },
      {
        icon: "🌙",
        title: "Reason six",
        text: "Dummy text about the late-night version of her that nobody else gets.",
      },
    ],
  },

  /* -------------------------------------------------------------- WISH ---
     The finale with the confetti button.                                   */
  wish: {
    kicker: "One more thing",
    title: "Make a wish",
    text: "Dummy text. Tell her to close her eyes and actually make one, and that you will spend the year trying to make it happen.",
    buttonLabel: "Blow out the candles",
    afterTitle: "Happy Birthday",
    afterText:
      "Dummy text shown after she presses the button. This is the last thing she reads, so make it the softest one.",
  },

  /* ------------------------------------------------------------- FOOTER */
  footer: {
    text: "Made by hand, badly, with love - Your Name",
  },

  /* -------------------------------------------------------------- MUSIC ---
     OPTIONAL. Put a song at public/audio/song.mp3 and the music button
     appears by itself. If the file is missing, the button stays hidden.   */
  music: {
    enabled: true,
    file: "/audio/song.mp3",
    label: "Our song",
  },
};

export type Content = typeof content;
