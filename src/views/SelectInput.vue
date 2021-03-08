<template>
  <div class="box">
    
      <div class="txt">
        <span v-for="(item,index) in dataList" :key="index" v-if="item.flag">
          {{item.text}}
           <a href="#" @click="dele(index)">×</a>
        </span>
        
        <div class="add" @click="addItems">+</div>
      </div>
      <div v-if="this.view" class="shadow">
        <div class="selectitem">
          <input class="search" type="text" placeholder="搜索">
        </div>
        <div class="check">
          <span v-for="(item,index) in dataList" :key="index">
            <input type="checkbox" :checked="item.flag"  @click="change(index)">
            {{item.text}}
            </span>
                 
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
  data () {
      return {
        view:false,
        dataList:[
          {text:'变更中',flag:false},
          {text:'未生效',flag:false},
          {text:'作废',flag:false},
          {text:'正常',flag:false},
          {text:'审核',flag:false},
        ]
      }
    },
  methods: {
    change(val){
       this.dataList[val].flag=!this.dataList[val].flag   
       },
    
    addItems(){
      this.view=!this.view
    },
    dele(val){
      this.dataList[val].flag=!this.dataList[val].flag  
    }
  }
  
};
</script>
<style scoped>
.box{
  height: 26px;
  width: 300px;
  box-sizing: border-box;
}
.txt{
  line-height: 30px;
  width: 300px;
  height: 30px;
  border: 1px solid grey;
  position: relative;
}
.txt span{
  display: inline-block;
  width: 50px;
  font-size: 10px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  background-color:#0066FF ;
  color: white;
  border-radius: 8px;
  margin-left: 3px;
}
a{
  text-decoration: none;
  color: white;
}
.shadow{
  box-shadow: 0px 7px 15px rgba(1, 1, 1, .3);
}
.add{
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  border: 1px solid grey;
  border-radius: 50%;
  font-weight: bold;
  color:grey;

}
.selectitem{
  width: 302px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(177, 177, 177);
  
}
.search{
  outline: none;
  padding-left: 10px;
  width: 280px;
  border-radius: 10px;
  border: 1px solid rgb(177, 177, 177);
}
.check{
  width: 300px;
  border: 1px solid rgb(177, 177, 177);
  display: flex;
  flex-direction: column;
}
.check span{
  font-size: 10px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
}
</style>