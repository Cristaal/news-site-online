newsSite.factory('TitlesFactory', function TitlesFactory() {
  var factory = {};
  factory.titles = [];
  factory.addTitle = function() {
    debugger;
    factory.titles.push({ title: factory.storyTitle, id: factory.titles.length + 1});
    factory.storyTitle = null;
  };
  return factory;
});
