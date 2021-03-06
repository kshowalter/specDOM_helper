var mkSpec = function(tag, args){
  var props = undefined;
  var children = undefined;
  var meta = undefined;

  var args = Array.prototype.slice.call(args);
  var inputs = [];
  args.forEach(function(argument){
    if(argument.constructor === Array){
      children = argument;
    } else if(argument.constructor === Object){
      if( props === undefined ){
        props = argument;
      } else {
        meta = argument;
      }
    } else if(argument.constructor === String){
      inputs.push(argument);
    } else {
      console.warn('TODO: what do I do?');
    }

  });

  var spec = {
    tag: tag
  };
  if( props ){ spec.props = props; }
  if( children ){ spec.children = children; }


  if( inputs.length > 0 ){
    if( ['div', 'span', 'a', 'li', 'h1', 'h2', 'h3'].indexOf(tag)+1 > 0 ){
      spec.text = inputs[0];
    }
    if( tag === 'a'){
      spec.props = spec.props || {};
      spec.props.href = inputs[1];
    }
  }

  return spec;
};


var helper = {
  type: 'specDOM_helper'

  //div: function(){ return mkSpec('div', args); },
  //span: function(){ return mkSpec('span', args); },
  //a: function(){ return mkSpec('a', args); }

};

[
  'div', 'span', 'p', 'a', 'ul', 'li', 'br', 'h1', 'h2', 'h3', 'input'
].forEach(function(tag){
  helper[tag] = function(){
    return mkSpec(tag, arguments);
  };
});

/**
 * .
 * @exports
 */
module.exports = helper;

//import {div, span, p, a, ul, li, br, h1, h2, h3, input} from 'specdom_helper';
