this["template"] = this["template"] || {};
this["template"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li>\n  <h3>"
    + alias3(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last","hash":{},"data":data}) : helper)))
    + ", "
    + alias3(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first","hash":{},"data":data}) : helper)))
    + "</h3>\n  <h3></h3>\n  <p>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</p>\n  <p>"
    + alias3(((helper = (helper = helpers.mobile || (depth0 != null ? depth0.mobile : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mobile","hash":{},"data":data}) : helper)))
    + "</p>\n  <p>"
    + alias3(((helper = (helper = helpers.twit || (depth0 != null ? depth0.twit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"twit","hash":{},"data":data}) : helper)))
    + "</p>\n  <p>"
    + alias3(((helper = (helper = helpers.linkd || (depth0 != null ? depth0.linkd : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"linkd","hash":{},"data":data}) : helper)))
    + "</p>\n</li>\n";
},"useData":true});