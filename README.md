# react-data-analysis

雙語簡介：這個專案示範一個使用 Next.js + React（TypeScript）的資料儀表板範例，包含 Stock API proxy（mock）、幾個 demo charts（使用 ECharts）與 MobX 範例。

Brief (EN): A small Next.js dashboard demo with mock stock data API, MobX store setup and ECharts visualizations.

---

## 主要功能 / Key Features ✅

- Stock data endpoint: `/api/stock?symbol=...`（目前為 mock 回傳；尚未使用 Finnhub）
- Mock user & health `GET /api/info` 返回示範資料
- Dashboard 檢視：`/dashboard` 下含多個 chart 與範例元件（`src/components/layout`）
- 使用 ECharts 作為資料視覺化、並使用 `next-themes` 支援主題切換
- 使用 MobX（`src/stores`）做簡單狀態管理範例

---

## 快速開始（開發）

先安裝相依：

```powershell
npm install
```

啟動開發伺服器（預設 port: 3003）：

```powershell
npm run dev
```

打開瀏覽器並前往 `http://localhost:3003`。

常用指令：

- `npm run build` - 建置
- `npm run start` - 以 production 模式啟動
- `npm run lint` - 執行 ESLint

---

## 環境變數 / Environment

建議在專案根目錄建立 `.env.local`（git 忽略）並加入以下變數：

你也可以先複製專案根目錄的 `.env.example`：

```bash
cp .env.example .env.local
```

- `FINNHUB_KEY` - （選用）若要啟用 Finnhub 實際資料代理（目前尚未使用）

範例 `.env.local`：

```dotenv
FINNHUB_KEY=your_finnhub_key_here
FITBIT_CLIENT_ID=your_fitbit_client_id
FITBIT_CLIENT_SECRET=your_fitbit_client_secret
FITBIT_REDIRECT_URI=http://localhost:3003/api/fitbit/callback
```

---

## API 端點（重點）

- `GET /api/info` - 回傳 mock 使用者與活動資料
- `GET /api/stock?symbol=SYMBOL` - 目前回傳 mock stock 資料；可改為呼叫 Finnhub

---

## 檔案結構（重點）

- `src/app/` - Next.js app 路由與頁面
- `src/components/` - 可重用 UI 與 layout 元件（charts、sidebar、theme toggle）
- `src/app/api/` - API route（fitbit、stock、info）
- `src/stores/` - MobX store 範例
- `src/components/layout/stepsChart.tsx`、`chartview.tsx` 等為 ECharts 範例

---

## 開發提示 / Notes

- 若要測試 Fitbit OAuth：先在 Fitbit 開發者控制台註冊 App，設定回呼 URL，並把 `FITBIT_CLIENT_ID`、`FITBIT_CLIENT_SECRET`、`FITBIT_REDIRECT_URI` 設到 `.env.local`。
- 若要改為使用 Finnhub：將 `FINNHUB_KEY` 設到環境中，並把 `/api/stock` 實作改為呼叫 Finnhub API（目前為 mock 回傳）。
- 若遇到 port 被占用，可以透過修改 `package.json` 的 `dev` script (`-p 3003`) 改成其他 port，或先關閉占用程序。

---

## 圖片展示 / Image Display

![圖片2](/圖片%202.png)
