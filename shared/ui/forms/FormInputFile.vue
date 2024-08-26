<template lang="pug">
FormField(:error="error")
  ClientOnly
    .form-input-file(:class="[{'--error': error}, {'--not-empty': files.length}]")
      input.form-input-file__input(type="file" :id="inpId" ref="fileInput" :multiple="multiple ? 'multiple': false" :accept="acceptAttr" v-bind="$attrs" @change="onChange($event)")
      .form-input-file__files(:key="key")
        .form-input-file__file(v-for="file in files") {{ file.name }}
          .form-input-file__close(@click="deleteFile(file)")
            SpriteIcon(name="main/close-file")
      .form-input-file__add(v-if="!files.length || props.multiple")
        label.form-input-file__button(:for="inpId" @click="addFiles") {{ props.btnText }}
        .form-input-file__file-types Файлы: {{ fileTypes }} - до {{ props.maxSize }}мб.
</template>

<script lang="ts" setup>
import FormField from '~/shared/ui/forms/FormField.vue'
import SpriteIcon from '~/shared/ui/SpriteIcon.vue'
import { isArray } from '~/helpers/helpers'

interface Props {
  modelValue: File | File[] | null | any,
  accepts?: any,
  maxSize?: number, // mb
  btnText?: string,
  multiple?: boolean,
  error?: any,
}
const props = withDefaults(defineProps<Props>(), {
  accepts: ['image/jpeg','image/gif','image/png'],
  maxSize: 2,
  btnText: 'Добавить',
  multiple: false,
})


const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
})

const inpId = 'inpId -' + Math.random().toString(16).slice(2)
const fileInput: Ref<any> = ref(null)
const startFiles = isArray(props.modelValue) ? [...props.modelValue] : ( props.modelValue ? [props.modelValue] : [] )
let files: File[] = reactive(startFiles)
const key: Ref<number> = ref(0)

const setModel = () => {
  model.value = files.length > 1 ? files : files[0]
  key.value++
  // console.warn('model.value - ', model.value)

  // let reader = new FileReader()
  // reader.readAsArrayBuffer(files[0])
  // reader.onload = function() {
  //   console.warn(reader.result)
  //   model.value = reader.result
  //   key.value++
  // }
}

const acceptAttr = props.accepts.join(', ')

const onChange = (e: any) => {
  const inp = fileInput.value
  const currFiles: File[] = [...inp.files]
  files = files.concat(currFiles)
  setModel()
}


const fileTypes = computed(() => {
  const items = props.accepts.map( (item: string) => item.split('/')[1])
  return items.join(', ')
})

const deleteFile = (file:File) => {
  files = files.filter((item: File) => item.name !== file.name)
  setModel()
}

</script>

<style lang="sass" scoped>
.form-input-file
    display: flex
    flex-direction: column
    &.--not-empty
      gap: 20px
    &.--error
        color: var(--red-500-color)
        border-color: var(--red-500-color)
    &__input
      display: none
    &__add
      display: flex
      align-items: center
      justify-content: space-between
      gap: 20px
    &__button
      cursor: pointer
      text-transform: uppercase
      color: #1F5D2F
      &:hover
        color: #000
    &__file-types
      font-size: 12px
      letter-spacing: 0.4px
      color: rgba(64, 73, 64, 0.7)
    &__files
      display: flex
      flex-direction: column
      gap: 15px
    &__file
      font-size: 12px
      letter-spacing: 0.4px
      text-decoration-line: underline
      color: #1976D2
      display: flex
      align-items: center
      gap: 10px
    &__close
      color: #1B1716
      width: 16px
      height: 16px
      cursor: pointer
      margin-top: 2px
      &:hover
        color: #000


</style>
