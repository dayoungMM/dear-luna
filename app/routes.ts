import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // Landing Page (비회원 홈) - 루트 경로
  index("common/pages/home.tsx"),
  
  // // Authentication routes
  // ...prefix("auth", [
  //   layout("features/auth/layouts/auth-layout.tsx", [
  //     route("/login", "features/auth/pages/login-page.tsx"),
  //     route("/signup", "features/auth/pages/signup-page.tsx"),
  //   ]),
  // ]),
  
  // // Authenticated Home (회원 홈)
  // route("/home", "features/home/pages/authenticated-home-page.tsx"),
  
  // Letter routes
  ...prefix("letter", [
    route("/new", "features/letter/pages/write-letter-page.tsx"),
    // ...prefix("/:id", [
    //   index("features/letter/pages/letter-detail-page.tsx"),
    //   route("/result", "features/letter/pages/letter-result-page.tsx"),
    //   route("/follow-up", "features/letter/pages/follow-up-actions-page.tsx"),
    // ]),
  ]),
  
  // // Mailbox
  // route("/mailbox", "features/mailbox/pages/mailbox-page.tsx"),
  
  // // Shop routes
  // ...prefix("shop", [
  //   index("features/shop/pages/shop-page.tsx"),
  //   route("/receipt", "features/shop/pages/receipt-page.tsx"),
  // ]),
  
  // // Profile
  // route("/profile", "features/profile/pages/profile-page.tsx"),
  
  // // Not Found (404)
  // route("*", "common/pages/not-found-page.tsx"),
] satisfies RouteConfig;
