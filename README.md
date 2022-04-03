# Run Repo
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, Install package

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
# Deploy on Vercel

The repo has deployed on Vercel Platform. You can visit this app [online](https://tiny-github-repos.vercel.app).

# Application
## Pages
- 載入頁面資料與組件的檔案集合，`pages` 下的檔案路徑即為網址路徑。
### `/users`

- 搜尋使用者名稱，前往該使用者的 repo 清單頁面

- `[username]/repos`

  使用者 (_username_) 的 repo 清單頁面

- `[username]/repos/[repo]`

  使用者 (_username_) 的 _[repo]_ 詳細資訊頁面


### `/api`

- 後端 request `GitHub REST API` 資料，並整合為 app 的資料格式，pages 可以直接 request `/api/[path]` 的資料使用。

- `profile/[username]`

  fetch _https://api.github.com/users/[username]_

- `users/[username]/repos/[page_size]/page`

  fetch _https://api.github.com/users/[username]/repos?per_page=[page_size]&page=[page]_

- `users/[username]/[repo]`

  fetch _https://api.github.com/repos/[username]/[repo]_

### `/404`

- Web 獲取頁面 404 Error 自動導向 _404 頁面_

## Components

- 集合頁面展示資料的組件。

## Lib
### API

**fetcher**

- 依照不同的需求，請求相應 API 的資料。
- 使用 [SWR](https://swr.vercel.app/zh-CN) 套件，以持續並自動獲取最新的資料。

**handleError**

- 依照不同型別的錯誤回應相應的錯誤頁面。

  *UserIsEmptyError* : 找不到所搜尋的使用者資料。
  *NotFoundError* : 找不到請求條件的資料。
  *LimitExceededError* : Github API 達到請求次數限制。
  *OtherError* : 請求資料過程發生的任何其餘錯誤。

### Hook

集合用於請求或處理資料的 Custom Hooks。

# System Design Board
### [Whimsical](https://whimsical.com/dcard-2022-intern-homework-github-page-23HrdMSr5QTLfsoViEzYgr)
