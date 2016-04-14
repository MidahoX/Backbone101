var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    covermage: 'img/book.png'
    title: "No title",
    author: "Unknown",
    releaseDate: "Unknown",
    keywords: "None"
  }
});
