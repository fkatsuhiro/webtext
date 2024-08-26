<template>
  <div class="course-list bg-body-tertiary">
    <div class="course-item-width">
      <div class="under-space"></div>
      <h3>SQLを学習してクエリ処理をマスターしよう！</h3>
      <router-link :to="`/text/6/chapter/${chapter.id}`" v-for="chapter in chapters" :key="chapter.id" class="course-item row bg-white">
        <img :src="require(`@/assets/course_image/chapter_image/${chapter.image}`)" alt="chapter image" class="course-image col-3">
        <div class="col-9">
          <p class="text-chapterid">Chapter {{ chapter.id }}</p>
          <h4>{{ chapter.title }}</h4>
          <p>{{ chapter.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SQLCourses',
  data() {
    return {
      chapters: [
        {
          id: 1,
          title: 'DB(データベース)とは',
          description: 'DBからテーブルを取得する方法を習得します',
          image: 'undraw_chapter1.png'
        },
        {
          id: 2,
          title: '条件を付けて取得するデータを指定しよう！！',
          description: '条件を指定してデータを取得する方法を習得します',
          image: 'undraw_chapter2.png'
        },
        {
          id: 3,
          title: '演算子を用いて処理をしよう！！',
          description: '演算子を用いた条件の書き方を習得します',
          image: 'undraw_chapter3.png'
        },
        {
          id: 4,
          title: '並び替えとグルーピングLIMITを用いて取得するデータを制限しよう！',
          description:'並び替え、グルーピングを追加して取得したデータを調整します',
          image: 'undraw_chapter4.png'
        },
        {
          id: 5,
          title: '四則演算と関数を用いた数値の取得に関して学習しよう！！',
          description: '四則演算の書き方、SUM,AVG等を用いて関数の利用を行います',
          image: 'undraw_chapter5.png'
        },
        {
          id: 6,
          title: '複数のテーブルからデータを結合しよう！！',
          description: 'JOINを用いて複数のテーブルを結合します',
          image: 'undraw_chapter6.png'
        }
      ]
    };
  }
};
</script>

<style scoped>
.top-img{
  width: 60px;
  height: 50px;
}
.under-space {
  padding-bottom: 1rem;
}
.course-list {
  padding: 20px;
}
.course-item-width{
  width: 80%;
  margin: 0 auto;
}
.course-item {
  list-style: none;
  margin: 40px 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}
.course-image {
  width: 200px;
  height: 150px;
  /*margin-right: 20px;*/
}
.text-chapterid{
  font-weight: bold;
}
</style>