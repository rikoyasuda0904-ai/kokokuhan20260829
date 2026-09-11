// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "本調査にご参加いただき、ありがとうございます。\n本研究は、ウェブ記事の読みやすさや印象に関する調査を目的としています。\n\n\n\n",
          "title": "実験へのご協力のお願い"
        },
        {
          "required": true,
          "type": "text",
          "title": "【作業内容と所要時間】",
          "content": "画面に表示される記事をお読みいただき、その後内容に関する簡単なテストにお答えください。\n全体の所要時間は 約 5 〜 10 分です。"
        },
        {
          "required": true,
          "type": "text",
          "content": "\n得られたデータは統計的に処理され、個人が特定されることはありません。\n本実験への参加は任意です。途中で気分が悪くなった場合などは、いつでもブラウザを閉じて中断していただいて構いません。中断による不利益は一切発生しません。",
          "title": "【個人情報の取り扱いと権利について】"
        },
        {
          "required": true,
          "type": "text",
          "content": "実験終了後、ご希望の方には謝礼としてAmazonギフトカード100円分をお贈りいたします。",
          "title": "【謝礼に関して】"
        },
        {
          "required": true,
          "type": "text",
          "content": "以上の内容にご同意いただける方は、下の「次へ」 ボタンを押して実験を開始してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));

this.parameters.participantID = participantID;
const id = Number(this.parameters.participantID);
this.state.condition = (id % 4) + 1; //1を足して、0~5を1~6に変換

}
      },
      "title": "start"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "画面に表示されるウェブ記事をお読みいただき、その後の簡単な〇✕クイズにお答えください。"
        },
        {
          "required": true,
          "type": "text",
          "content": "記事を読み終えたら「次のページへ」ボタンを押して進んでください。"
        },
        {
          "required": true,
          "type": "text",
          "content": "タスクの途中でブラウザの 「戻る」ボタンを押したり、ページを再読み込み（更新）したりしない ようお願いいたします。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "start2"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "s\u002Fn",
      "skip": "${this.state.condition != 1}",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "static\u002F82cf94c0-e59e-4d17-af25-7b81f0832602.jpg",
              "name": ""
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"text-align: center; margin-bottom: 25px; width: 100%; display: block; clear: both;\"\u003E\r\n\r\n\u003Cdiv style=\"width: 100%; text-align: left; height: 400px; overflow-y: scroll; padding: 10px 5px; box-sizing: border-box; margin: 0;\"\u003E\r\n\r\n\r\n  \u003Ch3\u003E【絶望】スマホに脳をジャックされている？「やめられない」の裏にある黒幕と, 人生のタイパを損ねる3つのリスク\u003C\u002Fh3\u003E\r\n  \r\n  \u003Cp\u003E配信2026年7月10日17：00　女性未来\r\n  \u003Cp\u003E「ちょっと動画を見るつもりが, 気づけば夜中」「勉強しなきゃいけないのに, 無意識にSNSのアイコンをタップしている」……。そんな経験, ありませんか？ 「自分は意志が弱いから」と落ち込む必要はありません。実はそれ, あなたのせいではなく, 脳の仕組み（ドーパミン）と, 世界最高峰の天才たちが仕掛けた「依存の罠」にはまっているだけなのです。\u003C\u002Fp\u003E\r\n\r\n\r\n  \u003Cp\u003Eあなたの時間を奪う「ドーパミン」の正体。あのAppleの創業者であるスティーブ・ジョブズが, 自分の子どもにはiPadやiPhoneを厳しく制限していたという話は有名です。開発した張本人が, その中毒性の高さを誰よりも知っていたからです。私たちは, いわば「依存させるプロ」たちが作った仕組みに, タダでさえ貴重な若き時間を奪われている状態と言えます。\u003C\u002Fp\u003E\r\n\r\n\r\n  \r\n  \u003Cp\u003Eスマホ依存がもたらす, 地味にヤバい「3つの代償」＿＿＿スマホに依存すると, 単に「時間がなくなる」だけでは済みません。特に学生生活において, 以下の3つのリスクが忍び寄ってきます。\u003C\u002Fp\u003E\r\n \r\n  \r\n  \u003Cp\u003E1.【「脳疲労」によるパフォーマンス低下】寝る直前まで画面の強い光や情報に触れていると, 脳が休まりません。慢性的な寝不足になり, 翌日の授業の集中力や記憶力がガタ落ちします。\u003C\u002Fp\u003E\r\n  \u003Cp\u003E2.【「短尺動画脳」への退化】15秒〜1分のショート動画ばかり見ていると, 脳が「手軽な快楽」に慣れてしまい, 教科書や小説などの「長い文章」を読む体力が失われていきます。\u003C\u002Fp\u003E\r\n  \u003Cp\u003E3.【メンタルのすり減り】SNSで他人の「キラキラした日常」や「盛れた写真」を無意識に自分と比較してしまい, 劣等感や孤独感を抱えやすくなります。\u003C\u002Fp\u003E\r\n  \u003Cp\u003Eせっかくのキャンパスライフなのに, スマホの画面ばかり見てメンタルや成績が落ちていくのは, あまりにも「タイパ（タイムパフォーマンス）」が悪すぎます。では, この「脳のジャック」から抜け出すにはどうすればいいのでしょうか？\u003C\u002Fp\u003E\r\n  \u003Cp\u003E（2ページ目へ続く）\u003C\u002Fp\u003E\r\n\u003Cdiv \u003E\r\n  \r\n \r\n  \r\n  ",
              "name": ""
            },
            {
              "required": true,
              "type": "image",
              "src": "\t static\u002F15c8bf81-5aab-4779-981e-95105a287ab3 コンタクト.jpg",
              "height": "",
              "width": "",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次のページへ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "s\u002Fn\u002Ftext1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 563.2,
              "height": 307.45000000000005,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"スマホ　ポジティブ.png\"] }"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "スマホ　ポジティブ.png": "embedded\u002F15e8a4a613be37004744969dbc668d758932234874de2b204d306ecb7869e110.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "s\u002Fn\u002Fimage",
          "timeout": "3000 "
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "\u003Cdiv style=\"max-width: 600px; margin: 0 auto; text-align: left; height: 400px; overflow-y: scroll; border: 1px solid #ccc; padding: 15px; margin-bottom: 20px;\"\u003E\n  \u003Cp\u003E【誘惑アプリは「フォルダの奥底」へ】Instagram、X、TikTok、ゲームなどのアプリは、ホーム画面の1枚目に置いてはいけません。「3回タップしないと開けないフォルダの奥」に隠すか、いっそブラウザ版（Web版）だけ使うようにすると、アクセスの面倒くささから開く回数が激減します。\u003C\u002Fp\u003E\n\n  \u003Cp\u003E【「物理的な距離」は最強の防御】人間の意志の力は信じられないほど弱いです。「机の上にスマホを置いて、触らずに勉強する」のは拷問と同じ。それなら、最初から意志の力に頼らない環境を作りましょう。\u003C\u002Fp\u003E\n \u003Cp\u003E【視界から消す】 勉強中や作業中は、スマホをカバンの中に入れるか、別の部屋に置いてください。「視界に入っているだけ」で、脳の認知機能が下がることが研究で分かっています。\u003C\u002Fp\u003E\n \u003Cp\u003E【スマホの「家（置き場所）」を作る】 帰宅したらスマホを充電スタンドや特定の箱に入れ、そこ以外では触らないルールにします。特にベッドの中にスマホを持ち込むのは、睡眠破壊の元凶なので絶対にNGです。\u003C\u002Fp\u003E\n\n \n \n\u003Cp\u003E【「スマホの代わり」になる快楽を見つける】スマホをいじらない時間ができると、最初は退屈でソワソワするはずです。その空白の時間を、別の「ちょっと楽しいこと」で埋めてあげましょう。お気に入りの音楽をじっくり聴く、漫画を読む、友達と直接会って話す、筋トレをする。何でも構いません。スマホ以外からドーパミンを得る心地よさを、脳に思い出させてあげるのです。\u003C\u002Fp\u003E\n \n\n\n \n\u003Cp\u003Eスマホは最高のツールですが、一歩間違えればあなたの時間と未来を吸い取るブラックホールになります。画面の向こう側の仕掛け人に操られるのはもうやめて、自分のリアルな人生の充実感を取り戻してみませんか？\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "終了する",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "s\u002Fn\u002Ftext2"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "記憶確認クイズ",
              "content": "今から記事に関する〇✕クイズを行います。正しいと思う選択肢のチェックボックスをクリックしてください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "SNSやゲームなどの誘惑が多いアプリは、すぐに使えるようスマホのホーム画面の1枚目に置いておくことが推奨されている。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "s\u002Fn\u002Fq1"
            },
            {
              "required": true,
              "type": "radio",
              "label": "勉強中にスマホを触っていなくても、視界に入る場所に置いてあるだけで脳の認知機能が低下することが研究で分かっている。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "s\u002Fn\u002Fq2"
            },
            {
              "required": true,
              "type": "radio",
              "label": "15秒〜1分のショート動画ばかり見ていると、手軽な快楽に脳が慣れてしまい、小説などの「長い文章」を読む体力が失われていくリスクがある。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "s\u002Fn\u002Fq3"
            },
            {
              "required": true,
              "type": "radio",
              "label": "スマホ依存から抜け出すためには、スマホを一切触らない時間を作り、とにかく「我慢と意志の力」だけで乗り切ることが最も有効である。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "s\u002Fn\u002Fq4"
            },
            {
              "required": true,
              "type": "text",
              "content": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "quiz(1)"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "広告記憶の確認",
              "content": "記事内で表示された広告に関する質問にお答えください。"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "記事1ページ目と2ページ目の間で広告が表示されたことに気が付きましたか。「はい」か「いいえ」の項目をクリックしてください。",
                  "coding": "1"
                },
                {
                  "label": "記事の文章内に広告が表示されていたことに気が付きましたか。「はい」か「いいえ」の項目をクリックしてください。",
                  "coding": "2"
                }
              ],
              "width": "5",
              "anchors": [
                "はい",
                "いいえ",
                "ー",
                "ー",
                "ー"
              ],
              "label": "広告に関する記憶",
              "name": "s\u002Fn\u002Fmemory1"
            },
            {
              "required": true,
              "type": "textarea",
              "label": "記事1ページ目と2ページ目の間で表示された広告に関して、覚えている内容を入力してください。（商品名、商品のジャンル、色、フレーズなど）単語での入力も可能です。広告の内容を覚えていない・気づかなかった場合は、「なし」と入力してください。",
              "name": "s\u002Fn\u002Fmemory2"
            },
            {
              "required": true,
              "type": "textarea",
              "label": "記事の文章内に表示された広告に関して、覚えている内容を入力してください。（商品名、商品のジャンル、色、フレーズなど）単語での入力も可能です。広告の内容を覚えていない・気づかなかった場合は、「なし」と入力してください。",
              "name": "s\u002Fn\u002Fmemory3"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "coding": "1",
                  "label": "広告が邪魔だと感じた。"
                },
                {
                  "label": "広告が表示された際、不安を感じた。",
                  "coding": "2"
                },
                {
                  "label": "広告の存在に不快感を覚えた。",
                  "coding": "3"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない",
                "全く当てはまらない"
              ],
              "label": "記事1ページ目と2ページ目の間の広告に対する印象について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "s\u002Fn\u002Fmemory4"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "広告が邪魔だと感じた。",
                  "coding": "1"
                },
                {
                  "label": "広告が表示された際、不安を感じた。",
                  "coding": "2"
                },
                {
                  "label": "広告の存在に不快感を覚えた。",
                  "coding": "3"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない ",
                "全く当てはまらない"
              ],
              "label": "記事の文章内に表示された広告に対する印象について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "s\u002Fn\u002Fmemory5"
            },
            {
              "required": true,
              "type": "text",
              "title": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "s\u002Fn\u002Fmemory"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "以下の質問を読んでいただき、もっとも当てはまると思う選択肢を選び回答してください。"
            },
            {
              "required": true,
              "type": "text",
              "title": "【１】",
              "content": "以下の広告は、先ほど記事内で表示されていたでスマートフォンの広告です。"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"IMG_6737.JPG\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "このサービスを利用したいと思う。",
                  "coding": "1"
                },
                {
                  "label": "このサービスを人に薦めたいと思う。",
                  "coding": "2"
                },
                {
                  "label": "このサービスは、信用できる。",
                  "coding": "3"
                },
                {
                  "label": "この広告を見て、「自分に向けられたメッセージだ」と感じる。",
                  "coding": "4"
                },
                {
                  "label": "この広告を見て、「自分の現状が不満・不安だ」と感じる。",
                  "coding": "5"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない",
                "全く当てはまらない"
              ],
              "label": "この広告について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "s\u002Fn\u002Ffeel1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "面白い",
                  "coding": "1"
                },
                {
                  "label": "魅力的である、ワクワクする",
                  "coding": "2"
                },
                {
                  "label": "不快",
                  "coding": "3"
                },
                {
                  "label": "親しみやすい",
                  "coding": "4"
                },
                {
                  "label": "怖い、恐ろしい",
                  "coding": "5"
                },
                {
                  "label": "安心する",
                  "coding": "6"
                },
                {
                  "label": "うさん臭い",
                  "coding": "7"
                },
                {
                  "label": "押しつけがましい",
                  "coding": "8"
                }
              ],
              "width": "5",
              "anchors": [
                "強く感じた",
                "やや感じた",
                "どちらとも言えない",
                "あまり感じなかった",
                "全く感じなかった"
              ],
              "label": "この広告に対して、以下のように感じたかお答え下さい。",
              "name": "s\u002Fn\u002Ffeel2"
            },
            {
              "required": true,
              "type": "text",
              "title": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {
            "IMG_6739.JPG": "embedded\u002F1364a1c383447e2b0bad543189c3d4c1e8148d9b50bd590c4971d7e6160b3b04.JPG",
            "IMG_6740.JPG": "embedded\u002F8f7491f7a193bbe919eb2ceeafd397d05bd4c7c8a63a554c1416a30772ec1532.JPG",
            "IMG_6736.JPG": "embedded\u002Ff300570725b554811dca6cbe306e3cc1bca52066ed01d37567e7ae0ecaa06315.JPG",
            "IMG_6737.JPG": "embedded\u002Fa4505747a7e83444ed41d267abdcd0219e0bbd71eefeee97e46bf3955ffb23ed.JPG"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "s\u002Fn\u002Ffeel"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "s\u002Fp",
      "skip": "${this.state.condition != 2}",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "static\u002F82cf94c0-e59e-4d17-af25-7b81f0832602.jpg",
              "name": ""
            },
            {
              "type": "text",
              "content": "\u003Cdiv style=\"width: 100%; text-align: left; height: 400px; overflow-y: scroll; padding: 10px 5px; box-sizing: border-box; margin: 0;\"\u003E\n  \u003Ch3\u003E【絶望】スマホに脳をジャックされている？「やめられない」の裏にある黒幕と, 人生のタイパを損ねる3つのリスク\u003C\u002Fh3\u003E\n  \n  \u003Cp\u003E配信2026年7月10日17：00　女性未来\n  \u003Cp\u003E「ちょっと動画を見るつもりが, 気づけば夜中」「勉強しなきゃいけないのに, 無意識にSNSのアイコンをタップしている」……。そんな経験, ありませんか？ 「自分は意志が弱いから」と落ち込む必要はありません。実はそれ, あなたのせいではなく, 脳の仕組み（ドーパミン）と, 世界最高峰の天才たちが仕掛けた「依存の罠」にはまっているだけなのです。\u003C\u002Fp\u003E\n\n\n  \u003Cp\u003Eあなたの時間を奪う「ドーパミン」の正体。あのAppleの創業者であるスティーブ・ジョブズが, 自分の子どもにはiPadやiPhoneを厳しく制限していたという話は有名です。開発した張本人が, その中毒性の高さを誰よりも知っていたからです。私たちは, いわば「依存させるプロ」たちが作った仕組みに, タダでさえ貴重な若き時間を奪われている状態と言えます。\u003C\u002Fp\u003E\n\n\n  \n  \u003Cp\u003Eスマホ依存がもたらす, 地味にヤバい「3つの代償」＿＿＿ スマホに依存すると, 単に「時間がなくなる」だけでは済みません。特に学生生活において, 以下の3つのリスクが忍び寄ってきます。\u003C\u002Fp\u003E\n  \n  \n  \n  \u003Cp\u003E1.【「脳疲労」によるパフォーマンス低下】寝る直前まで画面の強い光や情報に触れていると, 脳が休まりません。慢性的な寝不足になり, 翌日の授業の集中力や記憶力がガタ落ちします。\u003C\u002Fp\u003E\n  \u003Cp\u003E2.【「短尺動画脳」への退化】15秒〜1分のショート動画ばかり見ていると, 脳が「手軽な快楽」に慣れてしまい, 教科書や小説などの「長い文章」を読む体力が失われていきます。\u003C\u002Fp\u003E\n  \u003Cp\u003E3.【メンタルのすり減り】SNSで他人の「キラキラした日常」や「盛れた写真」を無意識に自分と比較してしまい, 劣等感や孤独感を抱えやすくなります。\u003C\u002Fp\u003E\n  \u003Cp\u003Eせっかくのキャンパスライフなのに, スマホの画面ばかり見てメンタルや成績が落ちていくのは, あまりもし「タイパ（タイムパフォーマンス）」が悪すぎます。では, この「脳のジャック」から抜け出すにはどうすればいいのでしょうか？\u003C\u002Fp\u003E\n  \u003Cp\u003E（2ページ目へ続く）\u003C\u002Fp\u003E\n\u003Cdiv \u003E\n  "
            },
            {
              "required": true,
              "type": "image",
              "src": "\t static\u002F15c8bf81-5aab-4779-981e-95105a287ab3 コンタクト.jpg",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次のページへ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "s\u002Fp\u002Ftext1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 25,
              "top": 0,
              "angle": 0,
              "width": 614.4,
              "height": 335.4,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"IMG_6736 (2).jpeg\"] }"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "IMG_6736 (2).jpeg": "embedded\u002Ff300570725b554811dca6cbe306e3cc1bca52066ed01d37567e7ae0ecaa06315.jpeg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "s\u002Fp(image)",
          "timeout": "5000"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "\u003Cdiv style=\"max-width: 600px; margin: 0 auto; text-align: left; height: 400px; overflow-y: scroll; border: 1px solid #ccc; padding: 15px; margin-bottom: 20px;\"\u003E\n  \u003Cp\u003E【誘惑アプリは「フォルダの奥底」へ】Instagram、X、TikTok、ゲームなどのアプリは、ホーム画面の1枚目に置いてはいけません。「3回タップしないと開けないフォルダの奥」に隠すか、いっそブラウザ版（Web版）だけ使うようにすると、アクセスの面倒くささから開く回数が激減します。\u003C\u002Fp\u003E\n\n  \u003Cp\u003E【「物理的な距離」は最強の防御】人間の意志の力は信じられないほど弱いです。「机の上にスマホを置いて、触らずに勉強する」のは拷問と同じ。それなら、最初から意志の力に頼らない環境を作りましょう。\u003C\u002Fp\u003E\n \u003Cp\u003E【視界から消す】勉強中や作業中は、スマホをカバンの中に入れるか、別の部屋に置いてください。「視界に入っているだけ」で、脳の認知機能が下がることが研究で分かっています。\u003C\u002Fp\u003E\n \u003Cp\u003E【スマホの「家（置き場所）」を作る】帰宅したらスマホを充電スタンドや特定の箱に入れ、そこ以外では触らないルールにします。特にベッドの中にスマホを持ち込むのは、睡眠破壊の元凶なので絶対にNGです。\u003C\u002Fp\u003E\n\n \n \n\u003Cp\u003E【「スマホの代わり」になる快楽を見つける】スマホをいじらない時間ができると、最初は退屈でソワソワするはずです。その空白の時間を、別の「ちょっと楽しいこと」で埋めてあげましょう。お気に入りの音楽をじっくり聴く、漫画を読む、友達と直接会って話す、筋トレをする。何でも構いません。スマホ以外からドーパミンを得る心地よさを、脳に思い出させてあげるのです。\u003C\u002Fp\u003E\n \n\n\n \n\u003Cp\u003Eスマホは最高のツールですが、一歩間違えればあなたの時間と未来を吸い取るブラックホールになります。画面の向こう側の仕掛け人に操られるのはもうやめて、自分のリアルな人生の充実感を取り戻してみませんか？\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "終了する",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "s\u002Fp\u002Ftext2"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "記憶確認クイズ",
              "content": "今から記事に関する〇✕クイズを行います。正しいと思う選択肢のチェックボックスをクリックしてください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "SNSやゲームなどの誘惑が多いアプリは、すぐに使えるようスマホのホーム画面の1枚目に置いておくことが推奨されている。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "s\u002Fp\u002Fquiz1"
            },
            {
              "required": true,
              "type": "radio",
              "label": "勉強中にスマホを触っていなくても、視界に入る場所に置いてあるだけで脳の認知機能が低下することが研究で分かっている。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "s\u002Fp\u002Fquiz2"
            },
            {
              "required": true,
              "type": "radio",
              "label": "15秒〜1分のショート動画ばかり見ていると、手軽な快楽に脳が慣れてしまい、小説などの「長い文章」を読む体力が失われていくリスクがある。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "s\u002Fp\u002Fquiz3"
            },
            {
              "required": true,
              "type": "radio",
              "label": "スマホ依存から抜け出すためには、スマホを一切触らない時間を作り、とにかく「我慢と意志の力」だけで乗り切ることが最も有効である。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "s\u002Fp\u002Fquiz4"
            },
            {
              "required": true,
              "type": "text",
              "content": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "quiz(1)"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "広告記憶の確認",
              "content": "記事内で表示された広告に関する質問にお答えください。"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "記事1ページ目と2ページ目の間で広告が表示されたことに気が付きましたか。「はい」か「いいえ」の項目をクリックしてください。",
                  "coding": "1"
                },
                {
                  "label": "記事の文章内に広告が表示されていたことに気が付きましたか。「はい」か「いいえ」の項目をクリックしてください。",
                  "coding": "2"
                }
              ],
              "width": "5",
              "anchors": [
                "はい",
                "いいえ",
                "ー",
                "ー",
                "ー"
              ],
              "label": "広告に関する記憶",
              "name": "s\u002Fp\u002Fmemory1"
            },
            {
              "required": true,
              "type": "textarea",
              "label": "記事1ページ目と2ページ目の間で表示された広告に関して、覚えている内容を入力してください。（商品名、商品のジャンル、色、フレーズなど）単語での入力も可能です。広告の内容を覚えていない・気づかなかった場合は、「なし」と入力してください。",
              "name": "s\u002Fp\u002Fmemory2"
            },
            {
              "required": true,
              "type": "textarea",
              "label": "記事の文章内に表示された広告に関して、覚えている内容を入力してください。（商品名、商品のジャンル、色、フレーズなど）単語での入力も可能です。広告の内容を覚えていない・気づかなかった場合は、「なし」と入力してください。",
              "name": "s\u002Fp\u002Fmemory3"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "coding": "1",
                  "label": "広告が邪魔だと感じた。"
                },
                {
                  "label": "広告が表示された際、不安を感じた。",
                  "coding": "2"
                },
                {
                  "label": "広告の存在に不快感を覚えた。",
                  "coding": "3"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない",
                "全く当てはまらない"
              ],
              "label": "記事1ページ目と2ページ目の間の広告に対する印象について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "s\u002Fp\u002Fmemory4"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "広告が邪魔だと感じた。",
                  "coding": "1"
                },
                {
                  "label": "広告が表示された際、不安を感じた。",
                  "coding": "2"
                },
                {
                  "label": "広告の存在に不快感を覚えた。",
                  "coding": "3"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない ",
                "全く当てはまらない"
              ],
              "label": "記事の文章内に表示された広告に対する印象について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "s\u002Fp\u002Fmemory5"
            },
            {
              "required": true,
              "type": "text",
              "title": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "s\u002Fp\u002Fmemory"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "以下の質問を読んでいただき、もっとも当てはまると思う選択肢を選び回答してください。"
            },
            {
              "required": true,
              "type": "text",
              "title": "【１】",
              "content": "以下の広告は、先ほど記事内で表示されていたスマートフォンの広告です。"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"IMG_6736.JPG\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "このサービスを利用したいと思う。",
                  "coding": "1"
                },
                {
                  "label": "このサービスを人に薦めたいと思う。",
                  "coding": "2"
                },
                {
                  "label": "このサービスは、信用できる。",
                  "coding": "3"
                },
                {
                  "label": "この広告を見て、「自分に向けられたメッセージだ」と感じる。",
                  "coding": "4"
                },
                {
                  "label": "この広告を見て、「自分の現状が不満・不安だ」と感じる。",
                  "coding": "5"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない",
                "全く当てはまらない"
              ],
              "label": "この広告について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "s\u002Fp\u002Ffeel1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "面白い",
                  "coding": "1"
                },
                {
                  "label": "魅力的である、ワクワクする",
                  "coding": "2"
                },
                {
                  "label": "不快",
                  "coding": "3"
                },
                {
                  "label": "親しみやすい",
                  "coding": "4"
                },
                {
                  "label": "怖い、恐ろしい",
                  "coding": "5"
                },
                {
                  "label": "安心する",
                  "coding": "6"
                },
                {
                  "label": "うさん臭い",
                  "coding": "7"
                },
                {
                  "label": "押しつけがましい",
                  "coding": "8"
                }
              ],
              "width": "5",
              "anchors": [
                "強く感じた",
                "やや感じた",
                "どちらとも言えない",
                "あまり感じなかった",
                "全く感じなかった"
              ],
              "label": "この広告に対して、以下のように感じたかお答え下さい。",
              "name": "s\u002Fp\u002Ffeel2"
            },
            {
              "required": true,
              "type": "text",
              "title": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {
            "IMG_6739.JPG": "embedded\u002F1364a1c383447e2b0bad543189c3d4c1e8148d9b50bd590c4971d7e6160b3b04.JPG",
            "IMG_6740.JPG": "embedded\u002F8f7491f7a193bbe919eb2ceeafd397d05bd4c7c8a63a554c1416a30772ec1532.JPG",
            "IMG_6736.JPG": "embedded\u002Ff300570725b554811dca6cbe306e3cc1bca52066ed01d37567e7ae0ecaa06315.JPG"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "s\u002Fp\u002Ffeel"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "w\u002Fn",
      "skip": "${this.state.condition != 3}",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "\t static\u002F1ad5173a-4947-433f-9420-568f85a5faba.jpg",
              "name": ""
            },
            {
              "type": "text",
              "content": "\u003Cdiv style=\"width: 100%; text-align: left; height: 400px; overflow-y: scroll; padding: 10px 5px; box-sizing: border-box; margin: 0;\"\u003E\n\u003Ch3\u003Eただの「映えスポット」じゃない！大人の教養として知る世界遺産のリアル\u003C\u002Fh3\u003E\n\n\u003Cp\u003E配信2026年7月10日17：00　女性未来\n\u003Cp\u003E大学生にとって、長期休みは海外旅行の最大のチャンスです。SNSに投稿された美しい世界遺産の写真を見て、「いつかここに行ってみたい！」と憧れる人も多いのではないでしょうか。しかし、ただ「映え」を求めて訪れるだけではもったいないのが世界遺産の奥深さです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E実は、私たちがきらびやかな観光地として楽しんでいる場所の裏には、地球規模の深刻な課題が隠されています。例えば、戦争や自然災害、急激な都市開発、さらには「観光客の押し寄せ（オーバーツーリズム）」によって、その価値が失われかけている世界遺産は「危機遺産」と呼ばれ、現在世界に50件以上も存在します。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E私たちが安易に訪れて写真を撮る行為そのものが、遺産を傷つけているかもしれないという矛盾。ただの観光地巡りで終わらせず、「この美しい景色を未来にどう残すべきか」という問いを抱くことこそが、大学生活で培うべき「大人の教養」と言えます。旅先で見方が変わるだけで、あなたの旅の解像度は一気に上がります。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E"
            },
            {
              "required": true,
              "type": "image",
              "src": "\t static\u002F4ea83d7a-bfe4-4ca2-a3a2-2c70d714999c 水筒.jpg",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次に進む",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "w\u002Fn\u002Ftext1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 549.36,
              "height": 342.71999999999997,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"IMG_6740.jpeg\"] }"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "IMG_6740.jpeg": "embedded\u002F8f7491f7a193bbe919eb2ceeafd397d05bd4c7c8a63a554c1416a30772ec1532.jpeg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ap\u002Fn(image)",
          "timeout": "5000"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "\u003Cdiv style=\"width: 100%; text-align: left; height: 400px; overflow-y: scroll; padding: 10px 5px; box-sizing: border-box; margin: 0;\"\u003E\n\u003Ch3\u003E就活の雑談でもドヤれる！意外と誰も知らない「裏・世界遺産」の裏話\u003C\u002Fh3\u003E\n\u003Cp\u003Eここからは、友達との会話や就活の面接でのちょっとしたアイスブレイクにも使える、クスッと笑えて知的な「裏・世界遺産」の雑学をご紹介します。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E誰もが知るイタリアの観光名所「ピサの斜塔」。あの美しい傾きは、実は建設当時の「地盤調査の手抜き（ミス）」が原因です。現代のビジネスに当てはめれば大問題となる「設計ミス」ですが、数百年経った今では、その不完全さこそが世界中の人々を引きつける唯一無二の価値となり、世界遺産に登録されました。「失敗も、時間をかければ偉大な個性に変わる」という、どこか勇気をもらえるエピソードです。\u003C\u002Fp\u003E\n\u003Cp\u003Eまた、「世界遺産は一度登録されたら一生もの」と思っていませんか？実は、景観を台無しにするような過度なリゾート開発や近代的な橋の建設を行ったことで、ユネスコから登録を「抹消（はく奪）」された場所がこれまでに複数存在します。\u003C\u002Fp\u003E\n\u003Cp\u003E「ルールを破れば容赦なく資格を失う」というシビアな現実は、持続可能な社会（SDGs）を学ぶ今の大学生にとって、非常にリアルで興味深いテーマではないでしょうか。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "終了する",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ntext2"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "記憶確認クイズ",
              "content": "今から記事に関する〇✕クイズを行います。正しいと思う選択肢のチェックボックスをクリックしてください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "戦争やオーバーツーリズムなどで価値が失われかけている世界遺産は「危機遺産」と呼ばれ、現在世界に50件以上存在する。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "w\u002Fn\u002Fq1"
            },
            {
              "required": true,
              "type": "radio",
              "label": "イタリアの「ピサの斜塔」が傾いているのは、当時の高度な計算に基づいた建築デザインによるものである。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "w\u002Fn\u002Fq2"
            },
            {
              "required": true,
              "type": "radio",
              "label": "世界遺産は一度ユネスコに登録されれば、その後の環境変化や過度な開発があっても登録を抹消（はく奪）されることはない。",
              "options": [
                {
                  "label": " 〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "w\u002Fn\u002Fq3"
            },
            {
              "required": true,
              "type": "radio",
              "label": "観光客が押し寄せる「オーバーツーリズム」は、世界遺産を傷つけ「危機遺産」となる要因の一つである。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "w\u002Fn\u002Fq4"
            },
            {
              "required": true,
              "type": "text",
              "content": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "quiz(2)"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "広告記憶の確認",
              "content": "記事内で表示された広告に関する質問にお答えください。"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "記事1ページ目と2ページ目の間で広告が表示されたことに気が付きましたか。「はい」か「いいえ」の項目をクリックしてください。",
                  "coding": "1"
                },
                {
                  "label": "記事の文章内に広告が表示されていたことに気が付きましたか。「はい」か「いいえ」の項目をクリックしてください。",
                  "coding": "2"
                }
              ],
              "width": "5",
              "anchors": [
                "はい",
                "いいえ",
                "ー",
                "ー",
                "ー"
              ],
              "label": "広告に関する記憶",
              "name": "w\u002Fn\u002Fmemory1"
            },
            {
              "required": true,
              "type": "textarea",
              "label": "記事1ページ目と2ページ目の間で表示された広告に関して、覚えている内容を入力してください。（商品名、商品のジャンル、色、フレーズなど）単語での入力も可能です。広告の内容を覚えていない・気づかなかった場合は、「なし」と入力してください。",
              "name": "w\u002Fn\u002Fmemory2"
            },
            {
              "required": true,
              "type": "textarea",
              "label": "記事の文章内に表示された広告に関して、覚えている内容を入力してください。（商品名、商品のジャンル、色、フレーズなど）単語での入力も可能です。広告の内容を覚えていない・気づかなかった場合は、「なし」と入力してください。",
              "name": "w\u002Fn\u002Fmemory3"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "coding": "1",
                  "label": "広告が邪魔だと感じた。"
                },
                {
                  "label": "広告が表示された際、不安を感じた。",
                  "coding": "2"
                },
                {
                  "label": "広告の存在に不快感を覚えた。",
                  "coding": "3"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない",
                "全く当てはまらない"
              ],
              "label": "記事1ページ目と2ページ目の間の広告に対する印象について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "w\u002Fn\u002Fmemory4"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "広告が邪魔だと感じた。",
                  "coding": "1"
                },
                {
                  "label": "広告が表示された際、不安を感じた。",
                  "coding": "2"
                },
                {
                  "label": "広告の存在に不快感を覚えた。",
                  "coding": "3"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない ",
                "全く当てはまらない"
              ],
              "label": "記事の文章内に表示された広告に対する印象について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "w\u002Fn\u002Fmemory5"
            },
            {
              "required": true,
              "type": "text",
              "title": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "w\u002Fn\u002Fmemory"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "以下の質問を読んでいただき、もっとも当てはまると思う選択肢を選び回答してください。"
            },
            {
              "required": true,
              "type": "text",
              "title": "【１】",
              "content": "以下の広告は、先ほど記事内で表示されていたマッチングアプリの広告です。"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"IMG_6740.JPG\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "このサービスを利用したいと思う。",
                  "coding": "1"
                },
                {
                  "label": "このサービスを人に薦めたいと思う。",
                  "coding": "2"
                },
                {
                  "label": "このサービスは、信用できる。",
                  "coding": "3"
                },
                {
                  "label": "この広告を見て、「自分に向けられたメッセージだ」と感じる。",
                  "coding": "4"
                },
                {
                  "label": "この広告を見て、「自分の現状が不満・不安だ」と感じる。",
                  "coding": "5"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない",
                "全く当てはまらない"
              ],
              "label": "この広告について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "w\u002Fn\u002Ffeel1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "面白い",
                  "coding": "1"
                },
                {
                  "label": "魅力的である、ワクワクする",
                  "coding": "2"
                },
                {
                  "label": "不快",
                  "coding": "3"
                },
                {
                  "label": "親しみやすい",
                  "coding": "4"
                },
                {
                  "label": "怖い、恐ろしい",
                  "coding": "5"
                },
                {
                  "label": "安心する",
                  "coding": "6"
                },
                {
                  "label": "うさん臭い",
                  "coding": "7"
                },
                {
                  "label": "押しつけがましい",
                  "coding": "8"
                }
              ],
              "width": "5",
              "anchors": [
                "強く感じた",
                "やや感じた",
                "どちらとも言えない",
                "あまり感じなかった",
                "全く感じなかった"
              ],
              "label": "この広告に対して、以下のように感じたかお答え下さい。",
              "name": "w\u002Fn\u002Ffeel2"
            },
            {
              "required": true,
              "type": "text",
              "title": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {
            "IMG_6739.JPG": "embedded\u002F1364a1c383447e2b0bad543189c3d4c1e8148d9b50bd590c4971d7e6160b3b04.JPG",
            "IMG_6740.JPG": "embedded\u002F8f7491f7a193bbe919eb2ceeafd397d05bd4c7c8a63a554c1416a30772ec1532.JPG"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "w\u002Fn\u002Ffeel"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "w\u002Fp",
      "skip": "${this.state.condition != 4}",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "\t static\u002F1ad5173a-4947-433f-9420-568f85a5faba.jpg",
              "name": ""
            },
            {
              "type": "text",
              "content": "\u003Cdiv style=\"width: 100%; text-align: left; height: 400px; overflow-y: scroll; padding: 10px 5px; box-sizing: border-box; margin: 0;\"\u003E\n\u003Ch3\u003Eただの「映えスポット」じゃない！大人の教養として知る世界遺産のリアル\u003C\u002Fh3\u003E\n\n\u003Cp\u003E配信2026年7月10日17：00　女性未来\n\u003Cp\u003E大学生にとって、長期休みは海外旅行の最大のチャンスです。SNSに投稿された美しい世界遺産の写真を見て、「いつかここに行ってみたい！」と憧れる人も多いのではないでしょうか。しかし、ただ「映え」を求めて訪れるだけではもったいないのが世界遺産の奥深さです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E実は、私たちがきらびやかな観光地として楽しんでいる場所の裏には、地球規模の深刻な課題が隠されています。例えば、戦争や自然災害、急激な都市開発、さらには「観光客の押し寄せ（オーバーツーリズム）」によって、その価値が失われかけている世界遺産は「危機遺産」と呼ばれ、現在世界に50件以上も存在します。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E私たちが安易に訪れて写真を撮る行為そのものが、遺産を傷つけているかもしれないという矛盾。ただの観光地巡りで終わらせず、「この美しい景色を未来にどう残すべきか」という問いを抱くことこそが、大学生活で培うべき「大人の教養」と言えます。旅先で見方が変わるだけで、あなたの旅の解像度は一気に上がります。\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "image",
              "src": "\t static\u002F4ea83d7a-bfe4-4ca2-a3a2-2c70d714999c 水筒.jpg",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "w\u002Fp1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 12.12,
              "top": -10.62,
              "angle": 0,
              "width": 544.8,
              "height": 352.2,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"IMG_6739 (1).jpeg\"] }"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "IMG_6739 (1).jpeg": "embedded\u002F1364a1c383447e2b0bad543189c3d4c1e8148d9b50bd590c4971d7e6160b3b04.jpeg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "w\u002Fp(image)",
          "timeout": "5000"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "\u003Cdiv style=\"width: 100%; text-align: left; height: 400px; overflow-y: scroll; padding: 10px 5px; box-sizing: border-box; margin: 0;\"\u003E\n\u003Ch3\u003E就活の雑談でもドヤれる！意外と誰も知らない「裏・世界遺産」の裏話\u003C\u002Fh3\u003E\n\u003Cp\u003Eここからは、友達との会話や就活の面接でのちょっとしたアイスブレイクにも使える、クスッと笑えて知的な「裏・世界遺産」の雑学をご紹介します。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E誰もが知るイタリアの観光名所「ピサの斜塔」。あの美しい傾きは、実は建設当時の「地盤調査の手抜き（ミス）」が原因です。現代のビジネスに当てはめれば大問題となる「設計ミス」ですが、数百年経った今では、その不完全さこそが世界中の人々を引きつける唯一無二の価値となり、世界遺産に登録されました。「失敗も、時間をかければ偉大な個性に変わる」という、どこか勇気をもらえるエピソードです。\u003C\u002Fp\u003E\n\u003Cp\u003Eまた、「世界遺産は一度登録されたら一生もの」と思っていませんか？実は、景観を台無しにするような過度なリゾート開発や近代的な橋の建設を行ったことで、ユネスコから登録を「抹消（はく奪）」された場所がこれまでに複数存在します。\u003C\u002Fp\u003E\n\u003Cp\u003E「ルールを破れば容赦なく資格を失う」というシビアな現実は、持続可能な社会（SDGs）を学ぶ今の大学生にとって、非常にリアルで興味深いテーマではないでしょうか。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "終了する",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "w\u002Fp(t2)"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "記憶確認クイズ",
              "content": "今から記事に関する〇✕クイズを行います。正しいと思う選択肢のチェックボックスをクリックしてください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "戦争やオーバーツーリズムなどで価値が失われかけている世界遺産は「危機遺産」と呼ばれ、現在世界に50件以上存在する。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "w\u002Fp\u002Fq1"
            },
            {
              "required": true,
              "type": "radio",
              "label": "イタリアの「ピサの斜塔」が傾いているのは、当時の高度な計算に基づいた建築デザインによるものである。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "w\u002Fp\u002Fq2"
            },
            {
              "required": true,
              "type": "radio",
              "label": "世界遺産は一度ユネスコに登録されれば、その後の環境変化や過度な開発があっても登録を抹消（はく奪）されることはない。",
              "options": [
                {
                  "label": " 〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "w\u002Fp\u002Fq3"
            },
            {
              "required": true,
              "type": "radio",
              "label": "観光客が押し寄せる「オーバーツーリズム」は、世界遺産を傷つけ「危機遺産」となる要因の一つである。",
              "options": [
                {
                  "label": "〇",
                  "coding": "1"
                },
                {
                  "label": "✕",
                  "coding": "2"
                }
              ],
              "name": "w\u002Fp\u002Fq4"
            },
            {
              "required": true,
              "type": "text",
              "content": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "quiz(2)"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "広告記憶の確認",
              "content": "記事内で表示された広告に関する質問にお答えください。"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "記事1ページ目と2ページ目の間で広告が表示されたことに気が付きましたか。「はい」か「いいえ」の項目をクリックしてください。",
                  "coding": "1"
                },
                {
                  "label": "記事の文章内に広告が表示されていたことに気が付きましたか。「はい」か「いいえ」の項目をクリックしてください。",
                  "coding": "2"
                }
              ],
              "width": "5",
              "anchors": [
                "はい",
                "いいえ",
                "ー",
                "ー",
                "ー"
              ],
              "label": "広告に関する記憶",
              "name": "w\u002Fp\u002Fmemory1"
            },
            {
              "required": true,
              "type": "textarea",
              "label": "記事1ページ目と2ページ目の間で表示された広告に関して、覚えている内容を入力してください。（商品名、商品のジャンル、色、フレーズなど）単語での入力も可能です。広告の内容を覚えていない・気づかなかった場合は、「なし」と入力してください。",
              "name": "w\u002Fp\u002Fmemory2"
            },
            {
              "required": true,
              "type": "textarea",
              "label": "記事の文章内に表示された広告に関して、覚えている内容を入力してください。（商品名、商品のジャンル、色、フレーズなど）単語での入力も可能です。広告の内容を覚えていない・気づかなかった場合は、「なし」と入力してください。",
              "name": "w\u002Fp\u002Fmemory3"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "coding": "1",
                  "label": "広告が邪魔だと感じた。"
                },
                {
                  "label": "広告が表示された際、不安を感じた。",
                  "coding": "2"
                },
                {
                  "label": "広告の存在に不快感を覚えた。",
                  "coding": "3"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない",
                "全く当てはまらない"
              ],
              "label": "記事1ページ目と2ページ目の間の広告に対する印象について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "w\u002Fp\u002Fmemory4"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "広告が邪魔だと感じた。",
                  "coding": "1"
                },
                {
                  "label": "広告が表示された際、不安を感じた。",
                  "coding": "2"
                },
                {
                  "label": "広告の存在に不快感を覚えた。",
                  "coding": "3"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない ",
                "全く当てはまらない"
              ],
              "label": "記事の文章内に表示された広告に対する印象について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "w\u002Fp\u002Fmemory5"
            },
            {
              "required": true,
              "type": "text",
              "title": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "w\u002Fp\u002Fmemory"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "以下の質問を読んでいただき、もっとも当てはまると思う選択肢を選び回答してください。"
            },
            {
              "required": true,
              "type": "text",
              "title": "【１】",
              "content": "以下の広告は、先ほど記事内で表示されていたマッチングアプリの広告です。"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"IMG_6739.JPG\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "このサービスを利用したいと思う。",
                  "coding": "1"
                },
                {
                  "label": "このサービスを人に薦めたいと思う。",
                  "coding": "2"
                },
                {
                  "label": "このサービスは、信用できる。",
                  "coding": "3"
                },
                {
                  "label": "この広告を見て、「自分に向けられたメッセージだ」と感じる。",
                  "coding": "4"
                },
                {
                  "label": "この広告を見て、「自分の現状が不満・不安だ」と感じる。",
                  "coding": "5"
                }
              ],
              "width": "5",
              "anchors": [
                "非常に当てはまる",
                "やや当てはまる",
                "どちらとも言えない",
                "あまり当てはまらない",
                "全く当てはまらない"
              ],
              "label": "この広告について、以下の文章があなたの気持ちや考えにどの程度当てはまるかお答えください。",
              "name": "w\u002Fp\u002Ffeel1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "面白い",
                  "coding": "1"
                },
                {
                  "label": "魅力的である、ワクワクする",
                  "coding": "2"
                },
                {
                  "label": "不快",
                  "coding": "3"
                },
                {
                  "label": "親しみやすい",
                  "coding": "4"
                },
                {
                  "label": "怖い、恐ろしい",
                  "coding": "5"
                },
                {
                  "label": "安心する",
                  "coding": "6"
                },
                {
                  "label": "うさん臭い",
                  "coding": "7"
                },
                {
                  "label": "押しつけがましい",
                  "coding": "8"
                }
              ],
              "width": "5",
              "anchors": [
                "強く感じた",
                "やや感じた",
                "どちらとも言えない",
                "あまり感じなかった",
                "全く感じなかった"
              ],
              "label": "この広告に対して、以下のように感じたかお答え下さい。",
              "name": "w\u002Fp\u002Ffeel2"
            },
            {
              "required": true,
              "type": "text",
              "title": "回答が終了したら「次へ」を押してください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {
            "IMG_6739.JPG": "embedded\u002F1364a1c383447e2b0bad543189c3d4c1e8148d9b50bd590c4971d7e6160b3b04.JPG",
            "IMG_6740.JPG": "embedded\u002F8f7491f7a193bbe919eb2ceeafd397d05bd4c7c8a63a554c1416a30772ec1532.JPG"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "w\u002Fp\u002Ffeel"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "【調査・実験へのご協力のお礼と真の目的の説明】",
          "content": "この度は、本調査（実験）にご協力いただき、誠にありがとうございました。本調査の開始にあたり、皆様には「ウェブ記事の読みやすさや印象に関する調査」とお伝えしておりましたが、本研究の真の目的は「広告コピーのポジティブフレーミング・ネガティブフレーミングが消費者の心理にどのような影響を及ぼすか」を検証することでした。事前に真の目的をお伝えしてしまうと、「広告効果の調査である」というバイアスが生じ、日常的に広告を見た際とは異なる意図的な回答が行われてしまう可能性がありました。より自然で客観的な心理的反応・評価データを取得するため、真の目的を伏せた状態で回答をお願いしておりました。本来の目的と異なる説明をしましたことを、深くお詫び申し上げます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "【研究の目的】",
          "content": "本研究では、同じサービスであっても、ポジティブな表現（得られるメリットや魅力を強調した表現）とネガティブな表現（利用しない場合のリスクや現状の不安・課題を強調した表現）のどちらを用いるかによって、読者の感情や、サービスに対する利用意向や当事者意識の度合いがどのように変化するのかを明らかにすることを目的としています。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "実験の最中、真の研究目的に気づきましたか？",
          "options": [
            {
              "label": "はい",
              "coding": "1"
            },
            {
              "label": "いいえ",
              "coding": "2"
            }
          ],
          "name": "find"
        },
        {
          "required": true,
          "type": "radio",
          "label": "実験の真の目的について説明を受け、ご理解いただいたうえで、回答データを本研究に使用することに同意しますか？",
          "options": [
            {
              "label": "はい",
              "coding": "1"
            },
            {
              "label": "いいえ",
              "coding": "2"
            }
          ],
          "name": "consensus"
        },
        {
          "required": true,
          "type": "text",
          "title": "実験は以上となります。ご協力いただき、誠にありがとうございました。「終了」を押して、画面を閉じてください。"
        },
        {
          "required": true,
          "type": "input",
          "label": "本実験にご協力いただいた謝礼として、Amazon eギフトを進呈いたします。 ご希望の方は、送付先となる電子メールアドレスを下記にご記入ください。 なお、収集したメールアドレスは謝礼発送業務のみに使用し、実験結果のデータとは分離して匿名性を保持します。謝礼を希望されない方は、「希望しない」とご記入ください。",
          "name": "syarei"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "終了",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "end"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ご協力ありがとうございました。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "IpXpU3kgnP5J",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "Page",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()
