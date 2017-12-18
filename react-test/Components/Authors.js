import React, { Component } from 'react';

var AuthorAPI = {
  authors: [{ number: 1, name: "Adam Mackey", films: "Brathers, Rikki Bobbi, Cops" },
  { number: 2, name: "Alan Parker", films: "The road to Wellville, Angel heart" },
  { number: 3, name: "Bret Bird", films: "The future earth, The Iron Giant" },
  { number: 4, name: "Gary Ross", films: "Free state, Favorit" },
  { number: 5, name: "Eeatan Koen", films: "Hello Cisar, Barton Fink" },
  { number: 6, name: "Jay Rouch", films: "Trambo, Austin powers spion in geheimer missionairs" }],
  all: function all() {
    return this.authors;
  },
  get: function get(id) {
    var isAuthor = function isAuthor(p) {
      return p.number === id;
    };
    return this.author.find(isAuthor);
  }

  // The FullRoster iterates over all of the players and creates
  // a link to their profile page.
};
