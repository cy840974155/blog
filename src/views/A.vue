<template>
    <div class="markdown">
        <div class="container">
            <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/>
            <button @click="submit">提交</button>
        </div>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: "",
        props: [],
        components: {
            mavonEditor,
        },
        data() {
            return {
                content:'',
                html:'',
                configs: {}
            }
        },
        methods: {
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file){
                let formdata = new FormData();

                this.$upload.post('/上传接口地址', formdata).then(res => {
                  
                    this.$refs.md.$img2Url(pos, res.data);
                }).catch(err => {
                    console.log(err)
                })
            },
            // 所有操作都会被解析重新渲染
            change(value, render){
                // render 为 markdown 解析后的结果[html]
                this.html = render;
            },
            // 提交
            submit(){
           
                this.$message.success('提交成功，已打印至控制台！');
            }
        },
        mounted() {

        }
    }
</script>