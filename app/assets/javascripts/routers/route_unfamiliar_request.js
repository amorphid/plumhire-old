App.RouteUnfamiliarRequest = $$.Class.new({
  instance_methods: {
    route: function () {
      return this.route_request(
               this.convert_request());
    },

    route_request: function (request) {
      return App.RouteRequest.new().route({request: request});
    },

    convert_request: function (kwargs) {
      return App.UnfamiliarRequest.new().to_request()
    }
  }
});
