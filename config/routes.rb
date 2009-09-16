ActionController::Routing::Routes.draw do |map|
 
  map.root :controller => "site", :action => "index"

  map.skills '/skills', :controller => "site", :action => "skills"
  map.languages '/languages', :controller => "site", :action => "languages"
  map.services '/services', :controller => "site", :action => "services"
  map.contact '/contact', :controller => "site", :action => "contact"
  map.news '/news', :controller => "site", :action => "news"  
  map.legal '/legal', :controller => "site", :action => "legal"

end
