var App = $$.Class.new({
  class: $$.Object,

  class_methods: {},

  instance: $$.Object.instance,

  instance_methods: {
    start: function () {
      var router = App.RouteUnfamiliarRequest.new()
      return router.route();
    }
  }
});
