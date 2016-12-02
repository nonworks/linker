
var origin = null;

var linker = function(args){
    if (!args){
        args = {};
    }
    if (args.absolute && !origin){
        throw new Error("Can't create an absolute path, origin is not set");
    }

    if (!args.page){
        throw(new Error("Missing page parameter"));
    }

    url = '/'+args.page;

    if (args.resource) {
        url = url+'/'+args.resource;

        if (args.action){
            url = url+'/'+args.action;
        }
    }

    if (args.absolute){
        url = origin+url;
    }

    return url;
};

linker.removeOrigin = function(){
    origin = null;
};

linker.setOrigin = function(newOrigin){
    origin = newOrigin;
};

module.exports = linker;
