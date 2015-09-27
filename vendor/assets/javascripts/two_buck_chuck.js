var $$ = function (arg1) {
  if (typeof arg1 === 'function') {
    return $$.ready(arg1);
  }

  if (typeof arg1 === "string" && arg1.match('#')) {
    return $$.selectElement(arg1);
  }
};

$$.document = (function (dokument) {
  return function () {
    return dokument;
  }
}(document));

$$.selectElement = function (id) {
  return $$.document().querySelector(id);
}

$$.ready = function (funktion) {
  this.document().addEventListener("DOMContentLoaded", function() {
    return funktion();
  });
};

$$.BasicObject = Object.create(null);

$$.BasicObject.prototype = function () {
  return Object.getPrototypeOf(this);
};

$$.BasicObject.super = function (sub_class_args) {
  var funktion  = sub_class_args.callee;
  var name      = funktion.__name__;
  var prototype = this.prototype();
  return prototype[name].apply(this, sub_class_args);
};

$$.Class = Object.create($$.BasicObject);

$$.Class.new = function (kwargs) {
  if (!kwargs) {
    kwargs = Object.create(null);
  }

  if (!kwargs.class) {
    kwargs.class = $$.Object;
  }

  var klass = Object.create(kwargs.class);

  if (!kwargs.class_methods) {
    kwargs.class_methods = Object.create(null);
  }

  (function (klass, methods) {
    for (var method_name in methods) {
      var method = methods[method_name];

      if (typeof method === 'function') {
        Object.defineProperty(method, '__name__', {value: method_name});
      }

      klass[method_name] = method;
    }
  }(klass, kwargs.class_methods));

  if (!kwargs.instance) {
    kwargs.instance = $$.Object.instance;
  }

  klass.instance = Object.create(kwargs.instance);

  if (!kwargs.instance_methods) {
    kwargs.instance_methods = Object.create(null);
  }

  klass.instance_methods = kwargs.instance_methods;

  (function (instance, methods) {
    for (var method_name in methods) {
      var method = methods[method_name];

      if (typeof method === 'function') {
        Object.defineProperty(method, '__name__', {value: method_name});
      }

      instance[method_name] = method;
    }
  }(klass.instance, klass.instance_methods));

  return klass;
};

$$.Object = $$.Class.new({
  class: $$.BasicObject,

  class_methods: {
    new: function () {
      var instance = Object.create(this.instance);
      instance.prototype = function () {
        prototype = Object.getPrototypeOf(this);
        return Object.getPrototypeOf(prototype);
      }

      if (instance.initialize) {
        instance.initialize.apply(instance, arguments);
      }

      return instance;
    }
  },

  instance: $$.BasicObject,

  instance_methods: Object.create(null)
});

$$.String = $$.Class.new({
  instance_methods: {
    camelize: function () {
      var split = this.string.split("_");
      var capitalized = split.map(function (str) {
        return $$.String.new(str).capitalize().to_s();
      })
      this.string = capitalized.join("")
      return this;
    },

    capitalize: function () {
      var upper_case = this.string[0].toUpperCase();
      var lower_case = this.string.slice(1).toLowerCase();
      this.string = upper_case + lower_case;
      return this;
    },

    initialize: function (string) {
      this.string = string || "";
    },

    to_s: function () {
      return this.string;
    }
  }
});

var TwoBuckChuck = $$;
