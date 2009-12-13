ActionController::Routing::Routes.draw do |map|
 
  map.index '/:locale', :controller => "site", :action => "index"
  map.root :controller => "site", :action => "index", :locale => 'fr'

  map.skills '/skills', :controller => "site", :action => "skills", :path_prefix => '/:locale'
  map.languages '/languages', :controller => "site", :action => "languages", :path_prefix => '/:locale'
  map.services '/services', :controller => "site", :action => "services", :path_prefix => '/:locale'
  map.contact '/contact', :controller => "site", :action => "contact", :path_prefix => '/:locale'
  map.news '/news', :controller => "site", :action => "news", :path_prefix => '/:locale'
  map.legal '/legal', :controller => "site", :action => "legal", :path_prefix => '/:locale'

end
