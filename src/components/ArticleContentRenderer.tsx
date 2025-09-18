interface ArticleContentRendererProps {
  content: string;
  category: string;
}

const ArticleContentRenderer = ({ content, category }: ArticleContentRendererProps) => {
  // Process the markdown content and add visual enhancements
  const processContent = (content: string) => {
    // Split content by sections (## headers)
    const sections = content.split(/(?=^##\s)/gm);
    
    return sections.map((section, index) => {
      // Check if this is a header section
      const isHeader = section.startsWith('##');
      
      if (isHeader && index > 0) {
        return (
          <div key={index} className="mb-12">
            {/* Section Divider */}
            <div className="flex items-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <div className="mx-4">
                <div className="w-3 h-3 bg-primary rounded-full opacity-60"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: formatMarkdown(section) }} />
            </div>
          </div>
        );
      }
      
      return (
        <div key={index} className="prose prose-lg max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: formatMarkdown(section) }} />
        </div>
      );
    });
  };
  
  // Simple markdown to HTML converter for basic formatting
  const formatMarkdown = (text: string) => {
    return text
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-foreground mb-4 flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl lg:text-3xl font-bold text-foreground mb-6 pb-2 border-b border-border flex items-center"><span class="w-1 h-8 bg-primary rounded-full mr-4"></span>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl lg:text-4xl font-bold text-foreground mb-8">$1</h1>')
      
      // Bold text with highlight
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary">$1</strong>')
      
      // Lists with custom styling
      .replace(/^- (.*$)/gim, '<li class="flex items-start mb-2"><span class="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>$1</span></li>')
      
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed text-muted-foreground">')
      
      // Add opening paragraph tag
      .replace(/^(?!<[h|l])/gm, '<p class="mb-4 leading-relaxed text-muted-foreground">')
      
      // Clean up and wrap lists
      .replace(/(<li[^>]*>.*?<\/span><\/li>)+/gs, '<ul class="space-y-2 mb-6">$&</ul>')
      
      // Contact info highlighting
      .replace(/\(612\) 699-1403/g, '<a href="tel:6126991403" class="font-semibold text-primary hover:text-primary-dark transition-colors">(612) 699-1403</a>');
  };
  
  return (
    <div className="article-content">
      {processContent(content)}
      
      {/* Call-to-Action Section */}
      <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-lg border border-border">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.3 11.147c-.193.097-.384.292-.384.53v.857c0 .238.191.433.384.53l3.924 1.76a1 1 0 00.502 1.21L8.228 20.316a1 1 0 00-.948.684H5a2 2 0 01-2-2v-1c0-8.837 7.163-16 16-16h1a2 2 0 012 2v3.28a1 1 0 00.684.948l4.493 1.498a1 1 0 001.21-.502l1.76-3.924a1 1 0 001.21-.502L20.316 8.228a1 1 0 00.684-.948V5a2 2 0 00-2-2h-1C9.163 3 2 10.163 2 19v1z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-4">Contact Titan Trucking School today for more information about our CDL training programs.</p>
          <a 
            href="tel:6126991403" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.3 11.147c-.193.097-.384.292-.384.53v.857c0 .238.191.433.384.53l3.924 1.76a1 1 0 00.502 1.21L8.228 20.316a1 1 0 00-.948.684H5a2 2 0 01-2-2v-1c0-8.837 7.163-16 16-16h1a2 2 0 012 2v3.28a1 1 0 00.684.948l4.493 1.498a1 1 0 001.21-.502l1.76-3.924a1 1 0 001.21-.502L20.316 8.228a1 1 0 00.684-.948V5a2 2 0 00-2-2h-1C9.163 3 2 10.163 2 19v1z" />
            </svg>
            Call (612) 699-1403
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleContentRenderer;