const shows = [
  {
    title: 'Codename: The Kids Next Door',
    abbreviation: 'KND',
    mainCharacters: [
      { name: 'Nigel Uno', nickname: 'Numbuh 1', voiceOver: 'Benjamin Diskin' },
      {
        name: 'Hogarth Gillian',
        nickname: 'Numbuh 2',
        voiceBy: 'Banjamin Diskin'
      },
      { name: 'Abigail Lincoln', nickname: 'Numbuh 5', voiceBy: 'Cree Summer' },
      {
        name: 'Kuki Sanban',
        nickname: 'Numbuh 3',
        voiceBy: 'Lauren Tom'
      }
    ],
    genre: ['action', 'espionage', 'comedy-drama', 'adventure'],
    runTime: 22,
    creator: 'Mr.Warburton',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 6,
    firstAired: 2002,
    img: 'https://m.media-amazon.com/images/M/MV5BMTdkNmY4ZGMtZTk3YS00OWUxLTlmNTktZTAxNTg1MWM2YmM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'SpongeBob SquarePants',
    abbreviation: 'SBSP',
    mainCharacters: [
      { name: 'SpongeBob SquarePants', voiceBy: 'Tom Kenny' },
      { name: 'Patrick Star', voiceBy: 'Bill Fagerbakke' },
      { name: 'Squidward Tentacles', voiceBy: 'Rodger Bumpass' },
      { name: 'Mr. Krabs', voiceBy: 'Clancy Brown' },
      { name: 'Sandy Cheeks', voiceBy: 'Carolyn Lawrence' },
      { name: 'Plankton', voiceBy: 'Mr. Lawrence' }
    ],
    genre: ['comedy', 'adventure', 'fantasy'],
    runTime: 11,
    creator: 'Stephen Hillenburg',
    distributor: 'Paramount Global Distribution',
    seasons: 14,
    firstAired: 1999,
    img: 'https://m.media-amazon.com/images/M/MV5BYjJmMjBkZjMtZThiZS00Nzk3LWJlN2UtYmE5ZjkyNjJiZjgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Ed, Edd n Eddy',
    abbreviation: 'EEE',
    mainCharacters: [
      { name: 'Ed', voiceBy: 'Matt Hill' },
      { name: 'Edd (Double D)', voiceBy: 'Samuel Vincent' },
      { name: 'Eddy', voiceBy: 'Tony Sampson' },
      { name: 'Kevin', voiceBy: 'Kathleen Barr' },
      { name: 'Johnny 2x4', voiceBy: 'David Paul Grove' },
      { name: 'Rolf', voiceBy: 'Peter Kelamis' }
    ],
    genre: ['comedy', 'slapstick'],
    runTime: 22,
    creator: 'Danny Antonucci',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 6,
    firstAired: 1999,
    img: 'https://upload.wikimedia.org/wikipedia/en/1/12/Ed%2C_Edd_n_Eddy_logo.svg'
  },
  {
    title: 'Courage the Cowardly Dog',
    abbreviation: 'CTCD',
    mainCharacters: [
      { name: 'Courage', voiceBy: 'Marty Grabstein' },
      { name: 'Muriel Bagge', voiceBy: 'Thea White' },
      {
        name: 'Eustace Bagge',
        voiceBy: 'Lionel Wilson (Seasons 1-3), Arthur Anderson (Season 4)'
      }
    ],
    genre: ['horror', 'comedy', 'surrealism'],
    runTime: 22,
    creator: 'John R. Dilworth',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 4,
    firstAired: 1999,
    img: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Courage_the_Cowardly_Dog_titlecard.jpg'
  },
  {
    title: 'The Powerpuff Girls',
    abbreviation: 'PPG',
    mainCharacters: [
      { name: 'Blossom', voiceBy: 'Cathy Cavadini' },
      { name: 'Bubbles', voiceBy: 'Tara Strong' },
      { name: 'Buttercup', voiceBy: 'Elizabeth Daily' },
      { name: 'Professor Utonium', voiceBy: 'Tom Kane' },
      { name: 'Mojo Jojo', voiceBy: 'Roger L. Jackson' },
      { name: 'HIM', voiceBy: 'Tom Kane' }
    ],
    genre: ['action', 'comedy', 'superhero'],
    runTime: 22,
    creator: 'Craig McCracken',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 6,
    firstAired: 1998,
    img: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Powerpuff_girls_characters.jpg'
  },
  {
    title: 'SpongeBob SquarePants',
    abbreviation: 'SBSP',
    mainCharacters: [
      {
        name: 'SpongeBob SquarePants',
        voiceBy: 'Tom Kenny',
        role: 'Protagonist'
      },
      { name: 'Patrick Star', voiceBy: 'Bill Fagerbakke', role: 'Best Friend' },
      {
        name: 'Squidward Tentacles',
        voiceBy: 'Rodger Bumpass',
        role: 'Neighbor & Coworker'
      },
      {
        name: 'Mr. Krabs',
        voiceBy: 'Clancy Brown',
        role: 'Boss & Restaurant Owner'
      }
    ],
    supportingCharacters: [
      {
        name: 'Sandy Cheeks',
        voiceBy: 'Carolyn Lawrence',
        role: 'Scientist & Friend'
      },
      { name: 'Plankton', voiceBy: 'Mr. Lawrence', role: 'Antagonist & Rival' }
    ],
    genre: ['Comedy', 'Adventure', 'Fantasy'],
    runTime: { perEpisode: 11, perSeason: 'Varies' },
    creator: 'Stephen Hillenburg',
    distributor: 'Paramount Global Distribution',
    seasons: 14,
    episodes: {
      total: 300,
      notableEpisodes: [
        { title: 'Band Geeks', season: 2, episode: 15 },
        { title: 'Chocolate with Nuts', season: 3, episode: 12 }
      ]
    },
    broadcast: {
      originalNetwork: 'Nickelodeon',
      firstAired: 'May 1, 1999',
      lastAired: 'Ongoing',
      reruns: ['NickToons', 'Netflix', 'Paramount+']
    },
    awards: [
      {
        title: 'Annie Award',
        year: 2005,
        category: 'Best Animated Television Production'
      },
      { title: 'Kids Choice Award', year: 2010, category: 'Favorite Cartoon' }
    ],
    themeSong: {
      title: 'SpongeBob SquarePants Theme',
      composer:
        'Derek Drymon, Mark Harrison, Stephen Hillenburg, and Blaise Smith',
      performedBy: 'Patrick Pinney'
    },
    spinOffs: [
      { title: 'The Patrick Star Show', year: 2021 },
      { title: 'Kamp Koral', year: 2021 }
    ],
    img: 'https://upload.wikimedia.org/wikipedia/en/5/5c/SpongeBob_SquarePants_character.svg'
  },
  {
    title: 'Rugrats',
    abbreviation: 'RGRTS',
    mainCharacters: [
      {
        name: 'Tommy Pickles',
        voiceBy: 'Elizabeth Daily',
        role: 'Leader of the Babies'
      },
      {
        name: 'Chuckie Finster',
        voiceBy: 'Christine Cavanaugh/Nancy Cartwright',
        role: 'Nervous Best Friend'
      },
      {
        name: 'Phil DeVille',
        voiceBy: 'Kath Soucie',
        role: 'Mischievous Twin'
      },
      { name: 'Lil DeVille', voiceBy: 'Kath Soucie', role: 'Mischievous Twin' },
      {
        name: 'Angelica Pickles',
        voiceBy: 'Cheryl Chase',
        role: 'Antagonistic Cousin'
      }
    ],
    genre: ['Comedy', 'Adventure', 'Family'],
    runTime: { perEpisode: 22, perSeason: 'Varies' },
    creator: ['Arlene Klasky', 'Gábor Csupó', 'Paul Germain'],
    distributor: 'Paramount Global Distribution',
    seasons: 9,
    episodes: {
      total: 172,
      notableEpisodes: [
        { title: 'Reptar on Ice', season: 3, episode: 12 },
        { title: 'Angelica Breaks a Leg', season: 4, episode: 9 }
      ]
    },
    broadcast: {
      originalNetwork: 'Nickelodeon',
      firstAired: 'August 11, 1991',
      lastAired: 'August 1, 2004',
      reruns: ['NickToons', 'Netflix', 'Paramount+']
    },
    themeSong: {
      title: 'Rugrats Theme',
      composer: 'Mark Mothersbaugh'
    },
    spinOffs: [
      { title: 'All Grown Up!', year: 2003 },
      { title: 'Rugrats (2021 Reboot)', year: 2021 }
    ],
    img: 'https://upload.wikimedia.org/wikipedia/en/8/89/Rugrats_logo.png'
  },
  {
    title: 'CatDog',
    abbreviation: 'CD',
    mainCharacters: [
      {
        name: 'Cat',
        voiceBy: 'Jim Cummings',
        role: 'Intelligent, Sophisticated'
      },
      { name: 'Dog', voiceBy: 'Tom Kenny', role: 'Carefree, Fun-Loving' }
    ],
    genre: ['Comedy', 'Adventure'],
    runTime: { perEpisode: 22 },
    creator: 'Peter Hannan',
    distributor: 'Paramount Global Distribution',
    seasons: 4,
    episodes: {
      total: 68
    },
    broadcast: {
      originalNetwork: 'Nickelodeon',
      firstAired: 'April 4, 1998',
      lastAired: 'June 15, 2005'
    },
    img: 'https://upload.wikimedia.org/wikipedia/en/3/3e/CatDog_logo.png'
  },
  {
    title: 'The Grim Adventures of Billy & Mandy',
    abbreviation: 'GAOBM',
    mainCharacters: [
      {
        name: 'Billy',
        voiceBy: 'Richard Steven Horvitz',
        role: 'Dumb but Energetic'
      },
      { name: 'Mandy', voiceBy: 'Grey DeLisle', role: 'Smart, Emotionless' },
      { name: 'Grim', voiceBy: 'Greg Eagles', role: 'Reaper Forced to Serve' }
    ],
    genre: ['Dark Comedy', 'Fantasy'],
    runTime: { perEpisode: 22 },
    creator: 'Maxwell Atoms',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 7,
    episodes: {
      total: 84
    },
    broadcast: {
      originalNetwork: 'Cartoon Network',
      firstAired: 'August 24, 2001',
      lastAired: 'October 12, 2008'
    },
    img: 'https://upload.wikimedia.org/wikipedia/en/7/79/The_Grim_Adventures_of_Billy_%26_Mandy_logo.svg'
  },
  {
    title: 'Scooby-Doo, Where Are You!',
    abbreviation: 'SDWAY',
    mainCharacters: [
      {
        name: 'Scooby-Doo',
        voiceBy: 'Don Messick',
        role: 'Talking Great Dane'
      },
      {
        name: 'Shaggy Rogers',
        voiceBy: 'Casey Kasem',
        role: 'Laid-back & Hungry'
      },
      { name: 'Fred Jones', voiceBy: 'Frank Welker', role: 'Leader' },
      {
        name: 'Daphne Blake',
        voiceBy: 'Heather North',
        role: 'Fashionable & Brave'
      },
      {
        name: 'Velma Dinkley',
        voiceBy: 'Nicole Jaffe',
        role: 'Smartest Member'
      }
    ],
    genre: ['Mystery', 'Comedy'],
    runTime: { perEpisode: 22 },
    creator: ['Joe Ruby', 'Ken Spears'],
    distributor: 'Warner Bros. Television Distribution',
    seasons: 3,
    episodes: {
      total: 41
    },
    broadcast: {
      originalNetwork: 'CBS',
      firstAired: 'September 13, 1969',
      lastAired: 'October 31, 1970'
    },
    img: 'https://upload.wikimedia.org/wikipedia/en/9/92/Scooby_doo_where_are_you_title_card.png'
  },
  {
    title: 'Dexter’s Laboratory',
    abbreviation: 'Dexter’s Lab',
    mainCharacters: [
      { name: 'Dexter', voiceBy: 'Christine Cavanaugh/Candi Milo' },
      { name: 'Dee Dee', voiceBy: 'Kath Soucie' },
      { name: 'Mandark', voiceBy: 'Eddie Deezen' },
      { name: 'Mom', voiceBy: 'Kath Soucie' },
      { name: 'Dad', voiceBy: 'Jeff Bennett' }
    ],
    genre: ['Comedy', 'Science Fiction'],
    runTime: 22,
    creator: 'Genndy Tartakovsky',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 4,
    firstAired: 1996,
    img: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Dexter%27s_Laboratory_logo.svg'
  },
  {
    title: 'Johnny Bravo',
    abbreviation: 'JB',
    mainCharacters: [
      { name: 'Johnny Bravo', voiceBy: 'Jeff Bennett' },
      { name: 'Little Suzy', voiceBy: 'Mae Whitman' },
      { name: 'Carl Chryniszzswics', voiceBy: 'Tom Kenny' },
      { name: 'Bunny Bravo', voiceBy: 'Brenda Vaccaro' }
    ],
    genre: ['Comedy', 'Slapstick'],
    runTime: 22,
    creator: 'Van Partible',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 4,
    firstAired: 1997,
    img: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Johnny_Bravo_Intertitle.png'
  },
  {
    title: 'The Fairly OddParents',
    abbreviation: 'FOP',
    mainCharacters: [
      { name: 'Timmy Turner', voiceBy: 'Tara Strong' },
      { name: 'Cosmo', voiceBy: 'Daran Norris' },
      { name: 'Wanda', voiceBy: 'Susanne Blakeslee' },
      { name: 'Vicky', voiceBy: 'Grey DeLisle' },
      { name: 'Jorgen Von Strangle', voiceBy: 'Daran Norris' }
    ],
    genre: ['Comedy', 'Fantasy'],
    runTime: 22,
    creator: 'Butch Hartman',
    distributor: 'Paramount Global Distribution',
    seasons: 10,
    firstAired: 2001,
    img: 'https://upload.wikimedia.org/wikipedia/en/6/65/The_Fairly_OddParents_logo.svg'
  },
  {
    title: 'Teen Titans',
    abbreviation: 'TT',
    mainCharacters: [
      { name: 'Robin', voiceBy: 'Scott Menville' },
      { name: 'Starfire', voiceBy: 'Hynden Walch' },
      { name: 'Cyborg', voiceBy: 'Khary Payton' },
      { name: 'Raven', voiceBy: 'Tara Strong' },
      { name: 'Beast Boy', voiceBy: 'Greg Cipes' },
      { name: 'Slade', voiceBy: 'Ron Perlman' }
    ],
    genre: ['Action', 'Superhero', 'Comedy'],
    runTime: 22,
    creator: 'Glen Murakami',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 5,
    firstAired: 2003,
    img: 'https://upload.wikimedia.org/wikipedia/en/2/24/Teen_Titans_Title_Card.jpg'
  },
  {
    title: 'Avatar: The Last Airbender',
    abbreviation: 'ATLA',
    mainCharacters: [
      { name: 'Aang', voiceBy: 'Zach Tyler Eisen' },
      { name: 'Katara', voiceBy: 'Mae Whitman' },
      { name: 'Sokka', voiceBy: 'Jack DeSena' },
      { name: 'Toph Beifong', voiceBy: 'Jessie Flower' },
      { name: 'Zuko', voiceBy: 'Dante Basco' },
      { name: 'Azula', voiceBy: 'Grey DeLisle' },
      {
        name: 'Uncle Iroh',
        voiceBy: 'Mako (Seasons 1-2), Greg Baldwin (Season 3)'
      }
    ],
    genre: ['Action', 'Adventure', 'Fantasy'],
    runTime: 22,
    creator: ['Michael Dante DiMartino', 'Bryan Konietzko'],
    distributor: 'Paramount Global Distribution',
    seasons: 3,
    firstAired: 2005,
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Avatar_The_Last_Airbender_logo.svg/800px-Avatar_The_Last_Airbender_logo.svg.png'
  },
  {
    title: "That's So Raven",
    abbreviation: 'TSR',
    mainCharacters: [
      { name: 'Raven Baxter', voiceBy: 'Raven-Symoné' },
      { name: 'Chelsea Daniels', voiceBy: 'Anneliese van der Pol' },
      { name: 'Eddie Thomas', voiceBy: 'Orlando Brown' },
      { name: 'Cory Baxter', voiceBy: 'Kyle Massey' }
    ],
    genre: ['Comedy', 'Family', 'Fantasy'],
    runTime: 22,
    creator: ['Michael Poryes', 'Susan Sherman'],
    distributor: 'Disney-ABC Domestic Television',
    seasons: 4,
    firstAired: 2003,
    img: 'https://upload.wikimedia.org/wikipedia/en/5/5c/That%27s_So_Raven_title_card.jpg'
  },
  {
    title: 'The Fairly OddParents',
    abbreviation: 'FOP',
    mainCharacters: [
      { name: 'Timmy Turner', voiceBy: 'Tara Strong' },
      { name: 'Cosmo', voiceBy: 'Daran Norris' },
      { name: 'Wanda', voiceBy: 'Susanne Blakeslee' },
      { name: 'Vicky', voiceBy: 'Grey DeLisle' }
    ],
    genre: ['Comedy', 'Fantasy', 'Adventure'],
    runTime: 22,
    creator: 'Butch Hartman',
    distributor: 'Nickelodeon',
    seasons: 10,
    firstAired: 2001,
    img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Fairly_OddParents_logo.svg'
  },
  {
    title: 'Kim Possible',
    abbreviation: 'KP',
    mainCharacters: [
      { name: 'Kim Possible', voiceBy: 'Christy Carlson Romano' },
      { name: 'Ron Stoppable', voiceBy: 'Will Friedle' },
      { name: 'Wade Load', voiceBy: 'Tahj Mowry' },
      { name: 'Dr. Drakken', voiceBy: 'John DiMaggio' }
    ],
    genre: ['Action', 'Comedy', 'Spy'],
    runTime: 22,
    creator: ['Bob Schooley', 'Mark McCorkle'],
    distributor: 'Disney Channel',
    seasons: 4,
    firstAired: 2002,
    img: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Kim_Possible_logo.svg'
  },
  {
    title: 'Danny Phantom',
    abbreviation: 'DP',
    mainCharacters: [
      { name: 'Danny Fenton', voiceBy: 'David Kaufman' },
      { name: 'Sam Manson', voiceBy: 'Grey DeLisle' },
      { name: 'Tucker Foley', voiceBy: "Rickey D'Shon Collins" },
      { name: 'Vlad Plasmius', voiceBy: 'Martin Mull' }
    ],
    genre: ['Action', 'Adventure', 'Supernatural'],
    runTime: 22,
    creator: 'Butch Hartman',
    distributor: 'Nickelodeon',
    seasons: 3,
    firstAired: 2004,
    img: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Danny_Phantom_logo.png'
  },
  {
    title: 'Teen Titans',
    abbreviation: 'TT',
    mainCharacters: [
      { name: 'Robin', voiceBy: 'Scott Menville' },
      { name: 'Starfire', voiceBy: 'Hynden Walch' },
      { name: 'Beast Boy', voiceBy: 'Greg Cipes' },
      { name: 'Raven', voiceBy: 'Tara Strong' },
      { name: 'Cyborg', voiceBy: 'Khary Payton' }
    ],
    genre: ['Action', 'Superhero', 'Comedy'],
    runTime: 22,
    creator: ['David Slack'],
    distributor: 'Warner Bros. Television Distribution',
    seasons: 5,
    firstAired: 2003,
    img: 'https://upload.wikimedia.org/wikipedia/en/2/22/Teen_Titans_Title_Card.jpg'
  },
  {
    title: 'Zoey 101',
    abbreviation: 'Z101',
    mainCharacters: [
      { name: 'Zoey Brooks', voiceBy: 'Jamie Lynn Spears' },
      { name: 'Chase Matthews', voiceBy: 'Sean Flynn' },
      { name: 'Lola Martinez', voiceBy: 'Victoria Justice' },
      { name: 'Michael Barrett', voiceBy: 'Christopher Massey' }
    ],
    genre: ['Comedy', 'Drama', 'Teen'],
    runTime: 22,
    creator: 'Dan Schneider',
    distributor: 'Nickelodeon',
    seasons: 4,
    firstAired: 2005,
    img: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Zoey_101_logo.png'
  },
  {
    title: 'The Proud Family',
    abbreviation: 'TPF',
    mainCharacters: [
      { name: 'Penny Proud', voiceBy: 'Kyla Pratt' },
      { name: 'Trudy Proud', voiceBy: 'Paula Jai Parker' },
      { name: 'Oscar Proud', voiceBy: 'Tommy Davidson' },
      { name: 'Suga Mama', voiceBy: 'Jo Marie Payton' }
    ],
    genre: ['Comedy', 'Family'],
    runTime: 22,
    creator: ['Bruce W. Smith'],
    distributor: 'Disney Channel',
    seasons: 2,
    firstAired: 2001,
    img: 'https://upload.wikimedia.org/wikipedia/en/5/5e/The_Proud_Family_logo.svg'
  },
  {
    title: 'Lilo & Stitch: The Series',
    abbreviation: 'LSS',
    mainCharacters: [
      { name: 'Lilo Pelekai', voiceBy: 'Daveigh Chase' },
      { name: 'Stitch', voiceBy: 'Chris Sanders' },
      { name: 'Nani Pelekai', voiceBy: 'Tia Carrere' },
      { name: 'Dr. Jumba Jookiba', voiceBy: 'David Ogden Stiers' }
    ],
    genre: ['Comedy', 'Adventure', 'Sci-Fi'],
    runTime: 22,
    creator: 'Chris Sanders',
    distributor: 'Disney Channel',
    seasons: 2,
    firstAired: 2003,
    img: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Lilo_%26_Stitch-_The_Series_logo.png'
  },
  {
    title: 'Hey Arnold!',
    abbreviation: 'HA!',
    mainCharacters: [
      { name: 'Arnold', voiceBy: 'Lane Toran' },
      { name: 'Gerald Johanssen', voiceBy: 'Jamil Walker Smith' },
      { name: 'Helga Pataki', voiceBy: 'Francesca Marie Smith' },
      { name: 'Grandpa Phil', voiceBy: 'Dan Castellaneta' }
    ],
    genre: ['Comedy', 'Slice of Life'],
    runTime: 22,
    creator: 'Craig Bartlett',
    distributor: 'Nickelodeon',
    seasons: 5,
    firstAired: 1996,
    img: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Hey_Arnold%21_logo.png'
  },
  {
    title: 'American Dragon: Jake Long',
    abbreviation: 'ADJL',
    mainCharacters: [
      { name: 'Jake Long', voiceBy: 'Dante Basco' },
      { name: 'Haley Long', voiceBy: 'Amy Bruckner' },
      { name: 'Grandpa Lao Shi', voiceBy: 'Keone Young' },
      { name: 'Trixie Carter', voiceBy: 'Miss Kittie' }
    ],
    genre: ['Action', 'Comedy', 'Fantasy'],
    runTime: 22,
    creator: 'Jeff Goode',
    distributor: 'Disney Channel',
    seasons: 2,
    firstAired: 2005,
    img: 'https://upload.wikimedia.org/wikipedia/en/1/17/American_Dragon_Jake_Long_logo.png'
  }
]

export default shows
