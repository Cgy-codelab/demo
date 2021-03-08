<template>
  <div>
    <!--冻结头 -->
    <table class="head">
      <tr>
        <th>日期</th>
        <th>名字</th>
        <th class="address">地址</th>
      </tr>
    </table>

    <!-- 滑动部分 -->
    <div class="body">
      <table>
        <tr v-for="(item, index) in itemList" :key="index">
          <td>{{ item.date }}</td>
          <td>{{ item.name }}</td>
          <td class="address">{{ item.address }}</td>
        </tr>
      </table>
    </div>
  
  <h1>------------------------------------------------------------------------</h1>
  <!-- 下拉菜单 -->
  <select-input></select-input>
  </div>
</template>

<script>
import SelectInput from '../views/SelectInput.vue'
export default {
  components:{
    SelectInput,
  },
  data() {
    return {
      itemList: [
        {name:'王小虎',date:'2021-3-7',address:'重庆市南岸区重庆邮电大学'},
        {name:'王小虎',date:'2021-3-7',address:'重庆市南岸区重庆邮电大学'},
        {name:'王小虎',date:'2021-3-7',address:'重庆市南岸区重庆邮电大学'},
        {name:'王小虎',date:'2021-3-7',address:'重庆市南岸区重庆邮电大学'},
        {name:'王小虎',date:'2021-3-7',address:'重庆市南岸区重庆邮电大学'},
        {name:'王小虎',date:'2021-3-7',address:'重庆市南岸区重庆邮电大学'},
        {name:'王小虎',date:'2021-3-7',address:'重庆市南岸区重庆邮电大学'},
        {name:'王小虎',date:'2021-3-7',address:'重庆市南岸区重庆邮电大学'},
      ],
    };
  },
};
</script>
<style scoped>
.head {
  width: 1000px;
  border-collapse: collapse;
}
.body {
  height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  border-bottom: 1px grey solid;
  width: 1000px;
}
.body table {
  border-collapse: collapse;
  width: 1000px;
  height: 300px;
}
th {
  color: grey;
  height: 50px;
  width: 100px;
  border: 1px grey solid;
}
td {
  width: 100px;
  text-align: center;
  height: 50px;
  border: 1px grey solid;
}
.address {
  width: 300px;
}
</style>