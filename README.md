# ROS_with_Choregraphe
コレグラフとROSをWebsocketsを使って繋ぐ．
今回はROS(indigo)が既にPCに入っていることが前提となっております．

# Choregrapheをインストール
１．初めに公式HPからコレグラフをダウンロードする．
`https://developer.softbankrobotics.com/jp-ja/downloads/pepper`

２．コレグラフをインストールする．例ではchoregraphe-suite-2.4.3.28-linux64-setup.runをインストールする．
`chmod 755 choregraphe-suite-2.4.3.28-linux64-setup.run`
`sudo ./choregraphe-suite-2.4.3.28-linux64-setup.run`

# ROS bridgeをインストール
rosbridgeのwebsocketを使います．rosbridgeはlaunchするとwebsocketでROSのTopicを勝手にやり取りしてくれるようになります． コードに手を加える必要がない！ ので，すごい楽．websocketサーバは，デフォルトだと9090番ポートに立ってます．
忙しいので省略．また今度！

# 実際に起動
1.Choregrapheを起動．もしpepperが騒がしいときは，右上のハートマークを押して白塗りになれば黙る．元気がなければ，太陽を押すと復活する．

2.音量の設定をする．コレグラフ右上のスピーカで調節可能．

3.ファイルを開く`wst00003/wst00003.pml`

4.pepperとコレグラフを接続する．コレグラフ真上の緑のアンテナをクリック．緑色のペッパーの絵を選択．なければpepperの再起動(タッチパネル裏の胸のボタンを長押し)．

5.ip settingを確認する．ここではpServer_IPを確認する．

6.motoman側でRosbridgeが正常に動いているか確認する．無さそうなら以下のコマンドを実行．名前変わってるかも...
`roslaunch test.launch`

7.プログラムを実行する．コレグラフ真上の再生ボタンを押す．うまく走っていれば左から緑色の通信が流れる．

# 困った時の対処法
1.RosPublisherが赤色に！！
タッチパネルを高速に押すとよく起こります．コレグラフを再起動しましょう．

2.ペッパーの接続（実際に起動の作業４）ができない．
ペッパーのnao_qiがおかしくなった．pepperを再起動．

３．上記以外でおかしなことが！！
これが一番最悪．電話しよう．
シン：080-3956-0079
藤本：080-6321-3144