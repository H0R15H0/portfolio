<template>
  <VContainer>
   <h1>Skills</h1>
    <VRow>
      <VCol cols="12" sm="6" v-for="(item, i) in items" :key="i">
        <VCard elevation="0">
          <VCardTitle class="text-center font-weight-bold">
            {{ item.name }}
          </VCardTitle>
          <VCardSubtitle class="text-left" v-if="item.time">
            : {{ item.time }}
          </VCardSubtitle>
          <VCardText class="text-left text--primary">
            {{ item.description }}
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {name: "Python", time: "2年", description: "初めて触った言語で歴は長いです。ハッカソンではFlask, FastAPIをバックエンドでよく使ってます。学生実験ではフレームワークなしでWebサイトを作りました。。。簡単なプログラミング課題はPythonでやることが多いです。最近は機械学習も学んでます。"},
        {name: "Ruby", time: "1年", description: "サークルのアプリ開発でRailsに出会いそれから始めました。インターン先でも使用しているので一番使える言語・フレームワークだと思います。WebAPIをサクッと作成できるくらいにはなりました。"},
        {name: "Vue.js", time: "1年", description: "Railsと同じタイミングでフロントエンドとして使い始めました。このポートフォリオもVueで作りました。デザインが苦手なのでVuetify君に頑張ってもらっています。"},
        {name: "HTML/CSS", time: "1年", description: "初めて作ったWebアプリはHTML, CSSを使いました。ハッカソンで使ったり後輩と一緒に使ったりしています。タグやスタイルの暗記をしていないのでGoogle先生に頼ることが多いです。"},
        {name: "C/C++", time: "1年", description: "大学の授業で使いました。基本文法やポインタの概念を学びました。授業の中でコマンドラインで動くぷよぷよのようなものを作りました。"},
        {name: "C#", time: "6ヶ月", description: "Andriodアプリ開発で使用しました。フレームワークはXamarinです。C#のおかげでオブジェクト志向の考え方が理解できました。言語としては好きなのですが、Xamarinの情報がネットに少なすぎて辛かったです。。。"},
        {name: "R", time: "3ヶ月", description: "データマイニングの授業で使いました。データ分析のライブラリを利用しただけなので正直理解してません。。。以上です笑"},
        {name: "Git/GitHub", time: "", description: "プログラミングを始めてからずっと使ってます。インターンでも使用しているので基本的な機能は使えると思います。Zenhubを利用してIssue単位でタスク管理したりしました。"},
        {name: "RDB", time: "", description: "DBを自分で設計できるくらいには使っています。数万レコードのデータを持つアプリを作成した時には、クエリの発行回数を抑えるなどのパフォーマンスに気をつけました。"},
        {name: "Docker", time: "", description: "基本的に開発環境はDockerをつかっています。個人開発でDockerFileからイメージを作ったり本番環境に使ったりしています。"},
      ],
    }
  }
}
</script>

<style>

</style>
