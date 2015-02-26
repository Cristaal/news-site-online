newsSite.factory('TitlesFactory', function TitlesFactory() {
  var factory = {};
  factory.titles = [];
  factory.addTitle = function() {
    factory.titles.push({ name: factory.storyTitle, id: factory.titles.length + 1, comments: [] });
    factory.storyTitle = null;
  };
  return factory;
});
