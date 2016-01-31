# eALPS-PDF-Viewer
信州大学のe-Learningシステム『eALPS』のPDFを、標準ビュワーで開くChrome拡張/Firefoxアドオンです。

## Chromeの場合

1. git cloneかZIPをダウンロードして解凍
2. Chromeを起動して chrome://extensions/ を開く  
3. Chrome拡張機能の設定画面の「パッケージ化されていない拡張機能を読み込む」からダウンロードしたフォルダを開く


## Firefoxの場合

1. https://github.com/ugwis/eALPS-PDF-Viewer/releases から最新のxpiファイルをダウンロード
2. Firefoxを起動して about:addons を開く
3. 歯車マークから「ファイルからアドオンをインストール」をクリック
4. ダウンロードしたxpiファイルを開く

## スマートフォンの場合
https://gist.github.com/ugwis/03387b5844ddabc89aa4  
1. 下記のスクリプトをブックマークに登録  
2. PDFを開いている状態で作ったブックマークレットを開く  

```
javascript:var obj=document.getElementById('resourceobject');if(obj && obj.getAttribute('type')==='application/pdf'){location.replace(obj.getAttribute('data'));}
```
