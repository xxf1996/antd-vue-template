<template>
  <a-form :form="formInstance">
    <a-form-item
      v-for="item in slotList"
      :key="item.slot"
      :label="item.label"
      :label-col="colConfig.label"
      :wrapper-col="colConfig.wrapper">
      <slot
        :name="item.slot"
        :rule="[item.slot, {
          rules: rules[item.slot] || []
        }]">
      </slot>
    </a-form-item>
    <a-form-item>
      <slot name="bottom"></slot>
    </a-form-item>
  </a-form>
</template>

<script>
// 对antd-vue原有的Form组件进行的封装
export default {
  name: 'XForm',
  props: {
    /**
     * 插槽信息列表，每一个插槽对应一个表单元素
     * { slot: '', label: '' }
     * slot为表单元素对应的插槽名，也对应验证规则中的key
     * label为表单元素对应的标签名
     */
    slotList: {
      type: Array,
      default: () => ([])
    },
    /**
     * 标签和表单元素的宽度占比，总span数为24
     * label为标签配置，wrapper为表单元素配置
     */
    colConfig: {
      type: Object,
      default: () => ({
        label: {
          span: 6
        },
        wrapper: {
          span:18
        }
      })
    },
    /**
     * 表单验证规则，通过key来找到对应的规则数组；
     * 经过一层封装后，通过slot-scope转发给父组件，slot-scope的名称固定为rule
     */
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      formInstance: this.$form.createForm(this) // 表单实例
    }
  },
  methods: {
    /**
     * 表单整体验证操作
     */
    validate () {
      return new Promise((resolve, reject) => {
        this.formInstance.validateFields(Object.keys(this.rules), { forced: true }, err => {
          if (!err) {
            resolve(this.formInstance.getFieldsValue())
          } else {
            reject(err)
          }
        })
      })
    }
  }
}
</script>
