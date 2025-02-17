# このプロジェクト
勉強用として、機械学習アプリを作りました。バックエンドはGoogleCloud上に　フロントエンドはFirebaseでホスティングする予定です
音楽雑誌、音楽書籍から文章を抜き出し、前処理後、WordEmbeddingを実装したライブラリで学習し、アーティストの近傍探索ができるアプリとなります。
このレポジトリはフロントエンドのレポジトリとなります。




# 使用技術一覧
!["CSS badge"](https://img.shields.io/badge/-CSS3-1572B6.svg?logo=css3&style=flat)
!["HTML5 badge"](https://img.shields.io/badge/-HTML5-1572B6.svg?logo=html5&style=flat)
!["VueJS badge"](https://img.shields.io/badge/-Vuejs-1572B6.svg?logo=vuedotjs&style=flat)
!["Vuetify badge"](https://img.shields.io/badge/-Vuetify-1572B6.svg?logo=vuetify&style=flat)
!["FireBase badge"](https://img.shields.io/badge/-Firebase-1572B6.svg?logo=firebase&style=flat)

# 全体構成図

![Image](https://github.com/user-attachments/assets/5f8a8bd6-809f-4aa2-8ae9-60ad02371267)



# フロントエンドプロジェクト構成

<pre>
src
│  App.vue    #アプリの画面のメインファイルサジェストをする機能が実装されている
│  main.js    #ここを起点としてアプリが起動するメインファイル
│  router.js  #ルーティングを制御するフレームワークのファイル
│  
├─assets
│      logo.png
│      logo.svg
│      notexist.png
│      
├─components
│  ├─ArtistDetail
│  │      artistDetail.vue   #アーテストの詳細情報を表示するモジュール
│  │      
│  ├─BaseEffectParts
│  │      basiccirculerdialog.vue  #エフェクトを表示するモジュール
│  │      
│  ├─MAIN
│  │      mainVue.vue   #メイン画面を表示するモジュール
│  │      
│  ├─NeighborArtists
│  │      neighborArtists.vue  #近傍探索の結果を表示するモジュール
│  │      
│  ├─RootVue
│  │      rootVue.vue #ダミーモジュール
│  │      
│  └─SuggestResult
│          suggestResult.vue #サジェストの検索結果を表示するモジュール
│          
├─lib
│      dataaccessclient.js # RestAPIのURIを作成するモジュール
│      dcx.js　　　　　　　　#　Doxies.jsというブラウザのIndexedDBを操作するモジュール
│      
├─plugins
│      vuetify.js　　　　　# Vuejsのコンポーネントフレームワークのコアファイル
│      
└─store
        index.js          #Vuexという状態管理をするフレームワークの設定ファイル
</pre>

#画面説明
1\. メイン画面
![Portfolio Image Main 1](https://github.com/masatoise/recomend-sample-client-masatoise/blob/image1/main1.png)

2\. アーティストをマウスオーバーするとアーティスト詳細情報かそのアーティストに近いアーティストをボタンを押して表示させることができます
![Portfolio Image MouseOver](https://github.com/masatoise/recomend-sample-client-masatoise/blob/image1/main_mouse_over1.png)

![Portfolio Image ArtistDetail](https://github.com/masatoise/recomend-sample-client-masatoise/blob/image1/detail1.png)

![Portfolio Image NEIGHBOR](https://github.com/masatoise/recomend-sample-client-masatoise/blob/image1/neibor1.png)

3\. サジェスト検索
