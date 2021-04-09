<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Tuổi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, id) in data" :key="id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </table>

    <button @click="upCount(2)" class="btn btn-primary">Up to chop</button>
    <button @click="lowCount(1)" class="btn btn-danger">Get Low</button>
    <h1>So high: {{ count }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      author: "TrungNK",
      count: 5,
      data: [
        {
          id: 1,
          name: "NKT",
          age: 21,
        },
        {
          id: 2,
          name: "TT",
          age: 25,
        },
        {
          id: 3,
          name: "KT",
          age: 30,
        },
        {
          id: 4,
          name: "NK",
          age: 24,
        },
        {
          id: 5,
          name: "titi",
          age: 18,
        },
      ],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    upCount(step) {
      this.count += step;
    },

    lowCount(step) {
      if (this.count > 0) this.count -= step;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
