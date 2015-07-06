
Package.describe({
  name    : 'semantic:ui-ad',
  summary : 'Semantic UI - Ad: Single component release',
  version : '2.0.1',
  git     : 'git://github.com/Semantic-Org/UI-Ad.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'ad.css'
  ], 'client');
});
