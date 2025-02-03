const shows = [
  {
    title: 'Codename: The Kids Next Door',
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
    img: 'https://m.media-amazon.com/images/M/MV5BOWNmY2Y0MDUtMmM4Zi00NGEzLWI1MjEtMDUzYmM2MzFjNTU2XkEyXkFqcGc@._V1_.jpg'
  },
  {
    title: 'Courage the Cowardly Dog',
    mainCharacters: [
      { name: 'Courage', voiceBy: 'Marty Grabstein' },
      { name: 'Muriel Bagge', voiceBy: 'Thea White' },
      {
        name: 'Eustace Bagge',
        voiceBy: 'Arthur Anderson'
      }
    ],
    genre: ['horror', 'comedy', 'surrealism'],
    runTime: 22,
    creator: 'John R. Dilworth',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 4,
    firstAired: 1999,
    img: 'https://m.media-amazon.com/images/M/MV5BMzdiMWI4OGMtZDc2MC00NDllLTgyMWUtN2ZmZjVlYWFkYjQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'The Powerpuff Girls',
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
    img: 'https://m.media-amazon.com/images/M/MV5BNWMyNWY2M2QtNDNjNS00YzY3LWJkMWYtMzdhNmE4OGRhZTBmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Rugrats',
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
    runTime: 22,
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
      lastAired: 'August 1, 2004'
    },
    spinOffs: [
      { title: 'All Grown Up!', year: 2003 },
      { title: 'Rugrats (2021 Reboot)', year: 2021 }
    ],
    img: 'https://m.media-amazon.com/images/M/MV5BOTkwZWRjZjktMDQyMy00MjljLWIzMmMtMjc2OTNiNGY2YzkzXkEyXkFqcGc@._V1_.jpg'
  },
  {
    title: 'CatDog',
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
    img: 'https://m.media-amazon.com/images/M/MV5BZDIzNWIyZjItMzFkNS00M2NhLWFkMzAtNmYxYjZjMjAxYTY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'The Grim Adventures of Billy & Mandy',
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
    img: 'https://m.media-amazon.com/images/M/MV5BN2FjZmVkNDEtNzQ5My00MDkyLTg0Y2ItYjhkOWJhNGVhYjJiXkEyXkFqcGc@._V1_.jpg'
  },
  {
    title: 'Scooby-Doo, Where Are You!',
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
    img: 'https://m.media-amazon.com/images/M/MV5BNTBhODQ2ZjEtMDMzMS00ZjlkLWI2YWItMmQ3MWNjN2U3ODczXkEyXkFqcGc@._V1_.jpg'
  },
  {
    title: 'Dexter’s Laboratory',
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
    img: 'https://m.media-amazon.com/images/M/MV5BYmE4ZmI4YzMtYTU4My00YTRiLWIzOGEtOWEzNWYxM2NjYzgzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Johnny Bravo',
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
    img: 'https://m.media-amazon.com/images/M/MV5BNWE2MjYwZGUtZGJlNS00MWZkLTg1OGQtNzI4YzQ3ZmYxZmY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'The Fairly OddParents',
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
    img: 'https://m.media-amazon.com/images/M/MV5BY2RlNWMwZmUtMjM4MC00MDczLTk3NjktYTg2OTNiNThhNmNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Teen Titans',
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
    img: 'https://m.media-amazon.com/images/M/MV5BOTg3NzY2MDQtMjUxNS00N2Q3LTkxODktMmU1NzdjZTNkMzQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Avatar: The Last Airbender',
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
    img: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/1000011028.jpg'
  },
  {
    title: "That's So Raven",
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
    img: 'https://m.media-amazon.com/images/M/MV5BZTlkNDUxOTgtNWY3My00NjI2LWJlMWUtNzRlZTI1MDcyYjNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Kim Possible',
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
    img: 'https://m.media-amazon.com/images/M/MV5BMmIwNjQ5MzEtNTg4Zi00NWMyLThkZDktZDg0MGU4MmYzMjlhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Lizzie McGuire',
    mainCharacters: [
      {
        name: 'Lizzie McGuire',
        voiceBy: 'Hilary Duff',
        role: 'Teen Navigating Middle School Life'
      },
      {
        name: 'Gordo (David Gordon)',
        voiceBy: 'Adam Lamberg',
        role: 'Lizzie’s Smart and Sarcastic Best Friend'
      },
      {
        name: 'Miranda Sanchez',
        voiceBy: 'Lalaine',
        role: 'Lizzie’s Other Best Friend'
      },
      {
        name: 'Matt McGuire',
        voiceBy: 'Jake Thomas',
        role: 'Lizzie’s Mischievous Younger Brother'
      },
      {
        name: 'Jo McGuire',
        voiceBy: 'Hallie Todd',
        role: 'Lizzie’s Caring but Overprotective Mother'
      },
      {
        name: 'Sam McGuire',
        voiceBy: 'Robert Carradine',
        role: 'Lizzie’s Goofy and Supportive Father'
      }
    ],
    genre: ['Comedy', 'Teen', 'Family'],
    runTime: 22,
    creator: ['Terri Minsky'],
    distributor: 'Disney–ABC Domestic Television',
    seasons: 2,
    episodes: {
      total: 65,
      notableEpisodes: [
        { title: 'Rumors', season: 1, episode: 1 },
        { title: 'Clue-Less', season: 2, episode: 24 }
      ]
    },
    broadcast: {
      originalNetwork: 'Disney Channel',
      firstAired: 'January 12, 2001',
      lastAired: 'February 14, 2004'
    },
    spinOffs: [{ title: 'The Lizzie McGuire Movie', year: 2003 }],
    img: 'https://m.media-amazon.com/images/M/MV5BMGY1Y2U3ZGItZGQyYS00N2Q5LTk5YzktZGEwMmJmZmNjYTJjXkEyXkFqcGc@._V1_.jpg'
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
    img: 'https://m.media-amazon.com/images/M/MV5BNTM4NzQ5ZWEtMGQxNC00OGU0LTliZjItYjZlZGE0ZDQ2ZWI2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
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
    img: 'https://m.media-amazon.com/images/M/MV5BMTRjYzdmYjctYTJjMy00MGVjLWFkZTItNGUxNGZmYzRmOWYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
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
    img: 'https://m.media-amazon.com/images/M/MV5BNTlkMDFjYzAtY2VkMy00OTk5LWFiOTUtZGZkMmRlNzA3Yzg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
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
    img: 'https://m.media-amazon.com/images/M/MV5BYzhiYTYwM2QtNTlmNy00MGM1LTllM2UtOGJmZTUxMmJmZjdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Foster’s Home for Imaginary Friends',
    mainCharacters: [
      {
        name: 'Mac',
        voiceBy: 'Sean Marquette',
        role: 'Kind and Creative Boy Who Created Bloo'
      },
      {
        name: 'Bloo (Blooregard Q. Kazoo)',
        voiceBy: 'Keith Ferguson',
        role: 'Mac’s Mischievous and Self-Centered Imaginary Friend'
      },
      {
        name: 'Frankie Foster',
        voiceBy: 'Grey DeLisle',
        role: 'Caring and Overworked Caretaker at Foster’s'
      },
      {
        name: 'Madame Foster',
        voiceBy: 'Candi Milo',
        role: 'Quirky and Energetic Founder of Foster’s Home'
      },
      {
        name: 'Mr. Herriman',
        voiceBy: 'Tom Kane',
        role: 'Strict and Proper House Manager (A Giant Rabbit)'
      },
      {
        name: 'Wilt',
        voiceBy: 'Phil LaMarr',
        role: 'Friendly and Polite One-Armed Imaginary Friend'
      },
      {
        name: 'Eduardo',
        voiceBy: 'Tom Kenny',
        role: 'Large but Gentle and Timid Monster-Like Friend'
      },
      {
        name: 'Coco',
        voiceBy: 'Candi Milo',
        role: 'Bird-Plane Hybrid Who Only Says "Coco"'
      }
    ],
    genre: ['Comedy', 'Fantasy', 'Family'],
    runTime: 22,
    creator: ['Craig McCracken'],
    distributor: 'Warner Bros. Television Distribution',
    seasons: 6,
    episodes: {
      total: 79,
      notableEpisodes: [
        { title: 'House of Bloo’s', season: 1, episode: 1 },
        { title: 'Mac Daddy', season: 4, episode: 5 }
      ]
    },
    broadcast: {
      originalNetwork: 'Cartoon Network',
      firstAired: 'August 13, 2004',
      lastAired: 'May 3, 2009'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BNzAwYzRkN2UtNDcxYS00MmFlLTlkMzItZWU2ZjI2NzJhZGMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Hannah Montana',
    mainCharacters: [
      {
        name: 'Miley Stewart / Hannah Montana',
        voiceBy: 'Miley Cyrus',
        role: 'Teen Pop Star Living a Double Life'
      },
      {
        name: 'Lilly Truscott',
        voiceBy: 'Emily Osment',
        role: 'Miley’s Best Friend'
      },
      {
        name: 'Oliver Oken',
        voiceBy: 'Mitchel Musso',
        role: 'Miley’s Other Best Friend'
      },
      {
        name: 'Robby Ray Stewart',
        voiceBy: 'Billy Ray Cyrus',
        role: 'Miley’s Father and Manager'
      },
      {
        name: 'Jackson Stewart',
        voiceBy: 'Jason Earles',
        role: 'Miley’s Older Brother'
      }
    ],
    genre: ['Comedy', 'Family', 'Music'],
    runTime: 23,
    creator: ['Michael Poryes', 'Rich Correll', 'Barry O’Brien'],
    distributor: 'Disney–ABC Domestic Television',
    seasons: 4,
    episodes: {
      total: 98,
      notableEpisodes: [
        { title: 'Miley Get Your Gum', season: 1, episode: 2 },
        { title: 'He Could Be the One', season: 3, episode: 18 }
      ]
    },
    broadcast: {
      originalNetwork: 'Disney Channel',
      firstAired: 'March 24, 2006',
      lastAired: 'January 16, 2011'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BZTkzMDY2MzEtZmViZC00ZDY0LWFmYjgtNTVmN2JmMmVkNzRkXkEyXkFqcGc@._V1_.jpg'
  },

  {
    title: 'The Suite Life of Zack & Cody',
    mainCharacters: [
      {
        name: 'Zack Martin',
        voiceBy: 'Dylan Sprouse',
        role: 'Mischievous Twin Brother'
      },
      {
        name: 'Cody Martin',
        voiceBy: 'Cole Sprouse',
        role: 'Smart and Responsible Twin'
      },
      {
        name: 'London Tipton',
        voiceBy: 'Brenda Song',
        role: 'Spoiled Hotel Heiress'
      },
      {
        name: 'Maddie Fitzpatrick',
        voiceBy: 'Ashley Tisdale',
        role: 'Candy Counter Girl and Zack’s Crush'
      },
      {
        name: 'Mr. Moseby',
        voiceBy: 'Phill Lewis',
        role: 'Hotel Manager'
      }
    ],
    genre: ['Comedy', 'Family'],
    runTime: 22,
    creator: ['Danny Kallis', 'Jim Geoghan'],
    distributor: 'Disney–ABC Domestic Television',
    seasons: 3,
    episodes: {
      total: 87,
      notableEpisodes: [
        { title: 'To Catch a Thief', season: 1, episode: 17 },
        { title: 'The Ghost in Suite 613', season: 1, episode: 19 }
      ]
    },
    broadcast: {
      originalNetwork: 'Disney Channel',
      firstAired: 'March 18, 2005',
      lastAired: 'September 1, 2008'
    },
    spinOffs: [{ title: 'The Suite Life on Deck', year: 2008 }],
    img: 'https://m.media-amazon.com/images/M/MV5BY2JkNzFmYWItMGI1Yi00OGU1LTg3NzUtM2M0NWFkOTFjZTI5XkEyXkFqcGc@._V1_.jpg'
  },

  {
    title: 'Phineas and Ferb',
    mainCharacters: [
      {
        name: 'Phineas Flynn',
        voiceBy: 'Vincent Martella',
        role: 'Creative and Enthusiastic Inventor'
      },
      {
        name: 'Ferb Fletcher',
        voiceBy: 'Thomas Brodie-Sangster',
        role: 'Quiet but Talented Stepbrother'
      },
      {
        name: 'Candace Flynn',
        voiceBy: 'Ashley Tisdale',
        role: 'Phineas and Ferb’s Older Sister'
      },
      {
        name: 'Dr. Heinz Doofenshmirtz',
        voiceBy: 'Dan Povenmire',
        role: 'Evil Scientist and Perry’s Nemesis'
      },
      {
        name: 'Perry the Platypus',
        voiceBy: 'Dee Bradley Baker',
        role: 'Secret Agent Pet Platypus'
      }
    ],
    genre: ['Comedy', 'Adventure', 'Musical'],
    runTime: 22,
    creator: ['Dan Povenmire', 'Jeff "Swampy" Marsh'],
    distributor: 'Disney–ABC Domestic Television',
    seasons: 4,
    episodes: {
      total: 129,
      notableEpisodes: [
        { title: 'Rollercoaster', season: 1, episode: 1 },
        { title: 'Phineas and Ferb’s Quantum Boogaloo', season: 2, episode: 25 }
      ]
    },
    broadcast: {
      originalNetwork: 'Disney Channel',
      firstAired: 'August 17, 2007',
      lastAired: 'June 12, 2015'
    },
    spinOffs: [{ title: 'Milo Murphy’s Law', year: 2016 }],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8KMRGuCnsgAumyll6babrdU27sIz3uf3ZA&s'
  }
]

export default shows
