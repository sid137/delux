class Webrat::Session
  alias_method :old_formatted_error, :formatted_error
  def formatted_error

    def unescape( text )
      html = { '&amp;' => '&', '&gt;' => '>', '&lt;' => '<', '&quot;' => '"' }
      text.to_s.gsub(/(?:#{html.keys.join('|')})/) { |special| html[special] }
    end

    doc = Nokogiri::HTML( old_formatted_error )
    content = []
    doc.xpath('//body/p|//body/pre').each do |para|
      value = unescape( para.inner_html.gsub( /<\/?[^>]+>/, '') )
      content << value unless value =~ /^\s*(?:\{|RAILS_ROOT:|Parameters:|Show session dump|Headers:)/
    end

    content.join("\n");
  end
end
