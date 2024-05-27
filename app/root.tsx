import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { RudderAnalytics } from "@rudderstack/analytics-js";

const RUDDERSTACK_WRITE_KEY = "whatever";
const RUDDERSTACK_DATAPLANE_URL = "https://dataplane.rudderstack.com";

export function Layout({ children }: { children: React.ReactNode }) {
  const rudder = new RudderAnalytics();
  rudder.load(RUDDERSTACK_WRITE_KEY, RUDDERSTACK_DATAPLANE_URL);
  return rudder;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
