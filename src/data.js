const shows = [
  {
    title: 'Codename: The Kids Next Door',
    abbreviation: 'KND',
    mainCharacters: [
      {
        name: 'Nigel Uno',
        voiceBy: 'Benjamin Diskin',
        role: 'Leader of Sector V'
      },
      { name: 'Hogarth Gillian', voiceBy: 'Benjamin Diskin', role: 'Techie' },
      { name: 'Abigail Lincoln', voiceBy: 'Cree Summer', role: 'The Brain' },
      { name: 'Kuki Sanban', voiceBy: 'Lauren Tom', role: 'The Cheerful One' }
    ],
    genre: ['Action', 'Espionage', 'Comedy-Drama', 'Adventure'],
    runTime: 22,
    creator: 'Mr. Warburton',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 6,
    episodes: {
      total: 78
    },
    broadcast: {
      originalNetwork: 'Cartoon Network',
      firstAired: 'December 6, 2002',
      lastAired: 'January 21, 2008'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BMTdkNmY4ZGMtZTk3YS00OWUxLTlmNTktZTAxNTg1MWM2YmM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'SpongeBob SquarePants',
    abbreviation: 'SBSP',
    mainCharacters: [
      {
        name: 'SpongeBob SquarePants',
        voiceBy: 'Tom Kenny',
        role: 'Optimistic Fry Cook'
      },
      {
        name: 'Patrick Star',
        voiceBy: 'Bill Fagerbakke',
        role: "SpongeBob's Best Friend"
      },
      {
        name: 'Squidward Tentacles',
        voiceBy: 'Rodger Bumpass',
        role: 'Grumpy Neighbor'
      },
      { name: 'Mr. Krabs', voiceBy: 'Clancy Brown', role: 'Business Owner' },
      {
        name: 'Sandy Cheeks',
        voiceBy: 'Carolyn Lawrence',
        role: 'Squirrel Scientist'
      },
      { name: 'Plankton', voiceBy: 'Mr. Lawrence', role: 'Antagonist' }
    ],
    genre: ['Comedy', 'Adventure', 'Fantasy'],
    runTime: 11,
    creator: 'Stephen Hillenburg',
    distributor: 'Paramount Global Distribution',
    seasons: 14,
    episodes: {
      total: 270
    },
    broadcast: {
      originalNetwork: 'Nickelodeon',
      firstAired: 'May 1, 1999',
      lastAired: 'Present'
    },
    spinOffs: [
      { title: "Kamp Koral: SpongeBob's Under Years", year: 2021 },
      { title: 'The Patrick Star Show', year: 2021 }
    ],
    img: 'https://m.media-amazon.com/images/M/MV5BYjJmMjBkZjMtZThiZS00Nzk3LWJlN2UtYmE5ZjkyNjJiZjgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Ed, Edd n Eddy',
    abbreviation: 'EEE',
    mainCharacters: [
      { name: 'Ed', voiceBy: 'Matt Hill', role: 'The Strong One' },
      {
        name: 'Edd (Double D)',
        voiceBy: 'Samuel Vincent',
        role: 'The Smart One'
      },
      { name: 'Eddy', voiceBy: 'Tony Sampson', role: 'The Schemer' },
      { name: 'Kevin', voiceBy: 'Kathleen Barr', role: 'The Jock' },
      {
        name: 'Johnny 2x4',
        voiceBy: 'David Paul Grove',
        role: 'The Weird Kid'
      },
      {
        name: 'Rolf',
        voiceBy: 'Peter Kelamis',
        role: 'The Foreign Exchange Student'
      }
    ],
    genre: ['Comedy', 'Slapstick'],
    runTime: 22,
    creator: 'Danny Antonucci',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 6,
    episodes: {
      total: 70
    },
    broadcast: {
      originalNetwork: 'Cartoon Network',
      firstAired: 'January 4, 1999',
      lastAired: 'November 8, 2009'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BOWNmY2Y0MDUtMmM4Zi00NGEzLWI1MjEtMDUzYmM2MzFjNTU2XkEyXkFqcGc@._V1_.jpg'
  },
  {
    title: 'Courage the Cowardly Dog',
    abbreviation: 'CTCD',
    mainCharacters: [
      { name: 'Courage', voiceBy: 'Marty Grabstein', role: 'The Cowardly Dog' },
      { name: 'Muriel Bagge', voiceBy: 'Thea White', role: 'The Kind Owner' },
      {
        name: 'Eustace Bagge',
        voiceBy: 'Arthur Anderson',
        role: 'The Grumpy Farmer'
      }
    ],
    genre: ['Horror', 'Comedy', 'Surrealism'],
    runTime: 22,
    creator: 'John R. Dilworth',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 4,
    episodes: {
      total: 52
    },
    broadcast: {
      originalNetwork: 'Cartoon Network',
      firstAired: 'November 12, 1999',
      lastAired: 'November 22, 2002'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BMzdiMWI4OGMtZDc2MC00NDllLTgyMWUtN2ZmZjVlYWFkYjQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'The Powerpuff Girls',
    abbreviation: 'PPG',
    mainCharacters: [
      { name: 'Blossom', voiceBy: 'Cathy Cavadini', role: 'The Smart One' },
      { name: 'Bubbles', voiceBy: 'Tara Strong', role: 'The Cute One' },
      { name: 'Buttercup', voiceBy: 'Elizabeth Daily', role: 'The Tough One' },
      { name: 'Professor Utonium', voiceBy: 'Tom Kane', role: 'The Scientist' },
      { name: 'Mojo Jojo', voiceBy: 'Roger L. Jackson', role: 'The Villain' },
      { name: 'HIM', voiceBy: 'Tom Kane', role: 'The Villain' }
    ],
    genre: ['Action', 'Comedy', 'Superhero'],
    runTime: 22,
    creator: 'Craig McCracken',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 6,
    episodes: {
      total: 78
    },
    broadcast: {
      originalNetwork: 'Cartoon Network',
      firstAired: 'November 18, 1998',
      lastAired: 'March 25, 2005'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BNWMyNWY2M2QtNDNjNS00YzY3LWJkMWYtMzdhNmE4OGRhZTBmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Rugrats',
    abbreviation: 'RR',
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
      total: 172
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
    runTime: 22,
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
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BZDIzNWIyZjItMzFkNS00M2NhLWFkMzAtNmYxYjZjMjAxYTY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'The Grim Adventures of Billy & Mandy',
    abbreviation: 'GABM',
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
    runTime: 22,
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
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BN2FjZmVkNDEtNzQ5My00MDkyLTg0Y2ItYjhkOWJhNGVhYjJiXkEyXkFqcGc@._V1_.jpg'
  },
  {
    title: 'Scooby-Doo, Where Are You!',
    abbreviation: 'SDWAY!',
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
    runTime: 22,
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
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BNTBhODQ2ZjEtMDMzMS00ZjlkLWI2YWItMmQ3MWNjN2U3ODczXkEyXkFqcGc@._V1_.jpg'
  },
  {
    title: 'Dexter’s Laboratory',
    abbreviation: 'DL',
    mainCharacters: [
      {
        name: 'Dexter',
        voiceBy: 'Christine Cavanaugh/Candi Milo',
        role: 'Main character'
      },
      { name: 'Dee Dee', voiceBy: 'Kath Soucie', role: 'Dexter’s sister' },
      { name: 'Mandark', voiceBy: 'Eddie Deezen', role: 'Dexter’s rival' },
      { name: 'Mom', voiceBy: 'Kath Soucie', role: 'Dexter’s mother' },
      { name: 'Dad', voiceBy: 'Jeff Bennett', role: 'Dexter’s father' }
    ],
    genre: ['Comedy', 'Science Fiction'],
    runTime: 22,
    creator: 'Genndy Tartakovsky',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 4,
    episodes: {
      total: 78
    },
    broadcast: {
      originalNetwork: 'Cartoon Network',
      firstAired: 'April 28, 1996',
      lastAired: 'November 20, 2003'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BYmE4ZmI4YzMtYTU4My00YTRiLWIzOGEtOWEzNWYxM2NjYzgzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Drake & Josh',
    abbreviation: 'DJ',
    mainCharacters: [
      {
        name: 'Drake Parker',
        voiceBy: 'Drake Bell',
        role: 'Cool, Laid-Back Musician and Ladies’ Man'
      },
      {
        name: 'Josh Nichols',
        voiceBy: 'Josh Peck',
        role: 'Smart, Nerdy, and Overly Cautious Stepbrother'
      },
      {
        name: 'Megan Parker',
        voiceBy: 'Miranda Cosgrove',
        role: 'Drake’s Mischievous Younger Sister'
      },
      {
        name: 'Walter Nichols',
        voiceBy: 'Jonathan Goldstein',
        role: 'Josh’s Awkward and Clueless Father'
      },
      {
        name: 'Audrey Parker-Nichols',
        voiceBy: 'Nancy Sullivan',
        role: 'Drake’s Caring but Sometimes Oblivious Mother'
      }
    ],
    genre: ['Comedy', 'Teen', 'Family'],
    runTime: 23,
    creator: ['Dan Schneider'],
    distributor: 'ViacomCBS Domestic Media Networks',
    seasons: 4,
    episodes: {
      total: 57
    },
    broadcast: {
      originalNetwork: 'Nickelodeon',
      firstAired: 'January 11, 2004',
      lastAired: 'September 16, 2007'
    },
    spinOffs: { title: 'Merry Christmas, Drake & Josh', year: 2008 },
    img: 'https://m.media-amazon.com/images/M/MV5BNmM3MWFkZjctYzBhNC00YWU1LWIzYTktZjUxMzYyNGE5MjhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'The Fairly OddParents',
    abbreviation: 'TFO',
    mainCharacters: [
      { name: 'Timmy Turner', voiceBy: 'Tara Strong', role: 'Protagonist' },
      { name: 'Cosmo', voiceBy: 'Daran Norris', role: 'Fairy Godparent' },
      { name: 'Wanda', voiceBy: 'Susanne Blakeslee', role: 'Fairy Godparent' },
      { name: 'Vicky', voiceBy: 'Grey DeLisle', role: 'Antagonist' },
      { name: 'Jorgen Von Strangle', voiceBy: 'Daran Norris', role: 'Fairy' }
    ],
    genre: ['Comedy', 'Fantasy'],
    runTime: 22,
    creator: 'Butch Hartman',
    distributor: 'Paramount Global Distribution',
    seasons: 10,
    episodes: {
      total: 172
    },
    broadcast: {
      originalNetwork: 'Nickelodeon',
      firstAired: 'March 30, 2001',
      lastAired: 'July 26, 2017'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BY2RlNWMwZmUtMjM4MC00MDczLTk3NjktYTg2OTNiNThhNmNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Teen Titans',
    abbreviation: 'TT',
    mainCharacters: [
      { name: 'Robin', voiceBy: 'Scott Menville', role: 'Leader' },
      { name: 'Starfire', voiceBy: 'Hynden Walch', role: 'Team Member' },
      { name: 'Cyborg', voiceBy: 'Khary Payton', role: 'Team Member' },
      { name: 'Raven', voiceBy: 'Tara Strong', role: 'Team Member' },
      { name: 'Beast Boy', voiceBy: 'Greg Cipes', role: 'Team Member' },
      { name: 'Slade', voiceBy: 'Ron Perlman', role: 'Villain' }
    ],
    genre: ['Action', 'Superhero', 'Comedy'],
    runTime: 22,
    creator: 'Glen Murakami',
    distributor: 'Warner Bros. Television Distribution',
    seasons: 5,
    episodes: {
      total: 65
    },
    broadcast: {
      originalNetwork: 'Cartoon Network',
      firstAired: 'July 19, 2003',
      lastAired: 'September 15, 2006'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BOTg3NzY2MDQtMjUxNS00N2Q3LTkxODktMmU1NzdjZTNkMzQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Avatar: The Last Airbender',
    abbreviation: 'ATLA',
    mainCharacters: [
      { name: 'Aang', voiceBy: 'Zach Tyler Eisen', role: 'Protagonist' },
      { name: 'Katara', voiceBy: 'Mae Whitman', role: 'Team Member' },
      { name: 'Sokka', voiceBy: 'Jack DeSena', role: 'Team Member' },
      { name: 'Toph Beifong', voiceBy: 'Jessie Flower', role: 'Team Member' },
      { name: 'Zuko', voiceBy: 'Dante Basco', role: 'Team Member' },
      { name: 'Azula', voiceBy: 'Grey DeLisle', role: 'Villain' },
      {
        name: 'Uncle Iroh',
        voiceBy: 'Mako (Seasons 1-2), Greg Baldwin (Season 3)',
        role: 'Mentor'
      }
    ],
    genre: ['Action', 'Adventure', 'Fantasy'],
    runTime: 22,
    creator: ['Michael Dante DiMartino', 'Bryan Konietzko'],
    distributor: 'Paramount Global Distribution',
    seasons: 3,
    episodes: {
      total: 61
    },
    broadcast: {
      originalNetwork: 'Nickelodeon',
      firstAired: 'February 21, 2005',
      lastAired: 'July 19, 2008'
    },
    spinOffs: [],
    img: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/1000011028.jpg'
  },
  {
    title: "That's So Raven",
    abbreviation: 'TSR',
    mainCharacters: [
      { name: 'Raven Baxter', voiceBy: 'Raven-Symoné', role: 'Protagonist' },
      {
        name: 'Chelsea Daniels',
        voiceBy: 'Anneliese van der Pol',
        role: 'Best Friend'
      },
      { name: 'Eddie Thomas', voiceBy: 'Orlando Brown', role: 'Best Friend' },
      { name: 'Cory Baxter', voiceBy: 'Kyle Massey', role: 'Raven’s Brother' }
    ],
    genre: ['Comedy', 'Family', 'Fantasy'],
    runTime: 22,
    creator: ['Michael Poryes', 'Susan Sherman'],
    distributor: 'Disney-ABC Domestic Television',
    seasons: 4,
    episodes: {
      total: 100
    },
    broadcast: {
      originalNetwork: 'Disney Channel',
      firstAired: 'January 17, 2003',
      lastAired: 'November 10, 2007'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BZTlkNDUxOTgtNWY3My00NjI2LWJlMWUtNzRlZTI1MDcyYjNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Kim Possible',
    abbreviation: 'KP',
    mainCharacters: [
      {
        name: 'Kim Possible',
        voiceBy: 'Christy Carlson Romano',
        role: 'Protagonist'
      },
      { name: 'Ron Stoppable', voiceBy: 'Will Friedle', role: 'Best Friend' },
      { name: 'Wade Load', voiceBy: 'Tahj Mowry', role: 'Tech Support' },
      { name: 'Dr. Drakken', voiceBy: 'John DiMaggio', role: 'Villain' }
    ],
    genre: ['Action', 'Comedy', 'Spy'],
    runTime: 22,
    creator: ['Bob Schooley', 'Mark McCorkle'],
    distributor: 'Disney Channel',
    seasons: 4,
    episodes: {
      total: 87
    },
    broadcast: {
      originalNetwork: 'Disney Channel',
      firstAired: 'June 7, 2002',
      lastAired: 'September 21, 2007'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BMmIwNjQ5MzEtNTg4Zi00NWMyLThkZDktZDg0MGU4MmYzMjlhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Lizzie McGuire',
    abbreviation: 'LM',
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
      total: 65
    },
    broadcast: {
      originalNetwork: 'Disney Channel',
      firstAired: 'January 12, 2001',
      lastAired: 'February 14, 2004'
    },
    spinOffs: { title: 'The Lizzie McGuire Movie', year: 2003 },
    img: 'https://m.media-amazon.com/images/M/MV5BMGY1Y2U3ZGItZGQyYS00N2Q5LTk5YzktZGEwMmJmZmNjYTJjXkEyXkFqcGc@._V1_.jpg'
  },
  {
    title: 'Zoey 101',
    abbreviation: 'Z101',
    mainCharacters: [
      {
        name: 'Zoey Brooks',
        voiceBy: 'Jamie Lynn Spears',
        role: 'Main character'
      },
      {
        name: 'Chase Matthews',
        voiceBy: 'Sean Flynn',
        role: "Zoey's best friend, love interest"
      },
      {
        name: 'Lola Martinez',
        voiceBy: 'Victoria Justice',
        role: "Zoey's best friend"
      },
      {
        name: 'Michael Barrett',
        voiceBy: 'Christopher Massey',
        role: "Zoey's best friend"
      }
    ],
    genre: ['Comedy', 'Drama', 'Teen'],
    runTime: 22,
    creator: 'Dan Schneider',
    distributor: 'Nickelodeon',
    seasons: 4,
    episodes: {
      total: 61
    },
    broadcast: {
      originalNetwork: 'Nickelodeon',
      firstAired: 'January 9, 2005',
      lastAired: 'May 2, 2008'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BNTM4NzQ5ZWEtMGQxNC00OGU0LTliZjItYjZlZGE0ZDQ2ZWI2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'The Proud Family',
    abbreviation: 'TPF',
    mainCharacters: [
      {
        name: 'Penny Proud',
        voiceBy: 'Kyla Pratt',
        role: 'Smart and Outspoken Teenager Struggling with Growing Up'
      },
      {
        name: 'Oscar Proud',
        voiceBy: 'Tommy Davidson',
        role: 'Penny’s Overprotective and Silly Father'
      },
      {
        name: 'Trudy Proud',
        voiceBy: 'Paula Jai Parker',
        role: 'Penny’s Supportive and Caring Mother'
      },
      {
        name: 'Suga Mama',
        voiceBy: 'Jo Marie Payton',
        role: 'Penny’s Sassy Grandmother'
      },
      {
        name: 'Dijonay Jones',
        voiceBy: 'Alisa Reyes',
        role: 'Penny’s Best Friend Who’s Always Full of Drama'
      },
      {
        name: 'LaCienega Boulevardez',
        voiceBy: 'Alison Stoner',
        role: 'Penny’s Rival Who’s Popular and Snarky'
      },
      {
        name: 'Sticky Webb',
        voiceBy: 'Orlando Brown',
        role: 'Penny’s Close Friend Who’s Often the Comic Relief'
      }
    ],
    genre: ['Comedy', 'Teen', 'Family'],
    runTime: 22,
    creator: ['Bruce W. Smith', 'Ellen Gittelsohn'],
    distributor: 'Walt Disney Television Animation',
    seasons: 3,
    episodes: {
      total: 52
    },
    broadcast: {
      originalNetwork: 'Disney Channel',
      firstAired: 'September 15, 2001',
      lastAired: 'August 19, 2005'
    },
    spinOffs: [
      { title: 'The Proud Family Movie', year: 2005 },
      { title: 'The Proud Family: Louder and Prouder', year: 2022 }
    ],
    img: 'https://www.dvdplanetstore.pk/wp-content/uploads/2018/01/wnzJSbauhUyygDmODz8BeLUdVib.jpg'
  },
  {
    title: 'Lilo & Stitch: The Series',
    abbreviation: 'LSS',
    mainCharacters: [
      {
        name: 'Lilo Pelekai',
        voiceBy: 'Daveigh Chase',
        role: 'A young girl who adopts Stitch and tries to help him find his purpose'
      },
      {
        name: 'Stitch',
        voiceBy: 'Chris Sanders',
        role: 'An alien experiment who becomes Lilo’s mischievous but loyal pet'
      },
      {
        name: 'Nani Pelekai',
        voiceBy: 'Tia Carrere',
        role: 'Lilo’s older sister and guardian, trying to keep their lives together'
      },
      {
        name: 'Dr. Jumbaa Jookiba',
        voiceBy: 'David Ogden Stiers',
        role: 'The creator of Stitch and other experiments, working with Lilo to stop them'
      }
    ],
    genre: ['Comedy', 'Adventure', 'Sci-Fi'],
    runTime: 22,
    creator: 'Chris Sanders',
    distributor: 'Disney Channel',
    seasons: 2,
    episodes: {
      total: 65
    },
    broadcast: {
      originalNetwork: 'ABC',
      firstAired: 'September 20, 2003',
      lastAired: 'July 29, 2006'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BNTlkMDFjYzAtY2VkMy00OTk5LWFiOTUtZGZkMmRlNzA3Yzg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Hey Arnold!',
    abbreviation: 'HA!',
    mainCharacters: [
      {
        name: 'Arnold',
        voiceBy: 'Lane Toran',
        role: 'The optimistic and caring protagonist who is often the voice of reason in the series.'
      },
      {
        name: 'Gerald Johanssen',
        voiceBy: 'Jamil Walker Smith',
        role: 'Arnold’s best friend, known for his laid-back attitude and sense of adventure.'
      },
      {
        name: 'Helga Pataki',
        voiceBy: 'Francesca Marie Smith',
        role: 'Arnold’s classmate who secretly has feelings for him, despite her tough exterior.'
      },
      {
        name: 'Grandpa Phil',
        voiceBy: 'Dan Castellaneta',
        role: 'Arnold’s wise but often eccentric grandfather who helps guide him through life.'
      }
    ],
    genre: ['Comedy', 'Slice of Life'],
    runTime: 22,
    creator: 'Craig Bartlett',
    distributor: 'Nickelodeon',
    seasons: 5,
    episodes: {
      total: 100
    },
    broadcast: {
      originalNetwork: 'Nickelodeon',
      firstAired: 'October 7, 1996',
      lastAired: 'June 8, 2004'
    },
    spinOffs: [],
    img: 'https://m.media-amazon.com/images/M/MV5BYzhiYTYwM2QtNTlmNy00MGM1LTllM2UtOGJmZTUxMmJmZjdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Foster’s Home for Imaginary Friends',
    abbreviation: 'FHFIM',
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
      total: 79
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
    abbreviation: 'HM',
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
      total: 98
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
    abbreviation: 'TSLOZC',
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
      total: 87
    },
    broadcast: {
      originalNetwork: 'Disney Channel',
      firstAired: 'March 18, 2005',
      lastAired: 'September 1, 2008'
    },
    spinOffs: { title: 'The Suite Life on Deck', year: 2008 },
    img: 'https://m.media-amazon.com/images/M/MV5BY2JkNzFmYWItMGI1Yi00OGU1LTg3NzUtM2M0NWFkOTFjZTI5XkEyXkFqcGc@._V1_.jpg'
  },

  {
    title: 'Phineas and Ferb',
    abbreviation: 'PF',
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
      total: 129
    },
    broadcast: {
      originalNetwork: 'Disney Channel',
      firstAired: 'August 17, 2007',
      lastAired: 'June 12, 2015'
    },
    spinOffs: { title: 'Milo Murphy’s Law', year: 2016 },
    img: 'https://artworks.thetvdb.com/banners/posters/81848-7.jpg'
  }
]

export default shows
