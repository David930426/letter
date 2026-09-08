/* ============================================================================
   CONTENT.TS  —  THIS IS THE ONLY FILE YOU NEED TO EDIT.
   ----------------------------------------------------------------------------
   Everything between the "quotes" is text you can rewrite in your own words.
   Keep the quotes, the commas and the curly braces exactly where they are.

   Image paths are relative to the /public folder, so "/img/img-01.jpeg"
   means the file public/img/img-01.jpeg
   ============================================================================ */

export const content = {
  /* ---------------------------------------------------------------- BASICS */
  meta: {
    // Shows in the browser tab
    pageTitle: "Happy Birthday, Dealova",
    // Used by link previews when you share the site
    description: "A little something made by love.",
    // Tab icon (any emoji)
    favicon: "🎂",
  },

  /* --------------------------------------------------- OPENING ENVELOPE ---
     The little sealed envelope she sees before the site opens.             */
  envelope: {
    smallLine: "A letter has arrived for",
    name: "Dealova Gunawan Tanputeri",
    buttonLabel: "Open it",
    hint: "click the envelope",
  },

  /* -------------------------------------------------------------- HERO --- */
  hero: {
    eyebrow: "Today is a very important day",
    title: "Happy Birthday",
    name: "Dealova",
    subtitle:
      "Happy 21st birthday my love, be this year and next next year be the greatest year for you",
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
      "The time counts that never will be ended forever",
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
      "Happy birthday Dea, i hope you will big love for God and family and of course for me hehe and the best wishes is all for you",
      "I know this year will be harder for both of us when we decided to take the master degree, but i know with 1 more years old, you will be more wiser and we be more courages facing all the problems and i know you can do it.",
      "You are best women i have ever met and the bravest girl that i met, i never let you go and i will always loves you forever.",
      "I hope we will continue everlasting, we will struggle together and i hope you will have the God’s characteristics in your heart and always follow the God Leads. God Bless You.",
    ],
    signoff: "All of it, my sayang,",
    signature: "David Gunawan Wisno",
  },

  /* ------------------------------------------------------------- STORY ---
     Your timeline. Add as many items as you like.
     image: put your file in public/img/ and write "/img/your-file.jpg"    */
  story: {
    kicker: "Our story",
    title: "The long & hard way to here",
    subtitle:
      "Amazing, lovely, fun relationship that God gave",
    items: [
      {
        date: "Chapter One",
        title: "The day we met",
        text: "I did not know that day was going to change my whole life. You were just someone I met, and now you are the person I cannot imagine a single day without. God really knew what He was doing when He put you in front of me.",
        image: "/img/img-03.jpeg",
      },
      {
        date: "Chapter Two",
        title: "The first date after church",
        text: "That night we talked and talked and forgot what time it was. But we afraid what the people of church might think of us, but they really encourages us to have time spent well together.",
        image: "/img/img-18.jpeg",
      },
      {
        date: "Chapter Three",
        title: "The first (maybe) go to 明台後山",
        text: "Going anywhere with you is my favourite thing, far away to asia or only ten minutes from home. I get to see the version of you that only comes out when nobody else is watching, and that one is the one I love the most.",
        image: "/img/img-09.jpeg",
      },
      {
        date: "Chapter Four",
        title: "Today",
        text: "And now here we are. From 25 October 2024 until today, two people chasing their master degrees and still choosing each other every single day. I would choose all of it again, even the hard parts, as long as it ends with you.",
        image: "/img/img-16.jpeg",
      },
    ],
  },

  /* ----------------------------------------------------------- GALLERY ---
     Replace each src with "/img/your-photo.jpg" once you add photos.      */
  gallery: {
    kicker: "The archive",
    title: "Proof",
    subtitle: "A small pile of proof that we were here, being happy and silly together.",
    photos: [
      { src: "/img/img-01.jpeg", caption: "That face. The one nobody else gets to see." },
      { src: "/img/img-02.jpeg", caption: "Matching shirts, matching thumbs up, no plan required." },
      { src: "/img/img-04.jpeg", caption: "Same big night, one more peace sign." },
      { src: "/img/img-05.jpeg", caption: "Helmets on, dignity off." },
      { src: "/img/img-06.jpeg", caption: "Somewhere with orange walls and good lighting." },
      { src: "/img/img-07.jpeg", caption: "Waiting for a bus that never actually felt like waiting." },
      { src: "/img/img-08.jpeg", caption: "Every good night out ends at a 7-Eleven." },
      { src: "/img/img-10.jpeg", caption: "Just being goofy indoors, our favourite sport." },
      { src: "/img/img-11.jpeg", caption: "520, kiss, baby, love. Our little photo strip." },
      { src: "/img/img-12.jpeg", caption: "Sunshine, peace signs, and nowhere we had to be." },
      { src: "/img/img-13.jpeg", caption: "The Christmas tree she made out of ribbon." },
      { src: "/img/img-14.jpeg", caption: "Sharing one bread like it was a whole dinner." },
      { src: "/img/img-15.jpeg", caption: "Somewhere on a train, making faces at the camera." },
      { src: "/img/img-17.jpeg", caption: "Same big night, one more silly pose." },
      { src: "/img/img-19.jpeg", caption: "Matching outfits, mirror selfie, laughing at nothing." },
      { src: "/img/img-20.jpeg", caption: "Round two at the photo booth." },
      { src: "/img/img-21.jpeg", caption: "Small victories deserve a thumbs up too." },
      { src: "/img/img-22.jpeg", caption: "Elevator selfies, because why not." },
      { src: "/img/img-23.jpeg", caption: "Hotpot night, your favourite kind of night." },
      { src: "/img/img-24.jpeg", caption: "Another elevator, another selfie." },
      { src: "/img/img-25.jpeg", caption: "Two helmets, one motorbike, no idea where we were going." },
      { src: "/img/img-26.jpeg", caption: "Caught mid-thought on the way somewhere." },
      { src: "/img/img-27.jpeg", caption: "Holding small fires and being very happy about it." },
      { src: "/img/img-29.jpeg", caption: "On the move, bag in hand." },
      { src: "/img/img-30.jpeg", caption: "That little plush toy goes everywhere with her." },
      { src: "/img/img-31.jpeg", caption: "A good day just to be outside." },
      { src: "/img/img-32.jpeg", caption: "Feeding each other's favourite excuse to eat out." },
      { src: "/img/img-33.jpeg", caption: "One more elevator selfie. We collect them, apparently." },
      { src: "/img/img-34.jpeg", caption: "No filter, no plan, just her." },
      { src: "/img/img-35.jpeg", caption: "On the way to see each other, again." },
      { src: "/img/img-36.jpeg", caption: "Half asleep on the way home, still smiling." },
      { src: "/img/img-37.jpeg", caption: "The pizza was bigger than both of our heads." },
      { src: "/img/img-38.jpeg", caption: "Celebrating together, dressed to match, one more time." },
      { src: "/img/img-39.jpeg", caption: "Proud of every last coin, apparently." },
      { src: "/img/img-40.jpeg", caption: "Watching the pot before the kimchi jjigae was ready." },
      { src: "/img/img-41.jpeg", caption: "Explaining something very important to an empty wall." },
      { src: "/img/img-42.jpeg", caption: "Selfie because the lighting was actually good for once." },
      { src: "/img/img-43.jpeg", caption: "White shirts, blue sky, and the Memorial Hall behind us." },
      { src: "/img/img-44.jpeg", caption: "Leaning on you is basically a hobby of mine." },
      { src: "/img/img-45.jpeg", caption: "One hand up, one heart full." },
      { src: "/img/img-46.jpeg", caption: "Being ridiculous in front of something very serious." },
      { src: "/img/img-47.jpeg", caption: "Standing where history is, looking like she owns the place." },
      { src: "/img/img-48.jpeg", caption: "Somewhere on the MRT, going who knows where." },
      { src: "/img/img-49.jpeg", caption: "Taipei 101 in the distance, her back to the camera." },
      { src: "/img/img-50.jpeg", caption: "A retro diner, a slice bigger than her face, worth every bite." },
      { src: "/img/img-51.jpeg", caption: "Borrowed a bike, kept the view of Taipei 101." },
      { src: "/img/img-52.jpeg", caption: "Matching outfits we did not plan." },
      { src: "/img/img-53.jpeg", caption: "Another bus, another thumbs up." },
      { src: "/img/img-54.jpeg", caption: "Sick day errands still count as a date if we're together." },
      { src: "/img/img-55.jpeg", caption: "Home for the night, helmet still on." },
      { src: "/img/img-56.jpeg", caption: "No plans, just a room and a phone camera." },
      { src: "/img/img-57.jpeg", caption: "Sunflowers picked up on the way home." },
      { src: "/img/img-58.jpeg", caption: "Found the most charming old laundry shop in town." },
      { src: "/img/img-59.jpeg", caption: "One more pose in front of Shin Shin Laundry." },
      { src: "/img/img-60.jpeg", caption: "The cheese string nearly won this round." },
      { src: "/img/img-61.jpeg", caption: "Hugging a giant graduation bear like it's a real friend." },
      { src: "/img/img-62.jpeg", caption: "Tired eyes, long bus ride, still smiling for the camera." },
      { src: "/img/img-63.jpeg", caption: "A campus garden with an actual airplane parked in it." },
      { src: "/img/img-64.jpeg", caption: "Under the trees, laughing about something forgettable and perfect." },
      { src: "/img/img-65.jpeg", caption: "Elevator selfie number who-even-knows." },
      { src: "/img/img-66.jpeg", caption: "One more for the elevator collection." },
      { src: "/img/img-67.jpeg", caption: "Night sky, quiet street, just us two." },
      { src: "/img/img-68.jpeg", caption: "Same night, same street, one more photo." },
      { src: "/img/img-69.jpeg", caption: "Helmets still on, straight off the bike." },
      { src: "/img/img-70.jpeg", caption: "One more helmet selfie before the ride home." },
      { src: "/img/img-71.jpeg", caption: "The view from the back of the bike, holding on." },
      { src: "/img/img-72.jpeg", caption: "Resting on your shoulder like it's the most natural thing." },
      { src: "/img/img-73.jpeg", caption: "Matching black, ready for wherever we were headed." },
      { src: "/img/img-74.jpeg", caption: "Suitcase packed, one more move ahead of us." },
      { src: "/img/img-75.jpeg", caption: "Home for the night, photo booth strips still up on the shelf." },
      { src: "/img/img-76.jpeg", caption: "Peace sign, low light, an ordinary evening worth keeping." },
      { src: "/img/img-77.jpeg", caption: "Caught laughing at something I said." },
      { src: "/img/img-78.jpeg", caption: "Just her, just a wall, just a good day." },
      { src: "/img/img-79.jpeg", caption: "Turquoise walls, better company." },
      { src: "/img/img-80.jpeg", caption: "One more from that turquoise room." },
      { src: "/img/img-81.jpeg", caption: "Chasing waterfalls, quite literally." },
      { src: "/img/img-82.jpeg", caption: "Arms up for the waterfall that made the whole trip worth it." },
      { src: "/img/img-83.jpeg", caption: "Mountain air and a view worth stopping for." },
      { src: "/img/img-84.jpeg", caption: "Video-calling home, sharing her with the dog too." },
      { src: "/img/img-85.jpeg", caption: "Falling asleep on my shoulder mid-trip, and I would not move for anything." },
    ],
  },

  /* --------------------------------------------------------- SPOTLIGHT ---
     One big photo with a short, personal line underneath it.
     image: put your file in public/img/ and write "/img/your-file.jpg"    */
  spotlight: {
    kicker: "Just a look",
    title: "The one I keep coming back to",
    subtitle: "No caption needed, but here is one anyway.",
    image: "/img/img-28.jpeg",
    quote:
      "Every year with you feels shorter than the one before it, and I want that to never change.",
  },

  /* ----------------------------------------------------------- REASONS ---
     Little cards. Icon can be any emoji.                                   */
  reasons: {
    kicker: "A short list",
    title: "Reasons, in no order",
    subtitle: "The real list is much longer than this, but the page is not big enough.",
    items: [
      {
        icon: "☕",
        title: "Your mornings",
        text: "The way you are still half asleep but you still encourages me to try my best for the day, but it makes my whole day start in the right way.",
      },
      {
        icon: "🎧",
        title: "The sound you play",
        text: "You voice I would never find by myself, and now every single one of them sounds like you.",
      },
      {
        icon: "🌧️",
        title: "You on the bad days",
        text: "Even when everything feels heavy, you still choose to be kind eventhough you keep mad at me but you always keep praying. That is the real test, and you pass it every time.",
      },
      {
        icon: "📚",
        title: "How you talk about what you love",
        text: "Your eyes change when you talk about the things you care about. I can listen to you for hours and never get bored, not even once.",
      },
      {
        icon: "🍜",
        title: "Eating with you",
        text: "Everything tastes better when I eat it with you, even the cheap one. Especially the cheap one.",
      },
      {
        icon: "🌙",
        title: "The 1 a.m. you",
        text: "The late night version of you that nobody else gets to see. That one is mine, and I will always be thankful for it.",
      },
    ],
  },

  /* -------------------------------------------------------------- WISH ---
     The finale with the confetti button.                                   */
  wish: {
    kicker: "One more thing",
    title: "Make a wish",
    text: "Close your eyes and actually make one, sayang. Whatever it is, I will spend this whole year praying for it and trying my best to help it happen.",
    buttonLabel: "Blow out the candles",
    afterTitle: "Happy Birthday",
    afterText:
      "You are loved, you are prayed for, and you will never walk through anything alone. Happy 21st birthday, Dea. Here is to many more years of us. God bless you, always.",
  },

  /* ------------------------------------------------------------- FOOTER */
  footer: {
    text: "Made by hand, badly, with love - David",
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
