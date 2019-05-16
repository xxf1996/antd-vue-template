<template>
  <div class="demo">
    <x-form
      class="demo-form"
      :rules="demoRules"
      :slot-list="slotList"
      :col-config="colConfig"
      ref="demoForm">
      <template #lastName="{ rule }">
        <a-input placeholder="姓" v-decorator="rule"></a-input>
      </template>
      <template #firstName="{ rule }">
        <a-input placeholder="名" v-decorator="rule"></a-input>
      </template>
      <template #age="{ rule }">
        <a-input placeholder="年龄" v-decorator="rule" type="number"></a-input>
      </template>
      <template #sex="{ rule }">
        <a-radio-group name="sex" v-decorator="rule">
          <a-radio :value="0">男</a-radio>
          <a-radio :value="1">女</a-radio>
        </a-radio-group>
      </template>
      <template #bottom>
        <a-button type="primary" @click="submit">提交</a-button>
      </template>
    </x-form>
  </div>
</template>

<script>
import XForm from '@/components/common/Form'

/**
 * 这里是自定义封装的表单组件的示例；
 * 每个表单元素对应一个slot；
 */
export default {
  components: {
    XForm
  },
  data () {
    return {
      slotList: [
        { label: '姓', slot: 'lastName' },
        { label: '名', slot: 'firstName' },
        { label: '年龄', slot: 'age' },
        { label: '性别', slot: 'sex' }
      ],
      demoRules: {
        lastName: [
          { required: true, message: '请输入姓！', trigger: 'blur' }
        ],
        firstName: [
          { required: true, message: '请输入名！', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄！', trigger: 'blur' }
        ]
      },
      colConfig: {
        label: {
          span: 4
        },
        wrapper: {
          span: 20
        }
      }
    }
  },
  methods: {
    submit () {
      this.$refs.demoForm.validate().then(info => {
        console.log(info)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-form {
  width: 500px;
  margin: 20px auto;
}
</style>
