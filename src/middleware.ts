import { authMiddleware } from "@clerk/nextjs/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/", "/blogs","/blogs(.*)", "/api/webhook/clerk", "/about", '/api/chat(.*)'],
  ignoredRoutes: ["api/webhook/clerk", 'api(.*)', 'api/chat(.*)'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
