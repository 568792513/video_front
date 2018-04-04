import api from '../api';

export default {
    data() {
        return {
            environment:'develop',//develop || production
            prePath: '',
            loading: false
        }
    },
    created() {
        this.prePath = (this.environment == 'develop'?'':'');
    },
	methods: {
        /**
        * opt{url:'路径',act:'操作类型（api.js）中配置,method:'get/post',body:obj}
        **/
        request(opt) {
            const self=this;
            if (opt.act) {
                api.forEach(item=>{
                    if(item.act==opt.act){
                        opt.url=item.url;
                    }
                });
            }
            // const authorization=sessionStorage.getItem('authorization');
            const uid = sessionStorage.getItem('id');
            const defaultOption={
                method:'get',
                url:'',
                body:{},
                headers: {"Authorization": uid},
                timeout:20000,
                emulateJSON: true
            };
            const option=Object.assign(defaultOption,opt);
            if(option.method.toLowerCase()=='get'){
                let paramFlag = false;
                for(let i in option.body){
                    if(option.url.indexOf("?")<0&&!paramFlag){
                        option.url+="?"+i+"="+option.body[i];
                        paramFlag=true;
                    }else{
                        option.url+="&"+i+"="+option.body[i];
                    }
                }
            }
            return new Promise((resolve,reject)=>{
              this.$http(option).then(res=> {
                  if(res.ok){
                      if(res.data.code==1000){//未登录
                          self.$router.push('/login?back='+self.$route.fullPath);
                      }else if(res.data.code==1002){//无权限
                          self.$alert('你没有权限进行此操作，如需开权限，请联系管理员','没有权限');
                      }
                      resolve(res.data);
                  }else{
                      self.$alert(res.statusText,res.status);
                  }
              },(e)=>{
                  reject(e);
              });
            });
        },
        setSessionStorage(opt){
            let val = JSON.stringify(opt.data);
            sessionStorage.setItem(opt.key,val);
        },
        getSessionStorage(opt){
            let str = sessionStorage.getItem(opt.key);
            return JSON.parse(str);
        },
        typeChange(val){
          if (typeof(val) == 'number'){
            switch (val){
              case 0 :
                return '新闻';
                break;
              case 1 :
                return '音乐';
                break;
              case 2 :
                return '生活';
                break;
              case 3 :
                return '科技';
                break;
              case 4 :
                return '影视';
                break;
            }
          }
          if (typeof(val) == 'string'){
            switch (val){
              case '新闻' :
                return parseInt(0);
                break;
              case '音乐' :
                return parseInt(1);
                break;
              case '生活' :
                return parseInt(2);
                break;
              case '科技' :
                return parseInt(3);
                break;
              case '影视' :
                return parseInt(4);
                break;
            }
          }

}
	}
}
