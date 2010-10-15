Ext.namespace('Sage.Platform.Mobile.Controls');

Sage.Platform.Mobile.Controls.FieldManager = (function() {
    var types = {};
    return {
        types: types,
        register: function(name, ctor) {
            types[name] = ctor;
        },
        get: function(name) {
            return types[name];
        }
    };
})();

(function() {
    Sage.Platform.Mobile.Controls.Field = Ext.extend(Ext.util.Observable, {
        attachmentPoints: {},
        owner: false,
        alwaysUseValue: false,
        constructor: function(o) {
            Ext.apply(this, o);

            this.addEvents(
                'change'    
            );

            Sage.Platform.Mobile.Controls.Field.superclass.constructor.apply(this, arguments);
        },       
        renderTo: function(el) {
            this.containerEl = el; // todo: should el actually be containerEl instead of last rendered node?
            this.el = Ext.DomHelper.append(
                el,
                this.template.apply(this),
                true
            );

            for (var n in this.attachmentPoints)
                if (this.attachmentPoints.hasOwnProperty(n))
                    this[n] = el.child(String.format(this.attachmentPoints[n], this.name));
        },
        init: function() {
        },
        isDirty: function() {
            return true;
        },
        validate: function(value) {
            if (typeof this.validator === 'undefined')
                return false;

            var all = Ext.isArray(this.validator) ? this.validator : [this.validator],
                current,
                definition;

            for (var i = 0; i < all.length; i++)
            {
                current = all[i];

                if (current instanceof RegExp)
                    definition = {
                        test: current
                    };
                else if (typeof current === 'function')
                    definition = {
                        fn: current
                    };
                else
                    definition = current;

                var value = typeof value === 'undefined'
                    ? this.getValue()
                    : value;

                if (typeof definition.fn === 'function')
                {
                    return definition.fn.call(definition.scope || this, value, this, this.owner);
                }
                else if (definition.test instanceof RegExp)
                {
                    if (!definition.test.test(value))
                    {
                        var message = typeof definition.message === 'function'
                            ? definition.message.call(definition.scope || this, value, this)
                            : String.format(definition.message, value, this.name, this.label);

                        return message || true;
                    }
                }
            }

            return false;
        }
    });
})();