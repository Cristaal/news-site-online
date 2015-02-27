newsSite.factory('TitlesFactory', function TitlesFactory($sce) {
  var factory = {};
  factory.titles = [];

  factory.addTitle = function() {
    factory.titles.push({
      name: $sce.trustAsHtml(factory.storyTitle),
      id: factory.titles.length + 1,
      url: factory.titleUrl,
  });
    factory.storyTitle = null;
    factory.titleUrl = null;
  };

  return factory;

});
