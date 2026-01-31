Timetable Simulator 2025 Edition (for Kumamoto Univ.)

熊本大学の講義データに基づき、学生が直感的に履修計画をシミュレーションできるWebアプリケーションです。 「スマホで完結し、そのまま壁紙にできる」という究極のモバイル体験にこだわって設計されています。
🚀 デモ

https://release-kmdi-timetable.vercel.app/
✨ 主な機能

    爆速検索: 講義名や教員名からリアルタイムでフィルタリング。

    マルチターム対応: 前期・後期だけでなく、T1〜T4のクォーター制にも完全対応。

    スマホ壁紙最適化エクスポート: html2canvas をカスタマイズし、スマホの壁紙として利用可能な画像を作成。

    URL共有機能: 構築した時間割を lz-string で圧縮し、URL一つで友人に共有可能。

    ローカル永続化: 選択したデータはブラウザに自動保存され、リロードしても消えません。

    Vercel Analytics: 利用状況を定量的に把握し、UX改善に活用。

🛠 技術スタック

    Frontend: HTML5, JavaScript (ES6 Modules), Tailwind CSS

    Library:

        html2canvas: 画像生成エンジンのカスタマイズ

        lz-string: URL共有用のデータ圧縮

    Deployment: Vercel

    Analytics: Vercel Web Analytics

📂 プロジェクト構造

「建築モード」(開発者独自のAIの使い方)に基づき、関心の分離（Separation of Concerns）を意識したディレクトリ構成を採用しています。

.
├── index.html          # メインのエントリポイント
├── css/
│   └── style.css       # アプリ固有のカスタムスタイル
├── src/
│   ├── js/
│   │   ├── main.js     # アプリケーションの初期化ロジック
│   │   ├── store.js    # 状態管理（時間割データ・保存）
│   │   ├── export.js   # 画像生成・壁紙最適化ロジック
│   │   └── ui/
│   │       ├── elements.js # DOM要素の集中管理
│   │       └── render.js   # 動的なUI描画処理
│   └── data/
│       └── cleaned_lectures.json # 講義データベース
└── README.md

💡 開発のこだわり

このプロジェクトでは、特に「モバイル環境での画像レンダリング」に注力しました。通常のキャプチャでは見切れてしまう横幅の広い時間割テーブルを、画像生成の瞬間だけ仮想的なビューポートを拡張することで、スマホの 9:16 比率に完璧にフィットさせるロジックを独自に実装しています。
👤 開発者

    Kilphischocoate

    GitHub: kilphis

📝 フィードバック

アプリの改善のため、以下のフォームよりフィードバックを受け付けています。 https://docs.google.com/forms/d/e/1FAIpQLSeck0NLwS5-R0kFzdxHvJlPDCKxDreAJfMhHWmTu7YPHr-Lnw/viewform?usp=dialog
