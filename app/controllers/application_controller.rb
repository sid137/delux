# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details

  before_filter :set_locale

  # Scrub sensitive parameters from your log
  # filter_parameter_logging :password

  def set_locale
    
  end

  def default_url_options(options={})
    logger.debug "default_url_optiosn is passed options: #{options.inspect}\n"
    { locale => Il8n.locale }
  end
end
