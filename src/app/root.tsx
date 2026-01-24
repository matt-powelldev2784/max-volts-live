import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import '../index.css';
import { Loader2 } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFF" />
        <title>Max Volts Electrical Services - Serving London And Surrey</title>
        
        <meta
          name="description"
          content="Max Volts Electrical Services delivers trusted residential and commercial electrical work across London and Surrey. Get fast quotes, reliable repairs, and certified installations."
        />
        <link rel="canonical" href="https://www.max-volts.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Max Volts Electrical Services - Serving London And Surrey" />
        <meta
          property="og:description"
          content="Trusted residential and commercial electrical services across London and Surrey. Fast quotes, reliable repairs, and certified installations."
        />

        <meta property="og:url" content="https://www.max-volts.co.uk/" />
        <meta property="og:image" content="/max_volts_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Max Volts Electrical Services - Serving London And Surrey" />
        <meta
          name="twitter:description"
          content="Trusted residential and commercial electrical services across London and Surrey. Fast quotes, reliable repairs, and certified installations."
        />
        <meta name="twitter:image" content="/max_volts_logo.png" />
        
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <Loader2 className="animate-spin h-6 w-6 mx-auto mt-20 text-mv-orange" />;
}

export default function Root() {
  return <Outlet />;
}
