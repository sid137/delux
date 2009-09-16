Given /^the following (.+) records?$/ do |factory, table|
  # table is a Cucumber::Ast::Table
  table.hashes.each do |hash|
    Factory(factory, hash)
  end
end


When /^I click(?: on)? "([^"]*)"$/ do |link|
  begin
    click_link(link)
  rescue Webrat::NotFoundError
    click_button(link)
  end
end
