const itemHeight = 56 * 2;
Component({
    data: {
        childBoxHeight: 0,
    },
    externalClasses: ['t-class'],
    properties: {
        defaultOpen: {
            type: Boolean,
            value: true,
        },
        name: {
            type: String,
            value: '',
        },
        tag: {
            type: String,
            value: '',
        },
        root: {
            type: String,
            value: '',
        },
        childArr: {
            type: Array,
            value: [],
            observer(childArr) {
                this.setData({
                    childBoxHeight: this.data.defaultOpen ? itemHeight * childArr.length : 0,
                });
            },
        },
    },
    methods: {
        switchHandle() {
            const { childArr, childBoxHeight } = this.data;
            this.setData({
                childBoxHeight:childArr.length * itemHeight,// childBoxHeight > 0 ? 0 : 
            });
        },
        tapChild(e) {
            this.triggerEvent('click', {
                ...e.target.dataset,
                root: this.data.root
            });
        },
    },
});
