const bookKeeping = new Vue({
    el: '#bookKeeping',
    data: {
        items_head: ['编号','分类','费用','操作'],
        items: [
            
        ],
        items_foot: ['总计','餐饮','发红包','购物','其他'],
        show_state: 1,
        click_index: 0,
        add_method: '2',
        category: '',
        account_index: '',
        fee: '',
        ul_list: [
            {id: 1,title: "增加账单"},
            {id: 2,title: "修改账单"},
            {id: 3,title: "暂无操作"}
        ]
    },
    computed: {
        sum(){
            return this.items.reduce((sum,item)=>sum+item.fee,0);
        }
    },
    methods: {
        del(id){
            this.items = this.items.filter(item => item.id !== id);
        },
        add(){
            if(this.fee<=0){
                alert('说了让你输入正确的，怎么一身反骨呢！');
                return;
            }
            if(this.add_method === '2'){
                this.items.push({id: +new Date(),respect: this.category,fee: this.fee });
                // 提交数据后自动置空
                this.category = '';
                this.fee = '';
            }
            else{
                this.items.unshift({id: +new Date(),respect: this.category,fee: this.fee });
                // 提交数据后自动置空
                this.category = '';
                this.fee = '';
            }
        },
        revise(){
            if(this.fee<=0){
                alert('说了让你输入正确的，怎么一身反骨呢！');
                return;
            }
            Vue.set(this.items,this.account_index,{id: this.items[this.account_index].id,respect: this.items_foot[this.category+1],fee: this.fee});
            // 提交数据后自动置空
            this.account_index = '';
            this.category = '';
            this.fee = '';
        }
    }
})