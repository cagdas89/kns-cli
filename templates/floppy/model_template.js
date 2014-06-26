/**
 *
 * @File: <%=Model%>
 * @Description: TODO<Why we generate this file>
 * @Reference: http://sequelizejs.com/docs/latest/models
 *
 */


module.exports = function (sequelize, DataTypes) {
    return sequelize.define('<%=Model%>', {
            /**
             * Attribute name's must start with
             * model name, for code completion and type checking.
             *
             * Ex;
             *
             * <%=model%>_title: DataTypes.STRING,
             * <%=model%>_exp: DataTypes.STRING,
             * ...
             *
             */

        },
        {
            classMethods: {
                // Associates
                /**
                 * associate: function (models) {
                 *                <%=Model%>.hasMany(models.dependentModel);
                 *                <%=Model%>.belongsTo(models.dependentModel);
                 *                <%=Model%>.hasOne(models.dependentModel);
                 *            }
                 */
            },
            instanceMethods: {
                /**
                 * Instance Methods (this) refers to actual object.
                 */
            }
        });

};
