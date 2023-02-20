# Bu bir deneme yazısıdır.

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/Routes";
import "./assets/css/bulma.min.css";
import "./assets/css/styles.css";
import "animate.css";
document.documentElement.style.setProperty("--animate-duration", ".5s");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
```
