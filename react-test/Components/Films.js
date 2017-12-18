import React, { Component } from 'react';
import pict1 from './Pictures/MontyPython.png';
import pict2 from './Pictures/Hangover.png';
import pict3 from './Pictures/Airplane.png';
import pict4 from './Pictures/Caddyshack.png';
import pict5 from './Pictures/OfficeSpace.png';
import pict6 from './Pictures/Ferris.png';

var FilmsAPI = {
  films: [
    { number: 1, name: "Monty Python and the Holy Grail", producer: "Terry Gilliam, Terry Jones",
      director: "Mark Forstater, Michael White", release: "3 April 1975", duration: "92 minutes",
      genre: "comedy", image: pict1, desription: "Monty Python and the Holy Grail is a 1975 British comedy film written and performed by the comedy group of Monty Python, and directed by Gilliam and Jones. It was conceived during the hiatus between the third and fourth series of their popular BBC television programme Monty Python's Flying Circus. In contrast to the group's first film, And Now for Something Completely Different, a compilation of sketches from the first two television series, Holy Grail was com..."},

  { number: 2, name: "The Hangover", producer: "Daniel Goldberg, Todd Phillips", director: "Todd Phillips",
    release: "5 June 2009", duration: "100 minutes", genre: "comedy",
    image: pict2,
    desription: "The Hangover is a 2009 American comedy film, co-produced and directed by Todd Phillips and written by Jon Lucas and Scott Moore. It is the first film of The Hangover trilogy. The film stars Bradley Cooper, Ed Helms, Zach Galifianakis, Heather Graham, Justin Bartha, and Jeffrey Tambor. It tells the story of Phil Wenneck, Stu Price, and Alan Garner, who travel to Las Vegas for a bachelor party to celebrate their friend Doug Billings' impending marriage."
  },

  { number: 3, name: "Airplane", producer: "Jon Davison", director: "Jim Abrahams, David Zucker, Jerry Zucker",
    release: "2 July 2009", duration: "87 minutes", genre: "comedy", image: pict3,
    desription: "Airplane! is a 1980 American satirical disaster comedy film directed and written by David Zucker, Jim Abrahams, and Jerry Zucker and released by Paramount Pictures. It stars Robert Hays and Julie Hagerty and features Leslie Nielsen, Robert Stack, Lloyd Bridges, Peter Graves, Kareem Abdul-Jabbar, and Lorna Patterson."
  },

  { number: 4, name: "Caddyshack", producer: "Douglas Kenney", director: "Harold Ramis",
    release: "25 July 1980", duration: "98 minutes", genre: "comedy", image: pict4,
    desription: "Caddyshack is a 1980 American sports comedy film directed by Harold Ramis and written by Brian Doyle-Murray, Ramis and Douglas Kenney. It stars Michael O'Keefe, Chevy Chase, Rodney Dangerfield, Ted Knight, and Bill Murray. Doyle-Murray also has a supporting role. "
  },

  { number: 5, name: "Office Space", producer: "Daniel Rappaport, Michael Rotenberg", director: "Mike Judge",
    release: "19 February 1999", duration: "89 minutes", genre: "comedy", image: pict5,
    desription: "Office Space is a 1999 American comedy film written and directed by Mike Judge. The film satirizes the everyday work life of a typical mid-to-late-1990s software company, it focuses on a handful of individuals fed up with their jobs and stars Ron Livingston, Jennifer Aniston, Gary Cole, Steven Root, David Herman, Ajay Naidu, and Diedrich Bader"
  },

  { number: 6, name: "Ferris Bueller's Day Off", producer: "John Hughes, Tom Jacobson", director: "John Hughes",
    release: "11 June 1986", duration: "103 minutes", genre: "comedy", image: pict6,
    desription: "Ferris Bueller's Day Off is a 1986 American comedy film written, produced and directed by John Hughes. The film follows high school senior Ferris Bueller, who skips school and spends the day in downtown Chicago. Accompanied by his girlfriend Sloane Peterson and his best friend Cameron Frye, he creatively avoids his school's principal Edward Rooney, his resentful sister Jeanie, and his parents."
  }
  ],
  all: function all() {
    return this.films;
  },
  get: function get(id) {
    var isFilm = function isFilm(p) {
      return p.number === id;
    };
    return this.film.find(isFilm);
  }

};
