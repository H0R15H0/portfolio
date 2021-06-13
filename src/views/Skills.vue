<template>
  <VContainer>
    <VRow justify="center">
      <h1>Skills</h1>
    </VRow>
    <VRow>
      <VCol cols="12" sm="6" v-for="(item, i) in items" :key="i">
        <VCard elevation="0" color="primary">
          <VRow justify="center">
            <VImg :src="item.imgSrc" max-height="70px" contain></VImg>
          </VRow>
          <VCardTitle class="justify-center font-weight-bold">
            {{ item.name }}
          </VCardTitle>
          <VCardSubtitle class="justify-center" v-if="item.time">
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
        {name: "Python",     imgSrc: require("../assets/Python_light.png"),  time: "2年", description: "初めて触った言語で歴は長いです。ハッカソンではFlask, FastAPIをバックエンドでよく使ってます。学生実験ではフレームワークなしでWebサイトを作りました。。。簡単なプログラミング課題はPythonでやることが多いです。最近は機械学習も学んでます。"},
        {name: "Ruby",       imgSrc: require("../assets/Ruby_light.png"),    time: "1年", description: "サークルのアプリ開発でRailsに出会いそれから始めました。インターン先でも使用しているので一番使える言語・フレームワークだと思います。WebAPIをサクッと作成できるくらいにはなりました。"},
        {name: "Vue.js",     imgSrc: require("../assets/Vue_light.png"),     time: "1年", description: "Railsと同じタイミングでフロントエンドとして使い始めました。このポートフォリオもVueで作りました。デザインが苦手なのでVuetify君に頑張ってもらっています。"},
        {name: "HTML/CSS",   imgSrc: require("../assets/HTMLCSS_light.png"), time: "1年", description: "初めて作ったWebアプリはHTML, CSSを使いました。ハッカソンで使ったり後輩に教えながら使ったりしています。タグやスタイルの暗記をしていないのでGoogle先生に頼ることが多いです。"},
        {name: "C/C++",      imgSrc: require("../assets/cpp_light.png"),     time: "1年", description: "大学の授業で使いました。基本文法やポインタの概念を学びました。授業の中でコマンドラインで動くぷよぷよのようなものを作りました。"},
        {name: "C#",         imgSrc: require("../assets/cs_light.png"),      time: "6ヶ月", description: "Andriodアプリ開発で使用しました。フレームワークはXamarinです。C#のおかげでオブジェクト志向の考え方が理解できました。言語としては好きなのですが、Xamarinの情報がネットに少なすぎて辛かったです。。。"},
        {name: "R",          imgSrc: require("../assets/R_light.png"),       time: "3ヶ月", description: "データマイニングの授業で使いました。データ分析のライブラリを利用しただけなので正直使い込んではいません。。。"},
        {name: "Git/GitHub", imgSrc: require("../assets/github_light.png"),  time: "", description: "プログラミングを始めてからずっと使ってます。インターンでも使用しているので基本的な機能は使えると思います。Zenhubを利用してIssue単位でタスク管理したりしました。"},
        {name: "RDB",        imgSrc: require("../assets/rdb_light.png"),     time: "", description: "DBを自分で設計できるくらいには使っています。数万レコードのデータを持つアプリを作成した時には、クエリの発行回数を抑えるなどのパフォーマンスに気をつけました。"},
        {name: "Docker",     imgSrc: require("../assets/docker_light.png"),  time: "", description: "基本的に開発環境はDockerをつかっています。個人開発でDockerFileからイメージを作ったり本番環境に使ったりしています。"},
      ],
    }
  }
}
</script>

<style>

</style>
