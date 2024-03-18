// This file is autogenerated by scripts/build-preview-imports.ts
// Do not edit this file directly.
import React from "react";

export const previews = {
  "components/sparkle-button/demo": {
    component: React.lazy<React.FC>(() => import("@/lib/components/sparkle-button/demo")),
    code: [
      {
        title: "demo.tsx",
        code: 'import { Button } from "@/lib/components/sparkle-button";\r\n\r\nexport default function SparkleButton() {\r\n  return <Button variant="sparkle">Get started</Button>;\r\n}\r\n',
      },
    ],
  },
  "components/hero-section": {
    component: React.lazy<React.FC>(() => import("@/lib/components/hero-section")),
    code: [
      {
        title: "hero-section.tsx",
        code: 'import React from "react";\r\nimport Link from "next/link";\r\nimport { ArrowRightIcon, SearchIcon, SparklesIcon } from "lucide-react";\r\nimport { badgeVariants } from "@/components/ui/badge";\r\nimport { Button } from "@/components/ui/button";\r\nimport { cn } from "@/utils/classes";\r\n\r\nexport default function Demo() {\r\n  return (\r\n    <section>\r\n      <Link\r\n        href="https://github.com/mehdibha/rcopy"\r\n        target="_blank"\r\n        className={cn(\r\n          badgeVariants({ variant: "outline", size: "md" }),\r\n          "cursor-pointer space-x-2 font-mono delay-75 duration-200 hover:bg-secondary"\r\n        )}\r\n      >\r\n        <SparklesIcon size={18} />\r\n        <span>Star us on GitHub</span> <ArrowRightIcon size={15} />\r\n      </Link>\r\n      <h1 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-tight">\r\n        Copy and paste components for you React App\r\n      </h1>\r\n      <h2 className="text-md mt-6 text-muted-foreground md:text-lg lg:text-xl">\r\n        Copy the code, paste it, customize it, own it. Done.\r\n      </h2>\r\n      <div className="mt-10 flex space-x-4">\r\n        <Button size="lg" variant="default">\r\n          Explore components\r\n        </Button>\r\n        <Button size="lg" variant="outline">\r\n          <SearchIcon size={20} className="mr-2" />\r\n          Quick search\r\n        </Button>\r\n      </div>\r\n    </section>\r\n  );\r\n}\r\n',
      },
    ],
  },
  "pages/about": {
    component: React.lazy<React.FC>(() => import("@/lib/pages/about")),
    code: [
      {
        title: "about.tsx",
        code: 'export default function About() {\r\n  return (\r\n    <div className="min-h-screen">\r\n      <h1>About</h1>\r\n      <p>\r\n        This is a simple example of a Next.js app with a custom routing solution that uses\r\n        the file system to define routes.\r\n      </p>\r\n    </div>\r\n  );\r\n}\r\n',
      },
    ],
  },
  "pages/account": {
    component: React.lazy<React.FC>(() => import("@/lib/pages/account")),
    code: [
      {
        title: "account.tsx",
        code: 'export default function Account() {\r\n  return (\r\n    <div className="min-h-screen">\r\n      <h1>Account</h1>\r\n      <p>\r\n        This is a simple example of a Next.js app with a custom routing solution that uses\r\n        the file system to define routes.\r\n      </p>\r\n    </div>\r\n  );\r\n}\r\n',
      },
    ],
  },
  "pages/landing": {
    component: React.lazy<React.FC>(() => import("@/lib/pages/landing")),
    code: [
      {
        title: "landing.tsx",
        code: 'export default function Landing() {\r\n  return (\r\n    <div className="min-h-screen">\r\n      <h1>Landing</h1>\r\n      <p>\r\n        This is a simple example of a Next.js app with a custom routing solution that uses\r\n        the file system to define routes.\r\n      </p>\r\n    </div>\r\n  );\r\n}\r\n',
      },
    ],
  },
  "pages/login": {
    component: React.lazy<React.FC>(() => import("@/lib/pages/login")),
    code: [
      {
        title: "login.tsx",
        code: 'export default function Login() {\r\n  return (\r\n    <div className="min-h-screen">\r\n      <h1>Login</h1>\r\n      <p>\r\n        This is a simple example of a Next.js app with a custom routing solution that uses\r\n        the file system to define routes.\r\n      </p>\r\n    </div>\r\n  );\r\n}\r\n',
      },
    ],
  },
  "pages/pricing": {
    component: React.lazy<React.FC>(() => import("@/lib/pages/pricing")),
    code: [
      {
        title: "pricing.tsx",
        code: 'export default function Pricing() {\r\n  return (\r\n    <div className="min-h-screen">\r\n      <h1>Pricing</h1>\r\n      <p>\r\n        This is a simple example of a Next.js app with a custom routing solution that uses\r\n        the file system to define routes.\r\n      </p>\r\n    </div>\r\n  );\r\n}\r\n',
      },
    ],
  },
  "pages/register": {
    component: React.lazy<React.FC>(() => import("@/lib/pages/register")),
    code: [
      {
        title: "register.tsx",
        code: 'export default function Register() {\r\n  return (\r\n    <div className="min-h-screen">\r\n      <h1>Register</h1>\r\n      <p>\r\n        This is a simple example of a Next.js app with a custom routing solution that uses\r\n        the file system to define routes.\r\n      </p>\r\n    </div>\r\n  );\r\n}\r\n',
      },
    ],
  },
};
