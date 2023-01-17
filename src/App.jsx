import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ConfigProvider } from "antd";
import ar_EG from "antd/locale/ar_EG";
import "./bootstrap";

function App() {
  return (
    <React.StrictMode>
      <ConfigProvider direction="rtl" locale={ar_EG}>
        <Suspense fallback={<div>loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </React.StrictMode>
  );
}

export default App;
