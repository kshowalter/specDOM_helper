var helper = {
  type: 'specDOM_helper',


  div: function(){
    var h = Object.create(helper);
    h.config = {
      tag: 'div',
      props: {},
      children: [
        
      ]
    };


    return h;
  }

};

/**
 * .
 * @exports
 */
module.exports = function(){
  var h = Object.create(helper);
  h.config = {};

  return h;
};
