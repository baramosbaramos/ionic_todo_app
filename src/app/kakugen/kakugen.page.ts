import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kakugen',
  templateUrl: './kakugen.page.html',
  styleUrls: ['./kakugen.page.scss'],
})
export class KakugenPage implements OnInit {
  date1 = new Date();
  title =
    this.date1.getFullYear() +
    '年' +
    (this.date1.getMonth() + 1) +
    '月' +
    this.date1.getDate() +
    '日' +
    'の格言';
  tasks: { name: string }[] = [];
  flg = false;
  completedtasks: { name: string }[] = [];
  kakugen = '';
  kakugenList = [
    '人生はむつかしく解釈するから分からなくなる。 -　武者小路実篤　-',
    '一羽のツバメが来ても夏にはならないし、一日で夏になることもない。このように、一日もしくは短い時間で人は幸福にも幸運にもなりはしない。 -　アリストテレス　-',
    '迷う、ということは、一種の欲望からきているように思う。ああもなりたい、こうもなりたい、こういうふうに出世したい、という欲望から迷いがでてくる。それを捨て去れば問題はなくなる。 -　松下幸之助　-',
    '死を前にしたとき、みじめな気持ちで人生を振り返らなくてはならないとしたら、いやな出来事や逃したチャンス、やり残したことばかりを思い出すとしたら、それはとても不幸なことだと思うの。 -　オードリー・ヘップバーン　-',
    '人生とは自転車のようなものだ。倒れないようにするには走らなければならない。    -　アインシュタイン　-',
    '人生はロマン。自分は不幸だと悩むのではなく、試練を与えられた物語の主人公だと思えば、人生をエンジョイできる。 -　美輪明宏　-',
    '人間には不幸か、貧乏か、病気が必要だ。でないと人間はすぐに思いあがる。 -　ツルゲーネフ　-',
    '「できること」が増えるより、「楽しめること」が増えるのが、いい人生。 -　斎藤茂太　-',
    '毎日を生きよ。あなたの人生が始まった時のように。 -　ゲーテ　-',
    '物事に敏感で自分なりの価値判断を持っていることを「細心」といいます。気が小さいことは人生の武器なのです -　斎藤茂太　-    ',
    '二十代の頃より10倍金持ちになったという六十代の人間を見つけることは簡単だ。だが、そのうちのだれもが10倍幸せになったとは言わないはずだ。 -　バーナード・ショー　-',
    '今の時間を大事にできない人は、未来の時間もきっと大事にはできない。ここで自分らしく生きることができない人には、次なる道は開けない。 -　平尾誠二　-',
    'あちこち旅をしてまわっても、自分から逃げることはできない。   -　ヘミングウェイ　-',
    '夢中で日を過ごしておれば、いつかはわかる時が来る。 -　坂本龍馬　-   ',
    '危険を冒して前へ進もうとしない人、未知の世界を旅しようとしない人には、人生は、ごくわずかな景色しか見せてくれないんだよ。-　シドニー・ポワチエ　-',
    '速度を上げるばかりが、人生ではない。　-　ガンジー　-',
    '自分の生きる人生を愛せ。自分の愛する人生を生きろ。-　ボブ・マーリー　-',
    '人間のほほえみ、人間のふれあいを忘れた人がいます。 これはとても大きな貧困です。-　マザー・テレサ　-',
    '人生とは、その時々に自然に変化し、移りゆくものだ。変化に抵抗してはならない。それは悲しみを招くだけである。 -　老子　-',
  ];
  min = 0;
  max = this.kakugenList.length;

  ionViewWillEnter() {
    if ('kakugen' in localStorage) {
      this.kakugen = JSON.parse(localStorage.kakugen);
    }
  }
  constructor() {}

  ngOnInit() {}
  async checkKakugen() {
    let a = Math.floor(Math.random() * (this.max + 1 - this.min)) + this.min;

    this.kakugen = this.kakugenList[a];

    localStorage.kakugen = JSON.stringify(this.kakugen);

    this.flg = true;
    setTimeout(() => {
      this.flg = false;
      localStorage.kakugen = '';
    }, 1000 * 3600 * 8);
  }
}
