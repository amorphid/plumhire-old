App.Request = $$.Class.new({
  instance_methods: {
    initialize: function (kwargs) {
      this.method = kwargs.method;
      this.params = kwargs.params;
      this.path   = kwargs.path;
    }
  }
});
