/* global Package:false */
// package metadata file for AtmosphereJS

try {
  Package.describe({
    name: 'formly:angular-formly-templates-koapp',
    summary: '(official): Koapp templates for angular-formly',
    version: '1.0.42',
    git: 'https://github.com/formly-js/angular-formly-templates-koapp.git',
  })

  Package.onUse(function(api) {
    api.versionsFrom(['METEOR@1.0'])
    // api-check
    api.use('wieldo:api-check@7.5.5')
    api.imply('wieldo:api-check')
    // angular
    api.use('angular:angular@1.4.0')
    api.imply('angular:angular')
    // angular-formly
    api.use('formly:angular-formly@7.3.9_3')
    api.imply('formly:angular-formly')
    // bootstrap
    api.use('twbs:bootstrap@3.3.2')
    api.imply('twbs:bootstrap')
    // export file
    api.addFiles('dist/angular-formly-templates-koapp.js', 'client')
  })
} catch (e) {
  //
}
