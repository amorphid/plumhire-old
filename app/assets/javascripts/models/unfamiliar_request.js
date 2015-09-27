App.UnfamiliarRequest = $$.Class.new({
  instance_methods: {
    initialize: function () {
      this.store_data(
        this.parse_data(
          this.extract_data(
            this.fetch_element())))

    },

    to_request : function () {
      return App.Request.new({
        method: this.method,
        params: this.params,
        path:   this.path
      })
    },

    extract_data: function (element) {
      return element.getAttribute("$$-data");
    },

    fetch_element: function () {
      return $$("#unfamiliar_request");
    },

    parse_data: function (json) {
      return JSON.parse(json);
    },

    store_data: function (kwargs) {
      this.method = kwargs.method;
      this.params = kwargs.params;
      this.path   = kwargs.path;
    }
  }
});
