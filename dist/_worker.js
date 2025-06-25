
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle API routes
    if (url.pathname.startsWith('/api/')) {
      // Import and handle API routes dynamically
      try {
        const { handler } = await import('./api' + url.pathname.replace('/api', '') + '.js');
        return await handler(request, env);
      } catch (error) {
        return new Response('API route not found', { status: 404 });
      }
    }
    
    // Serve static files
    let pathname = url.pathname;
    if (pathname === '/') pathname = '/index.html';
    if (!pathname.includes('.')) pathname += '.html';
    
    try {
      const file = await env.ASSETS.fetch(new URL(pathname, request.url));
      return file;
    } catch {
      // Fallback to index.html for SPA routing
      return await env.ASSETS.fetch(new URL('/index.html', request.url));
    }
  }
};
