Ext.define('CursoExt4.classe.User', {
    name: '',
    password: '',
    constructor: function (options) {
        Ext.apply(this, options || {});
        console.log('O construtor foi chamado!')
    }
});