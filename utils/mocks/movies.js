const moviesMock = [
  {
    id: '405c2392-b6ac-46c8-b6e0-03a052e3adf0',
    title: 'Arrowsmith',
    year: 2010,
    cover: 'http://dummyimage.com/113x187.png/5fa2dd/ffffff',
    description: 1897,
    contentRating: 'R',
    source: 'http://wix.com/et.png',
    tags: ['Comedy|Drama|Romance', 'Drama', 'Documentary']
  },
  {
    id: 'dc4840ff-9077-461a-be1f-7329bfcd2b85',
    title: 'Cypher',
    year: 1992,
    cover: 'http://dummyimage.com/128x190.jpg/cc0000/ffffff',
    description: 1960,
    contentRating: 'PG-13',
    source: 'http://domainmarket.com/amet/erat/nulla/tempus/vivamus.html',
    tags: [
      'Action|Drama|Romance|Thriller',
      'Drama',
      'Horror|Sci-Fi',
      'Horror|Mystery|Thriller',
      'Animation|Children|Fantasy|Mystery'
    ]
  },
  {
    id: '418e0f1e-d908-4a46-9c0b-2f3c1d6056e2',
    title: 'Hit Man',
    year: 2000,
    cover: 'http://dummyimage.com/186x105.png/5fa2dd/ffffff',
    description: 1906,
    contentRating: 'PG',
    source: 'https://ask.com/at.xml',
    tags: [
      'Romance|Western',
      'Horror',
      'Comedy',
      'Documentary',
      'Adventure|Drama|Horror|Mystery|Thriller'
    ]
  },
  {
    id: '9262e05e-99b6-4ba8-823c-9501c3d5bab7',
    title: 'Winter of Frozen Dreams',
    year: 2003,
    cover: 'http://dummyimage.com/236x131.png/ff4444/ffffff',
    description: 1915,
    contentRating: 'PG',
    source:
      'http://jugem.jp/convallis/duis/consequat/dui/nec/nisi/volutpat.jsp',
    tags: ['Action|Adventure', 'Crime|Drama', 'Comedy', 'Comedy|Drama']
  },
  {
    id: '324e2340-20e6-43f3-bf97-df7351eaf69e',
    title: 'Cold Light of Day, The',
    year: 2009,
    cover: 'http://dummyimage.com/164x135.jpg/dddddd/000000',
    description: 2064,
    contentRating: 'PG-13',
    source: 'https://homestead.com/justo/nec/condimentum/neque/sapien.png',
    tags: ['Documentary', 'Drama|Thriller', 'Adventure|War', 'Comedy']
  },
  {
    id: '3186225f-2f62-43e4-9c03-6ddb866aed3b',
    title: 'Mother and the Whore, The (Maman et la putain, La)',
    year: 2005,
    cover: 'http://dummyimage.com/152x217.bmp/5fa2dd/ffffff',
    description: 1957,
    contentRating: 'R',
    source: 'http://spiegel.de/gravida.aspx',
    tags: [
      'Drama',
      'Horror|Mystery|Thriller',
      'Action|Crime|Drama|War',
      'Drama'
    ]
  },
  {
    id: '4e887f40-1cd2-489b-a9e7-6e0ad03cbdaf',
    title: 'We Are Legion: The Story of the Hacktivists',
    year: 2003,
    cover: 'http://dummyimage.com/228x208.png/ff4444/ffffff',
    description: 1965,
    contentRating: 'PG-13',
    source: 'http://discuz.net/iaculis/justo.aspx',
    tags: ['Drama', 'War']
  },
  {
    id: '11d9624b-3c3d-4e13-9610-30959c027893',
    title: 'Cobweb, The',
    year: 2006,
    cover: 'http://dummyimage.com/152x138.png/5fa2dd/ffffff',
    description: 1971,
    contentRating: 'PG',
    source: 'http://opera.com/dolor/vel/est/donec/odio/justo.json',
    tags: ['Drama', 'Documentary']
  },
  {
    id: '86a163f0-2355-4db7-baad-cdcc3677daa9',
    title: 'Edison Force (a.k.a. Edison)',
    year: 1998,
    cover: 'http://dummyimage.com/175x223.png/5fa2dd/ffffff',
    description: 2060,
    contentRating: 'NC-17',
    source: 'http://miitbeian.gov.cn/pharetra.png',
    tags: ['Drama']
  },
  {
    id: '63f55cb4-1998-43a8-9448-dd03b647591c',
    title: 'Hulk Vs.',
    year: 2009,
    cover: 'http://dummyimage.com/170x169.bmp/dddddd/000000',
    description: 1963,
    contentRating: 'PG',
    source: 'https://cmu.edu/aliquam/erat/volutpat/in/congue.aspx',
    tags: ['Drama|Romance', 'Documentary', 'Action|Comedy|Crime']
  }
];

function filteredMovieMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MovieServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = { moviesMock, filteredMovieMock, MovieServiceMock };
