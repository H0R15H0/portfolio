<template>
  <VTimeline>
    <VTimelineItem v-for="item in items" :key="item.title" :color="colors[item.tag]">
      <template v-slot:opposite>
        <span class="font-weight-bold">{{ item.date }}</span>
      </template>
      <VCard class="elavetion-2">
        <VCardTitle class="font-weight-black">{{ item.title }}</VCardTitle>
        <VCardText class="text-left">
          <div>使用ツール：{{ item.skills }}</div>
          <div>役割：{{ item.role }}</div>
          <div class="mt-1 font-weight-medium text--primary">{{ item.content }}</div>
        </VCardText>
      </VCard>
    </VTimelineItem>
  </VTimeline>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "HarmonyFor 長期インターン", date: "2020/09 ~ 現在", tag: "internship", skills: "Rails, Vue, MySQL, Docker", role: "バックエンド、フロントエンド", content: "留学生の就活支援サービスの開発・運用。アジャイルな開発スタイルやDDDに則った開発を経験。開発に使用したライブラリ(OSS)にも貢献。" },
        { title: "jphacks2020", date: "2020/10", tag: "hackathon", skills: "Flask, OpenCV, HTML, CSS, JS", role: "バックエンド、フロントエンド", content: "テーマ「XTech」で2人の笑顔ではんこを押せる、オンライン提出用の婚姻届作成サービス「nikoha」を開発。結果：中部地区3位" },
        { title: "Akatsuki 短期就労型インターン", date: "2021/07", tag: "internship", skills: "Rails, MySQL, Docker, GitHub Actions, Jenkins", role: "バックエンド", content: "ゲームバックエンドを開発。運用機能改善やAPIの高速化（N+1問題の解消など）に貢献。" },
        { title: "楽天 ハッカソン型短期インターン", date: "2021/09", tag: "internship", skills: "Rails, React, TypeScript, MySQL, Docker", role: "バックエンド、フロントエンド、マネジメント", content: "テーマ「人々を熱狂させるもの」でプロダクトを開発。結果：優勝" },
      ],
      colors: {
        internship: "#E65709",
        hackathon: "#20E6DF",
      }
    }
  }
}
</script>

<style>

</style>