var register = function(Handlebars) {
    var helpers = {
        applicationIDIsEqual: function(yourData, index, options){
            if(index === 0) {
                console.log('First!');
                //return yourData[index].applicationid;
                return options.fn(this) 
            }else{
            return (yourData[index].applicationid != yourData[index-1].applicationid) ? options.fn(this) : options.inverse(this);
            };
        
            },
            ifEquals: function(arg1, arg2, options) {
                return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
            },
            perRowClass: function(numProducts){
                if(parseInt(numProducts) === 1){
                    return'col-md-12 col-xl-12 col m12 xl12 product-item';
                }
                if(parseInt(numProducts) === 2){
                    return'col-md-6 col-xl-6 col m6 xl6 product-item';
                }
                if(parseInt(numProducts) === 3){
                    return'col-md-4 col-xl-4 col m4 xl4 product-item';
                }
                if(parseInt(numProducts) === 4){
                    return'col-md-3 col-xl-3 col m3 xl3 product-item';
                }
    
                return'col-md-6 col-xl-6 col m6 xl6 product-item';
            },
            dotdotdot: function(str){
                if (str.length > 26)
                  return str.substring(0,26) + '..';
                return str;
            },
            ifArray: function(item, options) {
                if(item.constructor.name == "Array") {
                  return options.fn(this);
                } else {
                  return options.inverse(this);
                }
              },
            ifNEquals: function(arg1, arg2, options) {
                return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
            },
            eachProperty: function(context, options) {
                var ret = "";
                for(var prop in context)
                {
                    ret = ret + options.fn({property:prop,value:context[prop]});
                }
                return ret;},
            menuMatch: function(title, search){
                if(!title || !search){
                    return'';
                }
                if(title.toLowerCase().startsWith(search.toLowerCase())){
                    return'class="navActive"';
                }
                return'';
            },
            getTheme: function(view){
                return`themes/${config.theme}/${view}`;
            },
            formatAmount: function(amt){
                if(amt){
                    return numeral(amt).format('0.00');
                }
                return'0.00';
            },
            amountNoDecimal: function(amt){
                if(amt){
                    return handlebars.helpers.formatAmount(amt).replace('.', '');
                }
                return handlebars.helpers.formatAmount(amt);
            },
            getStatusColor: function (status){
                switch(status){
                case'Paid':
                    return'success';
                case'Approved':
                    return'success';
                case'Approved - Processing':
                    return'success';
                case'Failed':
                    return'danger';
                case'Completed':
                    return'success';
                case'Shipped':
                    return'success';
                case'Pending':
                    return'warning';
                default:
                    return'danger';
                }
            },
            checkProductOptions: function (opts){
                if(opts){
                    return'true';
                }
                return'false';
            },
            currencySymbol: function(value){
                if(typeof value === 'undefined' || value === ''){
                    return'$';
                }
                return value;
            },
            objectLength: function(obj){
                if(obj){
                    return Object.keys(obj).length;
                }
                return 0;
            },
            checkedState: function (state){
                if(state === 'true' || state === true){
                    return'checked';
                }
                return'';
            },
            selectState: function (state, value){
                if(state === value){
                    return'selected';
                }
                return'';
            },
            isNull: function (value, options){
                if(typeof value === 'undefined' || value === ''){
                    return options.fn(this);
                }
                return options.inverse(this);
            },
            toLower: function (value){
                if(value){
                    return value.toLowerCase();
                }
                return null;
            },
            formatDate: function (date, format){
                return moment(date).format(format);
            },
            ifCond: function (v1, operator, v2, options){
                switch(operator){
                case'==':
                    return(v1 === v2) ? options.fn(this) : options.inverse(this);
                case'!=':
                    return(v1 !== v2) ? options.fn(this) : options.inverse(this);
                case'===':
                    return(v1 === v2) ? options.fn(this) : options.inverse(this);
                case'<':
                    return(v1 < v2) ? options.fn(this) : options.inverse(this);
                case'<=':
                    return(v1 <= v2) ? options.fn(this) : options.inverse(this);
                case'>':
                    return(v1 > v2) ? options.fn(this) : options.inverse(this);
                case'>=':
                    return(v1 >= v2) ? options.fn(this) : options.inverse(this);
                case'&&':
                    return(v1 && v2) ? options.fn(this) : options.inverse(this);
                case'||':
                    return(v1 || v2) ? options.fn(this) : options.inverse(this);
                default:
                    return options.inverse(this);
                }
            },
            isAnAdmin: function (value, options){
                if(value === 'true' || value === true){
                    return options.fn(this);
                }
                return options.inverse(this);
            }
};

if (Handlebars && typeof Handlebars.registerHelper === "function") {
    for (var prop in helpers) {
        Handlebars.registerHelper(prop, helpers[prop]);
    }
} else {
    return helpers;
}

};

module.exports.register = register;
module.exports.helpers = register(null); 